# Simple Rust

**Author:** germanov_dev
**Votes:** 0
**Link:** [https://leetcode.com/problems/string-without-aaa-or-bbb/solutions/5384649/](https://leetcode.com/problems/string-without-aaa-or-bbb/solutions/5384649/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
impl Solution {
    pub fn str_without3a3b(a: i32, b: i32) -> String {
        let (mut first, mut second,mut first_count, mut second_count) = ("a","b",a,b);
        if b > a { (first,second,first_count,second_count) = ("b","a",b,a); }
        let mut result = "".to_string();
        while first_count > 0 || second_count > 0 {
            if first_count > 0 { result.push_str(first.clone()); first_count -=1;}
            if first_count > second_count { result.push_str(first.clone()); first_count -=1;}
            if second_count > 0 { result.push_str(second.clone()); second_count -=1;}                   
        }
        result
    }
}
```