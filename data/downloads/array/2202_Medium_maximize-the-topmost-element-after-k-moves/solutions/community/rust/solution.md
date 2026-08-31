# Bruh

**Author:** tdf56f756bg56r8iohgwexu
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximize-the-topmost-element-after-k-moves/solutions/3135303/](https://leetcode.com/problems/maximize-the-topmost-element-after-k-moves/solutions/3135303/)

---

# Code
```
impl Solution {
    pub fn maximum_top(nums: Vec<i32>, k: i32) -> i32 {
        if k == 0 { return nums[0];}
        let k = k as usize;
        /* Edge Cases */
        match (nums.len(),k%2) {
            (1,0) => {return nums[0];},
            (1,1) => {return -1;},
            _ => ()
        };
        if k == 1 { return nums[1]; }
        /*           */
        *match k.cmp(&nums.len()) {
            std::cmp::Ordering::Equal => nums[..k-1].iter().max().unwrap(),
            std::cmp::Ordering::Greater => nums.iter().max().unwrap(),
            _ => if k == 2 { return nums[0].max(nums[2]); } else { nums[..k-1].iter().max().unwrap().max(&nums[k]) }            
        }
    }
}
```