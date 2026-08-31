# C++ using map

**Author:** ritesh14
**Votes:** 14
**Link:** [https://leetcode.com/problems/longest-well-performing-interval/solutions/334619/](https://leetcode.com/problems/longest-well-performing-interval/solutions/334619/)

---

Think of this problem as finding length of longest subarray in array of 1s and 0s where 1s are more than 0s:

	int longestWPI(vector<int>& hours) {
        int n=hours.size();
        
        unordered_map<int,int> mp;
        int result=0,sum=0;
        for(int i=0;i<n;i++) {
            if(hours[i]>8) {
                sum++;
            }
            else {
                sum--;
            }
            
            if(sum>0)   result=i+1;
            else if(sum<=0) {
                if(mp.find(sum-1)!=mp.end()) {
                    result=max(result,i-mp[sum-1]);
                }
            }
            if(mp.find(sum)==mp.end())
                mp[sum]=i;
        }
        return result;
    }