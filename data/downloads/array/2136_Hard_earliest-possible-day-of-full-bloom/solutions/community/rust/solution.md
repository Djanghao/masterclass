# Rust | Sort | With Comments

**Author:** wallicent
**Votes:** 5
**Link:** [https://leetcode.com/problems/earliest-possible-day-of-full-bloom/solutions/2755395/](https://leetcode.com/problems/earliest-possible-day-of-full-bloom/solutions/2755395/)

---

Give the flowers with the longest grow time the longest time to grow, i.e. plant them first. So begin by sorting the (plant, grow) pairs so that we can iterate by descending grow time order. Then take the maximum of the time to flowering for each plant, considering that we don't start planting the next plant before the previous one is planted (so that previous can start to grow as early as possible), i.e. the current time plus the planting time and the growth time.

Implementation notes:
* Zip up the vectors in (grow, plant) pairs (note the order of the tuples). This way we can sort without any custom predicate, since tuples are sorted by the first tuple value first, then the second tuple value, and so on.
* The unstable variants of sort are more efficient than the stable, so we prefer that in cases where the result is equivalent, as in this case.
* Once we have a sorted array of tuples, we can compute the result with a nice `fold` one-liner, where the `fold` state is the tuple of (max time to flower so far, current time).

```
impl Solution {
    pub fn earliest_full_bloom(plant_time: Vec<i32>, grow_time: Vec<i32>) -> i32 {
        let mut seeds = grow_time.into_iter().zip(plant_time).collect::<Vec<_>>();
        seeds.sort_unstable();
        seeds.into_iter().rev().fold((0, 0), |(max, curr_t), (grow, plant)| {
            (max.max(curr_t + plant + grow), curr_t + plant)
        }).0
    }
}
```