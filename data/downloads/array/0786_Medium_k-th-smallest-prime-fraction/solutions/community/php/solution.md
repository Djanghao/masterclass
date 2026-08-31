# Finding Kth Smallest Fraction with Binary Search

**Author:** rakiburrimon
**Votes:** 1
**Link:** [https://leetcode.com/problems/k-th-smallest-prime-fraction/solutions/5140090/](https://leetcode.com/problems/k-th-smallest-prime-fraction/solutions/5140090/)

---

# Intuition
We aim to find the kth smallest fraction from the given array. Since the array is sorted and consists of unique prime numbers, we can use binary search to efficiently find the kth smallest fraction.

# Approach
1. Initialize the search range with the lower bound as 0 and the upper bound as 1, representing possible fractions.
2. While the lower bound is less than the upper bound, do the following:
- Calculate the mid value of the range.
- Count the number of fractions in the array that are smaller than the mid value.
- Update the search range based on the count. If the count is less than k, update the lower bound; if greater than k, update the upper bound; if equal to k, return the fraction.
3. If no fraction is found, return an empty array.

# Complexity
- Time complexity:
O(n log(max - min)), where n is the length of the array and max - min is the range of possible fractions.

- Space complexity:
O(1), as we are using constant space.

# Code
```
class Solution {

    /**
     * @param Integer[] $arr
     * @param Integer $k
     * @return Integer[]
     */
    function kthSmallestPrimeFraction($arr, $k) {
        $n = count($arr);
        $left = 0;
        $right = 1;
        
        while ($left < $right) {
            $mid = ($left + $right) / 2;
            $count = 0;
            $maxFraction = [0, 1];
            $j = 0;
            
            for ($i = 0; $i < $n; $i++) {
                while ($j < $n && $arr[$i] > $mid * $arr[$j]) {
                    $j++;
                }
                $count += $n - $j;
                if ($j < $n && $maxFraction[0] * $arr[$j] < $maxFraction[1] * $arr[$i]) {
                    $maxFraction = [$arr[$i], $arr[$j]];
                }
            }
            
            if ($count < $k) {
                $left = $mid;
            } elseif ($count > $k) {
                $right = $mid;
            } else {
                return $maxFraction;
            }
        }
        
        return [];
    }
}
```