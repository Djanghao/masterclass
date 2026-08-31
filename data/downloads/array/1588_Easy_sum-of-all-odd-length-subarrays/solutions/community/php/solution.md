# PHP: Easy to understand solution

**Author:** chymcakmilan
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-all-odd-length-subarrays/solutions/2826624/](https://leetcode.com/problems/sum-of-all-odd-length-subarrays/solutions/2826624/)

---

# Code
```
class Solution {

    /**
     * @param Integer[] $arr
     * @return Integer
     */
    function sumOddLengthSubarrays($arr) {

        $len = count($arr);

        // All numbers summed together
        $sum = array_sum($arr);

        // No odd-length subarrays except the indexes itself
        // return $arr[0] + $arr[1]
        if($len < 3) return $sum; 

        // Only 1 odd length subarray which is the whole array itself
        // return ($arr[0] + $arr[1] + $arr[1]) + array_sum($arr)
        if($len === 3) return $sum*2;

        // Find the biggest possible length of odd-length subarray
        $maxSlice = $len % 2 === 0 ? $len - 1 : $len;

        // Loop all possible lengths of array 
        // if maxSlice = 9, then we loop $slice = 3 => 5 => 7 => 9
        for($slice = 3; $slice <= $maxSlice; $slice+=2) {
            for($i = 0; $i < ($len - 2); $i++) {
                // Slice the array with offset $i and length $slice
                $sliced = array_slice($arr, $i, $slice);

                // Check if the sliced part has the desired length
                // Needs to have the same length as $slice
                // That way we can exclude for example last index of array
                if(count($sliced) === $slice) $sum += array_sum($sliced);
            }
        }
        return $sum;
    }
}

```