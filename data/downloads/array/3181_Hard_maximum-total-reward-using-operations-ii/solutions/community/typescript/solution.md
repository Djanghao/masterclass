# Last LC Question | Beats 100% | O(n^2logn) O(n) | TypeScript & JavaScript & Python

**Author:** deleted_user
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-total-reward-using-operations-ii/solutions/5288513/](https://leetcode.com/problems/maximum-total-reward-using-operations-ii/solutions/5288513/)

---

# Intuition
The problem requires maximizing the total reward by selectively adding values from the given array of rewards, with the constraint that each selected reward must be greater than the current total reward. This suggests a dynamic programming approach where we use memoization to store intermediate results and avoid redundant calculations.
# Approach
1. **Deduplication and Sorting:**
    - Convert the **rewardValues** array into a set to remove duplicates.
    - Convert the set back to an array and sort it in ascending order to facilitate binary search and dynamic programming.
    
2. **Dynamic Programming with Memoization:**
    - Use a helper function **helper(num)** that recursively calculates the maximum reward that can be obtained with a given **num** as the current total reward.
    - Utilize a cache to store previously computed results for **helper(num)** to avoid redundant calculations.
    
3. **Binary Search:**
    - Implement a binary search function **bisectLeft** to quickly find the insertion point for a target value in the sorted rewards array.
    - This helps in efficiently identifying which rewards can be added to the current total reward.
    
4. **Recursive Calculation:**
    - For each possible reward, use binary search to find the position of the largest reward less than the current total reward.
    - Recursively compute the maximum reward by considering each valid reward and adding it to the result of the helper function called with the reduced total reward.
    
5. **Result Computation:**
    - The final result is obtained by adding the maximum reward from the sorted list to the result of the helper function called with one less than the largest reward.
# Complexity
- **Time complexity:**
    - **Sorting:** Sorting the deduplicated rewards array takes $$O(nlogn)$$, where $$n$$ is the number of unique rewards.
    - **Binary Search:** Each binary search operation in bisectLeft takes $$O(logn)$$.
    - **Dynamic Programming:** The recursive function helper is called for each unique reward value, and each call involves a loop that can take up to $$O(n)$$ time in the worst case.

The overall time complexity is $$O(nlogn+n^2logn)$$, which simplifies to $$O(n^2logn)$$.

- **Space complexity:**
    - **Cache:** The cache used for memoization stores results for each unique reward value, taking $$O(n)$$ space.
    - **Set and Sorted Array:** The set and sorted array both use $$O(n)$$ space.
    - **Call Stack:** The recursion depth is at most $$O(n)$$, leading to $$O(n)$$ space for the call stack.
    
Thus, the overall space complexity is $$O(n)$$.
# Code
```TypeScript []
function maxTotalReward(rewardValues: number[]): number {
    const set = new Set<number>(rewardValues)
    const nums = [...set].sort((a, b) => a - b);
    const cache = {}

    const helper = (num: number): number => {
        if (num in cache) return cache[num];
        if (set.has(num) || num === 0) return num;

        let idx = bisectLeft(nums, num);
        let res = 0;

        for (let i = 0; i < idx; i++) {
            res = Math.max(res, nums[i] + helper(Math.min(nums[i] - 1, num - nums[i])))
        }

        cache[num] = res;
        return res;
    }

    return nums[nums.length - 1] + helper(nums[nums.length - 1] - 1);
};

function bisectLeft(arr: number[], target: number): number {
    let lo = 0, hi = arr.length;

    while (lo < hi) {
        let mid = (lo + hi) >> 1;
        if (arr[mid] < target) lo = mid + 1;
        else hi = mid;
    }

    return lo;
}
```
```JavaScript []
function maxTotalReward(rewardValues) {
    const set = new Set(rewardValues)
    const nums = [...set].sort((a, b) => a - b);
    const cache = {}

    const helper = (num) => {
        if (num in cache) return cache[num];
        if (set.has(num) || num === 0) return num;

        let idx = bisectLeft(nums, num);
        let res = 0;

        for (let i = 0; i < idx; i++) {
            res = Math.max(res, nums[i] + helper(Math.min(nums[i] - 1, num - nums[i])))
        }

        cache[num] = res;
        return res;
    }

    return nums[nums.length - 1] + helper(nums[nums.length - 1] - 1);
};

function bisectLeft(arr, target) {
    let lo = 0, hi = arr.length;

    while (lo < hi) {
        let mid = (lo + hi) >> 1;
        if (arr[mid] < target) lo = mid + 1;
        else hi = mid;
    }

    return lo;
}
```
```Python []
from typing import List
from bisect import bisect_left

def maxTotalReward(rewardValues: List[int]) -> int:
    reward_set = set(rewardValues)
    nums = sorted(reward_set)
    cache = {}

    def helper(num: int) -> int:
        if num in cache:
            return cache[num]
        if num in reward_set or num == 0:
            return num

        idx = bisect_left(nums, num)
        res = 0

        for i in range(idx):
            res = max(res, nums[i] + helper(min(nums[i] - 1, num - nums[i])))

        cache[num] = res
        return res

    return nums[-1] + helper(nums[-1] - 1)
```
