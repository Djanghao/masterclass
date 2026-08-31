# Rust prefix arrays solution

**Author:** 54k
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-good-days-to-rob-the-bank/solutions/3648264/](https://leetcode.com/problems/find-good-days-to-rob-the-bank/solutions/3648264/)

---

# Code
```
impl Solution {
    pub fn good_days_to_rob_bank(security: Vec<i32>, time: i32) -> Vec<i32> {
        let mut p1 = vec![0; security.len()];
        for i in 1..p1.len() {
            if security[i - 1] >= security[i] {
                p1[i] = 1 + p1[i - 1];
            }
        }
        // println!("{:?}", p1);

        let mut p2 = vec![0; security.len()];
        for i in (0..p2.len()-1).rev() {
            if security[i + 1] >= security[i] {
                p2[i] = 1 + p2[i + 1];
            }
        }
        // println!("{:?}", p2);

        let mut ans = vec![];

        for i in 0..security.len() {
            if p1[i] >= time && p2[i] >= time {
                ans.push(i as i32);
            }
        }

        ans
    }
}
```