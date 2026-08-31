# Java | one pass

**Author:** conchwu
**Votes:** 57
**Link:** [https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/solutions/2948194/](https://leetcode.com/problems/shortest-distance-to-target-string-in-a-circular-array/solutions/2948194/)

---

```
    //1.one pass
    //Runtime: 1ms 100%; Memory: 43.1MB 100%
    //Time: O(N); Space: O(1)
    public int closetTarget(String[] words, String target, int startIndex) {
        int res = Integer.MAX_VALUE;
        int n = words.length;
        for (int i = 0; i < words.length; i++) {
            if (target.equals(words[i])) {
                int d = Math.abs(i - startIndex);
                res = Math.min(res, d);
                res = Math.min(res, n - d);
            }
        }
        return res == Integer.MAX_VALUE ? -1 : res;
    }
```