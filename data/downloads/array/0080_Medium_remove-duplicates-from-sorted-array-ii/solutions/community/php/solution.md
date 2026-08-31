# Simple solution in PHP

**Author:** anestorov
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/solutions/4363199/](https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/solutions/4363199/)

---

# Intuition
Since the array is sorted we can traverse it only once in order to identify duplicates. We just need to keep track of the last element we found in the array and the number of its repetitions. In order not to use another array we need also a pointer that shows where to store the unique values in the original array. 

# Approach
We just assign variables for what we need to store.
- lastNum - keeps track of the number we are counting diplications for.
- occ - number of repetitions of the last unique element in the array.
- placePointer - points to the place we need to move the element to.

Then we loop the array from begining to end, count number of duplication for each element and move those that repeat just twice to the placePointer places. We can start from the second element since the first one repeats just once. Last we return the placePointer as it represents the number of elements we moved.

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function removeDuplicates(&$nums) {
        $lastNum = $nums[0];
        $occ = 1;
        $placePointer = 1;
        $len = count($nums);
        for($i=1; $i<$len; $i++) {
            if($nums[$i] == $lastNum) {
                $occ++;
            } else {
                $lastNum = $nums[$i];
                $occ = 1;
            }
            if($occ<=2) {
                $nums[$placePointer] = $nums[$i];
                $placePointer++;
            }
        }
        return $placePointer;
    }
}
```