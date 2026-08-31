# array_slice + for

**Author:** ashikov
**Votes:** 2
**Link:** [https://leetcode.com/problems/shuffle-the-array/solutions/3304399/](https://leetcode.com/problems/shuffle-the-array/solutions/3304399/)

---

```
class Solution {

    /**
     * @param Integer[] $nums
     * @param Integer $n
     * @return Integer[]
     */
    function shuffle($nums, $n) {
        $part1 = array_slice($nums, 0, $n);
        $part2 = array_slice($nums, $n);

        for ($i = 0; $i < $n; $i += 1) {
            $result[] = $part1[$i];
            $result[] = $part2[$i];
        }

        return $result;
    }
}
```