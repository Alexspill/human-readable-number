module.exports = function toReadable (number) {
    let arr = number.toString().split('').map(Number);
    arrl = arr.length;
    const units = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const dec2 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const decs = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
    if (arrl > 3 || arrl <= 0) 
        {
            return 'Too big or too small number';
        }
    else if (arrl === 1 && arr[0] === 0) 
        {
            return 'zero';
        }
    else if (arrl === 1) 
        {
          return units[arr[0]];
    }
    else if (arrl === 2 && arr[0] === 1)
    {
        return (dec2[arr[1]]);
    }
    else if (arrl === 2 && arr[1] === 0)
    {   
        return ((decs[arr[0]]));
    }
    else if (arrl === 2)
    {   
        return ((decs[arr[0]]) + ' ' + units[arr[1]]);
    }
    else if (arrl === 3 && arr[1] === 0 && arr[2] === 0) 
    {
        return (units[arr[0]] + ' hundred');
    }
    else if (arrl === 3 && arr[1] === 0) 
    {
        return (units[arr[0]] + ' hundred ' + units[arr[2]]);
    }
    else if (arrl === 3 && arr[1] === 1)
    {
        return (units[arr[0]] + ' hundred ' + (dec2[arr[2]]));
    }
    else if (arrl === 3 && arr[2] === 0)
    {
        return (units[arr[0]] + ' hundred ' + (decs[arr[1]]));
    }
    else if (arrl === 3)
    {
        return (units[arr[0]] + ' hundred ' + (decs[arr[1]]) + ' ' + units[arr[2]]);
    }
}

