import { ar } from '@formkit/i18n'

const isCheckboxAndRadioMultiple = node => (node.props.type === 'checkbox' || node.props.type === 'radio') && node.props.options

function addAsteriskPlugin(node) {
  node.on('created', () => {
    const isRequired = node.props.parsedRules.some(rule => rule.name === 'required')
    if (!isRequired)
      return

    const isMultiOption = isCheckboxAndRadioMultiple(node)

    // if we're going to modify the schema then we need
    // to update the schemaMemoKey so we don't get an
    // invalid cached schema.
    node.props.definition.schemaMemoKey = `required_${isMultiOption ? 'multi_' : ''}${node.props.definition.schemaMemoKey}`

    const schemaFn = node.props.definition.schema
    node.props.definition.schema = (sectionsSchema = {}) => {
      if (isRequired) {
        if (isMultiOption) {
          sectionsSchema.legend = {
            children: ['$label', {
              $el: 'span',
              attrs: {
                style: 'color: red;',
              },
              children: '*',
            }],
          }
        }
        else {
          sectionsSchema.label = {
            children: ['$label', {
              $el: 'span',
              attrs: {
                style: 'color: red;margin-inline-start: 5px;',
              },
              children: '*',
            }],
          }
        }
      }
      return schemaFn(sectionsSchema)
    }
  })
}

export default {
  plugins: [addAsteriskPlugin],
  locales: {
    ar,
  },
}
