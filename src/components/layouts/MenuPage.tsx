import React, {useEffect, useState} from 'react';
import Link from 'next/link';
import {MoonIcon, SunIcon} from "@heroicons/react/20/solid";
import {useTheme} from "next-themes";

const navs = [
    {
        name: 'Post',
        path: '/post'
    },
    {
        name: 'Tag',
        path: '/tag'
    },
];

const MenuPage = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [headerHeight, setHeaderHeight] = useState(0);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const [headerColorClass, setHeaderColorClass] = useState('bg-gray-50 bg-opacity-20');
    const [textColorClass, setTextColorClass] = useState('text-white');

    useEffect(() => {
        const sliderSection: any = document.getElementById('slider'); // Thay '#slider-section' bằng id của vùng slider

        if (!sliderSection) {
            const headerMenu: any = document.getElementById('header');
            const headerMenuHeight = headerMenu.offsetHeight;
            setHeaderHeight(headerMenuHeight);
            setHeaderColorClass('');
            setTextColorClass('text-zinc-900 dark:text-white');
        }

        const handleScroll = () => {
            if (sliderSection) {
                const sliderBottom = sliderSection.offsetTop + sliderSection.offsetHeight;

                if (window.pageYOffset >= sliderBottom) {
                    setHeaderColorClass('');
                    setTextColorClass('text-zinc-900 dark:text-white');
                } else {
                    setHeaderColorClass('bg-gray-50 bg-opacity-20');
                    setTextColorClass('text-white');
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [isDarkMode, setIsDarkMode] = useState(false);

    // const handleThemeToggle = () => {
    //     setIsDarkMode(!isDarkMode);
    // };

    const {theme, setTheme} = useTheme();

    const handleThemeToggle = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
        setIsDarkMode(!isDarkMode);
    };

    return (
        <nav
            className={`fixed inset-x-0 top-0 z-10 right-0 py-3 transition-colors duration-300 ` + (!headerColorClass ? 'bg-white dark:bg-zinc-900' : 'bg-transparent')}
            id="header" style={{marginBottom: `${headerHeight}px`}}>
            <div className="container mx-auto py-4 px-6">
                <div className="flex items-center justify-between">
                    <div>
                        <Link href="/"
                              className={`transition-colors duration-300 hover:text-gray-300 text-2xl font-bold ${textColorClass}`}>
                            My Blog
                        </Link>
                    </div>
                    <div className="hidden md:block">
                        <ul className="flex items-center space-x-4">
                            {navs.map((nav) => (
                                <li key={nav.name}>
                                    <Link href={nav.path}
                                          className={`font-bold transition-colors duration-300 hover:text-gray-300 ${textColorClass}`}>
                                        {nav.name}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <button onClick={handleThemeToggle}
                                        className={`bg-transparent border border-${isDarkMode ? 'white' : 'gray-900'} hover:border-${isDarkMode ? 'gray-900' : 'white'} text-${isDarkMode ? 'white' : 'gray-900'} rounded-full p-2`}
                                >                                    {isDarkMode ? (
                                    <SunIcon className="h-5 w-5"/>
                                ) : (
                                    <MoonIcon className="h-5 w-5"/>
                                )}
                                </button>
                            </li>
                        </ul>
                    </div>

                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-white focus:outline-none"
                        >
                            {/* Biểu tượng menu */}
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        </button>
                        {isMenuOpen && (
                            <div className="absolute top-0 left-0 right-0 bg-gray-900 py-2">
                                <ul className="flex flex-col space-y-2 px-4">
                                    <li>
                                        <Link href="/posts" className="text-white hover:text-gray-300" passHref>
                                            Posts
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about" className="text-white hover:text-gray-300" passHref>
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/contact" className="text-white hover:text-gray-300" passHref>
                                            Contact
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default MenuPage;
