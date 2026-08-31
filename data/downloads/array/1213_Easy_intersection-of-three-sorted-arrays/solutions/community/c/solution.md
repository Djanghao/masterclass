# C++ Solution  Time O(N),  Space O(1)

**Author:** Saravanakumar_dharmaraj
**Votes:** 6
**Link:** [https://leetcode.com/problems/intersection-of-three-sorted-arrays/solutions/559551/](https://leetcode.com/problems/intersection-of-three-sorted-arrays/solutions/559551/)

---

```
class Solution {
public:
    vector<int> arraysIntersection(vector<int>& arr1, vector<int>& arr2, vector<int>& arr3) {
        
       vector<int> res;
       int i = arr1.size() - 1;
       int j = arr2.size() - 1;
       int k = arr3.size() - 1;
      
       while(i >= 0 && j >= 0 && k >= 0) {
           
           if(arr1[i] > arr2[j] || arr1[i] > arr3[k]) {
               --i;
           }else if(arr2[j] > arr3[k] || arr2[j] > arr1[i]) {
               --j;
           }else if(arr3[k] > arr1[i] || arr3[k] > arr2[j]) {
               --k;
           }else {
               res.push_back(arr1[i]);
               --i;
               --j;
               --k;
           }
           
       }
       return {res.rbegin(), res.rend()};
    }
};
```