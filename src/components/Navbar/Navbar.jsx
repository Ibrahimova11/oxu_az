import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'
function Navbar() {
  return (
    <nav>
        <ul>
            <li>
                <Link to="/" class="link">Baş səhifə</Link>
            </li>
            <li>
                <Link to="/siyaset" class="link">Siyasət</Link>
            </li>
            <li>
                <Link to="/iqtisadiyyat" class="link">İqtisadiyyat</Link>
            </li>
            <li>
                <Link to="/cemiyyet" class="link">Cəmiyyət</Link>
            </li>
            <li>
                <Link to="/sou_biznes" class="link">Şou-biznes</Link>
            </li>
            <li>
                <Link to="/muharibe" class="link">Müharibə</Link>
            </li>
            <li>
                <Link to="/idman" class="link">İdman</Link>
            </li>
            <li>
                <Link to="/kriminal" class="link">Kriminal</Link>
            </li>
            <li>
                <Link to="/medeniyyet" class="link">Mədəniyyət</Link>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar