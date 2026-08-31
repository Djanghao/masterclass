# Rust solution

**Author:** BigMih
**Votes:** 2
**Link:** [https://leetcode.com/problems/distance-between-bus-stops/solutions/1512419/](https://leetcode.com/problems/distance-between-bus-stops/solutions/1512419/)

---

```
impl Solution {
    pub fn distance_between_bus_stops(distance: Vec<i32>, start: i32, destination: i32) -> i32 {
        let (s0, s1) = match start <= destination {
            true => (start as usize, destination as usize),
            false => (destination as usize, start as usize),
        };

        distance[s0..s1]
            .iter()
            .sum::<i32>()
            .min(distance[..s0].iter().sum::<i32>() + distance[s1..].iter().sum::<i32>())
    }
}
```