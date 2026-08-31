# C++  ||  Binary Search approach

**Author:** aditya_pratap1
**Votes:** 43
**Link:** [https://leetcode.com/problems/find-the-distance-value-between-two-arrays/solutions/1909718/](https://leetcode.com/problems/find-the-distance-value-between-two-arrays/solutions/1909718/)

---

The function **isValid(arr[i],d)** checks if there is a number present in arr2 & it is in the range **[arr[i] - d.......arr[i] + d]**, & if there is such number in arr2, then arr[i] does not contribute in answer, else it does.
The binary-search works as we keep on getting close to the **num** so if there's a case such that **abs(num - arr[j]) <= d** we will reach it in **log(arr2.size())**.

```
class Solution {
public:
    bool isValid(vector<int>&arr,int target,int d){
        
        int low = 0, high = arr.size() - 1;
        while(low <= high){
            
            int mid = low + (high - low)/2;
            if(abs(arr[mid] - target) <= d){
                return false;
            }
            else if(arr[mid] < target){
                low = mid + 1;
            }
            else{
                high = mid - 1;
            }
            
        }
        return true;
    }
    
    int findTheDistanceValue(vector<int>& arr1, vector<int>& arr2, int d) {
        
        sort(arr2.begin(),arr2.end());
        
        int cnt = 0;
        for(auto num:arr1){
           if(isValid(arr2,num,d)){
               cnt++;
           } 
        }
        
        return cnt;
    }
};
```