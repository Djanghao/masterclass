# Sorting | 15ms, 4.17MB

**Author:** Imyr
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-processing-time/solutions/5493095/](https://leetcode.com/problems/minimum-processing-time/solutions/5493095/)

---

# Complexity
- Time complexity: $$O(n*log(n))$$
- Space complexity: $$O(n)$$

# Code
```
impl Solution {
    pub fn min_processing_time(mut processor_time: Vec<i32>, mut tasks: Vec<i32>) -> i32 {
        processor_time.sort_unstable(); tasks.sort_unstable_by_key(|x| -x);
        tasks.chunks(4).zip(processor_time).map(
            |(v, x)| x + v.into_iter().max().unwrap()
        ).max().unwrap()
    }
}
```