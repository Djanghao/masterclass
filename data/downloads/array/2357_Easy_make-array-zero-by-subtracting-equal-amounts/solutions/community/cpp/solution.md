# ✅C++ | ✅Brute->Optimal | ✅Simple Approach

**Author:** Yash2arma
**Votes:** 16
**Link:** [https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/solutions/2357754/](https://leetcode.com/problems/make-array-zero-by-subtracting-equal-amounts/solutions/2357754/)

---

**Approach-1: Brute-force**
```
class Solution {
public:
    int minimumOperations(vector<int>& nums) 
    {
        sort(nums.begin(), nums.end()); //sort nums in increasing order
        int count=0;
        
        for(int i=0; i<nums.size(); i++)
        {
            if(nums[i] > 0) //first smallest non-zero element
            {
                int x = nums[i];
                count++;
                for(int j=i; j<nums.size(); j++) //substract x from all elements greater than it.
                {
                    nums[j] = nums[j]-x;
                }

            }
        }
        return count;
        
    }
};
```

**Approach-2: Optimal**
```
int minimumOperations(vector<int>& nums) {
    unordered_set<int> set;
    for(auto it:nums) if(it!=0) set.insert(it);
    return set.size();
}
```