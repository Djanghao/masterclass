# Solution Longest Word in Dictionary through Deleting

**Author:** Suyono-Sukorame
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/solutions/4739783/](https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/solutions/4739783/)

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
     * @param String[] $dictionary
     * @return String
     */
    function findLongestWord($s, $dictionary) {
        $longestWord = '';

        foreach ($dictionary as $word) {
            $len1 = strlen($word);
            $len2 = strlen($longestWord);

            if ($len1 < $len2 || ($len1 == $len2 && strcmp($word, $longestWord) >= 0)) {
                continue;
            }

            if ($this->isSubsequence($word, $s)) {
                $longestWord = $word;
            }
        }

        return $longestWord;
    }

    private function isSubsequence($word, $s) {
        $i = 0;
        $j = 0;
        $len1 = strlen($word);
        $len2 = strlen($s);

        while ($i < $len1 && $j < $len2) {
            if ($word[$i] == $s[$j]) {
                $i++;
            }
            $j++;
        }

        return $i == $len1;
    }
}

```