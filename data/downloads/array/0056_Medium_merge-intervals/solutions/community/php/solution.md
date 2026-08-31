# Simple solution using sort (~10 lines, O(n log n)) [php]

**Author:** bafsi
**Votes:** 3
**Link:** [https://leetcode.com/problems/merge-intervals/solutions/1430980/](https://leetcode.com/problems/merge-intervals/solutions/1430980/)

---

```php
class Solution {
    /**
     * @param int[][] $intervals
     * @return int[][]
     */
    function merge(array $intervals): array {
        sort($intervals); // we first sort 

        $len = count($intervals);
        for ($i = 0; $i < $len - 1; ++$i) {
            [$start, $end] = $intervals[$i];
            [$start2, $end2] = $intervals[$i + 1]; // next
            
			// Merge with the next element
            if ($end >= $start2) {
                unset($intervals[$i]);
                $intervals[$i + 1] = [$start, max($end, $end2)];
            }
        }

        return $intervals;
    }
}
```

Complexity is O(n log n) to sort and then O(n) to merge, thus the overall complexity is O(n log n).

*Note*: We can use `usort` to sort "deep" arrays: `usort($intervals, fn ($a, $b) => $a[0] <=> $b[0]);` but `sort` works in this case