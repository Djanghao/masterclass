# check all pairs

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-almost-equal-pairs-i/solutions/6011860/](https://leetcode.com/problems/count-almost-equal-pairs-i/solutions/6011860/)

---

```rust []
impl Solution {
    pub fn check(mut x: i32, mut y: i32) -> bool {
        let mut d = 0;
        let mut d1 = (0,0);
        let mut z = 0;
        while x != 0 {
            let rx = x % 10;
            let ry = y % 10;
            
            if  rx != ry {
                d += 1;
                if d > 2 || (d == 2 && (ry, rx) != d1) {return false}
                d1 = (rx, ry)
            }
            x /= 10;
            y /= 10;
        }
        d == 0 || d == 2
    }
    pub fn count_pairs(nums: Vec<i32>) -> i32 {
        let mut total = 0;
        for i in 0..nums.len() {
            for j in i+1..nums.len() {
                let x = nums[i].max(nums[j]);
                let y = nums[i].min(nums[j]);
                if Self::check(x, y) {
                    total += 1
                }
            }
        }
        total
    }
}
```