# Trie + Dynamic Programming

**Author:** AzizKAZ
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-i/solutions/5799220/](https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-i/solutions/5799220/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Trie + Dynamic Programming

# Complexity
- Time complexity: $O(n^2)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(n)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
where $n$ is the maximum length between $target$ string, $words$ array and the maximum length of the $words[i]$

# Code
```rust []
#[derive(Debug)]
struct Node {
    childs: [Option<Box<Node>>; 26]
}

impl Solution {
    pub fn min_valid_strings(words: Vec<String>, target: String) -> i32 {
        let mut r = Box::new(
            Node { 
                childs: Default::default()
            }
        );

        for w in words {
            let mut t = &mut r;

            for c in w.chars() {
                let i = (c as u8 - b'a') as usize;

                if t.childs[i].is_none() {
                    t.childs[i] = Some(
                        Box::new(
                            Node {
                                childs: Default::default()
                            }
                        )
                    );
                }

                t = t.childs[i].as_mut().unwrap();
            }
        }

        let n = target.len();
        let b = target.as_bytes();

        let i = (b[0] - b'a') as usize;

        if r.childs[i].is_none() {
            return -1;
        }

        let mut dp = vec![i32::MAX; n + 1];

        dp[0] = 1;        

        for i in 0..n {
            if dp[i] == i32::MAX {
                return -1;
            }

            let mut j = i;
            let mut k = (b[j] - b'a') as usize;

            let mut t = &mut r;
            
            while t.childs[k].is_some() {
                t = t.childs[k].as_mut().unwrap();
                j += 1;

                if j == n {
                    dp[j] = dp[j].min(dp[i]);

                    break;
                }   

                k = (b[j] - b'a') as usize;

                dp[j] = dp[j].min(dp[i] + 1);
            }
        }

        if dp[n] == i32::MAX {-1} else {dp[n]}
    }
}
```