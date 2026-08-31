# Fast solution Java, JS, Rust, Go O(m * log(m)), space O(m), sort and binary search over DP

**Author:** sdvorchin
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-earnings-from-taxi/solutions/4802288/](https://leetcode.com/problems/maximum-earnings-from-taxi/solutions/4802288/)

---

# Approach
1. Initialize an array `possible`, which would keep tuples `[endTime, endMax]`, representing the maximum profit `endMax` you can have while having your cab free as early as `endTime`, in strictly ascending order over both `endTime` and `endMax`, to `[[0, 0]]`.
2. Sort rides according to end time.
3. Iterate throught the rides, updating `possible`. The tricky part is finding the max profit you can have before the start of the current ride. Here, binary search over possible is used. Once you do that, it is trivial to determine whether you should insert the result of the current ride into `possible`, and whether you need to toss the current result at `possible[-1]` (if the current ride can get you a better profit at the same time or earlier).
4. Return `possible[-1][1]`.

# Complexity
`m == rides.length`
- Time complexity:
$$O(m*log(m))$$
- Space complexity:
$$O(m)$$
# Code

```javascript []
const maxTaxiEarnings = (n, rides) => {
    const possible = [[0, 0]];
    let endTime, endMax, total, start, end, tip, first, last;
    rides.sort((a, b) => a[1] - b[1]);
    for ([start, end, tip] of rides) {
        first = 0
        last = possible.length - 1;
        while (first <= last) {
            const mid = Math.floor((first + last) / 2);
            if (possible[mid][0] > start)
                last = mid - 1;
            else
                first = mid + 1;
        }
        total = possible[first - 1][1] + end - start + tip;
        if (endMax > total || endMax === total && endTime > end) continue;
        if (end <= endTime) possible.pop();
        possible.push([end, total]);
        endTime = end;
        endMax = total;
    }
    return possible[possible.length - 1][1];
};
```
```rust []
impl Solution {

    pub fn max_taxi_earnings(n: i32, mut rides: Vec<Vec<i32>>) -> i64 {
        let mut possible : Vec<(i32, i64)> = vec![(0, 0)];
        let mut end_time : i32 = 0;
        let mut end_max : i64 = 0;
        let mut total : i64 = 0;
        let mut first : usize;
        let mut last : usize;
        let mut mid : usize;
        rides.sort_by(|a, b| a[1].cmp(&b[1]));
        for r in rides {
            first = 0;
            last = possible.len() - 1;
            while (first <= last) {
                mid = (first + last) / 2;
                if (possible[mid].0 > r[0]) {
                    last = mid - 1;
                } else {
                    first = mid + 1;
                }
            }
            total = possible[first - 1].1 + (r[1] - r[0] + r[2]) as i64;
            if (end_max > total || end_max == total && end_time > r[1]) {continue;}
            if (r[1] <= end_time) {possible.pop();}
            possible.push((r[1], total));
            end_time = r[1];
            end_max = total;
        }
        return possible[possible.len() - 1].1;
    }
}
```

``` java []
import java.util.ArrayList;

class Solution {
    public long maxTaxiEarnings(int n, int[][] rides) {
        ArrayList<long[]> possible = new ArrayList<long[]>();
        possible.add(new long[]{0, 0});
        Arrays.sort(rides, (a, b) -> a[1] - b[1]);
        int endTime = 0, first = 0, mid = 0, last = 0;
        long endMax = 0, total = 0;
        for (int[] r : rides) {
            first = 0;
            last = possible.size() - 1;
            while (first <= last) {
                mid = (first + last) / 2;
                if (possible.get(mid)[0] > r[0]) {
                    last = mid - 1;
                } else {
                    first = mid + 1;
                }
            }
            total = possible.get(first - 1)[1] + r[1] - r[0] + r[2];
            if (endMax > total || endMax == total && endTime > r[1]) {continue;}
            if (r[1] <= endTime) {
                possible.remove(possible.size() - 1);
            }
            possible.add(new long[]{r[1], total});
            endTime = r[1];
            endMax = total;
        }
        return possible.get(possible.size() - 1)[1];
    }
}
```
``` golang []
func maxTaxiEarnings(n int, rides [][]int) int64 {
    possible := make([][2]int, 1)
    possible[0] = [2]int{0, 0}
    sort.Slice(rides, func(i, j int) bool {
        return rides[i][1] < rides[j][1]
    })
    endMax := 0
    endTime := 0
    var first, mid, last, total int
    for _, r := range rides {
        first = 0
        last = len(possible) - 1
        for (first <= last) {
            mid = (first + last) / 2
            if (possible[mid][0] > r[0]) {
                last = mid - 1;
            } else {
                first = mid + 1;
            }
        }
        total = possible[first - 1][1] + r[1] - r[0] + r[2];
        if endMax > total || endMax == total && endTime > r[1] {continue}
        if r[1] <= endTime {possible = possible[:len(possible)  - 1]} 
        possible = append(possible, [2]int{r[1], total})
        endTime = r[1]
        endMax = total
    }
    return int64(possible[len(possible) - 1][1])
};
```