# Rust | (1ms, 2.1 MB)

**Author:** RBird111
**Votes:** 1
**Link:** [https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/solutions/2954847/](https://leetcode.com/problems/path-in-zigzag-labelled-binary-tree/solutions/2954847/)

---

# Code
```
impl Solution {
    pub fn path_in_zig_zag_tree(mut label: i32) -> Vec<i32> {
        let mut vec = vec![];
        while label > 0 {
            vec.push(label);
            label /= 2;
            if label == 0 { break; }
            let mut exp = 0;
            while 2i32.pow(exp) <= label { exp += 1; }
            label = 2i32.pow(exp) - 1 - (label - 2i32.pow(exp - 1));
        }
        vec.iter().copied().rev().collect()
    }
}
```