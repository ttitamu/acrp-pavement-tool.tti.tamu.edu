if (typeof TTI ==  "undefined") { var TTI = {}; }
if (typeof TTI.Widgets ==  "undefined") { TTI.Widgets = {}; }

TTI.Widgets.TCOEstimator = function(spec) {
  var self = TTI.PubSub({});

  var lengthInput = DOM.input().attr('placeholder','length (ft)');
  var widthInput = DOM.input().attr('placeholder','width (ft)');
  var output = DOM.h5();
  var debug = DOM.h6();

  self.recalc = function(){
    var unitCost = spec.cost.unitCost;
    var result = TTI.computeTCO(lengthInput.val(),widthInput.val(),unitCost);
    
    self.tco = result;
    
    /////console.log('RECALC!!!!',result);
    output.text(accounting.formatMoney(result));
    debug.text('unit cost = ' + spec.cost.unitCost + ' (cell ' + spec.cost.row + spec.cost.column + ')');
    
    self.publish('recalc',result);
  };

  self.renderOn = function(wrap) {
    wrap.append(lengthInput);
    wrap.append(widthInput);
    wrap.append(output);
    wrap.append(DOM.label('debug'));
    wrap.append(debug);
    
    lengthInput.change(self.recalc);
    widthInput.change(self.recalc);
  };

  return self;

};