# C++ Binary Search (mlogm)

**Author:** beast_vin
**Votes:** 1
**Link:** [https://leetcode.com/problems/earliest-second-to-mark-indices-i/solutions/4796450/](https://leetcode.com/problems/earliest-second-to-mark-indices-i/solutions/4796450/)

---

```
class Solution {
public:
    int earliestSecondToMarkIndices(vector<int>& v, vector<int>& ci) {
        int n = v.size();
        int m = ci.size();
        
        int l=0,h=m+1;
        while(l<h){
            int mid = l+(h-l)/2;
            //cout<<mid<<" "; 
            if(solve(v,ci,mid)){
                h = mid;
            }else{
                l = mid+1;
            }
        }
        return h == m+1 ? -1 : h;
    }
    bool solve(vector<int>&v ,vector<int>&ci ,int mid){
        map<int,int>lo;
        for(int i=0;i<mid;i++){
            lo[ci[i]]=i;
        }
        if(lo.size() != v.size()) return false;
        int cnt=0;
        for(int i=0;i<mid;i++){
            
            if(i == lo[ci[i]]){
                //cout<<cnt<<" ----> "<<mid<<endl;
                
                if(cnt < v[ci[i]-1] )
                    return false;
                else
                    cnt-= v[ci[i]-1];
            }else
                cnt++;
        }
       
        return true;
    }
};

```