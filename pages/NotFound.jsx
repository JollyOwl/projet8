import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600">404 - Page Non Trouvée</h1>
      <Link to="/" className="mt-4 text-blue-500 underline">
        Retour à l'accueil
      </Link>
    </div>
  );
}

export default NotFound;
