# 1-line Linq

**Author:** 3S_AKB
**Votes:** 0
**Link:** [https://leetcode.com/problems/escape-the-ghosts/solutions/5013536/](https://leetcode.com/problems/escape-the-ghosts/solutions/5013536/)

---



# Code
```
public class Solution {
    public bool EscapeGhosts(int[][] ghosts, int[] t) {
       return ghosts.All(g => Math.Abs(t[0] - g[0]) + Math.Abs(t[1] - g[1]) > Math.Abs(t[0]) + Math.Abs(t[1]));
    }
}
```