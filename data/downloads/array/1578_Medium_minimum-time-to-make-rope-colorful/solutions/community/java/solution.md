# My Java Solution O(n)

**Author:** vRohith
**Votes:** 120
**Link:** [https://leetcode.com/problems/minimum-time-to-make-rope-colorful/solutions/841690/](https://leetcode.com/problems/minimum-time-to-make-rope-colorful/solutions/841690/)

---

1. Here we first initialise a result variable to finally return the answer and it is 0 at first.
2. Then we traverse through the string from the 1st index.
3. Whenever we found the consecutive characters equal , then 

- > Update the result by adding the current result value and the min(cost[i], cost[i-1])
- > Update the cost[i] by compareing bw the maximum value of cost[i] and cost[i-1]

Finally return the result.

```
class Solution {
    public int minCost(String s, int[] cost) {
        int n = s.length();
        int result = 0;
        for (int i=1; i<n; i++) {
            if (s.charAt(i) == s.charAt(i-1)) {
                result = result + Math.min(cost[i], cost[i-1]);
                cost[i] = Math.max(cost[i], cost[i-1]);
            }
        }
        return result;
    }
}
```