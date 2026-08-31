# Fast Approach 🚀 || Easy video Explanation || HashMap

**Author:** ayushnemmaniwar12
**Votes:** 15
**Link:** [https://leetcode.com/problems/find-missing-and-repeated-values/solutions/4415336/](https://leetcode.com/problems/find-missing-and-repeated-values/solutions/4415336/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Using Maps to store frequency of elements

***Easy Video Explanation***


https://youtu.be/Gmg-7AEoLkI

# Approach
<!-- Describe your approach to solving the problem. -->
Our code finds a repeated and a missing value in a square matrix. It uses a map to count occurrences, then iterates to find the values. Java and Python versions follow a similar logic, utilizing a map or defaultdict to count occurrences and updating the result accordingly.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N*log(N))
    

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(N)
    

# Code


```C++ []
class Solution {
public:
    vector<int> findMissingAndRepeatedValues(vector<vector<int>>& v) {
        int n=v.size();
        map<int,int>m;
        for(int i=0;i<n;i++) {
            for(int j=0;j<n;j++) {
                m[v[i][j]]++;
            }
        }
        int a=-1,b=-1;
        for(int i=1;i<=n*n;i++) {
            
            if(m[i]==2) {
                a=i;
            } else {
                if(m[i]==0) {
                    b=i;
                }
            }
        }
        vector<int>ans;
        
        ans.push_back(a);
        ans.push_back(b);
        return ans;
    }
};
```
```python []
from collections import defaultdict

class Solution:
    def findMissingAndRepeatedValues(self, v):
        n = len(v)
        m = defaultdict(int)

        for i in range(n):
            for j in range(n):
                m[v[i][j]] += 1

        a, b = -1, -1
        for i in range(1, n * n + 1):
            if m[i] == 2:
                a = i
            elif m[i] == 0:
                b = i

        return [a, b]

```
```Java []
import java.util.*;

public class Solution {
    public int[] findMissingAndRepeatedValues(int[][] v) {
        int n = v.length;
        Map<Integer, Integer> m = new HashMap<>();

        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                m.put(v[i][j], m.getOrDefault(v[i][j], 0) + 1);
            }
        }

        int a = -1, b = -1;
        for (int i = 1; i <= n * n; i++) {
            if (m.get(i) == 2) {
                a = i;
            } else if (m.get(i) == 0) {
                b = i;
            }
        }

        return new int[]{a, b};
    }
}

```

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00