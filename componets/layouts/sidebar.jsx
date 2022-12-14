import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react"
import Link from 'next/link';
import NavLinkSidebar from '../atoms/NavLinkSidebar'

export default function SideBar() {
    const { pathname } = useRouter();

    const checkPathComponents = pathname !== '/components/alerts' || pathname !== '/components/accordions' || pathname !== '/components/badges' || pathname !== '/components/breadcrumbs' || pathname !== '/components/buttons' || pathname !== '/components/cards' || pathname !== '/components/carousels' || pathname !== '/components/list-groups' || pathname !== '/components/modals' || pathname !== '/components/tabs' || pathname !== '/components/paginations' || pathname !== '/components/progress' || pathname !== '/components/spinners' || pathname !== '/components/tooltips';

    return (
        <aside id="sidebar" className="sidebar">

            <ul className="sidebar-nav" id="sidebar-nav">

                <li className="nav-heading">Home</li>
                <NavLinkSidebar href="/" title="Dashboard" pathname={pathname} icon="bi-grid" />
                {/* <!-- End Dashboard Nav --> */}

                <li className="nav-heading">Pages</li>

                <NavLinkSidebar href="/user-profile" title="Profile" pathname={pathname} icon="bi-person" />
                {/* <!-- End Profile Page Nav --> */}

                <NavLinkSidebar href="/faq" title="F.A.Q" pathname={pathname} icon="bi-question-circle" />
                {/* <!-- End F.A.Q Page Nav --> */}

                <NavLinkSidebar href="/contact" title="Contact" pathname={pathname} icon="bi-envelope" />
                {/* <!-- End Contact Page Nav --> */}

                <NavLinkSidebar href="/blank" title="Blank" pathname={pathname} icon="bi-file-earmark" />
                {/* <!-- End Blank Page Nav --> */}

            </ul>

        </aside>
    )
}