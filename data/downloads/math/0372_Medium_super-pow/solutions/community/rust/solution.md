# fold

**Author:** user5285Zn
**Votes:** 0
**Link:** [https://leetcode.com/problems/super-pow/solutions/4493387/](https://leetcode.com/problems/super-pow/solutions/4493387/)

---

Using $a ^{(10*y+x)} \\equiv (a^{10})^y + a^x \\pmod {1337}$

Note that `pow` could memoize it arguments.

```
fn pow(a:u64, x : usize) -> u64 {
    (0..x).fold(1, |acc,_| (acc*a) % 1337) 
}
impl Solution {
    pub fn super_pow(a: i32, b: Vec<i32>) -> i32 {
        let a = a as u64;
        b.into_iter().rev()
        .fold((1,a), |(r, a), x| 
            ((r*pow(a, x as usize)) % 1337, pow(a, 10))
        ).0 as _
    }
}
```