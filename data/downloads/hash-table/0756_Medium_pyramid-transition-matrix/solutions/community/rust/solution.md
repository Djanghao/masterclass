# Backtracking

**Author:** AzizKAZ
**Votes:** 0
**Link:** [https://leetcode.com/problems/pyramid-transition-matrix/solutions/4338782/](https://leetcode.com/problems/pyramid-transition-matrix/solutions/4338782/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Backtracking
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: $O(m^n)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(n + m)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

where $n$ is the number of the elements in the $bottom$ string and $m$ is the number of the elements in the $allowed$ array

# Code
```
use std::collections::HashMap;

impl Solution {
    pub fn pyramid_transition(bottom: String, allowed: Vec<String>) -> bool {
        let b: Vec<char> = bottom.chars().collect();
        let a = allowed.iter()
            .fold(HashMap::new(), |mut h, p| {
                h.entry(&p[0..2])
                    .or_insert(Vec::new())
                    .push(&p[2..]);

                h
            });

        Self::search(&b, &a)      
    }

    pub fn search(b: &Vec<char>, a: &HashMap<&str, Vec<&str>>) -> bool {
        if b.len() == 1 {
            true
        } else {
            let mut s = String::new();

            Self::build(0, b, a, &mut s)
        }
    }

    pub fn build(
        i: usize, b: &Vec<char>, 
        a: &HashMap<&str, Vec<&str>>, 
        s: &mut String
    ) -> bool {
        if i == b.len() - 1 {
            let n: Vec<char> = s.chars().collect();

            Self::search(&n, a)
        } else {
            let mut k = String::new();

            k.push(b[i]);
            k.push(b[i + 1]);

            if !a.contains_key(&k.as_str()) {
                false
            } else {
                let v = &a[&k.as_str()];
                let mut f = false;

                for p in v {
                    s.push_str(p);

                    f = Self::build(i + 1, b, a, s);

                    s.pop();

                    if f {
                        break;
                    }
                }

                f
            }
        }
    }
}
```