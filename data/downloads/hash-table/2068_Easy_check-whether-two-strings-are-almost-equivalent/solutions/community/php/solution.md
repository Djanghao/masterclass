# PHP Solution

**Author:** astasjr
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/solutions/4414194/](https://leetcode.com/problems/check-whether-two-strings-are-almost-equivalent/solutions/4414194/)

---

```
class Solution {

    /**
     * @param String $word1
     * @param String $word2
     * @return Boolean
     */
    function checkAlmostEquivalent($word1, $word2) {
        $arr1 = str_split($word1);
        $arrCount1 = array_count_values($arr1);

        $arr2 = str_split($word2);
        $arrCount2 = array_count_values($arr2);

        foreach (range('a', 'z') as $letter) {
            $count1 = $arrCount1[$letter] ?? 0;
            $count2 = $arrCount2[$letter] ?? 0;

            if (abs($count1 - $count2) > 3) {
                return false;
            }
        }

        return true;
    }
}
```