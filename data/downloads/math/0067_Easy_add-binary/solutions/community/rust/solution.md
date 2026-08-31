# Rust | One-liner!

**Author:** AlexandruGG
**Votes:** 13
**Link:** [https://leetcode.com/problems/add-binary/solutions/1061502/](https://leetcode.com/problems/add-binary/solutions/1061502/)

---

Just for fun seeing some Python solutions wanted to find out how terse this could be done in Rust. Behold:

```
impl Solution {
    pub fn add_binary(a: String, b: String) -> String {
        format!("{:b}", u128::from_str_radix(&a, 2).unwrap() + u128::from_str_radix(&b, 2).unwrap())
    }
}
```