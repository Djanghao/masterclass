# C++ Easy Solution (Similar to Page Allocation Problem)

**Author:** ujju1212
**Votes:** 17
**Link:** [https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/solutions/1564842/](https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/solutions/1564842/)

---

Minimum amount which can be given is 1 and maximum is max(quantities), so 1-max(quantites) will be our search space.

If it is possible for a particular mid then we will shift our search space to left side as we want minimize the no. of products otherwise will shift to the right if not possible

In **isPossible function** if cnt<n then we will give 0 quantites to the remaining stores , so that barrier will be possible

But if at any point cnt becomes greater than n , it means that after distributing to all stores some quantites are still left , so we will return false


```
class Solution {
    bool isPossible(vector<int>& q,int n,int barrier){
        int cnt=0;
        for(int i=0;i<q.size();i++){
            if(q[i]<=barrier){
                cnt++;
            }
            else{
                int temp=q[i];
                while(temp>0){
                    temp-=barrier;
                    cnt++;
                }
            }
            if(cnt>n) return false;
        }
        return true;
    }
    
public:
    int minimizedMaximum(int n, vector<int>& q) {
        int start=1,end=*max_element(q.begin(),q.end());
        
        int ans = INT_MAX;
        while(start<=end){
            int mid = start+(end-start)/2;
            if(isPossible(q,n,mid)){
                ans = min(ans,mid);
                end=mid-1;
            }
            else start=mid+1;
        }
        return ans;
    }
};
```

**TC : nlog(max(quantities))**
(n is quantities.size())