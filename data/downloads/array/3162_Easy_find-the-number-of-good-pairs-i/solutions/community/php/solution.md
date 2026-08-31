# Easy nested loops (with explanation)

**Author:** Angielf
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-good-pairs-i/solutions/5209131/](https://leetcode.com/problems/find-the-number-of-good-pairs-i/solutions/5209131/)

---

# Approach
This solution uses nested loops to iterate over each element in nums1 and nums2. For each pair of elements, it checks if nums1[i] is divisible by nums2[j] * k. If it is, it increments the count variable. Finally, it returns the value of count, which represents the number of pairs that satisfy the given condition.

# Complexity
- Time complexity:
$$O(n^2)$$, where n is the length of nums1 and nums2. This is because there are two nested loops that iterate over each element in nums1 and nums2.

- Space complexity:
$$O(1)$$, as it only uses constant space to store the count variable.

# Code
``` python3 []
class Solution:
    def numberOfPairs(self, nums1: List[int], nums2: List[int], k: int) -> int:
        count = 0 
        
        # Iterate over each element in nums1 and nums2
        for i in range(len(nums1)):
            for j in range(len(nums2)):
                # Check if nums1[i] is divisible by nums2[j] * k
                if nums1[i] % (nums2[j] * k) == 0:
                    count += 1
        
        return count
```
``` javascript []
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number}
 */
var numberOfPairs = function(nums1, nums2, k) {
    let count = 0;
    
    // Iterate over each element in nums1 and nums2
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            // Check if nums1[i] is divisible by nums2[j] * k
            if (nums1[i] % (nums2[j] * k) === 0) {
                count++;
            }
        }
    }
    
    return count;
};
```
``` php []
class Solution {

    /**
     * @param Integer[] $nums1
     * @param Integer[] $nums2
     * @param Integer $k
     * @return Integer
     */
    function numberOfPairs($nums1, $nums2, $k) {
        $count = 0;
    
        // Iterate over each element in nums1 and nums2
        for ($i = 0; $i < count($nums1); $i++) {
            for ($j = 0; $j < count($nums2); $j++) {
                // Check if nums1[$i] is divisible by nums2[$j] * $k
                if ($nums1[$i] % ($nums2[$j] * $k) === 0) {
                    $count++;
                }
            }
        }
        
        return $count;
    }
}
```