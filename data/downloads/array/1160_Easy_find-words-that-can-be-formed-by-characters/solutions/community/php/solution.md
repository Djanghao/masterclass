# One of  the optimize solution in php

**Author:** Amirul_Islam
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/solutions/5365307/](https://leetcode.com/problems/find-words-that-can-be-formed-by-characters/solutions/5365307/)

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
class Solution
{
    /**
     * @param String[] $words
     * @param String $chars
     * @return Integer
     */
    public function countCharacters($words, $chars)
    {
        $characterCount = array_count_values(str_split($chars));

        $totalLength = 0;

        foreach ($words as $word) {
            $wordCount = array_count_values(str_split($word));

            $canBuildWord = true;

            foreach ($wordCount as $char => $count) {

                if (!isset($characterCount[$char]) || $characterCount[$char] < $count) {
                    $canBuildWord = false;
                    break;
                }
            }

            if ($canBuildWord == true) {
                $totalLength += strlen($word);
            }
        }

        return $totalLength;

    }
}

```