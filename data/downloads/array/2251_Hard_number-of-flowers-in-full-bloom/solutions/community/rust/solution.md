# Binary search on flower times

**Author:** mperepelitsyn
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-flowers-in-full-bloom/solutions/3896770/](https://leetcode.com/problems/number-of-flowers-in-full-bloom/solutions/3896770/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Flowers currently blooming = flowers not yet finished blooming  - flowers not yet started blooming:
`ans = (len - lower_bound(end, time)) - (len - upper_bound(start, time))`

Which simplifies to:
`ans = upper_bound(start, time) - lower_bound(end, time)`

# Complexity
- Time complexity: $$O((M+N)*log(N))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(N)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
impl Solution {
    pub fn full_bloom_flowers(flowers: Vec<Vec<i32>>, people: Vec<i32>) -> Vec<i32> {
        let get_time_and_sort = |i| { 
            let mut ret = flowers.iter().map(|f| f[i]).collect::<Vec<_>>();
            ret.sort();
            ret
        };
        let start = get_time_and_sort(0);
        let end = get_time_and_sort(1);

        people.into_iter().map(|time| {
            (start.partition_point(|&s| s <= time) - end.partition_point(|&e| e < time)) as i32
        }).collect()
    }
}
```