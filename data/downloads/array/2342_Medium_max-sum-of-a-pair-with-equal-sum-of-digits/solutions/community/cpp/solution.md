# C++ | easy solution| 100% faster | vector pair

**Author:** chirag004
**Votes:** 26
**Link:** [https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/solutions/2293144/](https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/solutions/2293144/)

---

#### please upvote if you like the solution
![image](./images/0.png)

class Solution {
public:

    int maximumSum(vector<int>& nums) {
        int n = nums.size();
        vector<int> v;
        int ans=-1;
        vector<pair<int,int>> p;
        for( int i=0;i<n ;i++){ 
            int a=0, sum=0;
            a=nums[i]; 
             while (a != 0) {
                sum = sum + a % 10;
                 a = a / 10;
            }
           
            v.push_back(sum);
        }
        for(int i=0 ;i<n;i++){
            p.push_back(make_pair(v[i], nums[i]));
        }
        sort(p.begin(),p.end());
          
             for(int i=1;i<n ;i++){
                 if(p[i].first == p[i-1].first){
                     ans=max(ans,p[i].second+p[i-1].second);
                 }
             }
        return ans;
    }
};
