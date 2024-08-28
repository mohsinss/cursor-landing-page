export default function Footer() {
  return (
    <footer className="bg-gray-100 py-8 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p className="text-sm text-gray-600 mb-4 md:mb-0">
          © 2024 Your Company. All rights reserved.
        </p>
        <div className="flex space-x-4">
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Terms</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Privacy</a>
          <a href="#" className="text-sm text-gray-600 hover:text-gray-900">Contact</a>
        </div>
      </div>
    </footer>
  )
}