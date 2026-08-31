# 0ms

**Author:** terrorbyte01
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-and-replace-in-string/solutions/5292135/](https://leetcode.com/problems/find-and-replace-in-string/solutions/5292135/)

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
     * @param String $s
     * @param Integer[] $indices
     * @param String[] $sources
     * @param String[] $targets
     * @return String
     */
    function findReplaceString($s, $indices, $sources, $targets) {
        $final=str_split($s);
        foreach($sources as $index => $source){

            if(substr($s,$indices[$index],strlen($source))===$source){
                $final[$indices[$index]]=$targets[$index];
                for($i=$indices[$index]+1;$i<$indices[$index]+strlen($source);$i++){
                    $final[$i]='';
                }

            }

        }
        return implode('',$final);
        
    }
}
```