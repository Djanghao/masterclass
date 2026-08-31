# Rust Module Division Using Fermat's Little Theorem

**Author:** xiaoping3418
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-anagrams/solutions/2946822/](https://leetcode.com/problems/count-anagrams/solutions/2946822/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1) The number of ways of counstructing the solution is the multiplication of the number of ways of constructing each unique word.
2) Assume f_1, f_2, ,, f_k are frequencies of distinct characters in a word, where f_1 + f_2 + ... + f_k = n. The number of ways to construct different anagram words is n! / (f_1! * f_2! * .. * f_k!).
3) Fermat's Little Theorem states: for any a < p (1000000007, which is a prime), a ^ ( p - 1) == 1 (mod p).
4) For any b (1 <= b <= p - 1) & a with b % a == 0, (b / a) % mod p == (b * a ^ (p - 2)) % mod p. We can use this equation to perform the division in helping getting the result from 2.          
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
use std::collections::HashMap;

impl Solution {
    pub fn count_anagrams(s: String) -> i32 {
        let mut mp = HashMap::<char, i32>::new();
        let n = s.len();
        let s = s.chars().collect::<Vec<char>>();
        let mut ret = 1;
        
        for i in 0 ..= n {
            if i == n || s[i] == ' ' {
                let data = mp.values().map(|a| *a).collect::<Vec<i32>>();
                ret = (ret * Self::calculate(&data) as i64) % 1_000_000_007;
                mp.clear();
            } else { *mp.entry(s[i]).or_insert(0) += 1; }
        } 
        
        ret as _
    }
    
    fn calculate(data: &Vec<i32>) -> i32 {
        let n = data.iter().sum::<i32>();
        let mut ret = 1;
        for k in 2 ..= n {
            ret = (ret * k as i64) % 1_000_000_007;
        }
        
        for d in data {
            for k in 2 ..= *d {
                ret = (ret * Self::divide(k) as i64) % 1_000_000_007;
            }
        }
        
        ret as _
    }
    
    fn divide(a: i32) -> i32 {
        let (mut base, mut ret) = (a as i64, 1);
        let mut m = 1_000_000_005;
        while m > 0 {
            if m % 2 == 1 { ret = (ret * base) % 1_000_000_007; }
            m >>= 1;
            base = (base * base) % 1_000_000_007;
        }
        
        ret as _
    }
}
```