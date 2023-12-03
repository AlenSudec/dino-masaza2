export const elementTree = [
    {
        title: "Home",
        classname: null,
        link: "/",
        hasChildren: false
    },
    {
        classname: "has-children",
        link: '/services',
        title: 'Services',
        isInNav: true,
        hasChildren: true,
        dropdownPointer: true,
        children: [
            {
                classname: null,
                link: '/services',
                title: 'Physical Therapy',
                hasChildren: false,
                isInNav: false,
                dropdownPointer: false,
            },
            {
                classname: null,
                link: '/services',
                title: 'Massage Therapy',
                hasChildren: false,
                isInNav: false,
                dropdownPointer: false,
            },
            {
                classname: null,
                link: '/services',
                title: 'Chiropractic Therapy',
                hasChildren: false,
                isInNav: false,
                dropdownPointer: false,
            },
            {
                classname: "has-children",
                link: '/services',
                title: 'Dropdown',
                hasChildren: true,
                isInNav: false,
                dropdownPointer: false,
                children: [
                    {
                        classname: null,
                        link: '/services',
                        title: 'Physical Therapy',
                        hasChildren: false,
                        isInNav: false,
                        dropdownPointer: false,
                    },
                    {
                        classname: null,
                        link: '/services',
                        title: 'Massage Therapy',
                        hasChildren: false,
                        isInNav: false,
                        dropdownPointer: false,
                    },
                    {
                        classname: null,
                        link: '/services',
                        title: 'Chiropractic Therapy',
                        hasChildren: false,
                        isInNav: false,
                        dropdownPointer: false,
                    },
                ]
            }
        ]
    },
    {
        title: "About",
        classname: null,
        link: "/about",
        hasChildren: false
    },
    {
        title: "Blog",
        classname: null,
        link: "/blog",
        hasChildren: false
    },
    {
        title: "Contact",
        classname: null,
        link: "/contact",
        hasChildren: false
    },
]