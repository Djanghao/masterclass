# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/moving-stones-until-consecutive-ii/solutions/3034374/](https://leetcode.com/problems/moving-stones-until-consecutive-ii/solutions/3034374/)

---

# Code
```
impl Solution {
    pub fn num_moves_stones_ii(stones: Vec<i32>) -> Vec<i32> {
        let mut stones = stones;
        stones.sort();
        let n = stones.len();
        let mut i = 0;
        let mut low = n as i32;
        let high = std::cmp::max(stones[n - 1] - n as i32 + 2 - stones[1], stones[n - 2] - stones[0] - n as i32 + 2);
        for j in 0..n {
            while stones[j] - stones[i] >= n as i32 {
                i += 1;
            }
            if j - i + 1 == n - 1 && stones[j] - stones[i] == n as i32 - 2 {
                low = std::cmp::min(low, 2);
            } else {
                low = std::cmp::min(low, n as i32 - (j - i + 1) as i32);
            }
        }
        vec![low, high]
    }
}
```