# C++ Solution | O(n) time complexity | No sorting

**Author:** yashranjan74
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimize-product-sum-of-two-arrays/solutions/1348173/](https://leetcode.com/problems/minimize-product-sum-of-two-arrays/solutions/1348173/)

---

Since the problem mentions that every element will be between 1 and 100, both inclusive, we can leverage this fact and the sorting can be avoided for both the arrays. We can store the count of each element for each of the arrays, and then multiply and add them, with lowest value being multiplied to the highest value and so on, to reduce our total product sum. Here's my AC C++ solution:-
```
class Solution {
public:
    int minProductSum(vector<int>& nums1, vector<int>& nums2) {
        int ans=0;
        vector<int>a(101,0),b(101,0);
        for(auto i:nums1){
            a[i]++;
        }
        for(auto i:nums2){
            b[i]++;
        }
        int i=1,j=100;
        while(i<=100 and j>=1){
            if(a[i]>0 and b[j]>0){
                int mini=min(a[i],b[j]);
                ans+=(mini*i*j);
                a[i]-=mini,b[j]-=mini;
            }
            if(a[i]==0) i++;
            if(b[j]==0) j--;
        }
        return ans;
    }
};
```