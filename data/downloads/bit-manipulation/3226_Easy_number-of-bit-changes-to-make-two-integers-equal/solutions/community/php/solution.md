# php

**Author:** Yuwipi
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-bit-changes-to-make-two-integers-equal/solutions/5511031/](https://leetcode.com/problems/number-of-bit-changes-to-make-two-integers-equal/solutions/5511031/)

---



# Complexity
- Time complexity: $$O(log(n)+log(k))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(log(n)+log(k))$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer $n
     * @param Integer $k
     * @return Integer
     */
    function minChanges($n, $k) {
        if($n == $k){ 
            return 0; 
        }
         if($k  > $n){ 
            return -1; 
        }
        $n = $this->makeBR($n); 
        $k = $this->makeBR($k);
        if(strlen($n) > strlen($k)) { 
            $k.= str_repeat('0',strlen($n)-strlen($k));
        }
    
        $res = 0; 
        for($i = 0;$i < strlen($n);$i++){
            if($k[$i] == $n[$i]){
                continue; 
            }
            if($n[$i] == '1' && $k[$i] =='0'){ 
                $res++; 
            }else{ 
                return -1;
            }
        }
        return $res; 
        
    }

    function makeBR($n){ 
        $result = '';
        while($n != 0){
            if($n %2 == 0){ 
                $result.=0;
            }else{ 
                $result.=1;
            }
            $n = floor($n/2); 
        } 
        return $result;
    }
}
```