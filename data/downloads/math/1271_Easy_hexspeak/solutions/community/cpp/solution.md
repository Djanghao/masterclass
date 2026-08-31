# C++ // All 100%

**Author:** paulsepolia
**Votes:** 1
**Link:** [https://leetcode.com/problems/hexspeak/solutions/462615/](https://leetcode.com/problems/hexspeak/solutions/462615/)

---

class Solution 
{
    public:
    
    std::string toHexspeak(std::string num) 
    {
        const size_t n = stoull(num);
        
        std::stringstream ss;
        ss << std::hex << n;
        
        std::string res = ss.str();
        
        for(size_t i = 0; i < res.size(); i++)
        {
            if(res[i] == '2' || 
               res[i] == '3' || 
               res[i] == '4' ||
               res[i] == '5' ||
               res[i] == '6' ||
               res[i] == '7' ||
               res[i] == '8' ||
               res[i] == '9')
            {
                return "ERROR";
            }
        }
        
        
        for(size_t i = 0; i < res.size(); i++)
        {
            if(res[i] == '0') 
            {
                res[i] = 'O';
            }
            else if(res[i] == '1')
            {
                res[i] = 'I';
            }
        }
        
        std::transform(res.begin(), res.end(), res.begin(), ::toupper);

        return res;
    }
};