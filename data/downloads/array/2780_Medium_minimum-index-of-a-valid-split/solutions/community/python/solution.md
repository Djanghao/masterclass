# Beginner Friendly solution || Using MAP (STL) || Very short explanation

**Author:** BihaniManan
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-index-of-a-valid-split/solutions/3771940/](https://leetcode.com/problems/minimum-index-of-a-valid-split/solutions/3771940/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Use map to count the frequency of the elements.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Store the frequency of the elements in the map.
2. Store the elements and their frequency in a vector pair, so that it is more easily accessible.
2. Check for the base cases, i.e. size of the array is 1 and size of the vector pair is 1.
3. Now as the dominant element becomes dominant in the first array, return that particular index. **[ if(cnt * 2 > i + 1) return i; ]**

# Complexity
- Time complexity: **O(n)**
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: **O(n)**
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int minimumIndex(vector<int>& nums) {
        map<int,int> mp;
        vector<pair<int,int>> v;
        for(int i = 0; i < nums.size(); i++)
        {
            mp[nums[i]]++;
        }
        for(auto & it: mp)
        {
            v.push_back({it.second, it.first});
        }
        sort(v.rbegin(), v.rend());
        
        if(v.size() == 1)
        {
            if(v[0].first == 1)
            {
                return -1;
            }
            else
            {
                return 0;
            }
        }
        else if(v[0].first <= (nums.size() + 1) / 2)
        {
            return -1;
        }
        else
        {
            if(2 * v[0].first <= nums.size()) return -1;
            else
            {
                int cnt = 0;
                for(int i = 0; i < nums.size(); i++)
                {
                    if(nums[i] == v[0].second)
                    {
                        cnt++;
                        if(cnt * 2 > i + 1)
                        {
                            return i;
                        }
                    }
                }
            }
        }
        return -1;
    }
};
```