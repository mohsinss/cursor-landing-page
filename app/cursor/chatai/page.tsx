'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { User, generateUserDescriptions } from '../advanced/prompt-files/actionsai';

function UserProfiles() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://randomuser.me/api/?results=10&gender=female&nat=us');
      const data = await response.json();
      const usersWithDescriptions = await generateUserDescriptions(data.results);
      console.log('Users with AI-generated descriptions:', usersWithDescriptions);
      setUsers(prevUsers => [...prevUsers, ...usersWithDescriptions]);
    } catch (error) {
      console.error('Error fetching users:', error);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="mt-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {users.map((user, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
            <Image
              src={user.picture.large}
              alt={`${user.name.first} ${user.name.last}`}
              width={200}
              height={200}
              className="w-full h-48 object-cover"
              unoptimized
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold text-gray-800">{`${user.name.first} ${user.name.last}`}</h2>
              <p className="text-sm text-gray-600 mt-2">{user.description}</p>
              <p className="text-sm text-gray-600 mt-1">{user.email}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button
          onClick={fetchUsers}
          disabled={loading}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 disabled:opacity-50"
        >
          {loading ? 'Loading...' : 'Load More Users'}
        </button>
      </div>
    </div>
  );
}

export default function CursorCommandPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <h1 className="text-6xl font-bold mb-8">
        <span className="bg-gradient-to-br from-red-500 via-purple-500 to-blue-500 text-transparent bg-clip-text">Command</span>
      </h1>
      <UserProfiles />
    </div>
  );
}

