# single pass

**Author:** bryceat
**Votes:** 0
**Link:** [https://leetcode.com/problems/unique-substrings-in-wraparound-string/solutions/3248466/](https://leetcode.com/problems/unique-substrings-in-wraparound-string/solutions/3248466/)

---

# Intuition
Count the number of substrings ending with each letter.

# Complexity
- Time complexity:
O(n)

- Space complexity:
O(1)

# Code
```
impl Solution {
    pub fn find_substring_in_wrapround_string(s: String) -> i32 {
        let mut res: std::collections::HashMap<u8,i32> = s.bytes().map(|b| (b,1)).collect();
        let mut l = 1;
        for (i, j) in s.bytes().zip(s.bytes().skip(1)) {
            l = if i == j -1 || i == j + 25 {l + 1} else {1};
            res.insert(j,res[&j].max(l));
        }
        return res.values().sum()
    }
}
```
converted from Lee215's python:
```
def findSubstringInWraproundString(self, p):
        res = {i: 1 for i in p}
        l = 1
        for i, j in zip(p, p[1:]):
            l = l + 1 if (ord(j) - ord(i)) % 26 == 1 else 1
            res[j] = max(res[j], l)
        return sum(res.values())
```