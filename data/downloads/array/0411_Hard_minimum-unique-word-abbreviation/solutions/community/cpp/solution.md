# Very easy to understand, beat 100%

**Author:** dawninghu
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-unique-word-abbreviation/solutions/5972169/](https://leetcode.com/problems/minimum-unique-word-abbreviation/solutions/5972169/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
class Solution {
public:
    string minAbbreviation(string target, vector<string>& dictionary) {
        int n = target.length();
        int totalCount = (1 << n); //there are 2^n possible status.
        string minAbbr = target;
        int minLen = n;

        for( int i = totalCount; i > 0; i-- ) { //i is a status.
            string abbr = generateAbbr(target, i);
            //cout << i << " new abbr. for target:" << abbr << endl;
            if(abbr.length() >= minLen)
                continue;
            bool flag = true; //is there a qualified new abbr?
            for(auto word: dictionary) {
                if(word.length() == n) {
                    string abbr2 = generateAbbr(word, i);
                    if(abbr2 == abbr) {
                        flag = false;
                        break;
                    };
                };
            };
            if( flag ) {
                if(abbr.length() < minLen) {
                    minAbbr = abbr;
                    minLen = abbr.length();
                };
            };
        };
        return minAbbr;
    }
    string generateAbbr(string word, int status) {//status: the bit mask of which char is chosen.
        string ret;
        int consecutiveCount = 0;
        int len = word.length();
        for(int i=0; i<len; i++) {
            int curChar = (status & 1); //whether word[i] is chosen.
            if(curChar == 1)
                consecutiveCount++;
            else { //this char is not chosen.
                if( consecutiveCount > 0 ) {
                    ret += to_string(consecutiveCount);
                    consecutiveCount = 0;
                };
                ret += word[i];
            } 
            status = (status >> 1);
        }
        
        if(consecutiveCount > 0)
            ret += to_string(consecutiveCount);
        return ret;
    };
};



```