# Rust recursion

**Author:** phsaikiran
**Votes:** 0
**Link:** [https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/solutions/2507858/](https://leetcode.com/problems/splitting-a-string-into-descending-consecutive-values/solutions/2507858/)

---

```
impl Solution {
    fn c_to_i(ch: char) -> i128 {
        match ch {
            '0' => 0,
            '1' => 1,
            '2' => 2,
            '3' => 3,
            '4' => 4,
            '5' => 5,
            '6' => 6,
            '7' => 7,
            '8' => 8,
            '9' => 9,
            _ => panic!("Invalid character in ctoi")
        }
    }

    fn str_to_i(str: &str) -> i128 {
        let mut num: i128 = 0;
        for ch in str.chars() {
            num = num * 10 + Self::c_to_i(ch);
        }
        return num;
    }

    fn rec(str: &str, start: usize, end: usize, prev_num: i128) -> bool {
        let len = str.len();
        if end >= len {
            return false;
        }

        let num = Solution::str_to_i(&str[start..=end]);
        if start != 0 && prev_num - num != 1 {
            return false;
        }
        if end == len - 1 {
            return true;
        }

        for i in 0..(len - end) {
            let ret = Solution::rec(str, end + 1, end + 1 + i, num);
            if ret {
                return true;
            }
        }
        return false;
    }

    pub fn split_string(s: String) -> bool {
        let len = s.len();
        for i in 0..(len - 1) {
            let ret = Solution::rec(&s, 0, i, -1);
            if ret {
                return true;
            }
        }
        return false;
    }
}
```