# Rust Binary Search & DP

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-window-subsequence/solutions/2877247/](https://leetcode.com/problems/minimum-window-subsequence/solutions/2877247/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Iterate through s2
    1) Record the ending index & the length of all substring up to j-th charachter of s2 (j .. s2.len()).
    2) Use binary search to find the ending index of (j + 1)-th character. 
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(M * N *Log N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)
# Code
```
use std::collections::HashMap;

impl Solution {
    pub fn min_window(s1: String, s2: String) -> String {
        let (m, n) = (s2.len(), s1.len());
        let s1 = s1.chars().collect::<Vec<char>>();
        let s2 = s2.chars().collect::<Vec<char>>(); 
        let mut idx = vec![vec![]; 26];
        
        for i in 0 .. n {
            idx[(s1[i] as u8 - 'a' as u8) as usize].push(i);
        }
        
        let mut q = vec![];
        for i in &idx[(s2[0] as u8 - 'a' as u8) as usize] {
            q.push((*i, 1));
        }
        
        for j in 1 .. m {
            q.reverse();
            let k = (s2[j] as u8 - 'a' as u8) as usize;
            let mut temp = vec![];
            
            while let Some((i, len)) = q.pop() {
                let it = Self::binary_search(&idx[k], i, n);
                if it < n { temp.push((it, len + it - i)); }
            }
            q = temp;
        }
        
        if q.is_empty() { return String::new() }
        
        let (mut end, mut mn) = (n, n + 1);
        for (j, len) in q {
            if len >= mn { continue }
            mn = len;
            end = j;
        }
        
        let mut ret = vec![];
        for k in 0 .. mn { ret.push(s1[end - k]); }
        ret.reverse();
        
        ret.iter().collect()
    }
    
    fn binary_search(v: &Vec<usize>, i: usize, n: usize) -> usize {
        if v.is_empty() || v[v.len() - 1] <= i { return n }
        let (mut left, mut right) = (0, v.len() - 1);
        
        while left < right {
            let mid = left + (right - left) / 2;
            if v[mid] <= i { left = mid + 1; }
            else           { right = mid; }
        }
        
        v[left]
    }
}
```