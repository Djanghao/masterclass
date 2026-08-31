# ✅ C++ Easy Hashmap solution | with explanation

**Author:** avaneeshYadav
**Votes:** 125
**Link:** [https://leetcode.com/problems/number-of-arithmetic-triplets/solutions/2392136/](https://leetcode.com/problems/number-of-arithmetic-triplets/solutions/2392136/)

---

# Hashing Technique.

**O(N) space and O(N) Time :**

1. Simply first store all the elements of array in a map or a set.
2. Now again traverse the array and see for every element say 'x', if there are two more elements present in map i.e x+diff and x-diff.
3. If present then increment the count by 1.
4. Return the count variable.
```
class Solution {
public:
    int arithmeticTriplets(vector<int>& nums, int diff) {
        
        int cnt = 0;
        
        unordered_map<int,bool> mp;
        
        // Mark every elem presence in map.
        for(int i=0;i<nums.size();i++)
            mp[nums[i]] = true;
        
        
        // For every element say 'elm' check if there exist both numbers, (elm + diff) and (elm - diff) inside map. If yes then increment cnt
        for(int i=0;i<nums.size();i++)
        {
            if(mp[nums[i]-diff] && mp[nums[i]+diff])
                cnt++;
        }
        
		
		// Happy return :)
        return cnt;
    }
};
```