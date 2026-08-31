# Fastest typescript approach with O(n) time complexity

**Author:** ifeoluwa_codesinml
**Votes:** 8
**Link:** [https://leetcode.com/problems/find-the-difference/solutions/3860342/](https://leetcode.com/problems/find-the-difference/solutions/3860342/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
The approach uses the acii character code of the lower english letters. We sum up all the character codes in the string t the we minus the all the character codes in the string s. So since it is guaranteed that the letter t has all the characters of s plus another random character, the value that would be left would just be the character code of this randomly added character.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function findTheDifference(s: string, t: string): string {
    let charCode = t.charCodeAt(0)

    for (let i = 0; i < s.length; i++) {
        charCode += t.charCodeAt(i + 1) - s.charCodeAt(i)
    }

    return String.fromCharCode(charCode)
};
```