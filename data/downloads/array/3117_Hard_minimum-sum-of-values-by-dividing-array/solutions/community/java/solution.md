# Java Simple DP Top Down Approach

**Author:** abascus
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-sum-of-values-by-dividing-array/solutions/5022764/](https://leetcode.com/problems/minimum-sum-of-values-by-dividing-array/solutions/5022764/)

---

The intuition is that either you will break at a particualr index or not. This gives an intuition that is a 0 - 1 knapsack problem and thus can be solved by DP.

We need to think of some conditions when we decide to consider a particular index.

The problem to solve is `dfs(i, j)` where `i` and `j` represent indices in `nums` and `andValues` respectively.

1.  We break at index `i`, the right subproblem is `dfs(i + 1, j + 1)`.
2.  If after breaking at index `i`, the right subproblem does not give a valid answer, then this means that the current index is not valid, we should continue with the next problem `dfs(i + 1, j)`.
3.  If after breaking at index `i`, the right problem does give a valid answer. The we have two choices to take minimum from. 
4.  The first choice is we break at the index `i` and the result is `nums[i] + dfs(i + 1, j + 1)`.
5.  The second choice is we do not consider the break at index `i` and the result is `dfs(i + 1, j)`.
6. If the second choice does not lead to a valid result, return the first choice.
7. If the second choice does lead to a valid result, take the minimum of both the choices and return them i.e. `min(nums[i] + dfs(i + 1, j + 1), dfs(i + 1, j))`. 

```
class Solution {
    
    public int minimumValueSum(int[] nums, int[] andValues) {
        return dfs(0, 0, ~0, andValues, nums, new HashMap<>());
    }
    
    int dfs(int i, int j, int currentValue, int[] andValues, int[] nums, Map<String, Integer> cache) {
        
        if(i == nums.length && j == andValues.length) {
            return 0;
        }
        
        if(i == nums.length || j == andValues.length) {
            return -1;
        }
        
        currentValue &= nums[i];
        
        if(currentValue < andValues[j]) {
            return -1;
        }
        
        String key = i + "-" + j + "-" + currentValue;
        
        if(cache.containsKey(key)) {
            return cache.get(key);
        }
        
        int continueTheArray = dfs(i + 1, j, currentValue, andValues, nums, cache);
        
        //can't break the subarray here, need to continue
        if(currentValue != andValues[j]) {
            cache.put(key, continueTheArray);
            return cache.get(key);
        }
        
        // break and evaluate
        int next = dfs(i + 1, j + 1, ~0, andValues, nums, cache);
            
        if(next == -1) {
            cache.put(key, continueTheArray);
            return cache.get(key);
        }

        if(continueTheArray == -1) {
            cache.put(key, nums[i] + next);
            return cache.get(key);
        }

        cache.put(key, Math.min(nums[i] + next, continueTheArray));
        return cache.get(key);
        
    }
}
```

Time Complexity :- O(N * M) 
Space Complexity:- O(N * M * K) where K is the number of possible bitwise operations.

Feel free to add your feedback.