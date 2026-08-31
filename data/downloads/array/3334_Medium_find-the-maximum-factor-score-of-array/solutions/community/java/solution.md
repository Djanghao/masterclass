# Max Score with Brute Force ✅🔥: GCD and LCM Solutions

**Author:** ankit_kumar12345
**Votes:** 7
**Link:** [https://leetcode.com/problems/find-the-maximum-factor-score-of-array/solutions/5972933/](https://leetcode.com/problems/find-the-maximum-factor-score-of-array/solutions/5972933/)

---

# Approach

JUST FINDING ALL POSSIBLE SOLUTION 

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
#include <vector>
#include <algorithm>
#include <numeric>

class Solution {
public:
    long long get(vector<int>& nums, int x) {
        long long ans = 0;
        int n = nums.size();

        long long gcd = (x != 0) ? nums[0] : nums[1];
        long long lcm = gcd;

        for (int i = (x == 0 ? 2 : 1); i < n; ++i) {
            if (i == x) continue;
            int a = nums[i];
            gcd = __gcd(gcd, (long long)a);
            lcm = (lcm * a) / __gcd(lcm, (long long)a);
        }

        return gcd * lcm;
    }

    long long maxScore(vector<int>& nums) {
        int n = nums.size();
        if (n == 1) return (long long)nums[0] * nums[0];

        long long maxi = get(nums, -1);

        for (int i = 0; i < n; ++i) {
            maxi = max(maxi, get(nums, i));
        }

        return maxi;
    }
};

```
```javascript []
class Solution {
    gcd(a, b) {
        return b === 0 ? a : this.gcd(b, a % b);
    }

    get(nums, x) {
        let n = nums.length;

        let gcd = (x !== 0) ? nums[0] : nums[1];
        let lcm = gcd;

        for (let i = (x === 0 ? 2 : 1); i < n; ++i) {
            if (i === x) continue;
            let a = nums[i];
            gcd = this.gcd(gcd, a);
            lcm = (lcm * a) / this.gcd(lcm, a);
        }

        return gcd * lcm;
    }

    maxScore(nums) {
        let n = nums.length;
        if (n === 1) return nums[0] * nums[0];

        let maxi = this.get(nums, -1);

        for (let i = 0; i < n; ++i) {
            maxi = Math.max(maxi, this.get(nums, i));
        }

        return maxi;
    }
}

```
```python []
from math import gcd
from functools import reduce

class Solution:
    def get(self, nums, x):
        n = len(nums)

        gcd_val = nums[0] if x != 0 else nums[1]
        lcm_val = gcd_val

        for i in range(2 if x == 0 else 1, n):
            if i == x:
                continue
            a = nums[i]
            gcd_val = gcd(gcd_val, a)
            lcm_val = (lcm_val * a) // gcd(lcm_val, a)

        return gcd_val * lcm_val

    def maxScore(self, nums):
        n = len(nums)
        if n == 1:
            return nums[0] * nums[0]

        maxi = self.get(nums, -1)

        for i in range(n):
            maxi = max(maxi, self.get(nums, i))

        return maxi

```
```java []
import java.util.List;

class Solution {
    private long get(List<Integer> nums, int x) {
        long ans = 0;
        int n = nums.size();

        long gcd = (x != 0) ? nums.get(0) : nums.get(1);
        long lcm = gcd;

        for (int i = (x == 0 ? 2 : 1); i < n; ++i) {
            if (i == x) continue;
            int a = nums.get(i);
            gcd = gcd(gcd, a);
            lcm = (lcm * a) / gcd(lcm, a);
        }

        return gcd * lcm;
    }

    public long maxScore(List<Integer> nums) {
        int n = nums.size();
        if (n == 1) return (long) nums.get(0) * nums.get(0);

        long maxi = get(nums, -1);

        for (int i = 0; i < n; ++i) {
            maxi = Math.max(maxi, get(nums, i));
        }

        return maxi;
    }

    private long gcd(long a, long b) {
        return b == 0 ? a : gcd(b, a % b);
    }
}

```
![upvote.jpg](./images/0.jpeg)