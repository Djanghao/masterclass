# c++ brute force solution

**Author:** szhzjxfc
**Votes:** 2
**Link:** [https://leetcode.com/problems/count-substrings-with-only-one-distinct-letter/solutions/384780/](https://leetcode.com/problems/count-substrings-with-only-one-distinct-letter/solutions/384780/)

---

```
class Solution {
public:
    int countLetters(string S) {
        int result = 0, left = 0, right = 0;
        while(right < S.size()) {
            while(S[left] == S[right] && right < S.size()) {
                ++right;
            }
            // now, s[left, left+1, ..., right-1] is a substring contains only one letter
            for(int i = 1; i <= right-left; ++i) {
                result += i;
            }
            left = right;
        }
        return result;
    }
};
```