# Solution Distant Barcodes

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/distant-barcodes/solutions/4881525/](https://leetcode.com/problems/distant-barcodes/solutions/4881525/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer[] $barcodes
     * @return Integer[]
     */
    function rearrangeBarcodes($barcodes) {
        $n = count($barcodes);
        $count = array_fill(0, 10001, 0);
        
        foreach ($barcodes as $barcode) {
            $count[$barcode]++;
        }
        
        $max = 0;
        $maxIndex = 0;
        
        for ($i = 0; $i < 10001; $i++) {
            if ($count[$i] > $max) {
                $max = $count[$i];
                $maxIndex = $i;
            }
        }
        
        $ans = array_fill(0, $n, 0);
        $index = 0;
        
        while ($count[$maxIndex] > 0) {
            $ans[$index] = $maxIndex;
            $index += 2;
            $count[$maxIndex]--;
        }
        
        for ($i = 0; $i < 10001; $i++) {
            while ($count[$i] > 0) {
                if ($index >= $n) {
                    $index = 1;
                }
                $ans[$index] = $i;
                $index += 2;
                $count[$i]--;
            }
        }
        
        return $ans;
    }
}

```