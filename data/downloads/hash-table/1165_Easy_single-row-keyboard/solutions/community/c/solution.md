# C++ // 50% using std::map

**Author:** paulsepolia
**Votes:** 3
**Link:** [https://leetcode.com/problems/single-row-keyboard/solutions/472363/](https://leetcode.com/problems/single-row-keyboard/solutions/472363/)

---

class Solution 
{
    public:
    
    int calculateTime(std::string keyboard, std::string word) 
    {
        std::unordered_map<char, int> ma;
        int pos = 0;
        
        for(const auto &el: keyboard)
        {
            ma[el] = pos;
            pos++;
        }
        
        int res = 0;
        int pos_init = 0;
        
        for(const auto &el: word)
        {
            int pos = ma[el];
            res += std::abs(pos - pos_init);
            pos_init = pos;
        }
        
        return res;
    }
};