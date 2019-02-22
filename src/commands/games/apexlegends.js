const { Command, SwitchbladeEmbed } = require('../..')

const types = ['player', 'xbox', 'psn', 'origin/pc', 'user', 'p']

module.exports = class ApexLegends extends Command {
  constructor (client) {
    super(client, {
      name: 'apexlegends',
      aliases: ['apex', 'al', 'apexl'],
      requirements: { apis: ['apexlegends'] },
      parameters: [{
        type: 'string',
        full: true,
        whitelist: types,
        missingError: ({ t, prefix }) => {
          return new SwitchbladeEmbed().setTitle(t('commons:search.noType'))
            .setDescription([
              this.usage(t, prefix),
              '',
              `__**${t('commons:search.types')}:**__`,
              `**${types.map(l => `\`${l}\``).join(', ')}**`
            ].join('\n'))
        }
      }]
    })
  }
}
