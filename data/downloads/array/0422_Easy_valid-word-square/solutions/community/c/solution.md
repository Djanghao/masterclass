# [C++] Brute-force

**Author:** codedayday
**Votes:** 4
**Link:** [https://leetcode.com/problems/valid-word-square/solutions/1685426/](https://leetcode.com/problems/valid-word-square/solutions/1685426/)

---

Approach 1:
Time Complexity: O(MN); where M is the number of wrods and N is the longest length of the word
Space Complexity: O(1)
```
class Solution {
public:
    bool validWordSquare(vector<string>& words) {
        for(int i = 0, m = words.size(); i < m; i++)
            for(int j = 0; j < words[i].size(); j++)
                if(j >= m || i >= words[j].size() || words[i][j] != words[j][i]) 
                    return false;
        
        return true;
    }
};
```