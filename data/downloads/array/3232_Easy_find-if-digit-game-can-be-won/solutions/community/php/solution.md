# One line

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-if-digit-game-can-be-won/solutions/5557794/](https://leetcode.com/problems/find-if-digit-game-can-be-won/solutions/5557794/)

---

# Approach
This code uses list comprehensions to calculate the sums of single-digit and double-digit numbers in a single line. 
The sum() function is used to calculate the sums of the numbers in the respective list comprehensions. 
The result is then compared to determine if Alice can win or not.

# Complexity
- Time complexity:
$$O(n)$$, where n is the length of the nums list. This is because the code iterates over each number in the list once to calculate the sums.

- Space complexity:
$$O(1)$$, which means it uses constant space. This is because the function does not create any additional data structures that scale with the size of the input. It only uses a few variables to store intermediate results.

# Code
``` python3 []
class Solution:
    def canAliceWin(self, nums: List[int]) -> bool:
        return sum(num for num in nums if num < 10) != sum(num for num in nums if num >= 10)
        
```
``` javascript []
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canAliceWin = function(nums) {
    return nums.filter(num => num < 10).reduce((acc, num) => acc + num, 0) != nums.filter(num => num >= 10).reduce((acc, num) => acc + num, 0);
};
```
``` php []
class Solution {

    /**
     * @param Integer[] $nums
     * @return Boolean
     */
    function canAliceWin($nums) {
        return array_sum(array_filter($nums, function($num) { return $num < 10; })) != array_sum(array_filter($nums, function($num) { return $num >= 10; }));
    }
}
```