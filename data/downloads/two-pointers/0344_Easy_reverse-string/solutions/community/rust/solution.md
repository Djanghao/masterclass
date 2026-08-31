# Simple Rust solutions, recursive and iterator

**Author:** panarch
**Votes:** 6
**Link:** [https://leetcode.com/problems/reverse-string/solutions/497258/](https://leetcode.com/problems/reverse-string/solutions/497258/)

---

1. Recursive
```
impl Solution {
    fn swap(s: &mut Vec<char>, beg: usize, end: usize) {
        if beg >= end { return; }

        s.swap(beg, end);

        Solution::swap(s, beg + 1, end - 1);
    }

    pub fn reverse_string(s: &mut Vec<char>) {
        match s.len() {
            0 => (),
            l => Solution::swap(s, 0, l - 1),
        };
    }
}
```

2. Using iterator
```
impl Solution {
    pub fn reverse_string(s: &mut Vec<char>) {
        match s.len() {
            0 => (),
            size => {
                (0..(size / 2)).into_iter().for_each(|beg| {
                    let end = size - 1 - beg;

                    s.swap(beg, end);
                });
            }
        };
    }
}
```