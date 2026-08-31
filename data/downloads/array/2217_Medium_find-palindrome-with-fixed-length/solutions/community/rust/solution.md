# Rust iter().rev().collect(), O(n)

**Author:** goodgoodwish
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-palindrome-with-fixed-length/solutions/1893534/](https://leetcode.com/problems/find-palindrome-with-fixed-length/solutions/1893534/)

---

```
impl Solution {
    pub fn kth_palindrome(queries: Vec<i32>, int_length: i32) -> Vec<i64> {
        let mut res = vec![];
        let p_len = int_length;
        let mut is_odd = true;
        if p_len % 2 == 0 {
            is_odd = false;
        }
        let half = if is_odd {
            p_len / 2 + 1
        } else {
            p_len / 2
        };
        let half = half as u32;
        let start = 10_i32.pow(half - 1);
        let end = start * 10;
        
        for q in queries {
            if q > end - start {
                res.push(-1);
                continue
            }
            let pal = start + q - 1;
            // println!("pal is {:?}", pal);
            let mut cs: Vec<char> = pal.to_string().chars().collect();
            if is_odd {
                cs.pop();
            }
            let last_half: String = cs.iter().rev().collect();
            // println!("es is {:?}", es);
            let mut curr = pal.to_string();
            curr.push_str(&last_half[..]);
            // println!("curr is {:?}", curr);
            let curr:i64 = curr.parse().map_or(0, |v| v);
            // println!("curr is {:?}", curr);
            res.push(curr);
        }
        
        res
        
    }
}
```