# Sliding window easy O(n)

**Author:** chiazza73
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-window-substring/solutions/4621747/](https://leetcode.com/problems/minimum-window-substring/solutions/4621747/)

---

# Intuition
Easy solution
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Sliding window
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param String $s
     * @param String $t
     * @return String
     */
    function minWindow($s, $t) {
        //\u0445\u044D\u0448\u043C\u0430\u043F\u044B 
        $hashMap = [];
        $checker = [];
        foreach(str_split($t) as $val){
            $hashMap[$val] = isset($hashMap[$val]) ? $hashMap[$val]+1 : 1;
        }
        
        $resultMin = strlen($s);
        $idxPairs = [];
        $have = 0;
        $left = $right = 0;

        while($right < strlen($s)){
            $letter = $s[$right];
            if(isset($hashMap[$letter])){
                $checker[$letter] +=  1;
                if($checker[$letter] <= $hashMap[$letter]){
                    $have++;
                }
            }
            while($have == strlen($t)){
                $len = $right - $left + 1;
                if($len <= $resultMin){
                    $resultMin = $len;
                    $idxPairs['left']= $left;
                    $idxPairs['right'] = $right;
                }
                
                if(isset($hashMap[$s[$left]]) && $checker[$s[$left]] > 0){
                    if($checker[$s[$left]] <= $hashMap[$s[$left]]){
                        $have--;
                    }
                    $checker[$s[$left]] -= 1;
                }
                $left++;
            }
            $right++;
        }

        if(empty($idxPairs)){
            return "";
        }

        $result = "";
        while($idxPairs['left'] <= $idxPairs['right']){
            $result .= $s[$idxPairs['left']];
            $idxPairs['left']++;
        }
         return $result;
    }
}
```