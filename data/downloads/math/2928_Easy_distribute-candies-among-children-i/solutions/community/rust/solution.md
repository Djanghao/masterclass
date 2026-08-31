# [Python/C++/Rust] O(n) Solution beats 100%

**Author:** talalshafei
**Votes:** 0
**Link:** [https://leetcode.com/problems/distribute-candies-among-children-i/solutions/5957542/](https://leetcode.com/problems/distribute-candies-among-children-i/solutions/5957542/)

---

Credits to [ch233](https://leetcode.com/problems/distribute-candies-among-children-i/solutions/4276837/o-n-easy-to-understand-how-to-reduce-the-problem)

# Complexity
- Time complexity:$$O(n)$$
- Space complexity:$$O(1)$$

# Code
```python3 []
class Solution:
    def distributeCandies(self, n: int, limit: int) -> int:
        ans = 0
        for i in range(min(limit, n)+1):
            n2 = n-i
            if limit*2 < n2: continue
            j = min(limit, n2)
            k = max(n2-j, 0)
            ans += j-k+1
            
        return ans
```
```cpp []
class Solution {
public:
    int distributeCandies(int n, int limit) {
        int ans=0;
        for(int i=0; i<=min(limit, n); i++){
            int n2=n-i;
            if(limit*2 < n2) continue;
            int j=min(limit,n2);
            int k=max(0, n2-j);
            ans+= j-k + 1;
        }
        return ans;
    }
};
```
```rust []
use std::cmp::{max,min};
impl Solution {
    pub fn distribute_candies(n: i32, limit: i32) -> i32 {
        let mut ans=0;
        for i in 0..=(min(limit,n)) {
            let n2 = n-i;
            if limit*2 < n2 { continue; }
            let j = min(limit, n2);
            let k = max(n2-j, 0);
            ans += j-k+1;
        }
        return ans;
    }
}
```