/**
 * Created by wungcq on 15/9/25.
 */

let Selector = require('./selector.jsx');

var SelectorAPI = function (arg) {
  this.arg = arg;
  this.dom = null;
  this.init();
};

SelectorAPI.prototype = {
  init(){
    this.content = this.convertContent();
    this.dom = React.render(
      <Selector
        options= {this.convertContent()}
        theme= { this.arg.theme}
        direction={ this.arg.direction}
        onChange ={this.arg.onChange}
        scrollNum={ this.arg.scrollNum}
        index= { this.arg.initIndex}
        label = {this.arg.showSel}
      />,
      this.arg.container);
  },
  convertContent(){
    return this.arg.content.map((item, index)=> {
      if (typeof item == 'string') {
        return {
          value: index,
          label: item
        };
      } else {
        return {
          value: item.value,
          label: item.label
        };
      }

    });
  },
  index(index){
    if (index && index < this.content.length) {
      this.dom.setValue();
    }
    return this.dom.props.index;
  },
  val(val){
    if (val) {
      var index = this.content.indexOf(val);
      if (index != -1) {
        this.dom.setValue(val, index);
      }
    }
    return this.dom.props.value;
  },
  select(val){
    this.val(val);
  },
  element(){
    return this.dom;
  }


};


module.exports = SelectorAPI;
