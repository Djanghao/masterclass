# [C++] Stack solution

**Author:** tinfu330
**Votes:** 1
**Link:** [https://leetcode.com/problems/smallest-k-length-subsequence-with-occurrences-of-a-letter/solutions/1947832/](https://leetcode.com/problems/smallest-k-length-subsequence-with-occurrences-of-a-letter/solutions/1947832/)

---

```
class Solution {
public:
    string smallestSubsequence(string s, int k, char required, int repetition) {
        int sCnt = s.size();
        
        // Find out how many tar are there in the string
        int rCnt = 0; // required characters in the right side
        for (char &c : s) {
            rCnt += (c == required);
        }
        
        string mono;
        int lCnt = 0; // required characters in stack
        for (char &c : s) {
            while (!mono.empty() && c < mono.back()) {
                if (mono.back() == required && lCnt + rCnt == repetition) { // cannot pop the required character
                    break;
                }
                if (mono.size() + sCnt == k) { // no more letters we can pop
                    break;
                }
                lCnt -= (mono.back() == required);
                mono.pop_back();
            }
            
            // push to stack if less than k characters in stack
            // otherwise, we will have to check if it is required for us to push the character
            if (mono.size() < k) {
                mono += c;
                lCnt += (c == required);
            } else {
                // the only case we are forced to push c into stack is when
                // this is the only remaining required character
                if (c == required && lCnt + rCnt == repetition) {
                    for (int i = mono.size() - 1; i >= 0; i--) {
                        if (mono[i] != required) {
                            mono[i] = c;
                            lCnt++;
                            break;
                        }
                    }
                }
            }
            
            rCnt -= (c == required);
            sCnt--;
        }
        
        return mono.substr(0, k);
    }
};
```