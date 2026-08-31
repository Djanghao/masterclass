# PHP Solution - Binary Search Approach

**Author:** muneebshoukat60
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/solutions/4180148/](https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/solutions/4180148/)

---

# Approach
We can solve this problem efficiently with the binary search.

# Complexity
- Time complexity: **O(logN)**

Binary search reduces the search range by half in each step, leading to logarithmic time complexity.

- Space complexity **O(N)**:

The algorithm uses a constant amount of extra space for the pointers and variables, resulting in constant space complexity.

# Code - PHP
```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function findMin($nums) {
        $left = 0;
        $right = count($nums) - 1;

        while($left < $right){
            $mid = ($left + $right) >> 1;

            if($nums[$mid] > $nums[$right]){
                $left = $mid + 1;
            }else{                     
                $right = $mid;
            }
        }

        return $nums[$left];
    }
}
```

# Upvote

Please **upvote** if you find helpful.