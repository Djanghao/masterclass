# Php 50% | 100%

**Author:** LuisFelipe1
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/solutions/4975281/](https://leetcode.com/problems/check-if-word-equals-summation-of-two-words/solutions/4975281/)

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
     * @param String $firstWord
     * @param String $secondWord
     * @param String $targetWord
     * @return Boolean
     */
    function isSumEqual($firstWord, $secondWord, $targetWord) {
        
        $mark = [
            'a' => 0,
            'b' => 1,
            'c' => 2,
            'd' => 3,
            'e' => 4,
            'f' => 5,
            'g' => 6,
            'h' => 7,
            'i' => 8,
            'j' => 9,
        ];

        foreach(str_split($firstWord) as $key){
            $first .= $mark[$key];
        }

        foreach(str_split($secondWord) as $key){
            $second .= $mark[$key];
        }

        foreach(str_split($targetWord) as $key){
            $target .= $mark[$key];
        }

        return ((intval($first) + intval($second)) == intval($target));

    }
}
```