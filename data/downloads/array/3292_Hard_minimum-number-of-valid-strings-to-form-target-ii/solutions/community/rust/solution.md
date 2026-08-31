# Rabin-Karp Hash Function + Modular Arithmetic + Prefix Sum + Binary Search + Segment Tree

**Author:** AzizKAZ
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-ii/solutions/5800909/](https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-ii/solutions/5800909/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- Let $dp[i]$ be the minimum cost to form the prefix of length $i$ of target.
- Use Rabin-Karp to hash every prefix of the $words$ and store it in a HashSet.
- Use prefix sum to hash every prefix of the $target$ string
- Use Binary search to find the longest substring starting at index $i$ ($target[i..j]$) that has a hash present in the HashSet.
- Use Segment Tree to update $dp[i..j]$

# Approach
<!-- Describe your approach to solving the problem. -->
Rabin-Karp Hash Function + Modular Arithmetic + Prefix Sum + Binary Search + Segment Tree

# Complexity
- Time complexity: $O(m*l + n*logn)$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(m*l + n)$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
where $m$ is the length of the $words$ array, $l$ is the maximum length of the string in the $words$ array, and $n$ is the length of the $target$ string

# Code
```rust []
use std::collections::HashSet;

const MOD: i128 = 1000000000000000007;

impl Solution {
    pub fn min_valid_strings(words: Vec<String>, target: String) -> i32 {
        let mut h = HashSet::new();        

        for w in words {
            let mut s = 0;

            for c in w.chars() {
                s = (27*s + (c as u8 - b'a' + 1) as i128) % MOD;
                h.insert(s);
            }
        }

        let n = target.len();
        let b = target.as_bytes();

        let mut p = vec![0; n];
        let mut ht = vec![0; n];

        let mut s = 0;

        for i in 0..n {            
            s = (27*s + (b[i] - b'a' + 1) as i128) % MOD;

            if i == 0 {
                p[i] = 1;
            } else {
                p[i] = (27*p[i-1]) % MOD;
            }

            ht[i] = s;            
        }

        let l = Self::search(0, &h, &ht, &p);

        if l == 0 {
            return -1;
        }

        if l == n {
            return 1;
        }       

        let mut t = vec![0; 2*n + 1];

        for i in 0..n+1 {
            t[i+n] = i32::MAX;
        }

        for i in (2..t.len()).step_by(2).rev() {
            t[(i-1)/2] = t[i].min(t[i-1]);
        }         

        Self::set(0, 1, n + 1, &mut t);
        Self::set(l, 2, n + 1, &mut t);

        for i in 1..n {
            let c = Self::min(i, n, n + 1, &t);

            if c == i32::MAX {
                return -1;
            }

            let l = Self::search(i, &h, &ht, &p);

            if i + l == n {
                Self::set(n, c, n + 1, &mut t);
            } else {
                let pc = Self::min(i + l, i + l, n + 1, &t);

                if pc > c + 1 {
                    Self::set(i + l, c + 1, n + 1, &mut t);
                }
            }
        }

        let c = Self::min(n, n, n + 1, &t);

        if c == i32::MAX {-1} else {c}
    }  

    pub fn search(i: usize, h: &HashSet<i128>, ht: &Vec<i128>, p: &Vec<i128>) -> usize {
        let n = ht.len();

        let mut l = 0;
        let mut r = n - i;

        while l < r {
            let m = (l + r + 1)/2;

            let mut hc = ht[i+m-1];            

            if i > 0 {
                hc = (hc + MOD - (ht[i-1]*p[m]) % MOD) % MOD;
            }                        

            if h.contains(&hc) {
                l = m;
            } else {
                r = m - 1;
            }
        }

        l
    }

    pub fn min(mut i: usize, mut j: usize, n: usize, t: &Vec<i32>) -> i32 {
        i += n;
        j += n;

        let mut r = i32::MAX;

        while i <= j {
            if i % 2 == 1 {
                r = r.min(t[i-1]);
                i += 1;
            } 
            
            if j % 2 == 0 {
                r = r.min(t[j-1]);
                j -= 1;
            }

            i /= 2;
            j /= 2;
        }

        r
    }    

    pub fn set(mut k: usize, v: i32, n: usize, t: &mut Vec<i32>) {
        k += n;

        t[k-1] = v;

        k /= 2;

        while k >= 1 {
            t[k-1] = t[2*k-1].min(t[2*k]);

            k /= 2;
        }
    }    
}
```