# Just a runnable solution

**Author:** ssrlive
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-sum-of-the-power-of-all-subsequences/solutions/5007212/](https://leetcode.com/problems/find-the-sum-of-the-power-of-all-subsequences/solutions/5007212/)

---


```
impl Solution {
    pub fn sum_of_power(nums: Vec<i32>, k: i32) -> i32 {
        let n = nums.len();
        let nums = nums.iter().map(|&x| x as i64).collect::<Vec<i64>>();
        let mut dp = vec![vec![vec![-1; 101]; 101]; 101];
        (Self::fun(&mut dp, n, 0, 0, 0, &nums, k as _) % 1_000_000_007) as _
    }

    fn power(x: i64, y: usize, p: i64) -> i64 {
        let mut res = 1;
        let mut x = x % p;
        if x == 0 {
            return 0;
        }
        let mut y = y;
        while y > 0 {
            if y & 1 == 1 {
                res = (res * x) % p;
            }
            y >>= 1;
            x = (x * x) % p;
        }
        res
    }

    fn fun(dp: &mut Vec<Vec<Vec<i64>>>, n: usize, ind: usize, sum: i64, cnt: i64, nums: &Vec<i64>, k: i64) -> i64 {
        if ind >= n {
            if sum == k {
                return Self::power(2, n - cnt as usize, 1_000_000_007) % 1_000_000_007;
            }
            return 0;
        }

        if dp[ind][sum as usize][cnt as usize] != -1 {
            return dp[ind][sum as usize][cnt as usize];
        }

        let sum1 = Self::fun(dp, n, ind + 1, sum, cnt, nums, k) % 1_000_000_007;
        let sum2 = if sum + nums[ind] <= k {
            Self::fun(dp, n, ind + 1, sum + nums[ind], cnt + 1, nums, k) % 1_000_000_007
        } else {
            0
        };

        dp[ind][sum as usize][cnt as usize] = (sum1 + sum2) % 1_000_000_007;
        dp[ind][sum as usize][cnt as usize]
    }
}
```