# Javascript Solution | Binary | Two Approaches

**Author:** pmistry_
**Votes:** 2
**Link:** [https://leetcode.com/problems/utf-8-validation/solutions/2569173/](https://leetcode.com/problems/utf-8-validation/solutions/2569173/)

---

**Approach 1)**

```
/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
    
    let binary = data.map(d => { // data to binary
        let b = "00000000" + d.toString(2);
        return b.substring(b.length - 8);
    })

    // current UTF8 length
    let current = 0; 

    for (let i=0;i<binary.length;i++) {
        let bytes = binary[i].indexOf('0');
        if (current==0) {
            // skip the single byte char
            if (bytes==0) {
                continue;
            }  
            if (bytes > 4 || bytes < 2) {
              return false;  
            }
            // set the remaining length
            current = bytes;
        } else {
            if (bytes != 1) {
                return false
            } 
        }
        current--;
    }
    return current==0;
};
```

```
Runtime: 134 ms, faster than 27.78% of JavaScript online submissions for UTF-8 Validation.
Memory Usage: 48.3 MB, less than 25.00% of JavaScript online submissions for UTF-8 Validation.
```

**Approach 2)**

```
/**
 * @param {number[]} data
 * @return {boolean}
 */
var validUtf8 = function(data) {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        if (count == 0) {
            if (data[i]>>>5 == 0b110) {
                count = 1;
            }
            else if (data[i]>>>4 == 0b1110) {
                count = 2;
            }
            else if (data[i]>>>3 == 0b11110) {
                count = 3;
            }
            else if (data[i]>>>7 == 1) {
                return false;
            }
        }
        else {
            if (data[i]>>>6 != 2) {
                return false;
            }
            count --;
        }
    }
    return count == 0;
};
```

```
Runtime: 133 ms, faster than 27.78% of JavaScript online submissions for UTF-8 Validation.
Memory Usage: 42.2 MB, less than 97.22% of JavaScript online submissions for UTF-8 Validation.
```