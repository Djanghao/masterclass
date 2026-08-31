# C++ Priority Queue Efficient Explained Solution

**Author:** manikgarg2000
**Votes:** 47
**Link:** [https://leetcode.com/problems/ipo/solutions/1388561/](https://leetcode.com/problems/ipo/solutions/1388561/)

---

1. First we will store all the projects in projects vector as pairs {Profit(i), Capital(i)};
2. Now we will sort all the projects according to its capital value.
3. Now we will fetch all the projects that we can perform for our own capital value. 
4. After fetching all these projects sotre their profit value in Max Heap (maxProfit in below code).
5. Now check if the Heap is Empty or not, if its not empty then take the top value of the heap (indicates that we chose max profit value from given projects, think greedy here).
6. Now perform step 3, k times because we want to perform exactly k projects to gain max profit.

class Solution {
public:

    int findMaximizedCapital(int k, int w, vector<int>& profits, vector<int>& capital) {
        int n=profits.size();
        vector<pair<int,int>> projects(n);
        for(int i=0;i<n;i++) projects[i]={profits[i],capital[i]}; 
        int i=0;
        sort(projects.begin(),projects.end(),[&](pair<int,int> a,pair<int,int> b){ return a.second<b.second;});
        priority_queue<int> maxProfit;
        while(k--){
            while(i<n && w>=projects[i].second) maxProfit.push(projects[i++].first);
            
            if(!maxProfit.empty()) w+=maxProfit.top(),maxProfit.pop();
        }
        return w;
    }
};

Hope you understood this, Please UPVOTE : )