# 37ms nlogn Beats 100% - two sorted vecs for start and end of interval. Count up and down and track.

**Author:** jkoudys
**Votes:** 4
**Link:** [https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/solutions/5901263/](https://leetcode.com/problems/divide-intervals-into-minimum-number-of-groups/solutions/5901263/)

---

# Intuition
The question is really saying "what's the max intersections at one time", and that's something we can find with a counter and a max. Keep track of how many ranges are active.

# Approach
We do two sorts. One against a Vec of the interval start positions, and one against the end. Then we keep checking to see if the next smallest index is a start or an end. If it's a start, we increment the total ongoing intervals and check if this is the maximum total intersections. If the next index is an end, we decrement it (no need to check for max here).
We can just exit once all the starts are done, as there's no reason to keep looking at ends once we've found it.

# Complexity
- Time complexity:
$$O(n log n)$$
Two sorts followed by a simple iteration.

- Space complexity:
$$O(n)$$

# Code
```rust []
impl Solution {
    pub fn min_groups(intervals: Vec<Vec<i32>>) -> i32 {
        // Step 1: Collect starts and ends into two vectors
        let mut starts: Vec<i32> = Vec::with_capacity(intervals.len());
        let mut ends: Vec<i32> = Vec::with_capacity(intervals.len());

        for interval in &intervals {
            starts.push(interval[0]);
            ends.push(interval[1]);
        }

        // Step 2: Sort the starts and ends
        starts.sort_unstable();
        ends.sort_unstable();

        let mut total = 0;
        let mut max_total = 0;
        let mut start_idx = 0;
        let mut end_idx = 0;

        // Step 3: Traverse through sorted starts and ends
        while start_idx < intervals.len() {
            if starts[start_idx] <= ends[end_idx] {
                // Process the next start
                total += 1;
                start_idx += 1;
                max_total = max_total.max(total);
            } else {
                // Process the next end
                total -= 1;
                end_idx += 1;
            }
        }

        max_total
    }
}

```

```typescript []
// 260ms - beats 100% on memory and runtime for typescript.
function minGroups(intervals: number[][]): number {
    const [starts, ends] = intervals.reduce(
        (a, inter) => {
            a[0].push(inter[0]);
            a[1].push(inter[1]);
            return a;
        }, [[], []]);
    starts.sort((a, b) => a - b);
    ends.sort((a, b) => a - b);
    let total = 0;
    let maxTotal = 0;
    let si = 0;
    let ei = 0;
    while (si < intervals.length) {
        if (starts[si] <= ends[ei]) {
            total += 1;
            si += 1;
            maxTotal = Math.max(maxTotal, total);
        } else {
            total -= 1;
            ei += 1;
        }
    }
    return maxTotal;
};
```

```php []
// 446ms, beats 100% cpu and mem
class Solution {

    /**
     * @param Integer[][] $intervals
     * @return Integer
     */
    function minGroups($intervals) {
        $intervalsSize = count($intervals);

        // Step 1: Collect starts and ends into two arrays
        $starts = [];
        $ends = [];

        foreach ($intervals as $interval) {
            $starts[] = $interval[0];
            $ends[] = $interval[1];
        }

        // Step 2: Sort the starts and ends
        sort($starts);
        sort($ends);

        $total = 0;
        $maxTotal = 0;
        $startIdx = 0;
        $endIdx = 0;

        // Step 3: Traverse through sorted starts and ends
        while ($startIdx < $intervalsSize) {
            if ($starts[$startIdx] <= $ends[$endIdx]) {
                // Process the next start
                $total++;
                $startIdx++;
                $maxTotal = max($maxTotal, $total);
            } else {
                // Process the next end
                $total--;
                $endIdx++;
            }
        }

        return $maxTotal;
    }
}
```