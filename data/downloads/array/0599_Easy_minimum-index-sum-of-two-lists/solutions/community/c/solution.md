# Easy C++ Solution, 96ms, beats 94%

**Author:** Pooja0406
**Votes:** 15
**Link:** [https://leetcode.com/problems/minimum-index-sum-of-two-lists/solutions/379994/](https://leetcode.com/problems/minimum-index-sum-of-two-lists/solutions/379994/)

---

Runtime: 96 ms, faster than 94.71% of C++ online submissions for Minimum Index Sum of Two Lists.
Memory Usage: 27.9 MB, less than 100.00% of C++ online submissions for Minimum Index Sum of Two Lists.

```
vector<string> findRestaurant(vector<string>& list1, vector<string>& list2) {
        
        vector<string> res;
        int indexSum = INT_MAX;
        
        unordered_map<string, int> mp;
        
        for(int i=0; i<list1.size(); i++)
            mp[list1[i]] = i;
        
        for(int i=0; i<list2.size(); i++)
        {
            if(mp.find(list2[i]) != mp.end())
            {
                if(mp[list2[i]] + i < indexSum)
                {
                    indexSum = mp[list2[i]] + i;
                    res.clear();
                    res.push_back(list2[i]);
                }
                else if(mp[list2[i]] + i == indexSum)
                    res.push_back(list2[i]);
            }    
        }
        
        return res;
    }