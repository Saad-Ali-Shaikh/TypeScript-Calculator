/// <reference path="Scripts/typings/jquery/jquery.d.ts" />
window.onload = function () {
};
$(document).ready(function () {
    var eventListener = new ButtonClickEventHandler();
    $(".button-calc").click(function () {
        eventListener.handleClickEvent(this);
    });
    $("#txtInput").keydown(function (event) {
        // Allow only backspace and delete
        if (event.keyCode == 46 || event.keyCode == 8) {
        }
        else {
            // Ensure that it is a number and stop the keypress
            if (event.keyCode < 48 || event.keyCode > 57) {
                event.preventDefault();
            }
        }
    });
});
var clearText = true;
var ButtonClickEventHandler = (function () {
    function ButtonClickEventHandler() {
    }
    ButtonClickEventHandler.prototype.handleClickEvent = function (button) {
        var buttonClicked = $(button).val();
        this.performOperation(buttonClicked);
    };
    ButtonClickEventHandler.prototype.performOperation = function (buttonClicked) {
        if (clearText) {
            clearText = false;
            this.clearAll();
        }
        var calcOps = new CalculatorOperations();
        switch (buttonClicked) {
            case "x":
                {
                    calcOps.backspace($("#txtInput"));
                }
                break;
            case ".":
                {
                    if ($("#txtInput").val().indexOf(".") == -1) {
                        calcOps.appendNumber(buttonClicked);
                    }
                }
                break;
            case "1":
                {
                    calcOps.appendNumber(buttonClicked);
                }
                break;
            case "2":
                {
                    calcOps.appendNumber(buttonClicked);
                }
                break;
            case "3":
                {
                    calcOps.appendNumber(buttonClicked);
                }
                break;
            case "4":
                {
                    calcOps.appendNumber(buttonClicked);
                }
                break;
            case "5":
                {
                    calcOps.appendNumber(buttonClicked);
                }
                break;
            case "6":
                {
                    calcOps.appendNumber(buttonClicked);
                }
                break;
            case "7":
                {
                    calcOps.appendNumber(buttonClicked);
                }
                break;
            case "8":
                {
                    calcOps.appendNumber(buttonClicked);
                }
                break;
            case "9":
                {
                    calcOps.appendNumber(buttonClicked);
                }
                break;
            case "0":
                {
                    calcOps.appendNumber(buttonClicked);
                }
                break;
            case "+":
                {
                    this.showValuesOnUI("+");
                }
                break;
            case "-":
                {
                    this.showValuesOnUI("-");
                }
                break;
            case "*":
                {
                    this.showValuesOnUI("*");
                }
                break;
            case "/":
                {
                    this.showValuesOnUI("/");
                }
                break;
            case "=":
                {
                    this.showValuesOnUI("=");
                    calcOps.findResult($("#txtInputShow"));
                    clearText = true;
                }
                break;
            case "Calc":
                {
                    this.clearAll();
                }
                break;
            default:
                break;
        }
    };
    ButtonClickEventHandler.prototype.showValuesOnUI = function (operation) {
        if ($("#txtInput").val() != '') {
            $("#txtInputShow").val($("#txtInputShow").val() + $("#txtInput").val() + " " + operation + " ");
            $("#txtInput").val("");
        }
    };
    ButtonClickEventHandler.prototype.clearAll = function () {
        $("#txtInput").val("");
        $("#txtInputShow").val("");
    };
    return ButtonClickEventHandler;
}());
var CalculatorOperations = (function () {
    function CalculatorOperations() {
    }
    CalculatorOperations.prototype.backspace = function (textBox) {
        var text = $(textBox).val();
        if (text.length > 0) {
            $(textBox).val(text.substr(0, text.length - 1));
        }
    };
    CalculatorOperations.prototype.appendNumber = function (_number) {
        var txtInput = $("#txtInput").val();
        $("#txtInput").val(txtInput + _number);
    };
    CalculatorOperations.prototype.findResult = function (textBox) {
        var val1 = 0;
        var operator = "";
        var text = $(textBox).val();
        if (text.length > 0) {
            var textArray = text.split(' ');
            for (var i = 0; i < textArray.length; i++) {
                var textVal = textArray[i];
                if (textVal != ' ') {
                    if ($.isNumeric(textVal)) {
                        if (val1 == 0) {
                            val1 = textVal;
                        }
                        else {
                            val1 = this._GetResult(val1, textVal, operator);
                            operator = "";
                        }
                    }
                    else if (typeof textVal == "string") {
                        operator = textVal;
                    }
                }
            }
        }
        if (val1 > 0) {
            $("#txtInput").val(val1);
            $("#txtInputShow").val("");
        }
    };
    CalculatorOperations.prototype._GetResult = function (val1, val2, operator) {
        var result = 0;
        switch (operator) {
            case "+":
                result = parseFloat(val1.toString()) + parseFloat(val2.toString());
                break;
            case "-":
                result = parseFloat(val1.toString()) - parseFloat(val2.toString());
                break;
            case "*":
                result = parseFloat(val1.toString()) * parseFloat(val2.toString());
                break;
            case "/":
                result = parseFloat(val1.toString()) / parseFloat(val2.toString());
                break;
            default:
        }
        return result;
    };
    return CalculatorOperations;
}());
//# sourceMappingURL=app.js.map