# O(n) - keep track of how many increments & decrements are done till now

**Author:** itsluminous
**Votes:** 111
**Link:** [https://leetcode.com/problems/minimum-operations-to-make-array-equal-to-target/solutions/5508919/](https://leetcode.com/problems/minimum-operations-to-make-array-equal-to-target/solutions/5508919/)

---

# Intuition
Start from left or right, loop through array and keep track of possible increments & decrements we can do till current point

# Approach
- We start from left, and do required incr/decr needed for first number. 
- From here on, for each number, if it needs more increment than what we already have, then increase the steps, and also update count of how many extra increments we have done.
- Similarly keep track of decrements.
- If we are changing `incr` then `decr` has to become `0`, and vice versa
- If we encounter an index which has same value in `nums` and `target`, then both `incr` then `decr` become `0` because there is no change
- At the end you will have answer

# Complexity
- Time complexity: O(n)
- Space complexity: O(1)

# Code
```java []
class Solution {
    public long minimumOperations(int[] nums, int[] target) {
        var n = nums.length;
        long incr = 0, decr = 0, ops = 0;

        for (var i = 0; i < n; i++) {
            var diff = target[i] - nums[i];

            if (diff > 0) {
                if (incr < diff)
                    ops += diff - incr;
                incr = diff;
                decr = 0;
            } else if (diff < 0) {
                if (diff < decr)
                    ops += decr - diff;
                decr = diff;
                incr = 0;
            } else {
                incr = decr = 0;
            }
        }

        return ops;
    }
}

```
```python []
class Solution:
    def minimumOperations(self, nums: List[int], target: List[int]) -> int:
        n = len(nums)
        incr, decr, ops = 0, 0, 0

        for i in range(n):
            diff = target[i] - nums[i]

            if diff > 0:
                if incr < diff:
                    ops += diff - incr
                incr = diff
                decr = 0
            elif diff < 0:
                if diff < decr:
                    ops += decr - diff
                decr = diff
                incr = 0
            else:
                incr = decr = 0

        return ops
```
```csharp []
public class Solution {
    public long MinimumOperations(int[] nums, int[] target) {
        var n = nums.Length;
        long incr = 0, decr = 0, ops = 0;

        for (var i = 0; i < n; i++) {
            var diff = target[i] - nums[i];

            if (diff > 0) {
                if (incr < diff)
                    ops += diff - incr;
                incr = diff;
                decr = 0;
            } else if (diff < 0) {
                if (diff < decr)
                    ops += decr - diff;
                decr = diff;
                incr = 0;
            } else {
                incr = decr = 0;
            }
        }

        return ops;
    }
}
```
```cpp []
class Solution {
public:
    long long minimumOperations(vector<int>& nums, vector<int>& target) {
        int n = nums.size();
        long incr = 0, decr = 0, ops = 0;

        for (int i = 0; i < n; i++) {
            long diff = target[i] - nums[i];

            if (diff > 0) {
                if (incr < diff)
                    ops += diff - incr;
                incr = diff;
                decr = 0;
            } else if (diff < 0) {
                if (diff < decr)
                    ops += decr - diff;
                decr = diff;
                incr = 0;
            } else {
                incr = decr = 0;
            }
        }

        return ops;
    }
};
```
```javascript []
var minimumOperations = function(nums, target) {
    let n = nums.length;
    let incr = 0, decr = 0, ops = 0;

    for (let i = 0; i < n; i++) {
        let diff = target[i] - nums[i];

        if (diff > 0) {
            if (incr < diff)
                ops += diff - incr;
            incr = diff;
            decr = 0;
        } else if (diff < 0) {
            if (diff < decr)
                ops += decr - diff;
            decr = diff;
            incr = 0;
        } else {
            incr = decr = 0;
        }
    }

    return ops;
};
```
```Go []
func minimumOperations(nums []int, target []int) int64 {
    n := len(nums)
    var incr, decr, ops int64

    for i:=0; i<n; i++ {
        diff := int64(target[i] - nums[i])

        if diff > 0 {
            if incr < diff {
                ops += diff - incr
            }
            incr = diff
            decr = 0
        } else if diff < 0 {
            if diff < decr {
                ops += decr - diff
            }
            decr = diff
            incr = 0
        } else {
            incr = 0
            decr = 0
        }
    }

    return ops
}
```

# Similar Question
[1526. Minimum Number of Increments on Subarrays to Form a Target Array](https://leetcode.com/problems/minimum-number-of-increments-on-subarrays-to-form-a-target-array)