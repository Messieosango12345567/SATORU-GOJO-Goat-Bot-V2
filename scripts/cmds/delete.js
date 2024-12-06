module.exports = {
  config: {
    name: "delete",
    aliases: ["del"],
    author: "S",
role: 2,
    category: "system"
  },

  onStart: async function ({ api, event, args }) {
    const fs = require('fs');
    const path = require('path');

    const fileName = args[0];

    if (!fileName) {
      api.sendMessage("Please provide a file name to delete.", event.threadID);
      return;
    }

    const filePath = path.join(__dirname, fileName);

    fs.unlink(filePath, (err) => {
      if (err) {
        console.error(err);
        api.sendMessage(`❎ | Failed to delete ${fileName}.`, event.threadID);
        return;
      }
      api.sendMessage(`_____________________\n𝐥𝐚 𝐜𝐦𝐝 ( ${fileName} ) á é𝐭é 𝐬𝐮𝐩𝐩𝐫𝐢𝐦é𝐞 𝐚𝐯𝐞𝐜 𝐬𝐮𝐜𝐜𝐞𝐬\n___________________`, event.threadID);
    });
  }
};
