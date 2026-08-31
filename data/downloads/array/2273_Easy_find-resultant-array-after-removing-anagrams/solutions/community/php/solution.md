# PHP Solution

**Author:** Nahyomee
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/solutions/5056976/](https://leetcode.com/problems/find-resultant-array-after-removing-anagrams/solutions/5056976/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:  $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {

    /**
     * @param String[] $words
     * @return String[]
     */
    function removeAnagrams($words) {
        $left = 0;
        $right = 1;
        while(isset($words[$right]) ){
            //check if the word is anagram
            if($this->isAnagram($words[$left], $words[$right])){
                unset($words[$right]);
            }
            else{
                $left = $right;
            }
            $right++;
        }
        return $words;


    }

    function isAnagram($word1, $word2){
        $w1 = str_split($word1); sort($w1);
        $w2 = str_split($word2); sort($w2);

        $word1 = implode('', $w1);
        $word2 = implode('', $w2);

        return $word1 === $word2;

    }
}
```