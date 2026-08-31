# C++ // 95% // using map

**Author:** paulsepolia
**Votes:** 3
**Link:** [https://leetcode.com/problems/high-five/solutions/473289/](https://leetcode.com/problems/high-five/solutions/473289/)

---

class Solution 
{
    public:
    
    std::vector<std::vector<int>> 
        highFive(std::vector<std::vector<int>>& items) 
    {
        std::vector<std::vector<int>> res;
        std::map<int, std::vector<int>> ma;
        
        for(const auto &el: items)
        {
            ma[el[0]].push_back(el[1]);
        }
        
        for(auto &el: ma)
        {
            std::sort(el.second.begin(), el.second.end(), std::greater<int>()); 
    
            el.second.resize(5);
            
            int sum_loc = 0;
            
            for(const auto &x: el.second)
            {
                sum_loc += x;
            }
            
            sum_loc /= 5;
            
            res.push_back({el.first, sum_loc});
        }
    
        return res;
    }
};