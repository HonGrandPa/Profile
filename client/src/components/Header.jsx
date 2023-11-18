import React, { useEffect, useState } from 'react'

const Header = () => {
    const [isToggled, setIsToggled] = useState(false);
    const [currectSection, setCurrentSection] = useState('');

    console.log(currectSection);

    const handleClick = (e) => {

        setCurrentSection(e.target.id);

    }

    const handleToggleClick = () => {
        // Toggle the state when the button is clicked
        setIsToggled(!isToggled);
    };

    const handleClickB = (e) => {

        setCurrentSection(e.target.id);
        setIsToggled(!isToggled);
    }

    return (
        <header className="md:sticky top-0 z-10 bg-transparent text-black">
            <section className="mx-auto flex max-w-4xl items-center md:justify-center text-black/70 justify-between p-4">
                <h1 className="text-3xl md:hidden mfont-medium font-poppins ">
                    <a href="#herosection" className='text-black/70' >Hon Lin</a>
                </h1>
                <div>
                    <button
                        onClick={handleToggleClick}
                        id="hamburger-button"
                        className={`relative h-8 w-8 cursor-pointer  text-3xl md:hidden ${isToggled ? 'toggle-btn' : ''}`}
                    >
                        <div className="absolute bg-[#433520] top-4 -mt-0.5 h-1 w-8 rounded  transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-[#433520] before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-[#433520] after:transition-all after:duration-500 after:content-['']"></div>
                    </button>
                    <div className="mt-1 hidden space-x-8 text-md rounded-full p-3 py-2  bg-[#C9D8B6]/95 md:block" aria-label="main">
                        <a href="#aboutsection" onClick={handleClick} id="about" className={`hover:opacity-90 hover:text-[18px] ${currectSection === 'about' ? 'underline' : ''} p-2 duration-200 rounded-2xl`}>About</a>
                        <a href="#skillsection" onClick={handleClick} id="experience" className={`hover:opacity-90 hover:text-[18px] ${currectSection === 'experience' ? 'underline' : ''} p-2 duration-500 rounded-2xl`}>Skill</a>
                        <a href="#projectsection" onClick={handleClick} id="projects" className={`hover:opacity-90 hover:text-[18px] ${currectSection === 'projects' ? 'underline' : ''} p-2 duration-500 rounded-2xl`}>Projects</a>
                        <a href="#contactsection" onClick={handleClick} id="contact" className={`hover:opacity-90 hover:text-[18px] ${currectSection === 'contact' ? 'underline' : ''} p-2 duration-500 rounded-2xl`}>Contact</a>
                    </div>
                </div>
            </section>
            <section id="mobile-menu"
                className={`top-68 justify-center absolute w-full origin-top  animate-open-menu ${!isToggled ? 'hidden' : ''
                    } bg-[#E4E4D0] text-black/70 text-4xl`}>

                <div className="flex min-h-screen flex-col items-center pt-20 gap-8 ">
                    <a href="#aboutsection" onClick={handleClickB} id="about" className={`hover:opacity-80 hover:text-5xl p-2 duration-200 rounded-2xl`}>About</a>
                    <a href="#skillsection" onClick={handleClickB} id="experience" className={`hover:opacity-80 hover:text-5xl  p-2 duration-500 rounded-2xl`}>Skill</a>
                    <a href="#projectsection" onClick={handleClickB} id="projects" className={`hover:opacity-80 hover:text-5xl p-2 duration-500 rounded-2xl`}>Projects</a>
                    <a href="#contactsection" onClick={handleClickB} id="contact" className={`hover:opacity-80 hover:text-5xl  p-2 duration-500 rounded-2xl`}>Contact</a>
                </div>
            </section>
        </header>
    )
}

export default Header
