import React, { useState, useEffect } from 'react';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from 'firebase/auth';
import {
  getStorage,
  ref,
  listAll,
  getDownloadURL,
} from 'firebase/storage';

import { firebaseConfig } from './firebaseConfig';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const storage = getStorage(app);

const properties = [
  {
    name: "80 Park Plaza",
    size: "972,000 SF Office",
    occupancy: "90%",
    noi: "$13,000,000",
  },
  {
    name: "70 Hatfield",
    size: "70,000 SF Office/Industrial",
    occupancy: "100%",
    noi: "$600,000",
  },
  {
    name: "Gateway Centre",
    size: "600,000 SF Office",
    occupancy: "80%",
    noi: "$4,000,000",
  },
];

export default function Portal() {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [files, setFiles] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, setUser);
  }, []);

  const login = () => {
    signInWithEmailAndPassword(auth, email, password).catch(alert);
  };

  const logout = () => signOut(auth);

  const fetchFiles = async () => {
    const folderRef = ref(storage, 'monthly_reports');
    const result = await listAll(folderRef);
    const urls = await Promise.all(result.items.map((item) => getDownloadURL(item)));
    setFiles(urls);
  };

  if (!user) {
    return (
      <div className="h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">OpExCRE Portal Login</h1>
        <input className="border mb-2 p-2" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className="border mb-2 p-2" placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button className="bg-blue-600 text-white px-4 py-2 rounded" onClick={login}>Login</button>
      </div>
    );
  }

  return (
    <div className="p-6 font-sans">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Welcome to OpExCRE Portal</h1>
        <button onClick={logout} className="bg-red-500 text-white px-3 py-1 rounded">Logout</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        {properties.map((p, idx) => (
          <div key={idx} className="border rounded-xl p-4 shadow">
            <h2 className="text-lg font-semibold">{p.name}</h2>
            <p>{p.size}</p>
            <p>Occupancy: {p.occupancy}</p>
            <p>NOI: {p.noi}</p>
          </div>
        ))}
      </div>

      <div className="mb-4">
        <h2 className="text-xl font-semibold mb-2">Monthly Reports</h2>
        <button onClick={fetchFiles} className="bg-blue-500 text-white px-3 py-1 rounded mb-2">Load Files</button>
        <ul>
          {files.map((url, idx) => (
            <li key={idx} className="mb-1">
              <a href={url} target="_blank" rel="noreferrer" className="text-blue-600 underline">Report {idx + 1}</a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
