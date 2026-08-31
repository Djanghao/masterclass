# ✔✔ || BINARY SEARCH || TWO POINTER || C++ || 100% (faster than)

**Author:** Udhay_Brahmi
**Votes:** 78
**Link:** [https://leetcode.com/problems/find-k-th-smallest-pair-distance/solutions/1276239/](https://leetcode.com/problems/find-k-th-smallest-pair-distance/solutions/1276239/)

---

```
class Solution {
public:
    bool check(int mid,vector<int> &nums,int k){
      int total=0;
      int j=0,n=nums.size();
      for(int i=0;i<n;i++){
        while(j<n && nums[j]-nums[i]<=mid)j++;
        j--;
        total+=(j-i);
      }
      return total>=k;
    }
    int smallestDistancePair(vector<int>& nums, int k) {
      int n = nums.size();
      sort(nums.begin(),nums.end());
      int l=0,r = nums[n-1]-nums[0];
      while(l<r){
        int mid = (l+r)/2;
        if(check(mid,nums,k)){
          r=mid;
        }
        else{
          l=mid+1;
        }
      }
      return l;
    }
};
THIS IS MY FIRST POST , PLZ SUPPORT