# ✅ Beats 99.14% 🔥 within 4 Lines || Easiest Solution ||

**Author:** Gourav-2002
**Votes:** 18
**Link:** [https://leetcode.com/problems/min-cost-climbing-stairs/solutions/4162880/](https://leetcode.com/problems/min-cost-climbing-stairs/solutions/4162880/)

---

![image.png](./images/0.png)

# Intuition
- Here we have to find the minimum cost to reach the top of the stairs.
- We can reach the top of the stairs from the last two steps.
- So, we have to find the minimum cost to reach the last two steps.
- We can reach the last two steps from the last three steps.
- So, we have to find the minimum cost to reach the last three steps.
- And so on.
- So, we can use dynamic programming to solve this problem.
- We can use bottom up approach to solve this problem.
- We can add 0 to the end of the array and then we can iterate from the second last element to the first element.
- We can add the minimum of the next two elements to the current element.
- Finally, we can return the minimum of the first two elements.

# Approach
1. Add 0 to the end of the array
2. Iterate from the second last element to the first element
3. Add the minimum of the next two elements to the current element
4. Return the minimum of the first two elements

# Complexity
- Time complexity : $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity : $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
``` Python []
class Solution:
    def minCostClimbingStairs(self, cost: List[int]) -> int:
        cost.append(0)
        for i in range(len(cost)-3,-1,-1):
            cost[i]+=min(cost[i+1],cost[i+2])
        return min(cost[0],cost[1])
```
``` C++ []
class Solution {
public:
    int minCostClimbingStairs(std::vector<int>& cost) {
        cost.push_back(0);
        for (int i = cost.size() - 3; i >= 0; --i) {
            cost[i] += std::min(cost[i + 1], cost[i + 2]);
        }
        return std::min(cost[0], cost[1]);
    }
};
```
``` Java []
class Solution {
    public int minCostClimbingStairs(int[] cost) {
         int n = cost.length;
        int[] dp = new int[n + 1];
        Arrays.fill(dp, Integer.MAX_VALUE);
        
        dp[0] = 0;
        dp[1] = 0;
        
        for (int i = 2; i <= n; i++) {
            dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
        }
        
        return dp[n];
    }
}
```
``` JavaScript []
/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    cost.push(0);
        for (let i = cost.length - 3; i >= 0; i--) {
            cost[i] += Math.min(cost[i + 1], cost[i + 2]);
        }
        return Math.min(cost[0], cost[1]);
    };
```
``` C# []
public class Solution {
    public int MinCostClimbingStairs(int[] cost) {
        int n = cost.Length;
        int[] dp = new int[n + 1];
        
        for (int i = 2; i <= n; i++) {
            dp[i] = Math.Min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
        }
        
        return dp[n];
    }
}
```
``` TypeScript []
function minCostClimbingStairs(cost: number[]): number {
cost.push(0);
        for (let i = cost.length - 3; i >= 0; i--) {
            cost[i] += Math.min(cost[i + 1], cost[i + 2]);
        }
        return Math.min(cost[0], cost[1]);
};
```
``` PHP []
class Solution {

    /**
     * @param Integer[] $cost
     * @return Integer
     */
    function minCostClimbingStairs($cost) {
        $cost[] = 0;
        for ($i = count($cost) - 3; $i >= 0; $i--) {
            $cost[$i] += min($cost[$i + 1], $cost[$i + 2]);
        }
        return min($cost[0], $cost[1]);
    }
    }
```
``` Kotlin []
class Solution {
    fun minCostClimbingStairs(cost: IntArray): Int {
        val n = cost.size
        val dp = IntArray(n + 1) { 0 }
        
        for (i in 2..n) {
            dp[i] = minOf(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2])
        }
        
        return dp[n]
    }
    }
```
``` Ruby []
# @param {Integer[]} cost
# @return {Integer}
def min_cost_climbing_stairs(cost)
    cost.push(0)
    (cost.length - 3).downto(0) do |i|
      cost[i] += [cost[i + 1], cost[i + 2]].min
    end
    [cost[0], cost[1]].min
  end
```

![upvote.jpg](./images/1.jpeg)
