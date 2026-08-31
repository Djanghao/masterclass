# O(n) time, O(1) space - Kadane's algorithm

**Author:** dtheriault
**Votes:** 3
**Link:** [https://leetcode.com/problems/maximum-subarray/solutions/3250434/](https://leetcode.com/problems/maximum-subarray/solutions/3250434/)

---

## Algorithm: Kadane's algorithm

Reference: https://en.wikipedia.org/wiki/Maximum_subarray_problem

## Complexity

- Time complexity: $$O(n)$$
- Space complexity: $$O(1)$$

## Code

```typescript []
/**
 * Kadane algorithm to solve maximum subarray problem
 *
 * Reference: https://en.wikipedia.org/wiki/Maximum_subarray_problem
 */
function maxSubArray(nums: number[]): number {
    let [currentSum, largestSum] = [0, nums[0]]
    nums.forEach(n => {
        currentSum = Math.max(n, currentSum + n)
        largestSum = Math.max(currentSum, largestSum)
    })
    return largestSum
}
```
```javascript []
/**
 * Kadane algorithm to solve maximum subarray problem
 * Reference: https://en.wikipedia.org/wiki/Maximum_subarray_problem
 *
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let largestSum = nums[0]
    let currentSum = nums[0]
    for (let i = 1, l = nums.length; i < l; ++i) {
        currentSum += nums[i]
        if (nums[i] > currentSum) {
            currentSum = nums[i]
        }
        if (currentSum > largestSum) {
            largestSum = currentSum
        }
    }
    return largestSum
};
```
```python3 []
# Kadane algorithm to solve maximum subarray problem
# Reference: https://en.wikipedia.org/wiki/Maximum_subarray_problem
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        currentSum, largestSum = 0, nums[0]
        for i in nums:
            currentSum = max(i, currentSum + i)
            largestSum = max(currentSum, largestSum)
        return largestSum
```
```golang []
// Kadane algorithm to solve maximum subarray problem
// reference: https://en.wikipedia.org/wiki/Maximum_subarray_problem
func maxSubArray(nums []int) int {
    largestSum := nums[0]
    currentSum := nums[0]
    for i := 1; i < len(nums); i++ {
        if currentSum = max(nums[i], currentSum + nums[i]); currentSum > largestSum {
            largestSum = currentSum
        }
    }
    return largestSum
}

func max(i, j int) int {
    if i < j {
        return j
    }
    return i
}
```
```php []
class Solution {

    /**
     * Kadane algorithm to solve maximum subarray problem
     * 
     * @link https://en.wikipedia.org/wiki/Maximum_subarray_problem
     * @param Integer[] $nums
     * @return Integer
     */
    function maxSubArray(array $nums): int {
        $largestSum = $nums[0];
        $currentSum = 0;
        foreach ($nums as $num) {
            $currentSum += $num;
            if ($num > $currentSum) {
                $currentSum = $num;
            }
            if ($currentSum > $largestSum) {
                $largestSum = $currentSum;
            }
        }
        return $largestSum;
    }
}
```
