# php hashtable

**Author:** Yuwipi
**Votes:** 0
**Link:** [https://leetcode.com/problems/best-poker-hand/solutions/4756751/](https://leetcode.com/problems/best-poker-hand/solutions/4756751/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:$$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {


    
    /**
     * @param Integer[] $ranks
     * @param String[] $suits
     * @return String
     */
    function bestHand($ranks, $suits) {
        $rankMap =[]; 
        $suitMap =[]; 

        foreach($ranks as $rank){ 
            if(isset($rankMap[$rank])){ 
                $rankMap[$rank]++;
            }else{ 
                $rankMap[$rank]=1;
            }
        }
        foreach($suits as $suit){ 
            if(isset($suitMap[$suit])){ 
                $suitMap[$suit]++;
            }
            else{ 
                $suitMap[$suit]=1;
            }
        }
        $count =0;
        foreach($suitMap as $value){ 
            if($value == 5){ 
                return "Flush"; 
            }
        }
        $res = null;
        
        foreach($rankMap as $value){ 
            if($value >= 3){ 
                return "Three of a Kind";
            }
            else if($value == 2){
                $res = "Pair";
             }
        }
        if(is_null($res)){ 
            return "High Card";
        }
        else{ 
            return $res;
        }
    }
}
```