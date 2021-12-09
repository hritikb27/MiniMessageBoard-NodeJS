messages = [
    {
      text: "Hi there!",
      user: "Amando",
      added: new Date()
    },
    {
      text: "Hello World!",
      user: "Charles",
      added: new Date()
    }
];

function updateMessages(newObj){
    messages.push(newObj)
};

module.exports = {messages, updateMessages}