# C++ Clear and Concise solution, Runtime: O(n), Space: O(1)

**Author:** kaju-katli
**Votes:** 64
**Link:** [https://leetcode.com/problems/maximum-score-after-splitting-a-string/solutions/598000/](https://leetcode.com/problems/maximum-score-after-splitting-a-string/solutions/598000/)

---

**Description**: Traverse once to count the number of ones. Travese again to count the left zeroes and right ones using the previous calculation of ones(they constitute the ones on the right). If you encounter a 0 increase the left zeroes count and if you encounter a 1, decreaser the right ones count. Keep track of the maximum score at each division.

```
class Solution {
public:
    int maxScore(string s) {
        int rightOnes = 0, leftZeroes = 0;
        for(char c: s)
            if(c=='1') rightOnes++;
        
        int score = 0;
        for(int i=0; i<s.length()-1; i++){
            if(s[i]=='0') leftZeroes++;
            else rightOnes--;
            score = max(score, leftZeroes + rightOnes);
        }
        return score;
    }
};
```