# C++ // 94%

**Author:** paulsepolia
**Votes:** 1
**Link:** [https://leetcode.com/problems/sentence-similarity/solutions/481984/](https://leetcode.com/problems/sentence-similarity/solutions/481984/)

---

class Solution 
{
    public:
    
    bool areSentencesSimilar(std::vector<std::string>& w1, 
                             std::vector<std::string>& w2, 
                             std::vector<std::vector<std::string>>& p) 
    {
        if(w1 == w2) return true;
        if(w1.size() != w2.size()) return false;
        
        std::map<std::pair<std::string, std::string>, int> ma;
        std::map<std::pair<std::string, std::string>, int> mb;
        
        for(size_t i = 0; i < w1.size(); i++)
        {
            if(w1[i] < w2[i])
            {
                ma[{w1[i], w2[i]}]++;
            }
            else if(w1[i] > w2[i])
            {
                ma[{w2[i], w1[i]}]++;
            }
        }
        
        for(const auto &el: ma)
        {
            mb[el.first] = 0;
        }
        
        for(size_t i = 0; i < p.size(); i++)
        {
            if(p[i][0] < p[i][1])
            {
                mb[{p[i][0], p[i][1]}]++;
            }
            else if (p[i][0] > p[i][1])
            {
                mb[{p[i][1], p[i][0]}]++;
            }
        }
        
        for(const auto & el: ma)
        {
            if(mb[el.first] == 0)
                return false;
        }
        
        return true;
    }
};