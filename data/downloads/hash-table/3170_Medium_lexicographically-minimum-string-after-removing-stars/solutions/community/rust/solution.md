# Hash Table + Stack

**Author:** AzizKAZ
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographically-minimum-string-after-removing-stars/solutions/5335220/](https://leetcode.com/problems/lexicographically-minimum-string-after-removing-stars/solutions/5335220/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Hash Table + Stack

# Complexity
- Time complexity: $O(n \\cdot logn)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(n)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

where $n$ is the length of the $s$ string

# Code
```
impl Solution {
    pub fn clear_stars(s: String) -> String {
        let mut h = vec![Vec::new(); 26];

        for (j, c) in s.chars().enumerate() {
            if c == '*' {
                for i in 0..26 {
                    if !h[i].is_empty() {
                        h[i].pop();
                        break;
                    }
                }
            } else {
                let k = (c as u8 - b'a') as usize;

                h[k].push(j);               
            }
        } 

        let mut r = Vec::new();

        for j in 0..26 {
            for &i in &h[j] {
                r.push((i, (j as u8 + b'a') as char));
            }
        }      

        r.sort_unstable();

        r.iter().map(|t| t.1).collect()
    }
}
```