# 5 line code 100% space 100% fast O(n) java

**Author:** BitManipulator
**Votes:** 8
**Link:** [https://leetcode.com/problems/minimum-suffix-flips/solutions/756083/](https://leetcode.com/problems/minimum-suffix-flips/solutions/756083/)

---

```
class Solution {
    public int minFlips(String target) {
        int max = 0;
        char bit = '0';
        for(int i = 0; i < target.length(); i++) {
            if(target.charAt(i) != bit) {
                max++;
                bit = target.charAt(i);
            }
        }
        return max;
    }
}
```