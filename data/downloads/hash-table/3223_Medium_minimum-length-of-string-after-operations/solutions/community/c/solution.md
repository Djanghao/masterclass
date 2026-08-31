# Easy One-pass  - O(1) space Solution | C++, Python, Java

**Author:** not_yl3
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-length-of-string-after-operations/solutions/5506874/](https://leetcode.com/problems/minimum-length-of-string-after-operations/solutions/5506874/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Use an array of size 26 `freq` to keep track of the counts of each character. When a character's count reaches 3, we simulate removing from the left and right by subtracting 2 (since we don't remove the current one), then subtract 2 from `res` which initially starts at `s.length()`.
# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    int minimumLength(string s) {
        int res = s.length(), freq[26] = {};
        for (char c : s){
            if (++freq[c - 'a'] == 3){
                freq[c - 'a'] -= 2;
                res -= 2;
            }
        }
        return res;
    }
};
```
```python []
class Solution:
    def minimumLength(self, s: str) -> int:
        res = len(s)
        freq = [0] * 26
        for c in s:
            i = ord(c) - 97
            freq[i] += 1
            if freq[i] == 3:
                freq[i] -= 2
                res -= 2
        return res
```
```Java []
class Solution {
    public int minimumLength(String s) {
        int res = s.length(), freq[] = new int[26];
        for (char c : s.toCharArray()){
            if (++freq[c - 'a'] == 3){
                freq[c - 'a'] -= 2;
                res -= 2;
            }
        }
        return res;
    }
}
```
