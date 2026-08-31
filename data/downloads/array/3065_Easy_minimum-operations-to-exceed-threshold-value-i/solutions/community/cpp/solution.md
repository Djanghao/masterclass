# Easy Video Solution 🔥 || Sorting ✅ || C++ || Java || Python

**Author:** ayushnemmaniwar12
**Votes:** 10
**Link:** [https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/solutions/4811501/](https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/solutions/4811501/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Sorting


***Easy Video Explanation***

https://youtu.be/7JDNL2R6cqI





# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N*Log(N))
    

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(1)
    

# Code


```C++ []
class Solution {
public:
    int minOperations(vector<int>& v, int k) {
        sort(v.begin(),v.end());
        int c=0;
        int n=v.size();
        for(int i=0;i<n;i++) {
            if(v[i]>=k)
                return c;
            c++;
        }
        return c;
    }
};
```
```python []
class Solution:
    def minOperations(self, v, k):
        v.sort()
        c = 0
        n = len(v)
        for i in range(n):
            if v[i] >= k:
                return c
            c += 1
        return c

```
```Java []

import java.util.Arrays;

public class Solution {
    public int minOperations(int[] v, int k) {
        Arrays.sort(v);
        int c = 0;
        int n = v.length;
        for (int i = 0; i < n; i++) {
            if (v[i] >= k)
                return c;
            c++;
        }
        return c;
    }
}

```

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00