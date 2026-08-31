# easy solutions | z-algorithm | c++ | greedy

**Author:** rishendra2003
**Votes:** 16
**Link:** [https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-ii/solutions/5788498/](https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-ii/solutions/5788498/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->
use z-algothm to calculate the longest substring of target that begins at position k and is a prefix of any word in words and it is stored in array match then use greedy algorithm to calculate minimum steps

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
class Solution {
public:
    int minValidStrings(vector<string>& words, string target) {
        int n = target.size();
        vector<int> match(n, 0);
        for (auto& word : words) {
            string s = word + "#" + target;
            int excess = word.size() + 1;
            int nn = s.size();
            // z-algorithm
            vector<int> z(nn);
            int x = 0, y = 0;
            for (int i = 1; i < nn; i++) {
                z[i] = max(0, min(z[i - x], y - i + 1));
                while (i + z[i] < nn && s[z[i]] == s[i + z[i]]) {
                    x = i;
                    y = i + z[i];
                    z[i]++;
                }
                if (i >= excess && z[i] > 0)
                    match[i - excess] = max(match[i - excess], z[i]);
            }
        }
        // greedy algorithm
        int steps =0,currend=0,farthest=0;
        for(int i=0; i<n; i++){
            farthest = max(farthest, i+match[i]);
            if(i==currend){
                steps++;
                currend =farthest;
                if(currend>=n)  break;
            }
        }
        // if we can't form the target
        if(currend<n)   return -1;
        return steps;
    }
};
```