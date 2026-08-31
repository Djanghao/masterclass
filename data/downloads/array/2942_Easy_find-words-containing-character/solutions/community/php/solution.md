# php

**Author:** 9SdWaZ11SF
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-words-containing-character/solutions/6084566/](https://leetcode.com/problems/find-words-containing-character/solutions/6084566/)

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
     * @param String $x
     * @return Integer[]
     */
    function findWordsContaining($words, $x) {
        $indexesWordWithX = [];
        
        foreach ($words as $key => $word) {
            if (str_contains($word, $x)) {
                $indexesWordWithX[] = $key;
            }
        }

        return $indexesWordWithX;
    }
}
```