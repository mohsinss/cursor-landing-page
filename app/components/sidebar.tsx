import { useState } from 'react';

export default function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`bg-gray-100 transition-all duration-300 ${
        isCollapsed ? 'w-16' : 'w-64'
      }`}
    >
      <button
        onClick={() => setIsCollapsed(!isCollapsed)}
        className="p-4 hover:bg-gray-200 w-full text-left"
      >
        {isCollapsed ? '>' : '<'}
      </button>
      {!isCollapsed && (
        <nav className="p-4">
          <ul className="space-y-2">
            <li>
              <a href="#" className="block py-2 px-4 rounded hover:bg-gray-200">
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 rounded hover:bg-gray-200">
                Availability
              </a>
            </li>
            <li>
              <a href="#" className="block py-2 px-4 rounded hover:bg-gray-200">
                Integrations
              </a>
            </li>
          </ul>
        </nav>
      )}
    </aside>
  );
}