# Monotonic Stack || Very Easy C++ ✅✅

**Author:** Deepak_5910
**Votes:** 6
**Link:** [https://leetcode.com/problems/steps-to-make-array-non-decreasing/solutions/3881965/](https://leetcode.com/problems/steps-to-make-array-non-decreasing/solutions/3881965/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Use a **monotonic increasing stack** to count the number of steps. The approach is very simple, just count a **continuous number of operations** to build up the **stack in increasing order**.

# Complexity
- Time complexity:O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:

    int totalSteps(vector<int>& arr) {

      int n = arr.size();
      stack<pair<int,int>> st;
      int ans = -1;
       for(int i = n-1;i>=0;i--)
       {
           int cnt = 0;
           while(!st.empty() && st.top().first < arr[i])
           {
               cnt = max(cnt+1,st.top().second);
               st.pop();   
           }
           ans = max(ans,cnt);
           st.push({arr[i],cnt});
       }

       return ans;
    }
};
```
![upvote.jpg](./images/0.jpeg)
