const job = {
    name: 'job',
    title: 'Jobs',
    type: 'document',
    fields: [
        {
            name: 'job_title',
            title: 'Job Title',
            type: 'string'
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: { source: 'job_title' }
        },
        {
            name: 'job_category',
            title: 'Job Category',
            type: 'string'
        },
        {
            name: 'job_description',
            title: 'Job Description',
            type: 'array',
            of: [{ type: "block" }]
        },
        {
            name: 'job_location',
            title: 'Job Location',
            type: 'string'
        }

    ]
}

export default job;