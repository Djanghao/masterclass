# 91MS, Beats 100%

**Author:** ViviKan
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-time-to-break-locks-i/solutions/6123492/](https://leetcode.com/problems/minimum-time-to-break-locks-i/solutions/6123492/)

---

# Intuition
The problem seems to involve minimizing a result based on some computations over a list. This hints at a backtracking or recursive approach, where all combinations of certain operations are explored to find the minimum.

# Approach
The function helper is a recursive backtracking function. Here\u2019s what it does:

	1.	Base Case: When len == 0 (all items in the list are processed), it updates the global minimum (ans).
	2.	Recursive Case:
	   \u2022	Iterate over the list.
	   \u2022	Skip used items using the used array.
	   \u2022	Calculate t based on the current strength and parameters x and k.
	   \u2022	Mark the item as used, recurse to the next level with updated values, and backtrack.

The main function findMinimumTime initializes the variables and starts the backtracking process.

# Complexity
- Time complexity: O(n!)

- Space complexity: O(n)


# Code
```java []
class Solution {
    private int ans;
    private void helper(List<Integer> list, int len, int x, int k, int result, boolean used[]){
        if(result >= ans) return;
        
        if(len == 0){
            ans = Math.min(ans, result);
            return;
        }

        int size = list.size();
        for(int i = 0; i < size; i++){
            if(used[i]) continue;
            int t = (int)(Math.ceil(list.get(i) * 1.0 / x));
            used[i] = true;
            helper(list, len - 1, x + k, k, result + t, used);
            used[i] = false;
        }
    }

    public int findMinimumTime(List<Integer> strength, int k) {
        int len = strength.size();
        ans = Integer.MAX_VALUE;
        helper(strength, len, 1, k, 0, new boolean[len]);
        return ans;
    }
}
```