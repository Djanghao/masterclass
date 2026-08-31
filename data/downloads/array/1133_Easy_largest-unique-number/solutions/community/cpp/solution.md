# C++ // 95% // STL unordered_map

**Author:** paulsepolia
**Votes:** 3
**Link:** [https://leetcode.com/problems/largest-unique-number/solutions/455572/](https://leetcode.com/problems/largest-unique-number/solutions/455572/)

---

class Solution {
public:
    int largestUniqueNumber(std::vector<int>& A) {
        
        std::unordered_map<int, int> mm;
        
        for(size_t i = 0; i < A.size(); i++)
        {
            mm[A[i]]++;
        }
        
        int res = -1;
        
        for (auto it = mm.begin(); it != mm.end(); ++it)
        { 
            if(it->second == 1)
            {
                res = std::max(it->first, res);
            }           
        }
        
        return res;
    }
};