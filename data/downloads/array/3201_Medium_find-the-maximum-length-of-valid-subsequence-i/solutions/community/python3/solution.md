# Easy Video Solution 🔥 || How to 🤔 in Interview || {0,0},{0,1},{1,0},{1,1} ✅ || Greedy 🔥

**Author:** ayushnemmaniwar12
**Votes:** 11
**Link:** [https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-i/solutions/5389314/](https://leetcode.com/problems/find-the-maximum-length-of-valid-subsequence-i/solutions/5389314/)

---

***If you like the solution Please Upvote and subscribe to my youtube channel***



# ***Easy Video Explanation***

https://youtu.be/UcgbWZcYffY

    

# Code


```C++ []
class Solution {
public:
    int solve(vector<int>&v,int a,int b) {
        int n=v.size();
        int i=0,f=0;
        int c=0;
        while(i<n) {
            if((f==0 && v[i]==a)  || (f==1 && v[i]==b)) {
                c++;
                f=f^1;
            }
            i++;
        }
        return c;
        
    }
    int maximumLength(vector<int>& nums) {
        vector<int>v;
        int ans,c1=0,c2=0;
        for(auto i:nums) {
            int k=i%2;
            v.push_back(k);
            if(k==1)
                c1++;
            else
                c2++;
            
        } 
        ans=max(c1,c2);
        ans=max(ans,solve(v,0,1));
        ans=max(ans,solve(v,1,0));
        return ans;
    }
};
```
```python []
from typing import List

class Solution:
    def solve(self, v: List[int], a: int, b: int) -> int:
        n = len(v)
        i = 0
        f = 0
        c = 0
        while i < n:
            if (f == 0 and v[i] == a) or (f == 1 and v[i] == b):
                c += 1
                f = f ^ 1
            i += 1
        return c
    
    def maximumLength(self, nums: List[int]) -> int:
        v = []
        c1 = c2 = 0
        for i in nums:
            k = i % 2
            v.append(k)
            if k == 1:
                c1 += 1
            else:
                c2 += 1
        ans = max(c1, c2)
        ans = max(ans, self.solve(v, 0, 1))
        ans = max(ans, self.solve(v, 1, 0))
        return ans

```
```Java []
import java.util.ArrayList;
import java.util.List;

class Solution {
    public int solve(List<Integer> v, int a, int b) {
        int n = v.size();
        int i = 0, f = 0;
        int c = 0;
        while (i < n) {
            if ((f == 0 && v.get(i) == a) || (f == 1 && v.get(i) == b)) {
                c++;
                f = f ^ 1;
            }
            i++;
        }
        return c;
    }

    public int maximumLength(int[] nums) {
        List<Integer> v = new ArrayList<>();
        int ans, c1 = 0, c2 = 0;
        for (int i : nums) {
            int k = i % 2;
            v.add(k);
            if (k == 1)
                c1++;
            else
                c2++;
        }
        ans = Math.max(c1, c2);
        ans = Math.max(ans, solve(v, 0, 1));
        ans = Math.max(ans, solve(v, 1, 0));
        return ans;
    }
}


```

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N)
    

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(N)

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00