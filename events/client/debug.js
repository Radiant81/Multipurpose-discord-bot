//here the event starts
const { events: { debug } } = require("../../botconfig/settings.json");
module.exports = (client, info) => {
  if(debug) {
    console.log(String(info).grey);
  }
}
/**
  * @INFO
  * Bot Coded by Tomato#6966 | https://discord.gg/milrato
  * @INFO
  * Work for Milrato Development | https://milrato.eu
  * @INFO
  * Please mention him / Milrato Development, when using this Code!
  * @INFO
*/
