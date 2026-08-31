# Rust | Constant space | Two pointers | O(n)

**Author:** jhndoe
**Votes:** 7
**Link:** [https://leetcode.com/problems/string-compression/solutions/2858069/](https://leetcode.com/problems/string-compression/solutions/2858069/)

---

```
impl Solution {
    pub fn compress(chars: &mut Vec<char>) -> i32 {
        let mut p: usize = 0;
        let mut right: usize = 1;
        let mut counter: usize = 1;
        
        while right != chars.len() + 1 {
            if right == chars.len() || chars[right] != chars[right-1] {
                chars[p] = chars[right-1];
                
                if counter != 1 {
                    let num_str = counter.to_string();
                    for el in num_str.as_bytes().iter() {
                        p += 1;
                        chars[p] = *el as char;
                    }
                }
                p += 1;
                counter = 0;
            }
            right += 1;
            counter += 1;
        }
        
        return p as i32;
    }
}
```