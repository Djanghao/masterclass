# [Java/Python 3] Prefix Sum O(n) code.

**Author:** rock
**Votes:** 30
**Link:** [https://leetcode.com/problems/maximum-good-subarray-sum/solutions/4671729/](https://leetcode.com/problems/maximum-good-subarray-sum/solutions/4671729/)

---

**Kadane Algorithm**

1. Traverse `nums`, use a Map/dict to store the current **minimum** prefix sum (excluding current value `num` so that it will possibly be included in a good subarray after following prefix sum deduction) for current value `num`;
2. Update the current good subarray max sum for current value `num`; That is, check the corresponding `num + k` and `num - k`, use current prefix sum deduct the **minimum** prefix sum for `num + k` and `num - k` to get **maximum** good subarray sum respectively, and update the afore-mentioned max sum accordingly;
3. Repeat `1` and `2` till the end of the traversal.
```java
    public long maximumSubarraySum(int[] nums, int k) {
        Map<Integer, Long> valToMinPrefixSum = new HashMap<>();
        long maxSum = Long.MIN_VALUE, prefixSum = 0;
        for (int i = 0; i < nums.length; ++i) {
            if (valToMinPrefixSum.getOrDefault(nums[i], Long.MAX_VALUE) > prefixSum) {
                valToMinPrefixSum.put(nums[i], prefixSum);
            }
            prefixSum += nums[i];
            if (valToMinPrefixSum.containsKey(nums[i] + k)) {
                maxSum = Math.max(maxSum, prefixSum - valToMinPrefixSum.get(nums[i] + k));
            }
            if (valToMinPrefixSum.containsKey(nums[i] - k)) {
                maxSum = Math.max(maxSum, prefixSum - valToMinPrefixSum.get(nums[i] - k));
            }
        } 
        return maxSum == Long.MIN_VALUE ? 0 : maxSum;        
    }
```

----

```python
    def maximumSubarraySum(self, nums: List[int], k: int) -> int:
        max_sum, prefix_sum, val_to_min_prefix_sum = -inf, 0, defaultdict(lambda: inf)
        for i, num in enumerate(nums):
            if val_to_min_prefix_sum[num] > prefix_sum:
                val_to_min_prefix_sum[num] = prefix_sum
            prefix_sum += num
            max_sum = max(max_sum, prefix_sum - val_to_min_prefix_sum[num + k], prefix_sum - val_to_min_prefix_sum[num - k])
        return max_sum if max_sum > -inf else 0 
```


**Analysis:**

Time\uFF1A`O(n)`, space: `O(# of distinct numbers in nums)`.

-----

**Q & A**

*Q*: Java code return `runtime error` for Long.MIN_VALUE during contest. Why?

*A*: The following explanation is provided by **@rhythm_varshney**:

Error when serializing long: 9223372036854775807 out of range [-(2^53-1), 2^53-1]

Got above runtime error. In network requests made while running, I can see leetcode uses Graphql for endpoint management.
*[link not copied due to the rules of leetcode, please check his [original comment](https://leetcode.com/problems/maximum-good-subarray-sum/discuss/4671729/JavaPython-3-Prefix-Sum-O(n)-code./2241064)]*

I think some handling is missed in backend. Error can we reproduced by returning long max value.