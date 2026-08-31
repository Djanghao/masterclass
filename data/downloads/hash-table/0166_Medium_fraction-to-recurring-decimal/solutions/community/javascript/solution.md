# JavaScript Solution

**Author:** control_the_narrative
**Votes:** 9
**Link:** [https://leetcode.com/problems/fraction-to-recurring-decimal/solutions/1029272/](https://leetcode.com/problems/fraction-to-recurring-decimal/solutions/1029272/)

---

```javascript
var fractionToDecimal = function(numerator, denominator) {
    if(!numerator) return '0';
    
    let str = '';
    
    if(Math.sign(numerator) !== Math.sign(denominator)) str += '-';
    
    const numer = Math.abs(numerator)
    const denom = Math.abs(denominator)
    
    str += Math.floor(numer/denom);
    let rem = numer%denom;
    if(!rem) return str;
    str += '.'
    
    const map = new Map();
    
    while(rem !== 0) {
        map.set(rem, str.length);
        
        rem *= 10;
        str += Math.floor(rem/denom);
        rem %= denom
        
        if(map.has(rem)) {
            const idx = map.get(rem);
            return str.slice(0, idx) + `(${str.slice(idx)})`; 
        }
    }
    return str;
};
```