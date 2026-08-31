# Easy Video Solution for beginners 🔥 || C++ JAVA PYTHON

**Author:** ayushnemmaniwar12
**Votes:** 16
**Link:** [https://leetcode.com/problems/distribute-elements-into-two-arrays-i/solutions/4813919/](https://leetcode.com/problems/distribute-elements-into-two-arrays-i/solutions/4813919/)

---

# ***Easy Video Explanation***

https://youtu.be/Rj8s8mTJLAA





# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N)
    

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(N)
    

# Code


```C++ []
class Solution {
public:
    vector<int> resultArray(vector<int>& v) {
        int n=v.size();
        vector<int>ans;
        vector<int>v1,v2;
        v1.push_back(v[0]);
        v2.push_back(v[1]);
        for(int i=2;i<n;i++) {
            if(v1.back()>v2.back())
                v1.push_back(v[i]);
            else
                v2.push_back(v[i]);
        }
        ans=v1;
        for(auto i:v2)
            ans.push_back(i);
        return ans;
    }
};
```
```python []
from typing import List

class Solution:
    def resultArray(self, v: List[int]) -> List[int]:
        n = len(v)
        ans = []
        v1 = [v[0]]
        v2 = [v[1]]
        for i in range(2, n):
            if v1[-1] > v2[-1]:
                v1.append(v[i])
            else:
                v2.append(v[i])
        ans.extend(v1)
        ans.extend(v2)
        return ans

```
```Java []
import java.util.ArrayList;
import java.util.List;

public class Solution {
    public List<Integer> resultArray(List<Integer> v) {
        int n = v.size();
        List<Integer> ans = new ArrayList<>();
        List<Integer> v1 = new ArrayList<>();
        List<Integer> v2 = new ArrayList<>();
        v1.add(v.get(0));
        v2.add(v.get(1));
        for (int i = 2; i < n; i++) {
            if (v1.get(v1.size() - 1) > v2.get(v2.size() - 1))
                v1.add(v.get(i));
            else
                v2.add(v.get(i));
        }
        ans.addAll(v1);
        ans.addAll(v2);
        return ans;
    }
}


```

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00