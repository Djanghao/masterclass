# PHP solution without adding new array & run in 11ms

**Author:** mahmoudgabr
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/solutions/3094674/](https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/solutions/3094674/)

---


# Code
```
class Solution {

    /**
     * @param String[] $sentences
     * @return Integer
     */
    function mostWordsFound($sentences) {
        $max = 0;
        foreach($sentences as $single) {
            $count = substr_count($single, " ") + 1;
            if($count > $max) {
                $max = $count;
            }
        }
        return $max;
    }
}
```