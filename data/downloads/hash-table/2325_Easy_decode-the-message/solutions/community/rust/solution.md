# Rust - Linear Scan

**Author:** idiotleon
**Votes:** 2
**Link:** [https://leetcode.com/problems/decode-the-message/solutions/2229841/](https://leetcode.com/problems/decode-the-message/solutions/2229841/)

---

Solution - [github](https://github.com/An7One/lc_soln_rust_leon/tree/main/src/leetcode/lvl1/lc2325)

<b>Problem List</b>
#LinearScan-String - [github](https://github.com/An7One/leetcode-problems-by-tag-an7one/blob/main/txt/by_data_structure/string/by_technique/n_pointers/linear_scan.txt)
#FirstVSLastIndices-String - [github](https://github.com/An7One/leetcode-problems-by-tag-an7one/blob/main/txt/by_data_structure/string/by_technique/last_vs_first_indexes.txt)
#LinearScan - [github](https://github.com/An7One/leetcode-problems-by-tag-an7one/tree/main/txt/by_technique/n_pointers/by_pointer_amount/linear_scan)


<b>With a `HashMap`</b>

by @rcode0:
```
// 0 ms.
impl Solution {
    pub fn decode_message(key: String, message: String) -> String {
        let mut map = HashMap::new();
        let mut vals = 'a'..='z';
        
        for k in key.chars().filter(|&c| c != ' ') {
            if let Entry::Vacant(e) = map.entry(k) {
                e.insert(vals.next().unwrap());
            }
        }

        message.chars()
            .map(|c| *map.get(&c).unwrap_or(&c))
            .collect()
    }
}
```
Inspired by this solution:

```
use std::collections::HashMap;
/// @author: Leon
/// https://leetcode.com/problems/decode-the-message/
/// Time Complexity:    O(`_len_k`) + O(`_len_m`) ~ O(max(`_len_k`. `_len_m`))
/// Space Complexity:   O(1)
/// Reference:
/// https://leetcode.com/problems/decode-the-message/discuss/2229841/Rust-Linear-Scan/1470667
impl Solution {
    pub fn decode_message(key: String, message: String) -> String {
        let _len_k: usize = key.len();
        let _len_m: usize = message.len();
        const SPACE: char = ' ';
        let dict: HashMap<char, char> = {
            let mut map: HashMap<char, char> = HashMap::with_capacity(26);
            let mut iter_all_letters = 'a'..='z';
            for ch in key.chars().filter(|&c| c != SPACE) {
                map.entry(ch)
                    .or_insert_with(|| iter_all_letters.next().unwrap());
            }
            map
        };
        message
            .chars()
            .map(|c| *dict.get(&c).unwrap_or(&c))
            .collect()
    }
}
```

<b>With an `Array` instead</b>

```
/// @author: Leon
/// https://leetcode.com/problems/decode-the-message/
/// Time Complexity:    O(`_len_k`) + O(`_len_m`) ~ O(max(`_len_k`. `_len_m`))
/// Space Complexity:   O(1)
impl Solution {
    pub fn decode_message(key: String, message: String) -> String {
        let _len_k: usize = key.len();
        let _len_m: usize = message.len();
        const RANGE: u8 = 26 + 1;
        const SPACE: char = ' ';
        let dict: Vec<u8> = {
            let mut dict: Vec<u8> = vec![RANGE; 26];
            let mut used: Vec<u8> = vec![0; 26];
            let mut distinct: u8 = 0;
            let mut idx_dict: usize = 0;
            for ch in key.chars() {
                if ch == SPACE {
                    continue;
                }
                let idx_ch: usize = ch as usize - 'a' as usize;
                if used[idx_ch] == 0 {
                    distinct += 1;
                    used[idx_ch] += 1;
                    dict[idx_ch] = idx_dict as u8;
                    idx_dict += 1;
                }
                // slight optimization
                if distinct == 26 {
                    break;
                }
            }
            dict
        };
        let mut ans: String = "".to_owned();
        for ch in message.chars() {
            if ch == SPACE {
                ans.push(SPACE);
                continue;
            }
            let idx_ch: usize = ch as usize - 'a' as usize;
            ans.push((dict[idx_ch] + 'a' as u8) as char);
        }
        ans
    }
}
```

Slightly different version
```
/// @author: Leon
/// https://leetcode.com/problems/decode-the-message/
/// Time Complexity:    O(`_len_k`) + O(`_len_m`) ~ O(max(`_len_k`. `_len_m`))
/// Space Complexity:   O(1)
impl Solution {
    pub fn decode_message(key: String, message: String) -> String {
        let _len_k: usize = key.len();
        let _len_m: usize = message.len();
        const RANGE: u8 = 26 + 1;
        const SPACE: u8 = b' ';
        let dict: Vec<u8> = {
            let mut dict: Vec<u8> = vec![RANGE; 26];
            let mut used: Vec<u8> = vec![0; 26];
            let mut distinct: u8 = 0;
            let mut idx_dict: usize = 0;
            for &b in key.as_bytes() {
                if b == SPACE {
                    continue;
                }
                let idx_ch: usize = (b - b'a') as usize;
                if used[idx_ch] == 0 {
                    distinct += 1;
                    used[idx_ch] += 1;
                    dict[idx_ch] = idx_dict as u8;
                    idx_dict += 1;
                }
                if distinct == 26 {
                    break;
                }
            }
            dict
        };
        let mut ans: String = "".to_owned();
        for &b in message.as_bytes() {
            if b == SPACE {
                ans.push(SPACE as char);
                continue;
            }
            let idx_ch: usize = (b - b'a') as usize;
            ans.push((dict[idx_ch] + b'a') as char);
        }
        ans
    }
}
```