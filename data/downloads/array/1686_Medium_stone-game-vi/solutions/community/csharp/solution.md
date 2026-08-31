# 1-line

**Author:** 3S_AKB
**Votes:** 0
**Link:** [https://leetcode.com/problems/stone-game-vi/solutions/4621062/](https://leetcode.com/problems/stone-game-vi/solutions/4621062/)

---



# Code
```
public class Solution {
    public int StoneGameVI(int[] a, int[] b) {
        return Math.Sign(Enumerable.Range(0, a.Length).OrderBy(x =>-a[x]-b[x]).Select((x,i)=>i%2==0?a[x]:-b[x]).Sum());        
    }
}
```