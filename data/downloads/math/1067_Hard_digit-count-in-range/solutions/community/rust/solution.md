# Rust/C++ Digital DP

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/digit-count-in-range/solutions/3851037/](https://leetcode.com/problems/digit-count-in-range/solutions/3851037/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The approach is about the same as of problem 233: 
https://leetcode.com/problems/number-of-digit-one/
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
// C++
class Solution {
    class Helper{
        vector<int> s;
        int dp[9][9][2][2];
    
    public:
        Helper(int a) {
            while (a > 0) {
                s.push_back(a % 10);
                a /= 10;
            }
            reverse(s.begin(), s.end());
            memset(dp, -1, sizeof(dp));
        }

        int dfs(int d, int i, int cnt, int up, int low) {
            if (i == s.size()) return cnt;
            if (dp[i][cnt][up][low] != -1) return dp[i][cnt][up][low];

            int bound = 9;
            if (up == 0) bound = s[i];
             
            int &ret = dp[i][cnt][up][low] = 0;
            for (int k = 0; k <= bound; ++k) {
                int cntNew = cnt, upNew = 1, lowNew = 1;
                if (up == 0 and k == s[i]) upNew = 0;
                if (low == 0 and k == 0) lowNew = 0;
                if (k == d and (d > 0 or low == 1)) cntNew += 1;
                ret += dfs(d, i + 1, cntNew, upNew, lowNew);
            }
            return ret;
        }
    };

    int extra(int d, int a) {
        int cnt = 0;
        while (a > 0) {
            if (a % 10 == d) cnt += 1;
            a /= 10;
        }
        return cnt;
    }

public:
    int digitsCount(int d, int low, int high) {
        Helper t1(high), t2(low);
        return t1.dfs(d, 0, 0, 0, 0) - t2.dfs(d, 0, 0, 0, 0) + extra(d, low);
    }
};
```

~~~
// Rust
struct Helper {
    s: Vec<usize>,
    dp: Vec<Vec<Vec<Vec<i32>>>> 
}

impl Helper {
    fn new(a: i32) -> Self {
        let mut a = a as usize;
        let mut s = vec![];
        while a > 0 {
            s.push(a % 10);
            a /= 10;
        }
        s.reverse();

        Self { s, dp: vec![vec![vec![vec![-1; 2]; 2]; 9]; 9] }
    }

    fn dfs(&mut self, d: usize, i: usize, cnt: usize, up: usize, low: usize) -> i32 {
        if i == self.s.len() { return cnt as i32 }
        if self.dp[i][cnt][up][low] != -1 { return self.dp[i][cnt][up][low] }

        let bound = if up == 0 { self.s[i] } else { 9 };
        
        self.dp[i][cnt][up][low] = 0;        
        for k in 0 ..= bound {
            let up_new = if up == 0 && k == self.s[i] { 0 } else { 1 };
            let low_new = if low == 0 && k == 0 { 0 } else { 1 };
            let cnt_new = cnt + if k == d && (d > 0 || low == 1) { 1 } else { 0 };
            self.dp[i][cnt][up][low] += self.dfs(d, i + 1, cnt_new, up_new, low_new); 
        }
        self.dp[i][cnt][up][low]
    } 
}

impl Solution {
    pub fn digits_count(d: i32, low: i32, high: i32) -> i32 {
        let d = d as usize;
        let (mut t1, mut t2) = (Helper::new(high), Helper::new(low));
        t1.dfs(d, 0, 0, 0, 0) - t2.dfs(d, 0, 0, 0, 0) + Self::extra(d, low) 
    }

    fn extra(d: usize, a: i32) -> i32 {
        let (mut a, mut cnt) = (a as usize, 0);
        while a > 0 {
            if a % 10 == d { cnt += 1; }
            a /= 10; 
        }
        cnt
    }
}
~~~