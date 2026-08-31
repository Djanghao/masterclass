# 626 / 627 test cases passed.Need Help!!!

**Author:** khushi_50
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-ii/solutions/5690031/](https://leetcode.com/problems/count-substrings-that-satisfy-k-constraint-ii/solutions/5690031/)

---

626 / 627 test cases passed.
Can anyone pls help to optimze it.
```
class Solution {
public:
    vector<long long> countKConstraintSubstrings(string s, int k, vector<vector<int>>& q) {
        int n = s.size();
        vector<int> v(n, 0);
        int i = 0, cnt1 = 0, cnt0 = 0;
        
        for (int j = 0; j < n; j++) {
            if (s[j] == '0') cnt0++;
            else cnt1++;
            
            if (cnt1 <= k || cnt0 <= k) {
                v[j] = i;
            } else {
                while(cnt1 > k && cnt0 > k){
                if (s[i] == '0') cnt0--;
                else cnt1--;
                i++;
                }
                v[j]=i;
            }
        }
      vector<long long >res(n,0);
        res[0]=v[0]+1;
        for(int i=1; i<n; i++){
            int x=i-v[i]+1;
            res[i]=res[i-1]+x;
        }
        vector<long long> ans;
        for (int idx = 0; idx < q.size(); idx++) {
            int x = q[idx][0];
            int y = q[idx][1];
            if(x==0) ans.push_back(res[y]);
            else {
                long long z=res[y]-res[x-1];
                for(int i=x; i<=y; i++){
                    if(v[i]>=x) break;
                    else z-=(x-v[i]);
                }
                ans.push_back(z);
            }
        }
        // for(int i=0; i<n; i++) cout<<res[i]<<" ";
        //  for(int i=0; i<n; i++) cout<<v[i]<<" ";
        return ans;
    }
};
```