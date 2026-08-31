# C++ Solutions | 1 : Map | 2 : Two Pointer with sort

**Author:** a3426189
**Votes:** 360
**Link:** [https://leetcode.com/problems/intersection-of-two-arrays-ii/solutions/846181/](https://leetcode.com/problems/intersection-of-two-arrays-ii/solutions/846181/)

---

If you think my solution is helpful,Please give me a reputation : ) 
```
class Solution {// Using Map & without sort
public:
    vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {
        map<int,int>freq;
        vector<int>ans;
        for(int i = 0;i<nums1.size();i++){
            freq[nums1[i]]++;
        }
        for(int i = 0;i<nums2.size();i++){
            if (freq[nums2[i]] > 0){
                freq[nums2[i]]--; 
                ans.push_back(nums2[i]);
            }
        }
        return ans;
    }
};
```

```
class Solution {// Two pointer ( i , j ) with sort
public:
    vector<int> intersect(vector<int>& nums1, vector<int>& nums2) {
        sort(nums1.begin(), nums1.end());
        sort(nums2.begin(), nums2.end());
        int i = 0, j = 0;
        vector<int> res;
        while(i < nums1.size() && j < nums2.size()){
            if(nums1[i] == nums2[j]){
                res.push_back(nums1[i]);
                i++;
				j++;
            }
            else if(nums1[i] < nums2[j]){
                i++;
            }
            else if(nums1[i] > nums2[j]){
                j++;
            }
        }
        return res;
    }
};
```
