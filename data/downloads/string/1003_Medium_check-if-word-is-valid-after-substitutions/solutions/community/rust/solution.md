# simple solution using stack, can be copied to any lang | RUST^tm

**Author:** garbagedevvv
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/solutions/4157045/](https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/solutions/4157045/)

---

# Code
```
impl Solution {
    pub fn is_valid(s: String) -> bool {
        let mut stack: Vec<char> = vec![];
        let mut count: i32 = 0;
        let valid_count: i32 = s.len() as i32 / 3;
        // println!("valid_count : {}", valid_count);

        let s_chars: Vec<char> = s.chars().collect();
        for i in 0..s_chars.len() {
            if s_chars[i] == 'c' {
                if stack.len() < 2 {return false}
                let b = stack.pop().unwrap();
                let a = stack.pop().unwrap();
                if b != 'b' {return false}
                if a != 'a' {return false}
                count += 1;
                continue;
            }
            stack.push(s_chars[i]);
        }

        if stack.len() != 0 {return false}

        count == valid_count
    }
}
```