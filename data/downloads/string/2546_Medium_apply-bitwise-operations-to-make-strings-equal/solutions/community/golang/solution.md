# [Python3/Golang/Rust] Count one

**Author:** frolovdmn
**Votes:** 2
**Link:** [https://leetcode.com/problems/apply-bitwise-operations-to-make-strings-equal/solutions/3086163/](https://leetcode.com/problems/apply-bitwise-operations-to-make-strings-equal/solutions/3086163/)

---

We have to check if one of the strings contains 1 and the other does not, and vice versa. If both have it, then we can bring our string s equal to the target.

**Python3**:
```
class Solution:
    def makeStringsEqual(self, s: str, target: str) -> bool:
        return '1' in s and '1' in target or '1' not in target and '1' not in s
```

**Golang**:
```
func makeStringsEqual(s string, target string) bool {
    s_check, target_check := strings.Contains(s, "1"), strings.Contains(target, "1")
    
    if (s_check == true && target_check == false) || (s_check == false && target_check == true) {
        return false
    } else {
        return true
    }
}
```

**Rust**:
```
impl Solution {
    pub fn make_strings_equal(s: String, target: String) -> bool {
        return (!s.contains("1") && !target.contains("1")) || (s.contains("1") && target.contains("1"))
    }
}
```