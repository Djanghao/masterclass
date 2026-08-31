# ✅Binary Search (on Answers)✅ || C++ || Java || Python

**Author:** AnishKrSingh
**Votes:** 38
**Link:** [https://leetcode.com/problems/maximum-number-of-alloys/solutions/4053889/](https://leetcode.com/problems/maximum-number-of-alloys/solutions/4053889/)

---

# Intuition 
**```Since we need to maximize here we can Make a Binary Search on all possible answers```**
# Approach
**```Each time we go to check a possible answer we loop on all the cost incured with all the machines and minimize the cost with a given machine and check if it fits in our budget. If it fits in the budget this means "possible answer" number of alloys can be made```**

# Complexity
**- Time complexity:**
**``` Overall, the time complexity of the algorithm is O(log(1e9) * n * k), where n is the number of compositions, and k is the average number of elements in each composition. ```**

**- Space complexity:**
**```The space complexity is O(1) as no extra space is used.```**

# Code (C++)
```
using ll = long long;
class Solution {
public:
    bool func(ll mid, int budget, vector<vector<int>>& composition, vector<int>& stock, vector<int>& cost)
    {
        ll minCost = INT_MAX;
        for (int i = 0; i < composition.size(); ++i)
        {
            ll currCost = 0;
            for (int j = 0; j < composition[i].size(); ++j)
            {
                ll curr = mid * composition[i][j];
                if (stock[j] >= curr)
                    continue;
                else
                {
                    ll extra = (curr - stock[j]) * cost[j];
                    currCost += extra;
                }
            }
            minCost = min(currCost, minCost);
        }
        return (minCost <= budget);
    }
    int maxNumberOfAlloys(int n, int k, int budget, vector<vector<int>>& composition, vector<int>& stock, vector<int>& cost) {
        ll low = 0, high = 1e9, ans = 0;
        while (low <= high)
        {
            ll mid = low + (high - low) / 2;
            if (func(mid, budget, composition, stock, cost))
            {
                ans = mid;
                low = mid + 1;
            }
            else
                high = mid - 1;
        }
        return ans;
    }
};
```
# Code (Java)
```
import java.util.List;
import java.util.ArrayList;

class Solution {
    public boolean func(long mid, int budget, List<List<Integer>> composition, List<Integer> stock, List<Integer> cost) {
        long minCost = Integer.MAX_VALUE;
        for (int i = 0; i < composition.size(); ++i) {
            long currCost = 0;
            for (int j = 0; j < composition.get(i).size(); ++j) {
                long curr = mid * composition.get(i).get(j);
                if (stock.get(j) >= curr)
                    continue;
                else {
                    long extra = (curr - stock.get(j)) * cost.get(j);
                    currCost += extra;
                }
            }
            minCost = Math.min(currCost, minCost);
        }
        return (minCost <= budget);
    }

    public int maxNumberOfAlloys(int n, int k, int budget, List<List<Integer>> composition, List<Integer> stock, List<Integer> cost) {
        long low = 0, high = (long) 1e9;
        long ans = 0;
        while (low <= high) {
            long mid = low + (high - low) / 2;
            if (func(mid, budget, composition, stock, cost)) {
                ans = mid;
                low = mid + 1;
            } else
                high = mid - 1;
        }
        return (int) ans;
    }
}

```
# Code (Python)
```
class Solution:
    def func(self, mid, budget, composition, stock, cost):
        minCost = float('inf')
        for i in range(len(composition)):
            currCost = 0
            for j in range(len(composition[i])):
                curr = mid * composition[i][j]
                if stock[j] >= curr:
                    continue
                else:
                    extra = (curr - stock[j]) * cost[j]
                    currCost += extra
            minCost = min(currCost, minCost)
        return minCost <= budget

    def maxNumberOfAlloys(self, n, k, budget, composition, stock, cost):
        low = 0
        high = int(1e9)
        ans = 0
        while low <= high:
            mid = low + (high - low) // 2
            if self.func(mid, budget, composition, stock, cost):
                ans = mid
                low = mid + 1
            else:
                high = mid - 1
        return ans
```
``` Please Upvote if it was helpful ```