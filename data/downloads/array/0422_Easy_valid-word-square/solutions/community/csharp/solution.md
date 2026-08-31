# C# Solution

**Author:** panaeimi
**Votes:** 1
**Link:** [https://leetcode.com/problems/valid-word-square/solutions/3663379/](https://leetcode.com/problems/valid-word-square/solutions/3663379/)

---

# Code
```
public class Solution {
    public bool ValidWordSquare(IList<string> words) {
        for(int r = 0; r < words.Count; r++) {
            for(int i = 0; i < words[r].Length; i++) {
                if(i >= words.Count || r >= words[i].Length || words[r][i] != words[i][r]) {
                    return false;
                } 
            }
        }

        return true;
    }
}
```