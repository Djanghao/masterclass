# Single loop Answer

**Author:** vishnupv1
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/solutions/4345091/](https://leetcode.com/problems/check-if-all-as-appears-before-all-bs/solutions/4345091/)

---

function checkString(s: string): boolean {
    for (let i = 0; i < s.length; i++) {
        if (s[i] == 'b' && s[i + 1] == 'a') {
            return false
        }
    }
    return true
};
```