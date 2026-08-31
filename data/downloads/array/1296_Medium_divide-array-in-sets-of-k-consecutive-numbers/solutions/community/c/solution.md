# C++ solution using ordered maps

**Author:** bhawan0407
**Votes:** 14
**Link:** [https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/solutions/770938/](https://leetcode.com/problems/divide-array-in-sets-of-k-consecutive-numbers/solutions/770938/)

---

A simple C++ solution using ordered maps with **keys as elements of the array** and **values as their respective counts**. 

1. Start from the first key of the map.(i.e. least element in the array which is not part of any sequence).
2. Check for the existence of other k-1 consecutive keys.
3. If any of the keys is not present, then return false.
4. Else,  decrement the count of that key as it is included in the current sequence. If the count is 0, then remove that key as well. 
5. Repeat the above 4 steps (n/k) times where n is the number of elements in the array and k is the size of the sequence, so total number of sequences we can make is (n/k). 

```
class Solution {
public:
    bool isPossibleDivide(vector<int>& nums, int k) {
        
        int n = nums.size();
        
        if(n % k != 0)
        {
            return false;
        }
        
        map<int, int> mp;
        
        for(int& num: nums)
        {
            mp[num]++;
        }
        
        int l = n/k;
        
        
        for(int i = 1; i <= l; i++)
        {
            auto it = mp.begin();
            int tmp = it->first;
            
            for(int j = tmp; j < tmp + k; j++)
            {
                if(mp.find(j) == mp.end())
                {
                    return false;
                }
                
                mp[j]--;
                if(mp[j] == 0)
                {
                    mp.erase(j);
                }
            }
        }
        
        
        return true;
    }
};
```