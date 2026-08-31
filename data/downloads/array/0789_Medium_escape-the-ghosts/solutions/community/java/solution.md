# Java 3 liner Self Expalantory Easy

**Author:** bharat194
**Votes:** 5
**Link:** [https://leetcode.com/problems/escape-the-ghosts/solutions/2094455/](https://leetcode.com/problems/escape-the-ghosts/solutions/2094455/)

---

```
class Solution {
    public boolean escapeGhosts(int[][] ghosts, int[] target) {
        int len = Math.abs(target[0])+Math.abs(target[1]);
        for(int[] arr:ghosts) if(len >= Math.abs(target[0]-arr[0]) + Math.abs(target[1]-arr[1])) return false;
        return true;
    }
}
```