var page = new tabris.Page({
  title: 'Book Food',
  topLevel: true
});

new tabris.TextInput({
  layoutData: {top: 20, left: "20%", right: "20%"},
  message: "Type here, then confirm"
}).on("accept", function(widget, text) {
  new tabris.TextView({
    layoutData: {top: "prev() 20", left: "20%"},
    text: text
  }).appendTo(page);
}).appendTo(page);

var button = new tabris.Button({
  centerX: 0, top: 100,
  text: 'Native Widgets'
}).appendTo(page);

var textView = new tabris.TextView({
  centerX: 0, top: [button, 50],
  font: '24px'
}).appendTo(page);

button.on('select', function() {
  textView.set('text', 'Totally Rock!');
});

page.open();
