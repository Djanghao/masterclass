# ✅ [Rust/Python/C++/Java] Prefix Sum O(n) Solution

**Author:** silver_wolf
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/solutions/4428352/](https://leetcode.com/problems/maximum-size-subarray-sum-equals-k/solutions/4428352/)

---

# Intuition
One thing to be really careful about for this question is the fact that the subarray is contiguous. Because we are only considering contiguous subarrays, we can take advantage of common techniques like sliding windows, prefix arrays, and DP.

<hr>

## \u274C Solution #1: Brute Force
Now, let's start with the naive approach: brute force. To find the maximum size subarray that sums to k, all we have to do is just brute force all possible subarrays.

```java
for (int i = 0; i < nums.length - 1; i++) {
    for (int j = i + 1; j < nums.length; j++) {
        int subarraySum = 0;
        for (int k = i; k <= j; k++) {
            subarraySum += nums[k];
        }
    }
}
```

This is fine, but it takes a really long time. For one, we are computing the sum for every subarray, and there's a lot of duplicate calculations going on. Maybe we can speed this up :D

### Complexity
- Time complexity: $\\mathcal{O}(n^3)$ to loop over all subarrays and then to calculate the sum of every subarray
- Space complexity: $\\mathcal{O}(1)$

<hr>

## \u274C Solution #2: Prefix Array

Instead of calculating the subarray sum every time, we can precalculate a prefix sum array and use that to easily calculate the subarray sums.

```java []
int[] prefixSum = new int[n];

prefixSum[0] = nums[0];

for (int i = 1; i < n; i++) {
    prefixSum[i] = prefixSum[i - 1] + nums[i];
}
```
```cpp []
vector<int> prefixSum(n);

prefixSum[0] = nums[0];

for (int i = 1; i < n; i++) {
    prefixSum[i] = prefixSum[i - 1] + nums[i];
}
```
```python []
prefix_sum = [0] * n
prefix_sum[0] = nums[0]

for i in range(1, n):
    prefix_sum[i] = prefix_sum[i - 1] + nums[i]
```
```rust []
let mut prefix_sum = Vec::with_capacity(nums.len());

if n > 0 {
    prefix_sum.push(nums[0]);

    for i in 1..n {
        prefix_sum.push(prefix_sum[i - 1] + nums[i]);
    }
}
```

As an example,

> Input: nums = [-2,-1,2,1], k = 1
> Output: 2
> Explanation: The subarray [-1, 2] sums to 1 and is the longest.

We will first calculate a prefix sum array as so
> Prefix Sum: [-2, -3, -1, 0]

Now, we calculate all possible subarrays similar to how we did for Solution #1, but now, we can calculate the sum of a subarray as `prefix_sum[j] - prefix_sum[i]`

For example, the subarray [-1, 2] would be the prefix sum of the first three numbers - the prefix sum of the first number, so $-1 - (-2) = 1$. If you're still confused, think of it as

```
    -2 - 1 + 2
-   -2
=      - 1 + 2 
```

Pseudocode

```java
for i = 0..nums.length - 1
    for j = i + 1..nums.length
        subarraySum = prefixSum[j] - prefixSum[i];
```

### Complexity
- Time complexity: $\\mathcal{O}(n^2)$ to loop over all subarrays
- Space complexity: $\\mathcal{O}(n)$ since we need to store prefix sums in same size

<hr>

## \u2714\uFE0F Solution #3: Prefix Sum With Hash Map

We can improve Solution #2 further by storing the the prefix sums we calculated so far. At any index of the prefix sum calculation, we know we have a valid subarray if there exists an earlier prefix sum that equals `prefix_sum[i] - k`. Now, we just need to know where we calculated that prefix sum. To do this, we use a Hash Map to maps prefix sum to index where it was calculated.

One thing to consider is what happens if the entire array sums to k. When this happens, we get `prefix_sum[i] - k = 0`, and the first the first time the prefix_sum is 0 is actually when we haven't calculated anything yet. We add a mapping from sum of 0 to -1 for this.

```python []
class Solution:
    def maxSubArrayLen(self, nums: List[int], k: int) -> int:
        prefix_sum = ans = 0
        sum_index_map = {0: -1}  # Sum of 0 is beginning of array, case where prefix = k

        for i, num in enumerate(nums):
            prefix_sum += num

            if prefix_sum - k in sum_index_map:
                ans = max(ans, i - sum_index_map[prefix_sum - k])
            
            # Keep earliest key to get longest subarray
            if prefix_sum not in sum_index_map:
                sum_index_map[prefix_sum] = i

        return ans
```
```Java []
class Solution {

    public int maxSubArrayLen(int[] nums, int k) {
        int prefixSum = 0, ans = 0;
        HashMap<Integer, Integer> sumToIndices = new HashMap<>();
        sumToIndices.put(0, -1);  // Handle case where full subarray sums to k

        for (int i = 0; i < nums.length; i++) {
            prefixSum += nums[i];
            
            // Calculate length if there exists a subarray that sums to k
            if (sumToIndices.containsKey(prefixSum - k)) {
                ans = Math.max(ans, i - sumToIndices.get(prefixSum - k));
            }

            sumToIndices.putIfAbsent(prefixSum, i);
        }

        return ans;
    }
}
```
```cpp []
class Solution {
public:
    int maxSubArrayLen(vector<int>& nums, int k) {
        long long prefixSum = 0;
        int ans = 0;
        unordered_map<int, int> sumToIndices;
        sumToIndices[0] = -1;  // Handle case where full subarray sums to k

        for (int i = 0; i < nums.size(); i++) {
            prefixSum += nums[i];

            // Calculate length if there exists a subarray that sums to k
            if (sumToIndices.find(prefixSum - k) != sumToIndices.end()) {
                ans = max(ans, i - sumToIndices[prefixSum - k]);
            }

            sumToIndices.emplace(prefixSum, i);
        }

        return ans;
    }
};
```
```rust []
use std::collections::HashMap;

impl Solution {
    pub fn max_sub_array_len(nums: Vec<i32>, k: i32) -> i32 {
        let mut ans = 0;
        let mut prefix_sum = 0;
        let mut sum_to_indices: HashMap<i32, i32> = Default::default();
        sum_to_indices.insert(0, -1);

        for (i, &val) in nums.iter().enumerate() {
            prefix_sum += val;

            // Calculate length if there exists a subarray that sums to k
            // Rust option handling
            if let Some(&previous_index) = sum_to_indices.get(&(prefix_sum - k)) {
                ans = ans.max(i as i32 - previous_index);
            }

            // Keep earliest prefix sum to get longest subarray
            sum_to_indices.entry(prefix_sum).or_insert(i as i32);
        }

        ans
    }
}
```

### Complexity
- Time complexity: $\\mathcal{O}(n)$ to loop over nums once
- Space complexity: $\\mathcal{O}(n)$ since we need to store prefix sums in same size
