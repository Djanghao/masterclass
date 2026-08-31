# Longest Palindrom - php

**Author:** IoanaLuca
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/solutions/5273445/](https://leetcode.com/problems/longest-palindrome-by-concatenating-two-letter-words/solutions/5273445/)

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
     * @return Integer
     */
    function longestPalindrome($words) {
        $l = 0;
        $countArray = [];
        $sameArray = [];
        foreach($words as $word) {
          $rev = strrev($word);
          $countArray[$word] = isset($countArray[$word]) ? $countArray[$word]+1 : 1;

          if ($rev == $word) {
          	if (isset($countArray[$rev]) && $countArray[$rev] > 1) {
	            $countArray[$word] = $countArray[$word] - 2;
	            $l = $l + 4;
	          }
            $sameArray[$rev] = isset($sameArray[$rev]) ? $sameArray[$rev]+1 : 1;
          } else{
            if (isset($countArray[$rev]) && $countArray[$rev] > 0) {
	            $countArray[$word] --;
	            $countArray[$rev] --;
	            $l = $l + 4;
	          }
          }
        }
        sort($sameArray);
        foreach($sameArray as $sarray) {
            if($sarray % 2 > 0)
            {
                $l = $l + 2;
                break;
            }
        }

        return $l;
    }
}



```