# Easy Video Explanation (with Visuals) 🔥 || Math

**Author:** ayushnemmaniwar12
**Votes:** 16
**Link:** [https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/solutions/4521311/](https://leetcode.com/problems/maximum-area-of-longest-diagonal-rectangle/solutions/4521311/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Use correct data types while validating the results


# ***Easy Video Explanation***
https://youtu.be/PKkmkzOVZbI




# Approach
<!-- Describe your approach to solving the problem. -->
The code calculates the Euclidean distance for each vector in a 2D array. It finds the vector with the maximum distance, considering ties by choosing the one with the maximum product of its components. The result represents the area of the rectangle formed by the vector in the 2D plane.


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
    int areaOfMaxDiagonal(vector<vector<int>>& v) {
        int n=v.size();
        int ans=0;
        double d=0;
        for(int i=0;i<n;i++) {
            double t=sqrt(v[i][0]*v[i][0]+v[i][1]*v[i][1]);
            //cout<<i<<" "<<t<<endl;
            if(t>=d) {
                if(t==d)
                    ans=max(ans,v[i][0]*v[i][1]);
                else
                    ans=v[i][0]*v[i][1];
                d=t;
            }
        }
        return ans;
    }
};
```
```python []
from typing import List

class Solution:
    def areaOfMaxDiagonal(self, v: List[List[int]]) -> int:
        n = len(v)
        ans = 0
        d = 0
        for i in range(n):
            t = (v[i][0] ** 2 + v[i][1] ** 2) ** 0.5
            if t >= d:
                if t == d:
                    ans = max(ans, v[i][0] * v[i][1])
                else:
                    ans = v[i][0] * v[i][1]
                d = t
        return ans

```
```Java []
import java.util.List;

class Solution {
    public int areaOfMaxDiagonal(List<List<Integer>> v) {
        int n = v.size();
        int ans = 0;
        double d = 0;
        for (int i = 0; i < n; i++) {
            double t = Math.sqrt(v.get(i).get(0) * v.get(i).get(0) + v.get(i).get(1) * v.get(i).get(1));
            if (t >= d) {
                if (t == d)
                    ans = Math.max(ans, v.get(i).get(0) * v.get(i).get(1));
                else
                    ans = v.get(i).get(0) * v.get(i).get(1);
                d = t;
            }
        }
        return ans;
    }
}


```

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00