# Simple solution

**Author:** yushkevichv
**Votes:** 0
**Link:** [https://leetcode.com/problems/two-sum-less-than-k/solutions/5471282/](https://leetcode.com/problems/two-sum-less-than-k/solutions/5471282/)

---

# Intuition
We have light restrictions for input data. In this case, we can use brute force way.  For some optimizations, we can sort array and add some break loops for decreasing count of total iterations. 


# Complexity
- Time complexity: O(logN)

- Space complexity: O(1)

# Code
```
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Integer
     */
    function twoSumLessThanK($nums, $k) {
        $sum = -1;
        sort($nums);
        for($i = 1; $i < count($nums); $i++) {
            if($nums[$i] > $k) {
                break;
            }
            for ($j = 0; $j < $i; $j++) {
                if($nums[$j] > $k) {
                    break;
                }
                if($nums[$j] + $nums[$i] >= $k) {
                    break;
                }

                $sum = max($sum, $nums[$j] + $nums[$i]);
            }
        }

        return $sum;
    }
}
```