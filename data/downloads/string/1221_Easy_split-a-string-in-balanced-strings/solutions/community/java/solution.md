# Simle java solution 100%

**Author:** yurokusa
**Votes:** 32
**Link:** [https://leetcode.com/problems/split-a-string-in-balanced-strings/solutions/521800/](https://leetcode.com/problems/split-a-string-in-balanced-strings/solutions/521800/)

---

```
class Solution {
    public int balancedStringSplit(String s) {
        int result = 0;
        int sum = 0;
        
        for (char letter : s.toCharArray()) {
            sum += (letter == 'R' ? 1 : -1);
            if (sum == 0) {
                result++;
            }
        }
        
        return result;
    }
}
```