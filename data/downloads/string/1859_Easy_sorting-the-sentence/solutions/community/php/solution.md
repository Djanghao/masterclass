# 70% with the help func-ksort

**Author:** evgpol
**Votes:** 0
**Link:** [https://leetcode.com/problems/sorting-the-sentence/solutions/5407750/](https://leetcode.com/problems/sorting-the-sentence/solutions/5407750/)

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
     * @return String
     */
    function sortSentence($s) {
        
        $strArr = explode (" ", $s);

        $result = [];
        $i=0;
        while($i<count($strArr)){
            $countStr = substr($strArr[$i], -1);
            $result[$countStr] =substr($strArr[$i], 0, -1)." "; 
            $i++;
        }
        ksort($result);
        $res = trim(implode($result));
        return $res;
    }
}
```