export default function Header() {
    return (
      <header className="flex items-center justify-between p-4 bg-white shadow-md">
        <div className="text-2xl font-bold text-blue-900">OpExCRE</div>
        <div className="flex items-center gap-4">
          <input
            type="text"
            placeholder="Search"
            className="border px-3 py-1 rounded-md"
          />
          <div className="w-8 h-8 bg-gray-300 rounded-full" />
        </div>
      </header>
    );
  }
  