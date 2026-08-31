# JavaScript | O(n) | String Manipulation Approach

**Author:** helmiqatqat
**Votes:** 1
**Link:** [https://leetcode.com/problems/faulty-keyboard/solutions/5680242/](https://leetcode.com/problems/faulty-keyboard/solutions/5680242/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```JavaScript []
/**
 * @param {string} s
 * @return {string}
 */
var finalString = function(s) {
    let forward = "";
    let reversed = "";
    const faultyChar = 'i';
    for(let char of s) {
        if(char === faultyChar) {
            const temp = forward;
            forward = reversed;
            reversed = temp;
        }
        else {
            reversed = char + reversed;
            forward += char;
        }
    }
    return forward;
};
```
```typescript []
function finalString(s: string): string {
    let forward: string = "";
    let reversed: string = "";
    const faultyChar: string = 'i';
    for(let char of s) {
        if(char === faultyChar) {
            const temp = forward;
            forward = reversed;
            reversed = temp;
        }
        else {
            reversed = char + reversed;
            forward += char;
        }
    }
    return forward;
};
```
