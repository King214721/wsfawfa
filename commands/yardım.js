const db = require("croxydb");
const { EmbedBuilder, IntegrationApplication } = require("discord.js");
module.exports = {
  name: "yardım",
  description: "Tüm komutları görüntülersiniz",
  type: 1,

  run: async (client, interaction) => {


const warn = new EmbedBuilder()
.setAuthor({name: `Komutlar!`})
.setDescription('> <:icons_wumpus:1143615281709731981> **Hey!  Burada bota bullunan tüm komutları görüntülüyebilirsin!** \n\n `/` - .')
.setColor("Green")
.setFooter({text: "General Bot", iconURL: client.user.avatarURL()})

interaction.reply({embeds: [warn]})

  }
}