export default {
    name: 'contact',
    title: 'Contact',
    type: 'document',
    fields: [
        {
            name: 'title1',
            title: 'Title1',
            type: 'string'
        },
        {
            name: 'title2',
            title: 'Title2',
            type: 'string'
        },
        {
            name: 'cta',
            title: 'Cta',
            description: 'Call To Action (Keep it short!)',
            type: 'string'
        },
        {
            name: 'contactImage',
            title: 'Contact image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },

    ]
}