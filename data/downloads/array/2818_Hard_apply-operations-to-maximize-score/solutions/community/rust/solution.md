# Rust/C++ Ordered Map/Set + Priority_queue

**Author:** xiaoping3418
**Votes:** 0
**Link:** [https://leetcode.com/problems/apply-operations-to-maximize-score/solutions/3903958/](https://leetcode.com/problems/apply-operations-to-maximize-score/solutions/3903958/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
1) To calculate the prime score array and to collect all the indexes of the items that with the same prime score using an ordered map.
2) For each i in 0 .. n, to calculate the number of sub-arrays that 
select nums[i] as the x.
3) The main point of step #2 is that those i's cannot be simply worked in the ascending order. They have to be worked in the order with those i's with  higher prime score first.
4) We will use an order set s to recod those indexes that having higher prime score than that of the current index we are calculating.
5) The calculated results are saved in a priority_queue<val, cnt>, which will be used to pick the higher value first in evaluating the final answer. 

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(N Log N)
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(N)
# Code
```
// Rust Code
use std::collections::BinaryHeap;
use std::collections::BTreeMap;
use std::collections::BTreeSet;

impl Solution {
    pub fn maximum_score(nums: Vec<i32>, k: i32) -> i32 {
        let n = nums.len();
        let mut temp = BTreeMap::<i32, Vec<usize>>::new();

        for i in 0 .. n {
            let (mut a, mut cnt) = (nums[i], 0);
            for m in 2 ..= nums[i] {
                if m * m > a { break }
                if a % m != 0 { continue }

                cnt += 1;
                while a % m == 0 { a /= m; }  
            }
            if a > 1 { cnt += 1; }
            temp.entry(cnt).or_insert(vec![]).push(i);
        }
    
        let mut s = BTreeSet::<usize>::new();
        let mut pq = BinaryHeap::new();
        let mut temp = temp.into_iter().map(|it| it.1).collect::<Vec<_>>();
        
        temp.reverse();
        for v in temp {
            let sz = v.len();
            
            for j in 0 .. sz {
                // left: the number of indexes from v[j]'s 
                // left (inclusively) that pick nums[v[j]] as x 
                let (mut left, mut right) = (v[j] + 1, n - v[j]);
                
                if j > 0 { left = v[j] - v[j - 1]; }
                
                if let Some(idx) = s.range(v[j] .. ).next() {
                    right = right.min(*idx - v[j]);
                }
                if let Some(idx) = s.range( .. v[j]).next_back() {
                    left = left.min(v[j] - *idx);
                }
                
                pq.push((nums[v[j]] as i64, left as i32 * right as i32));
            }
            for j in 0 .. sz { s.insert(v[j]); }
        }
        
        let (mut ret, mut k) = (1, k);
        let MOD = 1_000_000_007;

        while let Some((val, cnt)) = pq.pop() {
            ret = (ret * Self::power(val, k.min(cnt) as i64)) % MOD;
            if k <= cnt { break }
            k -= cnt;
        }

        ret as _
    }

    fn power(base: i64, p: i64) -> i64 {
        let MOD = 1_000_000_007;
        let (mut ret, mut base, mut p) = (1, base, p);
        while p > 0 {
            if p % 2 != 0 { ret = (ret * base) % MOD; }
            base = (base * base) % MOD;
            p /= 2;
        } 
        ret
    }
}
```

~~~
// C++ code
class Solution {
    int mod = 1000000007;
    int power(long long base, int p) {
        long long ret = 1;
        while (p > 0) {
            if (p % 2 != 0) ret = (ret * base) % mod;
            base = (base * base) % mod;
            p /= 2; 
        }
        
        return ret;
    }
    
public:
    int maximumScore(vector<int>& nums, int k) {
        int n = nums.size();
        vector<int> cnt(n, 0);
        map<int, vector<int>> mp;
        
        for (int i = 0; i < n; ++i) {
            int a = nums[i];
            for (int k = 2; k * k <= a; ++k) {
                if (a % k != 0) continue;
                
                cnt[i] += 1;
                while (a % k == 0) a /= k;
            }
            if (a > 1) cnt[i] += 1;
            mp[cnt[i]].push_back(i);
        }
             
        set<int> s;
        priority_queue<pair<int, int>> pq;
        for (auto it = mp.rbegin(); it != mp.rend(); ++it) {
            vector<int> v = it->second;
            int m = v.size();
            for (int j = 0; j < m; ++j) {
                auto it1 = s.lower_bound(v[j]);
                int left = v[j] + 1, right = n - v[j];
                if (it1 != s.end()) right = min(right, *it1 - v[j]);
                if (j > 0) left = min(left, v[j] - v[j - 1]);
                if (it1 != s.begin()) {
                    left = min(left, v[j] - *prev(it1));
                }
                pq.push({nums[v[j]], left * right});
            }
            for (auto i: v) s.insert(i);
        }
        
        long long ret = 1;
        while (not  pq.empty()) {
            auto [val, cnt] = pq.top();
            pq.pop();
            ret = (ret * power(val, min(k, cnt))) % mod;
            if (k <= cnt) break;
            k -= cnt;
        }
        
        return ret;
    }
};
~~~