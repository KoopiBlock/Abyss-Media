export default {
    name: 'features',
    title: 'Features',
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
            name: 'featureImage',
            title: 'Feature image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },

    ]
}