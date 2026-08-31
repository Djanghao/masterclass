# c++ // ALL 100% // Simple

**Author:** paulsepolia
**Votes:** 26
**Link:** [https://leetcode.com/problems/split-a-string-in-balanced-strings/solutions/451156/](https://leetcode.com/problems/split-a-string-in-balanced-strings/solutions/451156/)

---

class Solution {
public:
    int balancedStringSplit(std::string s) {
        
        const size_t SIZE1{ s.size() };
        
        int counter = 0;
        int res = 0;
        
        for(size_t i = 0; i < SIZE1; i++)
        {
            if(s[i] == 'R')
            {
                counter++;
            }
            else
            {
                counter--;
            }
            
            if(counter == 0)
            {
                res++;
            }
        }
    
        return res;
    }
};