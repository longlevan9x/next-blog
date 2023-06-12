import React from 'react';

const FooterPage = () => {
    return (
        <footer className="bg-gray-800 text-white py-5 mt-10">
            <div className="container mx-auto">
                <div className="mt-8 text-sm text-gray-500 flex justify-center">
                    <div className="mr-5">
                        &copy; {new Date().getFullYear()} Your Website. All rights reserved.
                    </div>
                    <ul className="flex space-x-4">
                        <li>
                            <a href="#" className="text-white hover:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M17.45 3.42a8 8 0 10-9.9 12.68l4.36-2.18a4 4 0 11-3.2-7.37l-4.36 2.18a8 8 0 019.9-5.3v.03zm-.67 1.42a7 7 0 11-8.67 10.76L3.5 15.33a3 3 0 105.57 2.46l-2.68-5.5h-.06a7 7 0 015.02-8.45l1.42-2.98zm-4.26 8.93l-1.4 1.4L10 11.42l-1.41 1.41-1.4-1.4L8.58 10 7.17 8.59l1.4-1.4L10 8.58l1.41-1.41 1.4 1.4L11.42 10l1.41 1.41z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M2 0h16a2 2 0 012 2v16a2 2 0 01-2 2H2a2 2 0 01-2-2V2a2 2 0 012-2zm5 7a1 1 0 100-2 1 1 0 000 2zm4 0a1 1 0 100-2 1 1 0 000 2zm4 0a1 1 0 100-2 1 1 0 000 2zm-8 4a4 4 0 100-8 4 4 0 000 8zm5.657 4H15a1 1 0 001-1V9.946A7.97 7.97 0 0117 10a7.97 7.97 0 01-1 .054V15a1 1 0 001 1h-1.343a6.99 6.99 0 01-5.314 3H8a1 1 0 01-1-1v-2H5a1 1 0 01-1-1v-1a1 1 0 011-1h2V8H5a1 1 0 01-1-1V6a1 1 0 011-1h1V4H5a2 2 0 00-2 2v1a2 2 0 002 2h1v2H5a2 2 0 00-2 2v1a2 2 0 002 2h2v1H5a2 2 0 01-2-2v-1a2 2 0 012-2h1V9a2 2 0 012-2h1a2 2 0 012 2v1a2 2 0 01-2 2h-1v2h1a2 2 0 012 2v1a2 2 0 01-2 2zM14 4h1v1h-1V4z" clipRule="evenodd" />
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-white hover:text-gray-400">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                    <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 14v-3h3v-2h-3V7.2c0-.39.32-.7.7-.7h2.6a.7.7 0 01.7.7V12h3v2h-3v3h-2v-3H8v-2h3z" />
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default FooterPage;
