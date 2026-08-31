# Simple String Building | C++, Python, Java

**Author:** not_yl3
**Votes:** 1
**Link:** [https://leetcode.com/problems/hash-divided-string/solutions/5716099/](https://leetcode.com/problems/hash-divided-string/solutions/5716099/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Sum the position indecies in the alphabet for every group of $$k$$ characters (`s[i] - 'a'`) then append the character at that index in the alphabet after you take the remainder when divided by 26 (`sum % 26`).
# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    string stringHash(string s, int k) {
        int n = s.length(), j = 0;
        for (int i = 0, sum = 0; i < n; i++){
            sum += s[i] - 'a';
            if ((i + 1) % k == 0){
                s[j++] = 'a' + (sum % 26);
                sum = 0;
            }
        }
        return s.substr(0, n / k);
    }
};
```
```python []
class Solution:
    def stringHash(self, s: str, k: int) -> str:
        return ''.join([chr(sum(ord(c) - 97 for c in s[i:i+k]) % 26 + 97) for i in range(0, len(s), k)])
```
```Java []
class Solution {
    public String stringHash(String s, int k) {
        int n = s.length();
        StringBuilder res = new StringBuilder();
        for (int i = 0, sum = 0; i < n; i++){
            sum += s.charAt(i) - 'a';
            if ((i + 1) % k == 0){
                res.append((char)('a' + (sum % 26)));
                sum = 0;
            }
        }
        return res.toString();
    }
}
```
