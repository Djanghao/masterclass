# Priority queue || Very simple and easy to understand solution

**Author:** kreakEmp
**Votes:** 27
**Link:** [https://leetcode.com/problems/mark-elements-on-array-by-performing-queries/solutions/4884199/](https://leetcode.com/problems/mark-elements-on-array-by-performing-queries/solutions/4884199/)

---


# Approch
- insert all items to a min heap priority queue( smallest value at top )
- Also evaluate the total sum of the array nums
- Iterate over queries and then keep on setting 0 as per the query


# Code

```
vector<long long> unmarkedSumArray(vector<int>& nums, vector<vector<int>>& queries) {
    long long sum = 0;
    vector<long long> ans;
    priority_queue<pair<int, int>, vector<pair<int, int>>, greater<pair<int,int>>> pq;
    for(auto i = 0; i < nums.size(); ++i){ 
        sum += nums[i]; pq.push({nums[i], i}); 
    }

    for(auto q: queries){
        sum -= nums[q[0]];
        nums[q[0]] = 0;
        while(pq.size() && q[1]){
            if(nums[pq.top().second]){ 
                sum -= nums[pq.top().second];  
                nums[pq.top().second] = 0; 
                q[1]--; 
            }
            pq.pop();
        }
        ans.push_back(sum);
    }
    return ans;
}

```


---

<b> Here is an article of my last interview experience - A Journey to FAANG Company, I recomand you to go through this to know which all resources I have used & how I cracked interview at Amazon:
https://leetcode.com/discuss/interview-experience/3171859/Journey-to-a-FAANG-Company-Amazon-or-SDE2-(L5)-or-Bangalore-or-Oct-2022-Accepted

---