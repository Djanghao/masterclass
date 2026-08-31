# beat 100% others solutions

**Author:** AperanoGavin
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-prefixes-of-a-given-string/solutions/6066897/](https://leetcode.com/problems/count-prefixes-of-a-given-string/solutions/6066897/)

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
```php []
class Solution {

    /**
     * @param String[] $words
     * @param String $s
     * @return Integer
     */
    function countPrefixes($words, $s) {
        $len = strlen($s);
        $i = 0;
        foreach($words as $word){
            $wo = strlen($word);
            $cp = substr($s , 0, $wo);
            if(($wo <= $len) && ($word == $cp) ){
                $i++;
            }
        }

        return ($i);
        
    }
}
```