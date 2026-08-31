# Rust/C++ HashMap

**Author:** xiaoping3418
**Votes:** 1
**Link:** [https://leetcode.com/problems/max-pair-sum-in-an-array/solutions/3904163/](https://leetcode.com/problems/max-pair-sum-in-an-array/solutions/3904163/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
// Rust
use std::collections::HashMap;

impl Solution {
    pub fn max_sum(nums: Vec<i32>) -> i32 {
        let mut mp = HashMap::<i32, Vec<i32>>::new();

        for a in nums {
            let (mut t, mut d) = (a, 1);
            while t > 0 {
                d = d.max(t % 10);
                t /= 10;
            }
            mp.entry(d).or_insert(vec![]).push(a);
        }
        
        let mut ret = -1;
        for (_, mut v) in mp {
            if v.len() < 2 { continue }
            v.sort();
            v.reverse();
            ret = ret.max(v[0] + v[1]);
        }

        ret
    }
}
```
~~~
// C++
class Solution {
public:
    int maxSum(vector<int>& nums) {
        unordered_map<int, vector<int>> mp;
        for (auto a: nums) {
            int d = 1;
            int temp = a;
            while (temp > 0) {
                d = max(d, temp % 10);
                temp /= 10;
            }
            mp[d].push_back(a);
        }
        
        int ret = -1;
        for (auto &it: mp) {
            if (it.second.size() < 2) continue;
            vector<int> v = it.second;
            sort(v.begin(), v.end());
            int t = v.back();
            v.pop_back();
            t += v.back();
            ret = max(ret, t);
        }
        
        return ret;
    }
};
~~~