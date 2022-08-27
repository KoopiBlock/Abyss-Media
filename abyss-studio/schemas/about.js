
export default {
    name: 'about',
    title: 'About',
    type: 'document',
    fields: [
        {
            name: 'company',
            title: 'Company',
            type: 'string'
        },
        {
            name: 'companyDescription',
            title: 'Company Description',
            type: 'text',
        },
        {
            name: 'companyImage',
            title: 'Company image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'team',
            title: 'Team',
            type: 'string'
        },
        {
            name: 'teamDescription',
            title: 'Team Description',
            type: 'text',
        },
        {
            name: 'teamImage',
            title: 'Team image',
            type: 'image',
            options: {
                hotspot: true,
            },
        },


    ]
}