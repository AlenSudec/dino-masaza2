import { useEffect } from "react";

export function useHandleResize(setSideMenuState) {

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768 && document.body.classList.contains('offcanvas-menu')) {
                setSideMenuState(false);
                document.body.classList.remove('offcanvas-menu');
            }
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [setSideMenuState]);

    return null;
}