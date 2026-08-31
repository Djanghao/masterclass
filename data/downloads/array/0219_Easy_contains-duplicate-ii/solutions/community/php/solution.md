# php beat 100%

**Author:** hjoru
**Votes:** 1
**Link:** [https://leetcode.com/problems/contains-duplicate-ii/solutions/1841899/](https://leetcode.com/problems/contains-duplicate-ii/solutions/1841899/)

---

```
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $k
     * @return Boolean
     */
    function containsNearbyDuplicate($nums, $k) {
        $hashTable = [];
        foreach ($nums as $index => $num) {
            if (isset($hashTable[$num]) && abs($hashTable[$num] - $index) <= $k) {
                return true;
            } else {
                $hashTable[$num] = $index;
            }
        }
        return false;
    }
}