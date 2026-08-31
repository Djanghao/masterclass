# Simple Implementation without Stack | O(1) Space

**Author:** ayush6203
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/solutions/3554070/](https://leetcode.com/problems/minimum-insertions-to-balance-a-parentheses-string/solutions/3554070/)

---

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(1)

# Code
```
public class Solution {
    public int MinInsertions(string s) {
        int openCount = 0;
        int minInsertion = 0;
        int n = s.Length;
        
        for(int i = 0; i < n; i++){
            if(s[i] == '('){
                ++openCount;
                continue;
            }

            if(openCount == 0)
                ++minInsertion;
            else
                --openCount;

            if(i == n-1){
                ++minInsertion;
            }
            else{
                if(s[i+1] != ')')
                    ++minInsertion;
                else
                    ++i;
            }  
        }

        return minInsertion + (2 * openCount);
    }
}
```