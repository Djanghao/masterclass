# One line RegExp solution

**Author:** Dmitrii_Suroviagin
**Votes:** 0
**Link:** [https://leetcode.com/problems/thousand-separator/solutions/5524480/](https://leetcode.com/problems/thousand-separator/solutions/5524480/)

---

# Intuition
There's a way to format the number in JavaScript using `Number.prototype.toLocaleString()` method, but it formats the number with commas instead of dots:
```
var n = 34523453;
console.log(n.toLocaleString());    // "34,523,453"
```
So we need to implement a custom regular expression that fullfill the requirements.

# Approach
The regex uses 2 lookahead assertions:
- a positive one to look for any point in the string that has a multiple of 3 digits in a row after it,
- a negative assertion to make sure that point only has exactly a multiple of 3 digits. The replacement expression puts a comma there.

# Complexity
- Runtime 45ms. Beats 100.00%
- Memory 50.16MB. Beats 69.70%

# Code
```
function thousandSeparator(n: number): string {
    return n.toString().replace(/\\B(?=(\\d{3})+(?!\\d))/g, ".");
};
```