# Easy code in php

**Author:** virensingh616
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-product-of-word-lengths/solutions/4791188/](https://leetcode.com/problems/maximum-product-of-word-lengths/solutions/4791188/)

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
     * @param String[] $words
     * @return Integer
     */
    function maxProduct($words) {
    
            foreach($words as $key=>$val){
                $temp[$val]=strlen($val);
            }
            arsort($temp);
            $ans=0;
            $counter=0;
            $temp=array_keys($temp);
            for($i=0;$i<count($temp)-1;$i++){
                for($j=$i+1;$j<count($temp);$j++)
                
                    if(strpbrk($temp[$j], $temp[$i])  === false){
                    $check=strlen($temp[$j])*strlen($temp[$i]);
                            if($check>$ans){
                                $ans=$check;
                            }   
                             $counter++;
                            // break;
                    }
            //      if($counter>0){
            //         break;
            //     }
            }
            return $ans;
    }
}
```