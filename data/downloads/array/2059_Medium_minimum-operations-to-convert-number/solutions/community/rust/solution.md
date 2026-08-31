# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-convert-number/solutions/3247357/](https://leetcode.com/problems/minimum-operations-to-convert-number/solutions/3247357/)

---

# Code
```
impl Solution {
    pub fn minimum_operations(nums: Vec<i32>, start: i32, goal: i32) -> i32 {
        let mut seen = vec![false; 1001];
        let mut cnt = 0;
        let mut q = vec![goal];
        while !q.is_empty() {
            cnt += 1;
            let mut q1 = vec![];
            for &x in q.iter() {
                for &n in nums.iter() {
                    for &xn in [x + n, x - n, x ^ n].iter() {
                        if (0..=1000).contains(&xn) && !seen[xn as usize] {
                            if xn == start {
                                return cnt;
                            }
                            seen[xn as usize] = true;
                            q1.push(xn);
                        }
                    }
                }
            }
            q = q1;
        }
        -1
    }
}
```