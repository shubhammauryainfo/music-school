import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-6">
            <div className="container mx-auto px-4">
                {/* Top Section */}
                <div className="flex flex-wrap justify-between items-center border-b border-gray-700 pb-4">
                    <div className="p-4 text-center">
                        <h2 className="text-xl font-bold">K.L. English School</h2>
                        <p className="text-sm mt-1">
                            Providing quality education for a brighter future.
                        </p>
                    </div>
                    <div className="mt-4 lg:mt-0">
                        <ul className="flex space-x-4">
                            <li>
                                <Link href="/about">
                                    About Us
                                </Link>
                            </li>
                            <li>
                                <Link href="/admissions">
                                    Admissions
                                </Link>
                            </li>
                            <li>
                                <Link href="/contact">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-4 flex flex-wrap justify-between items-center text-sm">
                    <p>&copy; {new Date().getFullYear()} K.L. English School. All rights reserved.</p>
                    <ul className="flex space-x-4">
                        <li>
                            <Link href="https://facebook.com">
                                Facebook
                            </Link>
                        </li>
                        <li>
                            <Link href="https://twitter.com">
                                Twitter
                            </Link>
                        </li>
                        <li>
                            <Link href="https://instagram.com">
                                Instagram
                            </Link>
                        </li>
                    </ul>
                </div>

                {/* Developed By Section */}
                <div className="mt-4 text-center text-sm">
                    <p>
                        Developed by{" "}
                        <Link href="https://nexbytes.com">
                            Nexbytes Technology
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
