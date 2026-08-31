# Prefix sum (with explanation)

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/make-sum-divisible-by-p/solutions/5863841/](https://leetcode.com/problems/make-sum-divisible-by-p/solutions/5863841/)

---

# Approach
The approach used in this solution is to use prefix sum and modulo arithmetic to find the smallest subarray that needs to be removed.

1. First, we calculate the total sum of the array and the target sum that we need to reach (i.e., the sum that is divisible by p).

2. We then initialize a prefix sum variable to keep track of the cumulative sum of the array elements modulo p.

3. We also initialize a seen dictionary to keep track of the indices at which we have seen certain prefix sums.

4. We iterate through the array, updating the prefix sum and checking if we have seen a prefix sum that is equal to the current prefix sum minus the target sum modulo p. 
- If we have, we update the minimum length of the subarray that we need to remove.

5. Finally, we return the minimum length of the subarray that we need to remove, or -1 if it's impossible.

# Complexity
- Time complexity:
$$O(n)$$, where n is the length of the input array.
-- The solution iterates through the input array once, which takes O(n) time.
-- The operations inside the loop (prefix sum calculation, modulo arithmetic, and dictionary lookups) take constant time.

- Space complexity:
$$O(n)$$, where n is the length of the input array.
-- The solution uses a dictionary to store the indices of the prefix sums, which can contain up to n elements in the worst case.

# Code
```python3 []
class Solution:
    def minSubarray(self, nums: List[int], p: int) -> int:
        total_sum = sum(nums)
        target = total_sum % p
        if target == 0:
            return 0
        
        prefix_sum = 0
        min_length = float('inf')
        # Store the index of the prefix sum
        seen = {0: -1}
        
        for i, num in enumerate(nums):
            prefix_sum = (prefix_sum + num) % p
            if (prefix_sum - target) % p in seen:
                # Found a subarray with sum equal to the target
                min_length = min(min_length, i - seen[(prefix_sum - target) % p])
            seen[prefix_sum] = i
        
        return min_length if min_length != len(nums) else -1
```
``` javascript []
/**
 * @param {number[]} nums
 * @param {number} p
 * @return {number}
 */
var minSubarray = function(nums, p) {
    let totalSum = nums.reduce((a, b) => a + b, 0);
    let target = totalSum % p;
    if (target === 0) return 0;

    let prefixSum = 0;
    let minLength = Infinity;
    let seen = { 0: -1 };

    for (let i = 0; i < nums.length; i++) {
        prefixSum = (prefixSum + nums[i]) % p;
        if ((prefixSum - target + p) % p in seen) {
            minLength = Math.min(minLength, i - seen[(prefixSum - target + p) % p]);
        }
        seen[prefixSum] = i;
    }

    return minLength === nums.length ? -1 : minLength;
};
```
``` php []
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $p
     * @return Integer
     */
    function minSubarray($nums, $p) {
        $totalSum = array_sum($nums);
        $target = $totalSum % $p;
        if ($target === 0) return 0;

        $prefixSum = 0;
        $minLength = PHP_INT_MAX;
        $seen = array(0 => -1);

        for ($i = 0; $i < count($nums); $i++) {
            $prefixSum = ($prefixSum + $nums[$i]) % $p;
            if (isset($seen[($prefixSum - $target + $p) % $p])) {
                $minLength = min($minLength, $i - $seen[($prefixSum - $target + $p) % $p]);
            }
            $seen[$prefixSum] = $i;
        }

        return $minLength === count($nums) ? -1 : $minLength;
    }
}
```