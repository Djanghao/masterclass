# JavaScript Two pointer solution with explanation

**Author:** vkuzbida
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographically-smallest-string-after-substring-operation/solutions/5968652/](https://leetcode.com/problems/lexicographically-smallest-string-after-substring-operation/solutions/5968652/)

---

# Intuition
To make string lexicographically smaller we'd need to replace as much letters to their precendents as possible. Letters at the beggining have higher weight comparing letters at the end of string.

# Approach
Initiate `left` pointer to 0 position. If `string[left]` is 'a' move pointer to the right. Remember changing 'a' to 'z' makes string lexicographically bigger comparing to initial string.

Initiate right pointer to the same value as left one. Move right pointer if (right + 1) is not 'a' (remember avoid changing 'a' to 'z').

The final loop from `left` to `right` update current letter with precending letter.

# Complexity
- Time complexity:
O(n) - we have 3 linear loops.

- Space complexity:
O(n) - to transform string into array.

# Code
```javascript []
/**
 * @param {string} s
 * @return {string}
 */
var smallestString = function(s) {
    const n = s.length;
    let l = 0;
    const arr = s.split('');

    while (l < (n-1) && arr[l] === 'a') {
        l++
    }
    let r = l;
    while ((r+1) < n && arr[r+1] !== 'a') {
        r++
    }

    for (let i = l; i <= r && i < n; i++) {
        if (arr[i] !== 'a') {
            arr[i] = String.fromCharCode(s.charCodeAt(i) - 1)
        } else {
            arr[i] = 'z'
        }
    }

    return arr.join('');
};
```