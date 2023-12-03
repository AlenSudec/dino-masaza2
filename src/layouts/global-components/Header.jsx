import React, { useCallback, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { OutsideClickDetector } from "../../shared";
import { elementTree } from "../../data";
import { useHandleResize } from "../../hooks";

export function Header() {
	const [isSideMenuOpened, setIsSideMenuOpened] = useState(false);

	useHandleResize(setIsSideMenuOpened);

	return (
		<>
			<MobileHeader
				setIsSideMenuOpened={setIsSideMenuOpened}
				isSideMenuOpened={isSideMenuOpened}
			/>

			<header className="site-navbar" role="banner">

				<div className="container">
					<div className="row align-items-center">

						<div className="col-11 col-xl-4">
							<h1 className="mb-0 site-logo">
								<Link
									to="/"
									className="text-white mb-0"
								>
									OSTEO<span className="text-primary">PRAKTIK</span>
								</Link>
							</h1>
						</div>
						<div className="col-12 col-md-8 d-none d-xl-block">
							<nav className="site-navigation position-relative text-right" role="navigation">

								<RouteList />

							</nav>
						</div>
						<MobileToggleSidemenu setIsSideMenuOpened={setIsSideMenuOpened} />
					</div>
				</div>
			</header>
		</>
	)
}

function MobileHeader({ setIsSideMenuOpened, isSideMenuOpened }) {

	const removeSideMenu = useCallback(() => {
		if (document.body.classList.contains("offcanvas-menu")) {
			document.body.classList.toggle("offcanvas-menu")
			setTimeout(() => {
				setIsSideMenuOpened(false);
			}, 300)
		}
	}, [setIsSideMenuOpened]);

	useEffect(() => {
		removeSideMenu(true);
	}, [removeSideMenu])

	return (
		<>
			<OutsideClickDetector
				onOutsideClick={removeSideMenu}
			>
				<div className="site-mobile-menu">
					<div className="site-mobile-menu-header">
						<div className="site-mobile-menu-close mt-3">
							<span
								onClick={removeSideMenu}
								className="icon-close2 js-menu-toggle"
							></span>
						</div>
					</div>
					<div className="site-mobile-menu-body">
						<RouteList isMobile shouldDisplayRoutes={isSideMenuOpened} />
					</div>
				</div>
			</OutsideClickDetector>

		</>
	)
}

function MobileToggleSidemenu({ setIsSideMenuOpened }) {

	const openSideMenu = () => {
		setIsSideMenuOpened(true);
		document.body.classList.toggle("offcanvas-menu")
	}

	return <div
		className="d-inline-block d-xl-none ml-md-0 mr-auto py-3"
		style={{ position: "relative", top: "3px" }}
	>
		<div
			onClick={openSideMenu}
			className="site-menu-toggle js-menu-toggle text-white"
		>
			<span className="icon-menu h3">
			</span>
		</div>
	</div>

}

function RouteList({ isMobile, shouldDisplayRoutes }) {
	const { pathname } = useLocation();

	if (isMobile && !shouldDisplayRoutes) {
		return null;
	}

	const isRouteActive = (route, extraClasses = "") => {
		if (pathname === route) {
			return extraClasses ? `${extraClasses} active` : 'active';
		}
		return extraClasses;
	}

	const ulClassname = isMobile ?
		'site-nav-wrap' :
		"site-menu js-clone-nav mr-auto d-none d-lg-block"

	return (
		<ul className={ulClassname}>

			{elementTree.map((navElement, i) => {
				if (!navElement.hasChildren) {
					return <li key={i} className={isRouteActive(navElement.link)}>
						<Link to={navElement.link}>
							<span>{navElement.title}</span>
						</Link>
					</li>
				} else {
					return <ElementWithChildren
						key={i}
						isMobile={isMobile}
						elementTree={navElement}
						isRouteActive={isRouteActive}
					/>
				}
			})}
		</ul>)
}

function ElementWithChildren({ isMobile, elementTree, isRouteActive }) {

	const [collapsed, setCollapsedStatus] = useState(true);

	const { pathname } = useLocation();

	useEffect(() => {
		setCollapsedStatus(true);
	}, [pathname])

	const toggleCollapse = () => {
		setCollapsedStatus((prevValue) => !prevValue);
	}

	const hoverReaction = () => {
		if (isMobile) {
			return;
		}

		toggleCollapse();
	}

	const arrowClass = collapsed ? 'collapsed' : "";
	const categoryClass = isMobile ? `arrow-collapse ${arrowClass}` : '';

	const { classname, link, title, children, hasChildren, isInNav, dropdownPointer } = elementTree;

	const classWithActiveRoute = isRouteActive(link, classname);

	return (
		<li
			className={classWithActiveRoute}
			onMouseEnter={hoverReaction}
			onMouseLeave={hoverReaction}
		>
			<Link
				to={link}
			>
				{isInNav ? <span>{title}</span> : title}
			</Link>
			<span onClick={toggleCollapse} className={categoryClass}></span>
			{hasChildren && <CollapsedContent
				collapsed={collapsed}
				isMobile={isMobile}
				children={children}
				dropdownPointer={dropdownPointer}
				isRouteActive={isRouteActive}
			/>}
		</li>
	)
}

function CollapsedContent({ collapsed, isMobile, children, dropdownPointer, isRouteActive }) {

	if (collapsed) {
		return null;
	}

	const ulClassname = dropdownPointer ? "dropdown arrow-top" : "dropdown";

	return (
		<ul className={ulClassname}>
			{children.map((el, i) => {
				if (el.hasChildren) {
					return <ElementWithChildren key={i} elementTree={el} isMobile={isMobile} isRouteActive={isRouteActive} />
				}
				return <li key={i} className={isRouteActive(el.link)}>
					<Link to={el.link}>{el.title}</Link>
				</li>
			})}
		</ul>)
}