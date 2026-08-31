# Beats 92.20% in Python3 (simple loop)

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-continuous-increasing-subsequence/solutions/5419739/](https://leetcode.com/problems/longest-continuous-increasing-subsequence/solutions/5419739/)

---

# Approach
1. It iterates through the list and compares each element with the previous one. 
- If the current element is greater than the previous one, it increments the current length of the increasing subsequence. 
- If the current element is not greater, it updates the max length found so far and resets the current length to 1. 
2. Finally, it returns the maximum of the max_length and the current_length as the result of the function.

# Complexity
- Time complexity:
$$O(n)$$, where n is the number of elements in the input list nums. This is because the algorithm iterates through the list once.

- Space complexity:
$$O(1)$$ because the algorithm uses a constant amount of extra space regardless of the size of the input list.

# Code
``` python3 []
class Solution:
    def findLengthOfLCIS(self, nums: List[int]) -> int:
        if not nums:
            return 0

        max_length = 1
        current_length = 1

        for i in range(1, len(nums)):
            if nums[i] > nums[i - 1]:
                current_length += 1
            else:
                max_length = max(max_length, current_length)
                current_length = 1

        return max(max_length, current_length)
```
``` javascript []
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function(nums) {
    if (!nums.length) {
        return 0;
    }

    let maxLength = 1;
    let currentLength = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            currentLength++;
        } else {
            maxLength = Math.max(maxLength, currentLength);
            currentLength = 1;
        }
    }

    return Math.max(maxLength, currentLength);
};
```
``` php []
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function findLengthOfLCIS($nums) {
        if (empty($nums)) {
            return 0;
        }

        $maxLength = 1;
        $currentLength = 1;

        for ($i = 1; $i < count($nums); $i++) {
            if ($nums[$i] > $nums[$i - 1]) {
                $currentLength++;
            } else {
                $maxLength = max($maxLength, $currentLength);
                $currentLength = 1;
            }
        }

        return max($maxLength, $currentLength);
    }
}
```