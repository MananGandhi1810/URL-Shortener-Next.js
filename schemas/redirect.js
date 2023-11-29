export default {
  name: 'redirects',
  title: 'Redirects',
  type: 'document',
  fields: [
    {
      name: 'route',
      title: 'Route',
      type: 'string',
      description: 'The route you want to redirect from',
      validation: Rule => Rule.required().error('A route is required.')
    },
    {
      name: 'redirectUrl',
      title: 'Redirect URL',
      type: 'url',
      description: 'The URL you want to redirect to',
      validation: Rule => Rule.required().uri({ scheme: ['http', 'https'] })
    }
  ]
}
