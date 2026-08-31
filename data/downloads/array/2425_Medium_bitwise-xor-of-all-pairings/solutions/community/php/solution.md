# PHP | with BASIC XOR operation

**Author:** zihadxomar
**Votes:** 0
**Link:** [https://leetcode.com/problems/bitwise-xor-of-all-pairings/solutions/2653924/](https://leetcode.com/problems/bitwise-xor-of-all-pairings/solutions/2653924/)

---

```
class Solution {

    /**
     * @param Integer[] $nums1
     * @param Integer[] $nums2
     * @return Integer
     */
    function xorAllNums($nums1, $nums2) {
        $a1=0;
        $a2=0;
        $len = count($nums1);
        $len2 = count($nums2);
        
        foreach($nums1 as $n1){
            $a1^=$n1;
        }
        
         foreach($nums2 as $n2){
            $a2^=$n2;
        }
        
        if(($len%2==1) && ($len2%2==1)){
            return $a1 ^ $a2;
        }else if($len%2==1){
            return $a2;
        }else if($len2%2==1){
            return $a1;
        }else{
            return 0;
        }

    }
}
```