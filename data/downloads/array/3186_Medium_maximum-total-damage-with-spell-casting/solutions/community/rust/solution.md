# ✅[DP]✅Flatten the list and DP

**Author:** nisaacdz
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-total-damage-with-spell-casting/solutions/5319884/](https://leetcode.com/problems/maximum-total-damage-with-spell-casting/solutions/5319884/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
Sort the powers
Flatten the power list
Use 0/1 dp to find the best combination of powers

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
class Solution {
public:
  long long maximumTotalDamage(vector<int>& power) {
    sort(power.begin(), power.end()); // Sort power vector

    vector<long long> vals;
    vector<int> count;

    for (int p : power) {
      if (vals.empty() || vals.back() != p) {
        vals.push_back(p);
        count.push_back(1);
      } else {
        count.back()++;
      }
    }

    vector<long long> dp(vals.size(), 0);

    for (int i = 0; i < dp.size(); ++i) {
      long long res = vals[i] * count[i];
      long long max_add = 0;

      for (int j = 1; j <= 5; ++j) {
        if (i >= j && vals[i] - vals[i - j] > 2) {
          max_add = max(max_add, dp[i - j]);
        }
      }

      dp[i] = res + max_add;
    }

    return *max_element(dp.begin(), dp.end());
  }
};
```
```rust []
impl Solution {
    pub fn maximum_total_damage(mut power: Vec<i32>) -> i64 {
        power.sort_unstable();
        let (vals, count) = {
            let (mut vals, mut count) = (Vec::new(), Vec::new());
            for p in power {
                if vals.is_empty() || vals[vals.len() - 1] != p as i64 {
                    vals.push(p as i64);
                    count.push(1);
                } else {
                    *count.last_mut().unwrap() += 1;
                }
            }
            (vals, count)
        };

        let mut dp = vec![0; vals.len()];
        
        for i in 0..dp.len() {
            let res = vals[i] * count[i];
            let mut max_add = 0;
            
            for j in 1..=5 {
                if i >= j && vals[i] - vals[i - j] > 2 {
                    max_add = i64::max(max_add, dp[i - j]);
                }
            }

            dp[i] = res + max_add;
        }

        *dp.iter().max().unwrap()
    }
}
```