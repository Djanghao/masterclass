# Runtime: 3357 ms / Memory Usage: 39.7 MB

**Author:** ordinary9843
**Votes:** 1
**Link:** [https://leetcode.com/problems/palindrome-pairs/solutions/2586523/](https://leetcode.com/problems/palindrome-pairs/solutions/2586523/)

---

Runtime: 3357 ms, faster than 100.00% of PHP online submissions for Palindrome Pairs.
Memory Usage: 39.7 MB, less than 100.00% of PHP online submissions for Palindrome Pairs.

```
class Solution {

    /**
     * @param String[] $words
     * @return Integer[][]
     */
    function palindromePairs($words) {
        $res = [];
        $map = array_flip($words);
        for ($i = 0; $i < count($words); $i++) {
            $word = $words[$i];
            for ($j = 0; $j <= strlen($word); $j++) {
                $left = substr($word, 0, $j);
                $right = substr($word, $j);
                if ($this->isPalindrome($left)) {
                    $rev = strrev($right);
                    if (isset($map[$rev]) && $map[$rev] !== $i) {
                        $res[] = [$map[$rev], $i];
                    }
                }
                
                if (strlen($right) !== 0 && $this->isPalindrome($right)) {
                    $rev = strrev($left);
                    if (isset($map[$rev]) && $map[$rev] !== $i) {
                        $res[] = [$i, $map[$rev]];
                    }
                }
            }
        }
        
        return $res;
    }
    
    function isPalindrome($str) {
        return ($str === strrev($str));
    }
}
```