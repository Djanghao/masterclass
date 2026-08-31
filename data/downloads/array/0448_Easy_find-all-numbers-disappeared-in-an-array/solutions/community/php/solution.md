# PHP solution O(N) space O(N) time

**Author:** g9o5n2e8
**Votes:** 2
**Link:** [https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/solutions/1584481/](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/solutions/1584481/)

---

```
class Solution {

    /**
     * @param Integer[] $nums
     * @return Integer[]
     */
    function findDisappearedNumbers($nums) {
        $hash = array_fill_keys(range(1, count($nums)), 0);
        
        foreach ($nums as $n) {
            unset($hash[$n]);
        }
        
        return array_keys($hash);
    }
}
```

It's easy to understand.