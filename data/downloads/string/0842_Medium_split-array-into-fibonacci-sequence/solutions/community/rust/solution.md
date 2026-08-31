# "It just works"

**Author:** cartilage
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-array-into-fibonacci-sequence/solutions/5126045/](https://leetcode.com/problems/split-array-into-fibonacci-sequence/solutions/5126045/)

---

```rust
impl Solution {
    fn valid_i32(num: &str) -> Option<i64> {
        // i64 is use to avoid overflowing
        if num.starts_with("0") && num.len() > 1 {
            return None;
        }
        let n = i64::from_str_radix(num, 10).unwrap();
        return if n <= i32::MAX as _ { Some(n) } else { None };
    }
    fn split(mut fst: i64, mut snd: i64, mut num: &str) -> Option<Vec<i32>> {
        if num.is_empty() {
            return None;
        }
        let mut ans = vec![fst as _, snd as _];
        while !num.is_empty() {
            let next = fst + snd;
            if next > i32::MAX as _ {
                return None;
            }
            let n = next.to_string();
            if num.starts_with(&n) {
                ans.push(next as _);
                num = &num[n.len()..];
            } else {
                return None;
            }
            fst = snd;
            snd = next;
        }
        Some(ans)
    }
    pub fn split_into_fibonacci(num: String) -> Vec<i32> {
        let nums = num.as_bytes();
        for i in 1..nums.len() - 2 {
            let fst = match Self::valid_i32(&num[0..i]) {
                None => break,
                Some(n) => n,
            };
            for j in (i + 1)..nums.len() - 1 {
                let snd = match Self::valid_i32(&num[i..j]) {
                    None => break,
                    Some(n) => n,
                };
                if let Some(res) = Self::split(fst, snd, &num[j..]) {
                    return res;
                }
            }
        }
        return Vec::new();
    }
}
```