# Rust Solution

**Author:** abhineetraj1
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-count-of-good-integers/solutions/5904315/](https://leetcode.com/problems/find-the-count-of-good-integers/solutions/5904315/)

---

# Intuition
The task is to count the "good integers" that can be formed with certain properties based on the input parameters. A "good integer" is defined as one that meets specific conditions, including being divisible by `k` and being a palindrome. The idea is to explore combinations of digits while efficiently checking these conditions.

# Approach
1. **Factorial Precomputation**: First, we compute the factorial values for digits from 0 to 10. This is necessary for calculating permutations later.

2. **Generating Candidates**: We loop through all numbers up to \\(10^{(n+1)/2}\\) to generate potential candidates. For each candidate, we construct a number of length `n` by mirroring its digits. 

3. **Check Conditions**: For each constructed number:
   - Check if it is divisible by `k`.
   - Check if it is a palindrome using a helper function. We also ensure that we only count unique palindromes by using a hash set.

4. **Calculate Permutations**: If the number is a good integer, calculate how many unique permutations can be formed with its digits using the precomputed factorial values.

5. **Return the Count**: Sum up all the valid good integers and return the total count.


# Code
```rust []
use std::collections::HashSet;

impl Solution {
    pub fn count_good_integers(n: i32, k: i32) -> i64 {
        let factorial = Solution::fact();
        let mut ans = 0;
        let mut mh = HashSet::new();
        let m = (n + 1) / 2;
        let till = 10_i64.pow(m as u32);
        for i in 0..till {
            let x = Solution::create(i, n);
            if x % k as i64 == 0 && Solution::palindrome(x, &mut mh) {
                ans += Solution::permutation(x, &factorial);
            }
        }
        ans
    }
    fn fact() -> Vec<i64> {
        let mut factorial = vec![1; 11];
        let mut pro = 1;
        for i in 1..11 {
            pro *= i as i64;
            factorial[i] = pro;
        }
        factorial
    }
    fn create(num: i64, n: i32) -> i64 {
        let mut res = num;
        let mut pro = 10_i64.pow((n - 1) as u32);
        let mut n = n / 2;
        let mut num = num;

        while num > 0 && n > 0 {
            res += (num % 10) * pro;
            pro /= 10;
            num /= 10;
            n -= 1;
        }
        res
    }
    fn permutation(n: i64, fact: &[i64]) -> i64 {
        let mut arr = [0; 11];
        let sarr = n.to_string().chars().collect::<Vec<_>>();
        
        for c in sarr.iter() {
            arr[c.to_digit(10).unwrap() as usize] += 1;
        }
        
        let total_freq = sarr.len() as i64;
        let mut total_freq = fact[total_freq as usize];
        let mut res = 1;
        
        for &count in arr.iter() {
            res *= fact[count as usize];
        }
        
        total_freq /= res;
        
        if arr[0] == 0 {
            return total_freq;
        }
        
        res = 1;
        arr[0] -= 1;
        let total = fact[sarr.len() - 1];
        
        for &count in arr.iter() {
            res *= fact[count as usize];
        }
        
        total_freq - (total / res)
    }

    fn palindrome(num: i64, mh: &mut HashSet<String>) -> bool {
        let sarr: Vec<char> = num.to_string().chars().collect();
        let (mut i, mut j) = (0, sarr.len() - 1);
        
        while i < j {
            if sarr[i] != sarr[j] {
                return false;
            }
            i += 1;
            j -= 1;
        }

        let mut sorted_sarr = sarr.clone();
        sorted_sarr.sort();
        let sorted_str: String = sorted_sarr.iter().collect();
        
        if mh.contains(&sorted_str) {
            return false;
        }

        mh.insert(sorted_str);
        true
    }
}
```