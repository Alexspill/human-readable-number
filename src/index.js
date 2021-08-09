module.exports = function toReadable (number) {
    let arr = number.toString().split('').map(Number);
    arrl = arr.length;
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const dec2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const decs = ['', '', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (arrl > 3 || arrl < 0) 
        {
            return 'Too big or too small number';
        }
    else if (arrl === 0) 
        {
            return 'zero';
        }
    else if (arrl === 1) 
        {
          return units[arr[arrl-1]];
    }
}