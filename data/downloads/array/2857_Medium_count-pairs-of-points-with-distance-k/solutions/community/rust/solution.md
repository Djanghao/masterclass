# HashMap[C++/Rust]

**Author:** shellpy03
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-pairs-of-points-with-distance-k/solutions/4058749/](https://leetcode.com/problems/count-pairs-of-points-with-distance-k/solutions/4058749/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
The overall time complexity of the code is O(N) in most practical cases

- Space complexity:
O(N)
# Code
```
use std::collections::HashMap;

impl Solution {
    pub fn count_pairs(c: Vec<Vec<i32>>, k: i32) -> i64 {
        let mut m: HashMap<Vec<i32>, i32> = HashMap::new();

        for it in c.iter() {
            *m.entry(it.clone()).or_insert(0) += 1;
        }

        let mut ans: i64 = 0;

        if k == 0 {
            for (_, &v) in m.iter() {
                ans += (v as i64 * (v as i64 - 1)) / 2;
            }
            return ans;
        } else {
            for (k1, &v1) in m.iter() {
                for j in 0..=k {
                    let mut temp = vec![
                        k1[0] ^ j,
                        k1[1] ^ (k - j)
                    ];
                    if let Some(v2) = m.get(&temp) {
                        ans += *v2 as i64 * v1 as i64;
                    }
                }
            }
        }
        ans / 2
    }
}
```



```C++ []
typedef pair<int, int> pii;
#define vi vector<int>
#define fr(i, a, b) for (int i = a; i < b; i++)
typedef long long ll;
#define mp map<int, int>

class Solution
{
public:
    int countPairs(vector<vector<int>> &c, int k)
    {
        map<vector<int>, int> m;
        for(auto it : c){
            m[it]++;
        }

        ll ans = 0;
        if(k == 0){
            for (auto it : m){
                // ans+=it.second*(it.second -1) /2; 
                ans += static_cast<long long>(it.second) * (it.second - 1) / 2;
            }
            return ans;
        } else {
            for(auto &it : m){
                fr(j,0,k+1){
                    vi(temp) = {it.first[0] ^ j , it.first[1] ^ (k-j)};
                    if(m.find(temp) != m.end()){
                        ans+=m[temp]*it.second;
                    }
                }
            }
        }
        return ans/2;
    }
};
```

```
