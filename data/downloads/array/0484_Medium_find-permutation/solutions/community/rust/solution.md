# Rust | O(n) O(1)

**Author:** wallicent
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-permutation/solutions/2010457/](https://leetcode.com/problems/find-permutation/solutions/2010457/)

---

I love being able to offload much of the manual indexing using iterators:

```
impl Solution {
    pub fn find_permutation(s: String) -> Vec<i32> {
        let mut n = 1;
        s.split('I').flat_map(|seg| {
            let first = n;
            n += seg.len() + 1;
            (first as i32..n as i32).rev()
        }).collect()
    }
}
```