# Beginner friendly solution

**Author:** aakankshasingh44
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/solutions/4451126/](https://leetcode.com/problems/check-if-a-string-is-an-acronym-of-words/solutions/4451126/)

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
     * @param String[] $words
     * @param String $s
     * @return Boolean
     */
    function isAcronym($words, $s) {
          $newArr = [];

        foreach($words as $word){
            $newArr[] = $word[0];
        }
        $newStr = implode('', $newArr);

        if($newStr == $s){
            return true;
        }
        return false;
    }
}
```