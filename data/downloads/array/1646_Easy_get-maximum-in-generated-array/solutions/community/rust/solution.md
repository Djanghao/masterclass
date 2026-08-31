# Rust solution

**Author:** BigMih
**Votes:** 1
**Link:** [https://leetcode.com/problems/get-maximum-in-generated-array/solutions/1176462/](https://leetcode.com/problems/get-maximum-in-generated-array/solutions/1176462/)

---

```
impl Solution {
    pub fn get_maximum_generated(n: i32) -> i32 {
        if n < 2 {
            return n;
        }
        
        let mut max_val = 0;
        let mut v = Vec::with_capacity(n as usize + 1);
        v.push(0);
        v.push(1);

        for i in 2..=n as usize {
            let val = match i % 2 == 0 {
                true => v[i / 2],
                false => v[i / 2] + v[i / 2 + 1],
            };
            max_val = max_val.max(val);
            v.push(val);
        }
        max_val
    }
}
```