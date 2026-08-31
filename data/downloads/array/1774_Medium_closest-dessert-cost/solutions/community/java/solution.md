# Java Recursion With Actual Backtracking 0ms

**Author:** DanikaZ
**Votes:** 12
**Link:** [https://leetcode.com/problems/closest-dessert-cost/solutions/1087044/](https://leetcode.com/problems/closest-dessert-cost/solutions/1087044/)

---

Java recursion with actual backtracking.
Since we need exactly one base, iterate through the bases.
With each base ice cream cost, try out all the toppings. For each topping, there are three options: 0/1/2 of each topping. Recurse into each of these options for the next topping. 

Backtracking: stop recursion if cost already exceeds target since each topping has positive costs, we cannot get closer after exceeding.


```java
class Solution {
    /** Closest cost result */
    int closestCost = Integer.MAX_VALUE;
    /** Difference between closest cost result and target so far */
    int closestCostDiff = Integer.MAX_VALUE;

    public int closestCost(int[] baseCosts, int[] toppingCosts, int target) {
        for (int base : baseCosts) {
            dfs(toppingCosts, 0, base, target);
        }
        return closestCost;
    }

    public void dfs(int[] toppingCosts, int toppingIndex, int cost, int target) {
        int costDiff = Math.abs(target - cost);
        if (costDiff < closestCostDiff || (costDiff == closestCostDiff && cost < closestCost)) {
            closestCostDiff = costDiff;
            closestCost = cost;
        }
        
        // Since toppings are all positive cost, stop dfs early if cost exceeds target
        if (toppingIndex >= toppingCosts.length || cost > target)
            return;

        dfs(toppingCosts, toppingIndex + 1, cost, target);
        dfs(toppingCosts, toppingIndex + 1, cost + toppingCosts[toppingIndex], target);
        dfs(toppingCosts, toppingIndex + 1, cost + 2 * toppingCosts[toppingIndex], target);
    }
}
```