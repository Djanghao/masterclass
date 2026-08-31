# Rust "just works" solution runtime 100%, memory 100%

**Author:** two-six
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-operations-to-make-all-array-elements-equal-to-1/solutions/3509361/](https://leetcode.com/problems/minimum-number-of-operations-to-make-all-array-elements-equal-to-1/solutions/3509361/)

---

It picks every number and travels through the array(while executing gcd on every step) until the number's value is equal to one or reaches the end of the array. It also skips some numbers if it's possible.
# Code
```
impl Solution {
    pub fn min_operations(nums: Vec<i32>) -> i32 {
        if nums.contains(&1) {
            return nums.iter().filter(|n| **n != 1).count() as i32;
        }
        let mut distance: i32 = -1;
        let mut i = 0;
        while i < nums.len() {
            let mut cur_num = nums[i];
            for j in i+1..nums.len() {
                let g = Self::gcd(nums[j], cur_num);
                if g == nums[j] {
                    i = j-1;
                    break;
                }
                if g == 1 {
                    if distance == -1 || distance > (j - i) as i32 {
                        distance = (j - i) as i32;
                        break;
                    }
                } else {
                    cur_num = g;
                }
            }
            i += 1;
        }
        
        if distance == -1 {
            -1
        } else {
            distance - 1 + nums.len() as i32
        }
    }

    fn gcd(a: i32, b: i32) -> i32 {
        let (mut a, mut b) = (a, b);
        while b != 0 {
            let temp = b;
            b = a % b;
            a = temp;
        }
        a
    }
}
```