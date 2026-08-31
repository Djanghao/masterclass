# PHP solution with maximum repeated value

**Author:** lina_jamadar23
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-array-length-after-pair-removals/solutions/4053469/](https://leetcode.com/problems/minimum-array-length-after-pair-removals/solutions/4053469/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
-Since we know the given array is not unique
-We store each value as a key and repeated count as a value in a new array
-take out maximum repeated value from that array [uniq]
-if any number with maximum repeat counts is less than half of total size of the array,it can be easily cancel out pairing with the rest of the elements.
-If so then check size of array is even or odd
-Even gives 0 return as each element can have pair element
-Odd gives 1 return as 1 always left without pair in the array
-When the first condition is not match, say If maximum repeated element is more than half of the total size of array,
-In this case the formula is:
-take difference of size and max. and minus the difference from max.
-so the remaining elements from maximum element are left without pair.
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function minLengthAfterRemovals($nums) {
        $size =count($nums);
        $uniq = array_count_values($nums);
        $max =max($uniq);
        if($max <= $size/2)
        {
            if($size % 2 ==0)//for even size
            {
                return 0;
            }else //for odd size
            {
                return 1;
            }
        }
    return $max-($size -$max);
    }
}
```