import { useEffect, useState } from "react"
import { FaBars, FaTimes } from "react-icons/fa"
import { LINKS } from "../constants"
import { AnimatePresence, motion, stagger } from "framer-motion"

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";  // Prevent scrolling when menu is open
        } else {
            document.body.style.overflow = "auto";    // Allow scrolling when menu is closed
        }

        // Clean up when the component is unmounted
        return () => {
            document.body.style.overflow = "auto";  // Reset overflow on unmount
        };
    }, [isOpen])

    const containerVariants = {
        hidden: {opacity:0, y:"-100%"},
        visible:{opacity:1, y:0, 
            transition:{
                staggerChildren:0.1
            }
        }
    }

    const linkVariants = {
        hidden: {opacity:0, y:-50},
        visible:{opacity:1, y:0},
    }

    return (
        <>
            <nav className="fixed right-0 top-0 z-30 p-4">
                <button onClick={toggleMenu} className="rounded-md p-2">
                    {isOpen ? (
                        <FaTimes className="h-6 w-6" />
                    ) : (
                        <FaBars className="h-6 w-6" />
                    )}
                </button>
            </nav>
            <AnimatePresence>        
            {isOpen && (
                <motion.div 
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={containerVariants}
                className="fixed inset-0 z-20 flex flex-col items-center justify-center bg-black text-white">
                    <ul className="space-y-6 text-3xl">
                        {LINKS.map((link) => (
                            <motion.li 
                            variants={linkVariants}
                            key={link.id}>
                                <a href={`#${link.id}`} onClick={toggleMenu} className="text-5xl font-semibold uppercase tracking-wide hover:text-lime-300 lg:text-9xl">
                                    {link.name}
                                </a>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>
            )}
            </AnimatePresence>
        </>
    )
}

export default Navbar
