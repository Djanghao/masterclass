# Easiest solution using only vector | C++

**Author:** user7392a
**Votes:** 37
**Link:** [https://leetcode.com/problems/sliding-window-median/solutions/868749/](https://leetcode.com/problems/sliding-window-median/solutions/868749/)

---

```
class Solution {
public:
    vector<double> medianSlidingWindow(vector<int>& nums, int k) {
        
        vector<double> res;
        vector<long long> med;
        
        for(int i= 0; i<k; i++)
            med.insert(lower_bound(med.begin(),med.end(),nums[i]),nums[i]);
        if(k%2==0)
            res.push_back((double)(med[k/2]+med[k/2-1])/2 );
        else
            res.push_back((double)med[k/2]);
        
        
        for(int i=k; i<nums.size(); i++)
        {
            med.erase(lower_bound(med.begin(),med.end(),nums[i-k]));
            med.insert(lower_bound(med.begin(),med.end(),nums[i]),nums[i]);
            if(k%2==0)
                res.push_back((double)(med[k/2]+med[k/2-1])/2 );
            else
                res.push_back((double)med[k/2]);
        }
        return res;
    }
};
```