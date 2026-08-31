# solution by merging strings

**Author:** Hassine11
**Votes:** 0
**Link:** [https://leetcode.com/problems/uncommon-words-from-two-sentences/solutions/5979242/](https://leetcode.com/problems/uncommon-words-from-two-sentences/solutions/5979242/)

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
     * @param String $s1
     * @param String $s2
     * @return String[]
     */
    function uncommonFromSentences($s1, $s2) {
        $s1ToArray = explode(' ' , $s1);
        $s2ToArray = explode(' ' , $s2);
        
        $mergedStrings = array_merge($s1ToArray,$s2ToArray);
        $output = [];
        foreach(array_count_values($mergedStrings) as $val => $count) {
            if($count === 1) {
                $output[] = $val;
            }
        }
      
        return $output;
    }
}
```