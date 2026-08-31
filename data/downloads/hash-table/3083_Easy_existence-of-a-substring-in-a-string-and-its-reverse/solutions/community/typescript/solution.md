# Reverse String Comparison for Substring Existence

**Author:** traezeeofor
**Votes:** 0
**Link:** [https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/solutions/5105014/](https://leetcode.com/problems/existence-of-a-substring-in-a-string-and-its-reverse/solutions/5105014/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
I first reversed the input string using the split, reverse, and join methods to create s2. Then, I iterated through the original string using a loop, forming two-character substrings at each step. I checked if these substrings existed in the reversed string s2 using the includes method. If any such substring was found, I returned true; otherwise, I returned false.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function isSubstringPresent(s: string): boolean {
    const s2 = s.split("").reverse().join("");

    for (let i = 0; i < s.length - 1; i++) {
      let j = i + 1;
      let sub = `${s[i]}${s[j]}`;
      if (s2.includes(sub)) {
        return true;
      }
    }

    return false;
};
```