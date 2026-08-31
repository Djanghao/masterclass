# JavaScript O(n) solution, simple and well organised logic (split by RegExp, drop leading 0, use Set)

**Author:** user4125ZI
**Votes:** 4
**Link:** [https://leetcode.com/problems/number-of-different-integers-in-a-string/solutions/1131151/](https://leetcode.com/problems/number-of-different-integers-in-a-string/solutions/1131151/)

---

To get this problem right one needs to pay attention to corner cases, mostly around leading zeros. But it is possible to organize the code so it flows in 3 logical steps:
* get all the sub-strings containing only numbers (I'm using a RegExp);
* drop leading zeros (except for the last one if the string contains zeros only);
* use a Set to avoid duplicated numbers.

Please note that numeric strings are _not_ converted to an number (intger or otherwise) - this way we can handle very long strings / large numbers.

Here is the code with detailed comments:

```javascript
const CC0 = '0'.charCodeAt(0);

var numDifferentIntegers = function(word) {
    const numStrSet = new Set();
    
    // get numbers as strings
    const numStrs = word.split(/[^0-9]+/);
    
    // drop leading zeros
    for (const numStr of numStrs) {
        if (numStr.length > 0) {
            let i = 0;
            while (numStr.charCodeAt(i) === CC0) i++;
            
            // make sure that we preserve last 0 if string is composed of zeros only
            numStrSet.add(numStr.slice(i) || '0');
        }
    }
    
    return numStrSet.size;
};
```