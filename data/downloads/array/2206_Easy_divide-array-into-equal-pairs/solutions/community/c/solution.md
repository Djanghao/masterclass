# ✅C++ | ✅Easy O(N) solution | ✅2 Approaches

**Author:** Yash2arma
**Votes:** 42
**Link:** [https://leetcode.com/problems/divide-array-into-equal-pairs/solutions/1864351/](https://leetcode.com/problems/divide-array-into-equal-pairs/solutions/1864351/)

---

**Please upvote if you find this solution helpful :)**
**Approach-1 :**
*Time Complexity - O(Nlog(N))
Space Complexity - O(1)*
**Code:**
```
class Solution {
public:
    bool divideArray(vector<int>& nums) 
    {
        int n =nums.size();
        sort(nums.begin(), nums.end());
        int i=1;
        while(i<n)
        {
            if(nums[i-1] != nums[i])
                return false;
            i = i+2;
        }
        return true;
        
    }
};
```
**Code:**
**Approach-2 :**
*Time Complexity - O(N)
Space Complexity - O(N)*

```
class Solution {
public:
    bool divideArray(vector<int>& nums) {
        int n = nums.size();
        unordered_map<int, int> mpp;
        
        for(int i=0; i<n; i++){
            mpp[nums[i]]++;    
        }
        
        //count total pairs
        int totalPairs = 0;
        for(auto it: mpp){
            totalPairs += it.second/2;
        }
        
        return (totalPairs == n/2);
    }
};
```

**Please upvote if you find this solution helpful :)**