# pretty generic PHP solution

**Author:** onyskopavlo
**Votes:** 3
**Link:** [https://leetcode.com/problems/group-anagrams/solutions/2373581/](https://leetcode.com/problems/group-anagrams/solutions/2373581/)

---

Using only `str_split` and `sort` functions.
```
class Solution {

    /**
     * @param String[] $strs
     * @return String[][]
     */
    function groupAnagrams($strs) {
        $words = [];
        for ($i = 0; $i < count($strs); $i++) {
            $wordArray = str_split($strs[$i]);
            sort($wordArray);
            $wordSorted = implode('', $wordArray);
            $words[$wordSorted][] = $strs[$i];
        }
        
        return array_values($words);
    }
}
```