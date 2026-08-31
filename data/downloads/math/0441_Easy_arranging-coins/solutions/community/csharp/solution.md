# Simple solution. Beats 60% O(n)

**Author:** ldevalt
**Votes:** 2
**Link:** [https://leetcode.com/problems/arranging-coins/solutions/4070197/](https://leetcode.com/problems/arranging-coins/solutions/4070197/)

---


```
public class Solution {
    public int ArrangeCoins(int n) {
        int i = 0;
        while (n > i) {
            i++;
            n-=i;
        }
        return i;
    }
}
```