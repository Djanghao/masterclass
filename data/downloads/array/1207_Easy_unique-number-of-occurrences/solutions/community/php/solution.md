# PHP short solution

**Author:** rrubiorr81
**Votes:** 2
**Link:** [https://leetcode.com/problems/unique-number-of-occurrences/solutions/549270/](https://leetcode.com/problems/unique-number-of-occurrences/solutions/549270/)

---

8ms and less memory than 100% php solutions
```
class Solution {

    /**
     * @param Integer[] $arr
     * @return Boolean
     */
    function uniqueOccurrences($arr) {
        $rep = array_count_values($arr);
        return (count(array_unique($rep)) == count($rep));
    }
}
```