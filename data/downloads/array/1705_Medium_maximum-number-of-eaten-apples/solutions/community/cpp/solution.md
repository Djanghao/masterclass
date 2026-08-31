# Min Heap , Easy C++ ✅✅

**Author:** Deepak_5910
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-number-of-eaten-apples/solutions/3744091/](https://leetcode.com/problems/maximum-number-of-eaten-apples/solutions/3744091/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
think About that if you have you have some chips \uD83C\uDF5F packets with different expiry Dates. on a single day, you can eat at most one chips \uD83C\uDF5F packet. but you want to eat all of them.
which chips packet you choose first........\uD83E\uDD14?
**definitely, you will choose the chips packet that expires first.**

**in the same way, we will choose the apple, which will rotten first.**

# Complexity
- Time complexity:O(N * Log(N))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int eatenApples(vector<int>& a, vector<int>& d) {
        int n  = a.size(),ans = 0;
        priority_queue<pair<int,int>> pq;
        for(int i = 0;i<n;i++)
        {
            if(a[i]>0) pq.push({-1*(i+d[i]),a[i]});
            while(!pq.empty() && abs(pq.top().first)<=i) pq.pop();
            if(pq.size()>0)
            {
              int day = abs(pq.top().first);
              int apple = pq.top().second;
              pq.pop();
              if(day>i)
              {
              ans+=1;
              if(apple-1 > 0) pq.push({-1*day,apple-1});
              }
            }
        }
        int i = n;
        while(!pq.empty())
        {
            int day = abs(pq.top().first);
            int apple = pq.top().second;
            pq.pop();
            if(day>i)
            {
              ans+=1;
              i++;
              if(apple-1 > 0) pq.push({-1*day,apple-1});
            }
        }
        return ans;  
    }
};
```
![upvote.jpg](./images/0.jpeg)
