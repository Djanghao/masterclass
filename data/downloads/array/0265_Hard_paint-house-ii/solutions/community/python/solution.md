# 1 line Python solution, UPDATE to O(nk)

**Author:** xcv58
**Votes:** 6
**Link:** [https://leetcode.com/problems/paint-house-ii/solutions/69490/](https://leetcode.com/problems/paint-house-ii/solutions/69490/)

---

Almost same as my original [Paint House solution][1]:

    return min(reduce(lambda x, y: [y[i] + min(x[i+1:]+x[0:i] or [0]) for i in range(len(x))], costs)) if costs else 0


  [1]: https://leetcode.com/discuss/51741/my-1-lines-python-solution


`O(nk)` solution:

    class Solution:
        # @param {integer[][]} costs
        # @return {integer}
        def minCostII(self, costs):
            return min(reduce(lambda x, y: self.combine(y, x), costs)) if costs else 0
    
        def combine(self, house, tmp):
            m, n, i = min(tmp), len(tmp), tmp.index(min(tmp))
            tmp = [m]*i + [min(tmp[0:i]+tmp[i+1:])] + [m]*(n-i-1)
            return [sum(i) for i in zip(house, tmp)]