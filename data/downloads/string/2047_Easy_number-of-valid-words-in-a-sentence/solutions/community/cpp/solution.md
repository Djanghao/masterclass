# In C++

**Author:** RanjithGopinath
**Votes:** 2
**Link:** [https://leetcode.com/problems/number-of-valid-words-in-a-sentence/solutions/5549202/](https://leetcode.com/problems/number-of-valid-words-in-a-sentence/solutions/5549202/)

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
```
#include <string>
#include <sstream>
#include <cctype>
using namespace std;

class Solution {
public:
    bool isValidWord(const string& word) {
        int n = word.size();
        bool hasHyphen = false;
        bool hasPunctuation = false;
        
        for (int i = 0; i < n; ++i) {
            if (isdigit(word[i])) {
                return false; // contains digit
            }
            if (word[i] == '-') {
                if (hasHyphen || i == 0 || i == n - 1 || !islower(word[i-1]) || !islower(word[i+1])) {
                    return false; // invalid hyphen usage
                }
                hasHyphen = true;
            }
            if (word[i] == '!' || word[i] == '.' || word[i] == ',') {
                if (hasPunctuation || i != n - 1) {
                    return false; // invalid punctuation usage
                }
                hasPunctuation = true;
            }
        }
        
        return true;
    }
    
    int countValidWords(string sentence) {
        istringstream ss(sentence);
        string token;
        int validWordCount = 0;
        
        while (ss >> token) {
            if (isValidWord(token)) {
                ++validWordCount;
            }
        }
        
        return validWordCount;
    }
};
```