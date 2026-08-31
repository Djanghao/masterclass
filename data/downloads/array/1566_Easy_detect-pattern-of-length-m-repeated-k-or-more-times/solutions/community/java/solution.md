# [JAVA] Faster than 100%, O(n)

**Author:** yurokusa
**Votes:** 10
**Link:** [https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/solutions/1047148/](https://leetcode.com/problems/detect-pattern-of-length-m-repeated-k-or-more-times/solutions/1047148/)

---

```
class Solution {
    public boolean containsPattern(int[] arr, int m, int k) {
        var count = 0;
        for (int i = 0, j = i + m; j < arr.length; i++, j++) {
            if (arr[i] != arr[j]) count = 0;
            else if (++count == (k - 1) * m) return true;
        }
        return false;
    }
}
```