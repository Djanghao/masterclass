# Ruby DP Beats 100%

**Author:** emmamm05
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-costs-using-the-train-line/solutions/3883387/](https://leetcode.com/problems/minimum-costs-using-the-train-line/solutions/3883387/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can use dynamic programming to follow the optimal costs. We keep track of the last two minimal costs, when the last step was in the express or in the regular route.

# Approach
<!-- Describe your approach to solving the problem. -->
`dpe` is the minimum cost for the last step if we stayed in the express route.
`dpr` is the minimum cost for the last step if we stayed in the regular route.

So the new `dpe` is the minimum between:
 1. the last step + the cost of the current step in the express route, if the last step was also in the express route.
 2. the last step + the cost of the current step in the regular route + the cost of switching to the express route.
And the new `dpr` is the minimun between:
 1. the last step + the cost of the current step in the regular route, if the last step was also in the regular route.
 2. the last step + the cost of the current step in the express route + no extra costs for switching to the regular route.

On every step we push the minimum value between `dpr` and `dpe`, into the resulting array. 

# Complexity
n = len of either regular or express params.
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n)

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(1), if we ignore the resulting array.

# Code
```
# @param {Integer[]} regular
# @param {Integer[]} express
# @param {Integer} express_cost
# @return {Integer[]}
def minimum_costs(regular, express, express_cost)
  dpr = 0
  dpe = express_cost
  (0...express.size).each_with_object([]) do |i, result|
    dpe, dpr = [
      [dpe + express[i], dpr + regular[i] + express_cost].min,
      [dpr + regular[i], dpe + express[i]].min
    ]
    result << [dpe, dpr].min
  end
end
```