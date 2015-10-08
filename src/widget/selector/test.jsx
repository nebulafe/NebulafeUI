/**
 * Created by wungcq on 15/9/25.
 */
(function(){
  let Selector = require('./api.jsx');
  let s = new Selector({
    content:['2312','dfaqes','fqwegweqgqwgqwef','sdf','ewrqvd'],
    theme:'blue',
    container: document.getElementById('container'),
    scrollNum: 4,
    initIndex: 2,
    showSel : '选择检测单元吧',
    onChange: function(){console.log(arguments);}
  });

  console.log(s.element());
})();





