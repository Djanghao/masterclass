# PHP | Simple Solution (5 lines)

**Author:** djordjedinic
**Votes:** 0
**Link:** [https://leetcode.com/problems/rearrange-words-in-a-sentence/solutions/2592891/](https://leetcode.com/problems/rearrange-words-in-a-sentence/solutions/2592891/)

---

```
class Solution {

    /**
     * @param String $text
     * @return String
     */
    function arrangeWords($text) {
        $words = explode(' ',  $text);
        $words[0] = strtolower($words[0]);
        usort($words, function($a, $b) { return strlen($a) - strlen($b);});
        $words[0] = ucfirst($words[0]);
        return implode(' ', $words);
    }


}
```