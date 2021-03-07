module.exports = function toReadable (number) {
  var res = "";
    var num1 = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    var num2 = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    function propis(number){
        switch (true){
            case (number < 20): 
            res = res + num1[number -1];
            break;
            case (number < 100):
            res = num2[Math.floor(number / 10) - 2];
            if (number % 10 != 0) res = res + ' ' + num1[number % 10 -1];
            break;
            case (number < 1000):
                let arr = `${num1[Math.floor((number / 100 -1))]} hundred`;
                if (number % 100 != 0) {
                    res += `${arr} ${propis(number % 100)}`;
                } else res = arr;
                break;
        }
        return res;
    }
    res = res + propis(number);
    return res;
}
