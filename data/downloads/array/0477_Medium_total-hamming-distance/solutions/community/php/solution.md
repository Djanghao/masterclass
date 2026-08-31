# PHP O(n) without bit shifting

**Author:** skulditsky
**Votes:** 0
**Link:** [https://leetcode.com/problems/total-hamming-distance/solutions/796804/](https://leetcode.com/problems/total-hamming-distance/solutions/796804/)

---

```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer
     */
    function totalHammingDistance($nums) {
        $bits = [];
        $maxlength = 0;
        
        // convert to binary
        for ($i = 0; $i < count($nums); $i++) {
            $nums[$i] = decbin($nums[$i]);
            $maxlength = max($maxlength, strlen($nums[$i]));
        }
        
        // format in a same way all lines
        for ($i = 0; $i < count($nums); $i++) {
            $nums[$i] = str_pad($nums[$i], $maxlength, '0', STR_PAD_LEFT);
        }
        
        // count number of ones and zeros in each column
        for ($i = 0; $i < count($nums); $i++) {
            for ($j = 0; $j < $maxlength; $j++) {
                $bits[$j][$nums[$i][$j]]++;
            }
        }
        
        $result = 0;
        // count pairs
        foreach ($bits as $bitData) {
            $result += $bitData[0]*$bitData[1];
        }
        
        return $result;
    }
}
```