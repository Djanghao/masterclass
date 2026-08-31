# Easy One Pass O(1) Space Solution | C++, Python, Java

**Author:** not_yl3
**Votes:** 80
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/solutions/5555960/](https://leetcode.com/problems/minimum-deletions-to-make-string-balanced/solutions/5555960/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
We iterate through each character in `s`. If the current character is a `'b'`, increment `count`. This means we've encountered a `'b'` that may need to be deleted if there's an `'a'` ahead of it.

On the other hand, if the current character is an `'a'` and `count` is not equal to zero (meaning there's some `'b'`s before it), increment `res` (indicating a deletion needs to occur), and decrement count since we've removed a character to balance `s`.

This should result in the minimum number of deletions required to ensure none of the a's in `s` appear after a `'b'`.
# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```C++ []
class Solution {
public:
    int minimumDeletions(string s) {
        int res = 0, count = 0;
        for (char c : s){
            if (c == 'b')
                count++;
            else if (count){
                res++;
                count--;
            }
        }
        return res;
    }
};
```
```python []
class Solution:
    def minimumDeletions(self, s: str) -> int:
        res = count = 0
        for c in s:
            if c == 'b':
                count += 1
            elif count:
                res += 1
                count -= 1
        return res
```
```Java []
class Solution {
    public int minimumDeletions(String s) {
        int res = 0, count = 0;
        for (char c : s.toCharArray()){
            if (c == 'b')
                count++;
            else if (count != 0){
                res++;
                count--;
            }
        }
        return res;
    }
}
```
