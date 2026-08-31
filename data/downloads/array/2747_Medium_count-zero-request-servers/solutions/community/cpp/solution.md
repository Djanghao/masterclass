# C++ | Very Simple and Intuitive | Sliding Window | Well Commented | Detailed Explanation

**Author:** shoyo_hinata98
**Votes:** 70
**Link:** [https://leetcode.com/problems/count-zero-request-servers/solutions/3677996/](https://leetcode.com/problems/count-zero-request-servers/solutions/3677996/)

---

# Intuition
I found this question easier than the 3rd one.
Basically it is a sliding window question, only thing that you need to notice here is every thing is dependent on the time. 

# Approach
<!-- Describe your approach to solving the problem. -->
So we need to sort all the inputs on basis of time.
I made one vector of pairs which stores time,serverid and other one which stores query and its corresponding index.
Sort both the vectors on the basis of time. 
Make two pointers i and j marking the start and end of window. Window size is given fixed as x. Make a map to store the unique characters of the current window, whenever you move the window, remove the out of window characters. 
The final answer for that window will be n - count of unique server ids i.e., n - mp.size();

# Complexity
- Time complexity:
O(nlogn + mlogm)

- Space complexity:
O(n+m)

# Code
```
class Solution {
public:

    //Please upvote if you understood the solution and find it intuitive.

    vector<int> countServers(int n, vector<vector<int>>& logs, int x, vector<int>& queries) {
        int m = logs.size();
        vector<pair<int,int>> vp;
        for(auto it:logs) vp.push_back({it[1],it[0]}); //time,serverid
        sort(vp.begin(),vp.end()); //sort on basis of time
        
        int q = queries.size();
        unordered_map<int,int> mp;//to store the unique server ids in the current window

        vector<int> ans(q,0);
        vector<pair<int,int>> time(q);
        //store the indices of queries to store the answer in correct manner
        for(int i = 0;i<q;i++) time[i] = {queries[i],i}; //time,index
        sort(time.begin(),time.end()); //sort on basis of time
        
        int i = 0,j = 0; //i is the start of window and j is the end of window
        for(auto tm:time)
        {
            int curtime = tm.first;
            int ind = tm.second;
            
            int start = max(0,curtime-x); //finding the start time (like queries[i]-x), cant be less than 0
            int end = curtime; 
            
            
            while(j<m and vp[j].first<=end) //move j until the value of time in logs is not more than end
            {
                mp[vp[j].second]++; 
                j++;
            }
            while(i<m and vp[i].first<start) //move i until the value is not >= start
            {
                //removing out of window elements
                if(mp[vp[i].second]==1) mp.erase(vp[i].second); //if it is its only occurence then erase it.
                else mp[vp[i].second]--;
                i++;
            }
            ans[ind] = n - mp.size();
        }
        return ans;
    }
};
```
**Please upvote if you find it useful. Also ask your doubts in comments. I will be glad to help!!**