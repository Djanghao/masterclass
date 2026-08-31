# PHP - Simplle

**Author:** akarabudka
**Votes:** 0
**Link:** [https://leetcode.com/problems/fair-candy-swap/solutions/6069523/](https://leetcode.com/problems/fair-candy-swap/solutions/6069523/)

---

```
class Solution {

    function fairCandySwap($aliceSizes, $bobSizes) {
        $aSum = array_sum($aliceSizes);
        $bSum = array_sum($bobSizes);
        
        $delta = ($aSum - $bSum) / 2; //difference to balance the exchange
        
        foreach($aliceSizes as $size){
            $needed = $size - $delta;
            if(in_array($needed, $bobSizes)){
                return [$size, $needed];
            }
        }
        
        return [];
    }
}
```