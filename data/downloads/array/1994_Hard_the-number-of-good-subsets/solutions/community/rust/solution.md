# Rust backtracking beats 100%

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/the-number-of-good-subsets/solutions/5215149/](https://leetcode.com/problems/the-number-of-good-subsets/solutions/5215149/)

---

# Approach
1. There are in total 20 values within the range (1..=30) that can be included in the subset. Find the prime factors for each of them and store them as bitmasks (except 1 marked with 1).
2. Count the number of occurence of each of the 20 values with `count: Vec<i32>`.
3. For choosing `1`s, number of combinations is `2^count[1]`.
4. For the other 19 values, use backtracking to try each combination, using a bitmask to keep record of which prime factors are being included.
5. Multiply results of 3. and 4. for the [answer](https://leetcode.com/submissions/detail/1269210853/).

# Complexity
- Time complexity: $$O(n + C)$$
- Space complexity: $$O(c)$$

Where $$c$$ is a small constant, and $$C$$ is a big constant due to backtracking.

# Code
```
const LARGE: i64 = 1_000_000_007;
const PRIMES: [i32; 10] = [2,3,5,7,11,13,17,19,23,29];

impl Solution {
    pub fn number_of_good_subsets(nums: Vec<i32>) -> i32 {
        let mut count = [0i64; 31];
        let factors = Self::gen_factors();
        for &x in nums.iter() {
            if factors[x as usize] != 0 {
                count[x as usize] += 1;
            }
        }
        let one = Self::power(2, count[1]);
        let ge_two = Self::backtrack(2, 0, &factors, &count);
        ((one * ge_two) % LARGE) as i32
    }

    fn gen_factors() -> Vec<i32> {
        let mut factors = vec![0; 31];
        factors[1] = 1;
        for i in 2..=30 {
            let mut x = i;
            let mut mask = 0;
            for &y in PRIMES.iter() {
                if x % y == 0 {
                    x /= y;
                    if x % y == 0 {
                        break;
                    }
                    mask |= 1 << y;
                }
                if x == 1 {
                    break;
                }
            }
            if x == 1 {
                factors[i as usize] = mask;
            }
        }
        factors
    }

    fn power(mut n: i64, mut p: i64) -> i64 {
        let mut ans = 1;
        while p > 0 {
            if p & 1 == 1 {
                ans = (ans * n) % LARGE;
            }
            n = (n * n) % LARGE;
            p >>= 1;
        }
        ans
    }

    fn backtrack(i: usize, visited: i32, factors: &Vec<i32>, count: &[i64; 31]) -> i64 {
        if i == 31 {
            return if visited == 0 { 0 } else { 1 };
        }

        let mut ans = Self::backtrack(i + 1, visited, factors, count);
        if count[i] != 0 && (visited & factors[i]) == 0 {
            let visited2 = visited | factors[i];
            let ans2 = Self::backtrack(i + 1, visited2, factors, count);
            ans = (ans + count[i] * ans2) % LARGE;
        }
        ans
    }
}
```