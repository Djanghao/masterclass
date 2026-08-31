# Elegant C++ Solution without stack

**Author:** dracarys017
**Votes:** 53
**Link:** [https://leetcode.com/problems/longest-absolute-file-path/solutions/290430/](https://leetcode.com/problems/longest-absolute-file-path/solutions/290430/)

---

Sharing this elegant c++ soltuon without stack.

```
        input.push_back('\
');
        vector<int> levels(300, 0);
        int level = 0;
        bool isFile = false;
        int ans = 0;
        int length = 0;
            
        for(char c: input){
            switch(c){
                case '\
': { level = 0; length = 0; isFile=false; break; }
                case '\	': { level++; break; }
                case '.' : isFile = true;
                    
                default:
                    length++;
                    levels[level] = length;
                    if(isFile){
                        ans = max(ans, accumulate(levels.begin(), levels.begin() + level + 1, 0) + level);
                    }
            }
        }
        
        return ans;


```