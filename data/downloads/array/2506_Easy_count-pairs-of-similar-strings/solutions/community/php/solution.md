# Beats 100% on the Memory easy PHP solution.

**Author:** ranacse05
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-pairs-of-similar-strings/solutions/3375234/](https://leetcode.com/problems/count-pairs-of-similar-strings/solutions/3375234/)

---

# Code
```
class Solution {

    /**
     * @param String[] $words
     * @return Integer
     */
    function similarPairs($words) {
        $count = count($words);
        $counter=0;
        for($i=0;$i<$count-1;$i++)
         for($j=$i+1;$j<$count;$j++){
             $array = array_unique(str_split($words[$i]));
             $array2 = array_unique(str_split($words[$j]));
             sort($array);sort($array2);
             if($array === $array2)
                $counter++;
         }
    return $counter;
    }
}
```