
import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-slate-950 py-8 text-center text-gray-500 text-sm border-t border-slate-900">
            <p className="mb-2">© {new Date().getFullYear()} Karim Balloumi. All rights reserved.</p>
        </footer>
    );
};

export default Footer;
