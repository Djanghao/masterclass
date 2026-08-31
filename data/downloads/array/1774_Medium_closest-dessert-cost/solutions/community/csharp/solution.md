# Recusive Appraoch | Easy But Little Tricky

**Author:** ayush6203
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-dessert-cost/solutions/3522252/](https://leetcode.com/problems/closest-dessert-cost/solutions/3522252/)

---

# Complexity
- Time complexity:
O(N * 3^M)

- Space complexity:
O(1)

# Code
```
public class Solution {
    public int ClosestCost(int[] baseCosts, int[] toppingCosts, int target) {
        int m = toppingCosts.Length;
        int closeCost = Int32.MaxValue;
        foreach(int cBase in baseCosts){
            int currClosestCost = FindClosestCost(cBase, m-1, target, toppingCosts);
            if(Math.Abs(target - currClosestCost) < Math.Abs(target - closeCost)){
                    closeCost = currClosestCost;
            }
            else if(Math.Abs(target - currClosestCost) == Math.Abs(target - closeCost) && currClosestCost < closeCost){
                    closeCost = currClosestCost;
            }
        }

        return closeCost;
    }

    private int FindClosestCost(int currTarget, int index, int target, int[] cost){
        if(index < 0 || currTarget >= target)
            return currTarget;

        int[] res = new int[3];
        res[0] = FindClosestCost(currTarget, index-1, target, cost);
        res[1] = FindClosestCost(currTarget+cost[index], index-1, target, cost);
        res[2] = FindClosestCost(currTarget+(2*cost[index]), index-1, target, cost);
        
        Array.Sort(res);
        int res1 = res[0];
        if(Math.Abs(target-res[1]) < Math.Abs(target-res1))
            res1 = res[1];
        if(Math.Abs(target-res[2]) < Math.Abs(target-res1))
            res1 = res[2];
        
        return res1;
    }
}
```