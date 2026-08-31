# Rust: use k's divisors

**Author:** Minamikaze392
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-array-pairs-divisible-by-k/solutions/5613215/](https://leetcode.com/problems/count-array-pairs-divisible-by-k/solutions/5613215/)

---

# Complexity
- Time complexity: $$O(n * y)$$, where $$y$$ is number of divisors `k` has.

- Space complexity: $$O(k)$$

# Code
```
impl Solution {
    pub fn count_pairs(nums: Vec<i32>, k: i32) -> i64 {
        let k = k as usize;
        let divisors = Self::get_divisors(k);
        let mut count = vec![0i64; k + 1];
        let mut ans = 0i64;
        for x in nums.iter().map(|&x| x as usize) {
            let mut divided = false;
            for &y in divisors.iter() {
                if x % y == 0 {
                    if !divided {
                        ans += count[k / y];
                        divided = true;
                    }
                    count[y] += 1;
                }
            }
        }
        ans
    }

    fn get_divisors(k: usize) -> Vec<usize> {
        let mut divisors = vec![1usize];
        let mut divisors2 = vec![k];
        for i in 2..k {
            if i * i > k {
                break;
            }
            if k % i == 0 {
                divisors.push(i);
                divisors2.push(k / i);
            }
        }
        if divisors.last().unwrap() == divisors2.last().unwrap() {
            divisors.pop();
        }
        divisors.reverse();
        divisors2.append(&mut divisors);
        divisors2
    }
}
```