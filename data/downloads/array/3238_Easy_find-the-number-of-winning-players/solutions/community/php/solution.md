# php use hash

**Author:** Yuwipi
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-number-of-winning-players/solutions/5585391/](https://leetcode.com/problems/find-the-number-of-winning-players/solutions/5585391/)

---


# Complexity
- Time complexity:$$O(n)$$ 
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(n)$$ 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param Integer $n
     * @param Integer[][] $pick
     * @return Integer
     */
    function winningPlayerCount($n, $pick) {
        $wins = 0; 
        $hash = []; 
        foreach($pick as $key =>[$pl,$val]){ 
            if(isset($hash[$pl][$val])){ 
                $hash[$pl][$val]++; 
            }else{ 
                $hash[$pl][$val]=1;
            }
        }

        for($i =0;$i < $n;$i++){
            $flag = false;  
            foreach($hash[$i] as $val){ 
                if($val > $i)$flag =true; 
            }
            $wins +=$flag?1:0;
        }
        return $wins;
    }
}
```