# Typescript Approach [O(n) Time/Space]

**Author:** kyratzakos
**Votes:** 1
**Link:** [https://leetcode.com/problems/make-sum-divisible-by-p/solutions/5864953/](https://leetcode.com/problems/make-sum-divisible-by-p/solutions/5864953/)

---

# Intuition
To solve this problem, the goal is to remove the smallest subarray such that the sum of the remaining elements is divisible by `p`. This means we need to focus on the sum of the array and how it relates to `p`.

# Approach
1. Key Insight:

- The sum of the remaining elements should be divisible by `p`. Therefore, the sum of the entire array `sum(nums)` modulo `p` should equal the sum of the removed subarray modulo `p`.
- Specifically, let `total_sum` be the sum of all elements in `nums`. We need to find a subarray whose sum, when removed, makes the remaining sum divisible by `p`.
- If `total_sum % p == 0`, there's no need to remove any subarray because the entire sum is already divisible by `p`. In this case, return 0.
- Otherwise, we need to find a subarray whose sum modulo `p` equals `total_sum % p`.

2. Using Prefix Sum:

- We'll use a prefix sum approach to efficiently compute the sum of subarrays.
- We can calculate the prefix sum modulo `p` for every index. The key idea is to look for two indices `i` and `j` (with `i < j`) such that the difference between their prefix sums modulo `p` is equal to `total_sum % p`. This indicates that the subarray between indices `i+1` and `j` has a sum that will make the total sum divisible by `p`.
3. Optimize with a HashMap: To optimize the search for such subarrays, we can maintain a hash map that stores the latest index for each prefix sum modulo `p` encountered so far. This helps us efficiently find the smallest subarray that meets the condition.
4. Algorithm:

- First, compute the total sum modulo `p`.
- Use a running prefix sum modulo `p` to find the smallest subarray whose sum is `total_sum % p`.
- Use a hash map to store the indices of the prefix sums modulo `p` as we iterate through the array.

# Complexity
- Time complexity:
We iterate through the array once to compute the prefix sums and check conditions, making this approach $O(n)$, where n is the length of the array.

- Space complexity:
We use a hash map to store the prefix sums, which takes $O(n)$ space.

# Code
```typescript []
function minSubarray(nums: number[], p: number): number {
    const totalSum = nums.reduce((sum, num) => sum + num, 0)
    const target = totalSum % p
    
    if (target === 0) return 0

    const prefixSumMap = new Map<number, number>()
    prefixSumMap.set(0, -1)

    let prefixSum = 0
    let minLength = nums.length

    for (let i = 0; i < nums.length; i++) {
        prefixSum = (prefixSum + nums[i]) % p

        const neededPrefix = (prefixSum - target + p) % p

        if (prefixSumMap.has(neededPrefix)) {
            minLength = Math.min(minLength, i - prefixSumMap.get(neededPrefix)!)
        }

        prefixSumMap.set(prefixSum, i)
    }

    return minLength === nums.length ? -1 : minLength
};
```