# try to publish result

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/total-characters-in-string-after-transformations-i/solutions/6002555/](https://leetcode.com/problems/total-characters-in-string-after-transformations-i/solutions/6002555/)

---

```rust []
impl Solution {
    pub fn length_after_transformations(s: String, t: i32) -> i32 {
        let module = 10_i32.pow(9) + 7;
        // use a hashmap to update the frequency of each letter
        let mut frequency_map: std::collections::HashMap<char, i32> = ('a'..='z').map(|c| (c, 0)).collect();
        for ch in s.chars() {
            *frequency_map.get_mut(&ch).unwrap() += 1;
        }
        for _ in 0..t {
            // step 1: remember the frequency of z, as it will be overwritten later
            let z_freq = *frequency_map.get(&'z').unwrap() % module;
            // step 2: update each non-z character from y to b
            for ch in ('a'..='y').rev() {
                let ch_freq = frequency_map.get(&ch).unwrap();
                let next_ch = (ch as u8 + 1) as char;
                *frequency_map.get_mut(&next_ch).unwrap() = *ch_freq;
            }
            // step 3: transform 'z'
            *frequency_map.get_mut(&'a').unwrap() = z_freq;
            // avoid add overflow
            let tmp = *frequency_map.get(&'b').unwrap() % module;
            *frequency_map.get_mut(&'b').unwrap() = (tmp + z_freq) % module;
        }
        frequency_map.values().fold(0_i32, |acc, &x| (acc + x) % module)
    }
}

```