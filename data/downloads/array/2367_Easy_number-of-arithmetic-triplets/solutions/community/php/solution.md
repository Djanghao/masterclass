# Optimal HashSet Approach | Arithmetic Triplets in Strictly Increasing Array | O(n) Time

**Author:** Abdullo_
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-arithmetic-triplets/solutions/5709877/](https://leetcode.com/problems/number-of-arithmetic-triplets/solutions/5709877/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Python3
```python3 []
class Solution:
    def arithmeticTriplets(self, nums: List[int], diff: int) -> int:
        # O(n)
        count = 0
        nums_set = set(nums)
        for num in nums:
            if num + diff in nums_set and num + 2 * diff in nums_set:
                count += 1
        return count
```
# Python
```python []
class Solution(object):
    def arithmeticTriplets(self, nums, diff):
        """
        :type nums: List[int]
        :type diff: int
        :rtype: int
        """
        # O(n^3)
        count = 0
        for i in range(len(nums)):
            for j in range(i + 1, len(nums)):
                if nums[j] - nums[i] == diff:
                    for k in range(j + 1, len(nums)):
                        if nums[k] - nums[j] == diff:
                            count += 1
        return count
```

# php
```php []
function arithmeticTriplets($nums, $diff)
{
    # O(n^3)
    $count = 0;
    for ($i = 0; $i < count($nums); $i++) {
        for ($j = $i + 1; $j < count($nums); $j++) {
            if ($nums[$j] - $nums[$i] == $diff) {
                for ($k = $i + 1; $k < count($nums); $k++) {
                    if ($nums[$k] - $nums[$j] == $diff) {
                        $count += 1;
                    }
                }
            }
        }
    }
    return $count;
}
```
