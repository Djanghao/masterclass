# Easiest & Most Intuitive Solution for beginners

**Author:** divyamRai
**Votes:** 38
**Link:** [https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/solutions/4449259/](https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/solutions/4449259/)

---

# Intuition

```
When alternating starting from 0, 
the digit '0' should appear at all even positions (0, 2, 4, 6, etc.), 
while the digit '1' should appear at all odd positions (1, 3, 5, 7, etc.).

If the minimum is obtained by counting in an alternating sequence starting from '1',
that case is handled with 'n - count'.
```

--------------------------------------------
# C++
```
class Solution {
public:
    int minOperations(string s) {
        int n = s.size(), count = 0;;
        if(n == 1) return 0;
        for(int i = 0; i < n; i++) {
            if(i%2 == 0 and s[i] == '1') count++;
            if(i%2 == 1 and s[i] == '0') count++;
        }
        return min(count, n-count);     //  "n - count", is to handle 1,0,1,0,. case
    }
};
```
----------------------
# Java
```
public class Solution {
    public int minOperations(String s) {
        int n = s.length(), count = 0;
        if (n == 1) return 0;
        for (int i = 0; i < n; i++) {
            if (i % 2 == 0 && s.charAt(i) == '1') count++;
            if (i % 2 == 1 && s.charAt(i) == '0') count++;
        }
        return Math.min(count, n - count); // "n - count" is to handle the case of alternating 1,0,1,0,...
    }
}
```
------------------------
# Python3
```
class Solution:
    def minOperations(self, s: str) -> int:
        n = len(s)
        count = 0
        if n == 1:
            return 0
        for i in range(n):
            if i % 2 == 0 and s[i] == '1':
                count += 1
            if i % 2 == 1 and s[i] == '0':
                count += 1
        return min(count, n - count)  # "n - count" is to handle the case of alternating 1,0,1,0,...
```