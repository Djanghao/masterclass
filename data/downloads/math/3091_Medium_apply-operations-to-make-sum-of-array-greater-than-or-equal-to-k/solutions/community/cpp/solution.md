# Step-Step Easy Video Solution🔥 || Maths ✅ || Greedy

**Author:** ayushnemmaniwar12
**Votes:** 21
**Link:** [https://leetcode.com/problems/apply-operations-to-make-sum-of-array-greater-than-or-equal-to-k/solutions/4916835/](https://leetcode.com/problems/apply-operations-to-make-sum-of-array-greater-than-or-equal-to-k/solutions/4916835/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Try with all inputs

# ***Easy Video Explanation***
https://youtu.be/XSIunvB3UQg




# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N)
    

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(1)
    

# Code


```C++ []
class Solution {
public:
    int minOperations(int k) {
        int minOperationsNeeded = INT_MAX;
        for(int operations = 1; operations <= k; operations++) {
            int groups = ceil(k / (operations * 1.0));
            minOperationsNeeded = min(minOperationsNeeded, operations - 2 + groups);
        }
        return minOperationsNeeded;
    }
};

```
```python []
import math

class Solution:
    def minOperations(self, k: int) -> int:
        ans = math.inf
        for i in range(1, k + 1):
            m = math.ceil(k / i)
            ans = min(ans, i - 2 + m)
        return ans

```
```Java []
public class Solution {
    public int minOperations(int k) {
        int ans = Integer.MAX_VALUE;
        for (int i = 1; i <= k; i++) {
            int m = (int) Math.ceil(k / (double) i);
            ans = Math.min(ans, i - 2 + m);
        }
        return ans;
    }
}


```

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00