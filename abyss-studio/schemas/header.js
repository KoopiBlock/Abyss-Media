
export default {
    name: 'header',
    title: 'Header',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Title',
            type: 'string'
        },
        {
            name: 'body',
            title: 'Body',
            type: 'text',
        },
        {
            name: 'cta',
            title: 'Cta',
            description: 'Call To Action (Keep it short!)',
            type: 'string'
        }

    ]
}