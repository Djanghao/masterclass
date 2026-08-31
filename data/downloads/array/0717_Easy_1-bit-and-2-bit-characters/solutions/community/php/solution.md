# Simplest brute-force

**Author:** ivan_mx
**Votes:** 1
**Link:** [https://leetcode.com/problems/1-bit-and-2-bit-characters/solutions/2682277/](https://leetcode.com/problems/1-bit-and-2-bit-characters/solutions/2682277/)

---

``` php
class Solution {
    function isOneBitCharacter($bits) {
        for ($i=0; $i<count($bits); $i+=$lb) {
            $lb = 1 + $bits[$i];
        }
        
        return $lb==1;
    }
}
```