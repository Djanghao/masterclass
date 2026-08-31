# Evolve from brute force to dp

**Author:** yu6
**Votes:** 203
**Link:** [https://leetcode.com/problems/target-sum/solutions/97369/](https://leetcode.com/problems/target-sum/solutions/97369/)

---

This is similar to [Partition Equal Subset Sum](https://discuss.leetcode.com/topic/80074/evolve-from-brute-force-to-dp).
1. O(2^n) brute force 
```
    int findTargetSumWays(vector<int>& nums, int S) {
        return find(0,nums,S);    
    }
    int find(int p, vector<int>& nums, int sum) {
        if(p==nums.size()) return sum==0;
        return find(p+1,nums,sum+nums[p])+find(p+1,nums,sum-nums[p]);
    }
```
2. O(ns) Memoization. There is redundancy in brute force. A call to find() with the same start index and target sum can be made multiple times. We can use a 2d table to cache the result to avoid duplicate calls with the same state.
```
    int findTargetSumWays(vector<int>& nums, int S) {
        vector<unordered_map<int,int>> mem(nums.size());
        return find(0,nums,S,mem);    
    }
    int find(int p, vector<int>& nums, int sum, vector<unordered_map<int,int>>& mem) {
        if(p==nums.size()) return sum==0;
        auto it = mem[p].find(sum);
        if(it != mem[p].end()) return it->second;
        return mem[p][sum]=find(p+1,nums,sum+nums[p],mem)+find(p+1,nums,sum-nums[p],mem);
    }
```
3. O(ns) pseudo polynomial dp, s is the target sum. Most dp problems visits continuous states and this is a great example to use hashtable to visit valid states only.
```
    int findTargetSumWays(vector<int>& nums, int S) {
        int n = nums.size();
        vector<unordered_map<int,int>> dp(n+1);
        dp[0][0]=1;
        for(int i=0;i<n;i++)
            for(auto &p:dp[i]) {
                dp[i+1][p.first+nums[i]] += p.second; 
                dp[i+1][p.first-nums[i]] += p.second;
            }
        return dp[n][S];
    }
```
4. O(ns) time, linear space dp.
```
    int findTargetSumWays(vector<int>& nums, int S) {
        unordered_map<int,int> cur({{0,1}}), nxt, *p_cur=&cur, *p_nxt=&nxt;
        for(int i=0;i<nums.size();i++) {
            for(auto &p:*p_cur) {
                (*p_nxt)[p.first+nums[i]] += p.second; 
                (*p_nxt)[p.first-nums[i]] += p.second;
            }
            swap(p_cur,p_nxt);
            p_nxt->clear();
        }
        return (*p_cur)[S];
    }
```
5. O(ns) dp with continuous states. When hashtable is replaced by vector, test cases show significant runtime improvement. #4 is theoretically better because it does not visit invalid states.
```
    int findTargetSumWays(vector<int>& nums, int S) {
        int sum = accumulate(nums.begin(),nums.end(),0);
        if(S>sum || S<-sum) return 0;
        vector<int> cur(2*sum+1), nxt(2*sum+1), *p_cur = &cur, *p_nxt = &nxt;
        cur[sum] = 1;
        for(int i=0;i<nums.size();i++) {
            for(int j=0;j<=2*sum;j++) 
                if(p_cur->at(j)) {
                    p_nxt->at(j+nums[i]) += p_cur->at(j);
                    p_nxt->at(j-nums[i]) += p_cur->at(j);
                }
            swap(p_cur,p_nxt);
            p_nxt->assign(2*sum+1,0);
        }
        return p_cur->at(S+sum);
    }
```