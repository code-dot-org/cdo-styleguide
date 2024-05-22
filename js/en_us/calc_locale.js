
(window.locales = window.locales || {}).calc_locale = {
  divideByZeroError: function(d) { return "Your program results in division by zero."; },
  emptyComputeBlock: function(d) { return "You must attach a block to the \"evaluate\" block."; },
  equivalentExpression: function(d) { return "Try reordering your arguments to get exactly the same expression."; },
  evaluate: function(d) { return "evaluate"; },
  extraTopBlocks: function(d) { return "You have unattached blocks. Did you mean to attach these to the \"evaluate\" block?"; },
  failedInput: function(d) { return "Your function does not return the right result for all values."; },
  goal: function(d) { return "Goal:"; },
  imaginaryNumberError: function(d) { return "Your program results in an imaginary number."; },
  levelIncompleteError: function(d) { return "Your expression does not match the goal."; },
  missingFunctionError: function(d) { return "You must define a function named " + d.functionName + "."; },
  missingVariableX: function(d) { return "Your expression is missing variable " + d["var"] + "."; },
  reinfFeedbackMsg: function(d) { return "Here is your calculation! Continue working on it, or move on to the next puzzle!"; },
  yourExpression: function(d) { return "Your expression:"; },
  wrongInput: function(d) { return "You are calling your function with the wrong value."; },
  wrongOtherValuesX: function(d) { return "Your expression results in the wrong value if we vary " + d["var"] + "."; },
  wrongResult: function(d) { return "Your expression does not return the correct result."; }
};