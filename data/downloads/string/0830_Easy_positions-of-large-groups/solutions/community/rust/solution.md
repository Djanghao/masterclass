# Python & Rust Solutions

**Author:** ajesh-mishra
**Votes:** 0
**Link:** [https://leetcode.com/problems/positions-of-large-groups/solutions/3981502/](https://leetcode.com/problems/positions-of-large-groups/solutions/3981502/)

---

# Code
```python []
class Solution:
    def largeGroupPositions(self, s: str) -> List[List[int]]:
        start, end, result = 0, 1, []

        while end <= len(s):
            *c, = s[start:end]
            if len(set(c)) == 1:
                end += 1
                continue
            if end - 2 - start > 1:
                result.append([start, end - 2])
            start = end - 1
            end += 1

        if len(s) - 1 - start > 1:
            result.append([start, len(s) - 1])

        return result
```
```python []
class Solution:
    def largeGroupPositions(self, s: str) -> List[List[int]]:
        start, prev, result = 0, '', []

        for i, c in enumerate(s):
            if i == 0 or c == prev:
                prev = c
                continue
            if i - 1 - start > 1:
                result.append([start, i - 1])
            start = i
            prev = c

        if len(s) - 1 - start > 1:
            result.append([start, len(s) - 1])

        return result
```
```rust []
impl Solution {
    pub fn large_group_positions(s: String) -> Vec<Vec<i32>> {
        let mut start = 0;
        let mut prev = '_';
        let mut result = vec![];

        for (i, c) in s.char_indices() {
            if i == 0 || c == prev {
                prev = c;
                continue;
            }
            if i - 1 - start > 1 {
                result.push(vec![start as i32, (i - 1) as i32])
            }
            start = i;
            prev = c;
        }

        if s.len() - 1 - start > 1 {
            result.push(vec![start as i32, (s.len() - 1) as i32])
        }

        result
    }
}
```