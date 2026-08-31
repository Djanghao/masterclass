# C++/Rust DP

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-sum-of-subsequence-powers/solutions/4953931/](https://leetcode.com/problems/find-the-sum-of-subsequence-powers/solutions/4953931/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The array is sorted in increasing order first.

For each subsequence, we focus the first gap that has the smallest value. Starting from from this pair, we search the remaining left part with a bigger gap value and remaining right part with the same gap value.

What happens if we do backward search using the same gap value, instead of bigger gap value?
# Approach
<!-- Describe your approach to solving the problem. -->
1) sort the array.
2) Prepare the gap values in sequence.
3) dpb[i][j][it]: the count of sequence on left of i that have length j and the gap value >= it-th gap value.
4) dpf[i][j][it]: the count of sequence on right of i that have length j and the gap value >= it-th gap value. 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N^4)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N^4)
# Code
```
// C++
class Solution {
public:
    int sumOfPowers(vector<int>& nums, int k) {
        int n = nums.size();
        set<int> temp;
        sort(nums.begin(), nums.end());
        for (int i = 0; i < n; ++i) {
            for (int j = i + 1; j < n; ++j) {
                if (nums[i] == nums[j]) continue;
                temp.insert(nums[j] - nums[i]);
            }
        }

        map<int, int> mp;
        int m = 0;
        for (auto &it: temp) {
            mp[it] = m;
            m += 1;
        }

        int mod = 1000000007;
        vector<vector<vector<int>>> dpf(n, vector<vector<int>>(k, vector<int>(m, -1)));
        vector<vector<vector<int>>> dpb(n, vector<vector<int>>(k, vector<int>(m, -1)));
        
        auto backward=[&](auto self, int i1, int i2, int i3) -> int64_t {
            if (i2 == 0) return 1;
            if (i3 >= m) return 0;

            if (dpb[i1][i2][i3] != -1) return dpb[i1][i2][i3];

            int ret = 0;
            for (int i = i1 - 1; i >= 0; --i) {
                if (nums[i1] == nums[i]) continue;

                int it = mp[nums[i1] - nums[i]];
                if (it < i3) continue;
                
                ret = (ret + self(self, i, i2 - 1, i3)) % mod;
            }
            return dpb[i1][i2][i3] = ret;
        };

        auto forward=[&](auto self, int i1, int i2, int i3) -> int64_t {
            if (i2 == 0) return 1;
            if (dpf[i1][i2][i3] != -1) return dpf[i1][i2][i3];

            int ret = 0;
            for (int i = i1 + 1; i < n; ++i) {
                if (nums[i1] == nums[i]) continue;

                int it = mp[nums[i] - nums[i1]];
                if (it < i3) continue;
                
                ret = (ret + self(self, i, i2 - 1, i3)) % mod;
            }
            return dpf[i1][i2][i3] = ret;
        };
        
        int64_t ret = 0;
        for (int i = 0; i < n; ++i) {
            for (int j = i + 1; j < n; ++j) {
                if (nums[i] == nums[j]) continue;
                int idx = mp[nums[j] - nums[i]];
                int64_t t = nums[j] - nums[i];
                int64_t cnt = 0;
                
                // i -> j is the first of the smallest gaps
                
                // backward: looking for it # of items 
                // on the left with bigger (idx + 1) gap; 
                
                // forward: looking for k - 2 - it # of items 
                // on the right with non-smaller(idx) gap.
                
                for (int it = 0; it + 1 < k; ++it) {
                    int64_t f = forward(forward, j, k - 2 - it, idx);
                    int64_t b = backward(backward, i, it, idx + 1);
                    cnt = (cnt + f * b) % mod;
                }

                ret = (ret + t * cnt % mod ) % mod;
            }
        }

        return ret;
    }
};
```
~~~
// Rust
use std::collections::BTreeSet;
use std::collections::HashMap;

struct  Helper {
    MOD: i64,
    nums: Vec<i32>,
    mp: HashMap<i32, usize>,
    dpb: Vec<Vec<Vec<i64>>>,
    dpf: Vec<Vec<Vec<i64>>>
}

impl Helper {
    fn new(mut nums: Vec<i32>, k: usize) -> Self {
        let mut nums = nums;
        nums.sort();

        let n = nums.len();
        let mut s = BTreeSet::new();
        for i in 0 .. n {
            for j in i + 1 .. n {
                if nums[j] == nums[i] { continue }
                s.insert(nums[j] - nums[i]);
            }
        }

        let mut mp = HashMap::new();
        let mut m = 0;
        for it in s {
            mp.insert(it, m);
            m += 1;
        }
        let MOD = 1000_000_007; 

        Self { MOD, nums, mp, dpb: vec![vec![vec![-1; m]; k]; n], dpf: vec![vec![vec![-1; m]; k]; n] }
    }

    fn backward(&mut self, i1: usize, i2: usize, i3: usize) -> i64 {
        if i2 == 0 { return 1 }
        if i3 == self.dpb[0][0].len() { return 0 }

        if self.dpb[i1][i2][i3] != -1 { return self.dpb[i1][i2][i3] }
        let mut ret = 0;
        
        for i in (0 .. i1).rev() {
            let t = self.nums[i1] - self.nums[i];
            if t == 0 { continue }
            let idx = *self.mp.get(&t).unwrap();
            if idx < i3 { continue }
            ret = (ret + self.backward(i, i2 - 1, i3)) % self.MOD;
        } 

        self.dpb[i1][i2][i3] = ret;
        ret
    }

    fn forward(&mut self, i1: usize, i2: usize, i3: usize) -> i64 {
        if i2 == 0 { return 1 }
        if self.dpf[i1][i2][i3] != -1 { return self.dpf[i1][i2][i3] }
        let mut ret = 0;
        let n = self.nums.len();
        
        for i in i1 + 1 .. n {
            let t = self.nums[i] - self.nums[i1];
            if t == 0 { continue }
            let idx = *self.mp.get(&t).unwrap();
            if idx < i3 { continue }
            ret = (ret + self.forward(i, i2 - 1, i3)) % self.MOD;
        } 

        self.dpf[i1][i2][i3] = ret;
        ret
    }

    fn calculate(& mut self) -> i32 {
        let mut ret = 0;
        let n = self.nums.len();
        let k = self.dpb[0].len();

        for i in 0 .. n {
            for j in i + 1 .. n {
                if self.nums[j] == self.nums[i] { continue }

                let t = self.nums[j] - self.nums[i];
                let idx = *self.mp.get(&t).unwrap();
                let mut cnt = 0;

                for it in 0 .. k - 1 {
                    let b = self.backward(i, it, idx + 1);
                    let f = self.forward(j, k - 2 - it, idx);
                    cnt = (cnt + b * f) % self.MOD;
                }

                ret = (ret + cnt * t as i64) % self.MOD;
            } 
        }

        ret as _
    }
}

impl Solution {
    pub fn sum_of_powers(nums: Vec<i32>, k: i32) -> i32 {
        let mut h = Helper::new(nums, k as usize);
        h.calculate()
    }
}
~~~