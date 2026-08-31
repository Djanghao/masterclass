# PHP solution

**Author:** zdenekdev
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/solutions/4618093/](https://leetcode.com/problems/minimum-adjacent-swaps-to-reach-the-kth-smallest-number/solutions/4618093/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param String $num
     * @param Integer $k
     * @return Integer
     */

    function swapDigits($a,$b, &$digits) {
        [$digits[$a], $digits[$b]] = [$digits[$b], $digits[$a]];
    }

    function reverseDigits($start, $size, &$digits) {
        $end = $size - 1;
        while($start < $end) {
            $this->swapDigits($start, $end,$digits);
            $start++;
            $end--;
        }
    }

    function nextPermutation(&$digits, $size) {
        $start = $size - 2;
        $end = $size - 1;
        while($digits[$start] >= $digits[$start + 1]) $start--;
        while($digits[$end] <= $digits[$start]) $end--;
        $this->swapDigits($start, $end, $digits);
        $this->reverseDigits($start+1, $size, $digits);
    }

    function getMinSwaps($num, $k) {
        $size = strlen($num);
        $digits = str_split($num);
        $result = 0;
  
        for ($i = 0; $i < $k; $i++) $this->nextPermutation($digits, $size);

        for ($i = 0; $i < $size; $i++) {
            $target = $i;
            while ($num[$i] !== $digits[$target]) $target++;
            while ($i < $target) {
                $this->swapDigits($target, $target-1, $digits);   
                $target--;
                $result++;
            }
        }
        return $result;
    }
}
```