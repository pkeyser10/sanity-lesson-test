export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '604062be4a3de8596df82785',
                  title: 'Sanity Studio',
                  name: 'sanity-lesson-test-studio',
                  apiId: '372759b1-4fe1-405c-bec0-1a4a96a87aa4'
                },
                {
                  buildHookId: '604062be6bc20f5d28aaf7b9',
                  title: 'Blog Website',
                  name: 'sanity-lesson-test',
                  apiId: '115c5c4e-cc36-4572-9317-9272f4a17823'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/pkeyser10/sanity-lesson-test',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-lesson-test.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
