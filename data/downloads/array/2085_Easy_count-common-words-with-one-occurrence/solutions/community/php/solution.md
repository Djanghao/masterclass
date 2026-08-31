# PHP with 3 lines

**Author:** Leon888
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-common-words-with-one-occurrence/solutions/2467223/](https://leetcode.com/problems/count-common-words-with-one-occurrence/solutions/2467223/)

---

```
class Solution {

    /**
     * @param String[] $words1
     * @param String[] $words2
     * @return Integer
     */
    function countWords($words1, $words2) {
        $w1 = array_filter(array_count_values($words1), function ($w) { return $w === 1; });
        $w2 = array_filter(array_count_values($words2), function ($w) { return $w === 1; });
        return count(array_intersect(array_keys($w1), array_keys($w2)));
    }	
}
```