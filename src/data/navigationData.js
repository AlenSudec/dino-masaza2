export const elementTree = [
    {
        title: "Početna",
        classname: null,
        link: "/",
        hasChildren: false
    },
    {
        classname: "has-children",
        link: '/services',
        title: 'Usluge',
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
        title: "O nama",
        classname: null,
        link: "/about",
        hasChildren: false
    },
    // {
    //     title: "Blog",
    //     classname: null,
    //     link: "/blog",
    //     hasChildren: false
    // },
    {
        title: "Kontakt",
        classname: null,
        link: "/contact",
        hasChildren: false
    },
]