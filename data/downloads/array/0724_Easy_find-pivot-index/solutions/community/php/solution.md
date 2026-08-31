# [PHP/Python/Go/TypeScript] Simple Solution in O(1) space complexity O(n) time complexity

**Author:** KazeNoYumeX
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-pivot-index/solutions/2701660/](https://leetcode.com/problems/find-pivot-index/solutions/2701660/)

---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```php []
class Solution
{
    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function pivotIndex(array $nums): int
    {
        $left = 0;
        $right = array_sum($nums);

        for ($i = 0; $i < count($nums); $i++) {
            $current = $nums[$i];
            if ($left === $right -= $current) {
                return $i;
            }
            $left += $current;
        }

        return -1;
    }
}
```
```Go []
func pivotIndex(nums []int) int {
	left := 0
	right := 0

	for _, num := range nums {
		right += num
	}

	for i, num := range nums {
		if left == right-num {
			return i
		}
		left += num
		right -= num
	}

	return -1
}
```
```python []
class Solution:
    def pivotIndex(self, nums: List[int]) -> int:
        left = 0
        right = sum(nums)

        for i, num in enumerate(nums):
            if left == right - num:
                return i
            left += num
            right -= num

        return -1
```
```typescript []
const pivotIndex = (nums: number[]): number => {
    let left = 0
    let right = nums.reduce((a, b) => a + b, 0)

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i]

        if (left === (right -= current)) {
            return i
        }

        left += current
    }
    return -1
}
```
```javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
const pivotIndex = (nums) => {
    let left = 0
    let right = nums.reduce((a, b) => a + b, 0)

    for (let i = 0; i < nums.length; i++) {
        const current = nums[i]

        if (left === (right -= current)) {
            return i
        }

        left += current
    }

    return -1
}
```
