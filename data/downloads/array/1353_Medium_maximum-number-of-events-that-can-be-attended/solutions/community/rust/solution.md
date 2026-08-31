# Faster than heaps - explanation

**Author:** elitecoder666
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/solutions/4365495/](https://leetcode.com/problems/maximum-number-of-events-that-can-be-attended/solutions/4365495/)

---

# Approach
Sort by ends
For each interval try to visit it at the begin day

Make `min_day` array, where `min_day[i]` holds an index in this array with minimal day for visiting event with `event[0] == i`

Init this array with `min_day[0] = 0; min_day[1] = 1; etc.`

For each event: `if event[0] == min_day[event[0]]` then `min_day[event[0]] += 1`, else go through array and find the index we needrust
```
x = events[0]
while min_day[x] != x:
    x = min_day[x]
```

Finally compare `x` with an end of interval, increment `min_day[x]`, increment answer and update value of `min_day[event[0]]` 
```
if x <= e:
    min_day[x] += 1;
    min_day[b] = min_day[x];
    ans += 1;
```

# Complexity
- $$n = events.size()$$
- $$m = max(events[i][1])$$
- Time complexity: $$O(n*log(n))$$
- Space complexity: $$O(m)$$

# Code
```
use std::cmp::Ord;
use std::cmp::Ordering;

impl Solution
{
    pub fn max_events(mut events: Vec<Vec<i32>>) -> i32
    {
        events.sort_by(|v1, v2| v1[1].cmp(&v2[1]));

        let mut min_day: Vec<usize> = vec![0; events.last().unwrap()[1] as usize + 2];
        for i in 0..min_day.len()
        {
            min_day[i] = i;
        }
        
        let mut ans = 0;
        for interval in events
        {
            let b = interval[0] as usize;
            let e = interval[1] as usize;

            let mut x = b;
            while x <= e && min_day[x] != x 
            {
                x = min_day[x];
            }

            if x <= e
            {
                min_day[x] += 1;
                min_day[b] = min_day[x];
                ans += 1;
            }
        }

        return ans;
    }
}
```