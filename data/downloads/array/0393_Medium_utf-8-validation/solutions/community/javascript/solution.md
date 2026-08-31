# 💡JavaScript Solution - String & Bit Manipulation

**Author:** AminiCK
**Votes:** 7
**Link:** [https://leetcode.com/problems/utf-8-validation/solutions/458797/](https://leetcode.com/problems/utf-8-validation/solutions/458797/)

---

### The idea - String Manipulation
1. Convert into binary strings
2. Find the lengh of leading `1` using `indexOf(0)`
3. Use `current` as a counter for the on-going UTF8 length
4. A length of `1` or `>4`  is considered invalid
```
var validUtf8 = function(data) {
    let binary = data.map((i)=>{
        let b = "00000000" + i.toString(2);
        return b.substring(b.length - 8);
    })

    let current = 0; // current UTF8 length
    for (let i=0;i<binary.length;i++) {
        let bytes = binary[i].indexOf('0');
        if (current==0) {
            if (bytes==0) continue; // skip single byte character
            if (bytes > 4 || bytes < 2) return false; // length thats > 4 or < 2 is an invalid utf encoding
            current = bytes; // set the remaining length
        } else {
            if (bytes != 1) return false
        }
        current--;
    }
    return current==0;
};
```
### The idea - Bit Manipulation
1. Exactly the same, but using bit masks.
``` javascript 
var validUtf8 = function(data) {
    let count = 0;
    let mostSig = 1<<7;
    let secSig = 1<<6
    for (let n of data) {
        if (count == 0) {
            let mask = 1<<7;
            while (n & mask) {
                mask = mask>>1;
                count++;
            }
            if (count == 0) continue;
            if (count == 1 || count > 4) return false;
        } else {
            if (!(n&mostSig && !(n&secSig))) return false;
        }
        count--;
    }
    return count == 0;
}
```