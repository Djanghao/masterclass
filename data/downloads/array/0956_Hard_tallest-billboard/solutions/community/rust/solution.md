# Rust dp solution

**Author:** williamcs
**Votes:** 2
**Link:** [https://leetcode.com/problems/tallest-billboard/solutions/3675336/](https://leetcode.com/problems/tallest-billboard/solutions/3675336/)

---


```
impl Solution {
    pub fn tallest_billboard(rods: Vec<i32>) -> i32 {
        let sum = rods.iter().sum::<i32>();
        let mut f = vec![-1; sum as usize + 1];

        f[0] = 0;

        for rod in rods {
            let curr = f.clone();
            for i in 0..=sum - rod {
                if curr[i as usize] < 0 {
                    continue;
                }
                f[(i + rod) as usize] = f[(i + rod) as usize].max(curr[i as usize]);
                f[(i - rod).abs() as usize] = f[(i - rod).abs() as usize].max(curr[i as usize] + rod.min(i));
            }
        }

        f[0]
    }
}
```