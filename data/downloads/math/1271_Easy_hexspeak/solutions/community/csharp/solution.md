# Simple solution using ToString(X)

**Author:** user8975aB
**Votes:** 0
**Link:** [https://leetcode.com/problems/hexspeak/solutions/4107986/](https://leetcode.com/problems/hexspeak/solutions/4107986/)

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
public class Solution {
    public string ToHexspeak(string num) {
        long intNum = long.Parse(num);
        string numHexa = intNum.ToString("X");
        char[] upper = numHexa.ToUpper().ToCharArray();
        for (int i = 0;i < upper.Length; i++){
          if(upper[i] == '0'){
            upper[i] = 'O';
          }
          if(upper[i] == '1'){
            upper[i] = 'I';
          }
          if(char.IsDigit(upper[i])){
            return "ERROR";
          }
        }
        return new string(upper);
        
    }
}
```