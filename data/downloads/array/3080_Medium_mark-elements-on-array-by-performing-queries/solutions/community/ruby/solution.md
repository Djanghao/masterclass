# simple and easy understand solution

**Author:** shishirRsiam
**Votes:** 0
**Link:** [https://leetcode.com/problems/mark-elements-on-array-by-performing-queries/solutions/4896726/](https://leetcode.com/problems/mark-elements-on-array-by-performing-queries/solutions/4896726/)

---

# if it's help, please up \u2B06 vote! \u2764\uFE0F

# Code
```
#define pi pair<long long,int>
class Solution {
public:
    bool visited[1000005];
    vector<long long> unmarkedSumArray(vector<int>& nums, vector<vector<int>>& queries) 
    {
        priority_queue<pi,vector<pi>,greater<pi>>pq;
        long long sum = 0, n = nums.size();
        for(int i=0;i<n;i++) 
        {
            sum += nums[i];
            pq.push({nums[i], i});
        }

        vector<long long>ans;
        for(auto x:queries)
        {
            int idx = x[0], remove = x[1];
            if(!visited[idx])
            {
                visited[idx] = true;
                sum -= nums[idx];
            }
            while(!pq.empty() and remove != 0)
            {
                auto front = pq.top(); pq.pop();
                idx = front.second;
                if(!visited[idx])
                {
                    remove--;
                    sum -= front.first;
                    visited[idx] = true;
                }
            }
            ans.push_back(sum);
        }
        return ans;
    }
};
```