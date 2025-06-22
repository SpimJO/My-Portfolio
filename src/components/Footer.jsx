import React from 'react';

export default function Footer() {
  return (
    <footer className="text-center py-6 border-t mt-12">
      <p>&copy; {new Date().getFullYear()} Jericho Canlas</p>
      <div className="mt-2">
        <a href="https://github.com/SpimJO" className="mx-2">GitHub</a>
        <a href="https://facebook.com/jecho.canlas15" className="mx-2">Facebook</a>
        <a href="https://ca.linkedin.com/in/jericho-canlas-b33034167?trk=people-guest_people_search-card" className="mx-2">LinkedIn</a>
      </div>
    </footer>
  );
}