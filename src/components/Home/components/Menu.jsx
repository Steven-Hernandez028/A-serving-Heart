import logo from '../../../media/img/Logo.svg';
import { ReactSVG } from 'react-svg';
import '../styles.scss';

export const Menu = () => {


    const alinks = [
        { id: 0, href: "#", name: "Inicio" },
        { id: 1, href: "#", name: "About Us" },
        { id: 2, href: "#", name: "Quieres ser salvo?" },
        { id: 3, href: "#", name: "Campaing" },
        { id: 4, href: "#", name: "FAQ" },
        { id: 5, href: "#", name: "Contact" },

    ]

    return (

        <>

            <div className='home_menu'>
                <div className='home_menu_logo_wrapper'>
                    <ReactSVG
                        beforeInjection={(svg) => {
                            svg.classList.add('home_logo')
                        }
                        }
                        src={logo}
                    />

                    <h3>A serving Heart</h3>

                </div>


                <div className='home_menu_links'>
                    {alinks.map(al => {
                        return <a key={al.id} href={al.href}>{al.name}</a>
                    })}
                </div>



            </div>



        </>
    )
}
