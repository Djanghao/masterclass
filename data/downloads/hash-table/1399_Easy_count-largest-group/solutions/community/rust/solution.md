# Rust simple solution

**Author:** BigMih
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-largest-group/solutions/1339014/](https://leetcode.com/problems/count-largest-group/solutions/1339014/)

---

```
impl Solution {
    pub fn count_largest_group(n: i32) -> i32 {
        let sum_dig = |mut x| {
            let mut sum = 0;
            loop {
                sum += x % 10;
                x /= 10;
                if x < 10 {
                    break sum + x;
                }
            }
        };

        let mut arr_groups = [0; 37]; // 9999 - 36 max sum
        let mut max_group = 0;

        (1..=n as usize).map(|x| sum_dig(x)).for_each(|x| {
            arr_groups[x] += 1;
            max_group = max_group.max(arr_groups[x]);
        });

        arr_groups.iter().filter(|&&x| x == max_group).count() as i32
    }
}
```