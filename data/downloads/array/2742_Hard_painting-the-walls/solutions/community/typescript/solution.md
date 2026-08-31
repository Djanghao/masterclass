# ✅ Beats 95.93% 🔥 within 7 Lines || Easiest Solution ||

**Author:** Gourav-2002
**Votes:** 29
**Link:** [https://leetcode.com/problems/painting-the-walls/solutions/4166244/](https://leetcode.com/problems/painting-the-walls/solutions/4166244/)

---

![image.png](./images/0.png)


# Intuition
**This is a DP problem where we have to find the minimum cost to paint the walls with the help of 2 painters. The paid painter has cost associated with each wall and a certain amount of time while the free painter can paint any wall in 1 unit of time for free of cost. But free painter can only be used when the paid painter is busy.**

**We will use the concept of DP to solve this problem. We will create a dp array of size n+1 where n is the number of walls. dp[i] will store the minimum cost to paint i walls. We will initialize dp[0] = 0 as the minimum cost to paint 0 walls is 0. Now, we will iterate over the cost array and for each cost[i] we will iterate over the dp array from n to 0 and update the dp[j] as dp[j] = min(dp[j], dp[max(j-time[i]-1, 0)] + cost[i]) where time[i] is the time taken by the paid painter to paint ith wall. We will return dp[n] as the answer.**

# Approach
1. Create a dp array of size n+1 where n is the number of walls. dp[i] will store the minimum cost to paint i walls.
2. Initialize dp[0] = 0 as the minimum cost to paint 0 walls is 0.
3. Iterate over the cost array and for each cost[i] iterate over the dp array from n to 0 and update the dp[j] as dp[j] = min(dp[j], dp[max(j-time[i]-1, 0)] + cost[i]) where time[i] is the time taken by the paid painter to paint ith wall.
4. Return dp[n] as the answer.

# Complexity
- Time complexity : $$O(n^2)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity : $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
``` Python []
class Solution:
    def paintWalls(self, cost: List[int], time: List[int]) -> int:
        n = len(cost)
        dp = [float('inf')] * (n + 1)
        dp[0] = 0

        for i in range(n):
            for j in range(n, 0, -1):
                dp[j] = min(dp[j], dp[max(j - time[i] - 1, 0)] + cost[i])
        return dp[n]
```
``` C++ []
#include <vector>
#include <algorithm>

class Solution {
public:
    int paintWalls(std::vector<int>& cost, std::vector<int>& time) {
        int n = cost.size();
        std::vector<int> dp(n + 1, 1e9);
        dp[0] = 0;

        for (int i = 0; i < n; ++i) {
            for (int j = n; j > 0; --j) {
                dp[j] = std::min(dp[j], dp[std::max(j - time[i] - 1, 0)] + cost[i]);
            }
        }
        return dp[n];
    }
};
```
``` Java []
class Solution {
    public int paintWalls(int[] cost, int[] time) {
        int n = cost.length;
        int dp[] = new int[n + 1];
        Arrays.fill(dp, (int) 1e9);
        dp[0] = 0;

        for (int i = 0; i < n; ++i) {
            for (int j = n; j > 0; --j) {
                dp[j] = Math.min(dp[j], dp[Math.max(j - time[i] - 1, 0)] + cost[i]);
            }
        }
        return dp[n];
    }
}
```
``` C# []
public class Solution {
    public int PaintWalls(int[] cost, int[] time) {
        int n = cost.Length;
        int[] dp = new int[n + 1];
        for (int i = 0; i <= n; i++) {
            dp[i] = 1_000_000_000;
        }
        dp[0] = 0;

        for (int i = 0; i < n; ++i) {
            for (int j = n; j > 0; --j) {
                dp[j] = Math.Min(dp[j], dp[Math.Max(j - time[i] - 1, 0)] + cost[i]);
            }
        }
        return dp[n];
    }
}

```
``` JavaScript []
/**
 * @param {number[]} cost
 * @param {number[]} time
 * @return {number}
 */
var paintWalls = function(cost, time) {
     const n = cost.length;
        const dp = Array(n + 1).fill(Number.MAX_SAFE_INTEGER);
        dp[0] = 0;

        for (let i = 0; i < n; i++) {
            for (let j = n; j >= 1; j--) {
                dp[j] = Math.min(dp[j], dp[Math.max(j - time[i] - 1, 0)] + cost[i]);
            }
        }
        return dp[n];
};
```
``` TypeScript []
function paintWalls(cost: number[], time: number[]): number {
const n: number = cost.length;
        const dp: number[] = Array(n + 1).fill(Number.POSITIVE_INFINITY);
        dp[0] = 0;

        for (let i = 0; i < n; i++) {
            for (let j = n; j >= 1; j--) {
                dp[j] = Math.min(dp[j], dp[Math.max(j - time[i] - 1, 0)] + cost[i]);
            }
        }
        return dp[n];
};
```
``` PHP []
class Solution {

    /**
     * @param Integer[] $cost
     * @param Integer[] $time
     * @return Integer
     */
    function paintWalls($cost, $time) {
        $n = count($cost);
        $dp = array_fill(0, $n + 1, INF);
        $dp[0] = 0;

        for ($i = 0; $i < $n; $i++) {
            for ($j = $n; $j >= 1; $j--) {
                $dp[$j] = min($dp[$j], $dp[max($j - $time[$i] - 1, 0)] + $cost[$i]);
            }
        }
        return $dp[$n];
    }
}
```
``` Ruby []
# @param {Integer[]} cost
# @param {Integer[]} time
# @return {Integer}
def paint_walls(cost, time)
    n = cost.length
    dp = Array.new(n + 1, Float::INFINITY)
    dp[0] = 0

    (0...n).each do |i|
      n.downto(1) do |j|
        dp[j] = [dp[j], dp[[j - time[i] - 1, 0].max] + cost[i]].min
      end
    end

    dp[n]
  end
```

![upvote.jpg](./images/1.jpeg)
