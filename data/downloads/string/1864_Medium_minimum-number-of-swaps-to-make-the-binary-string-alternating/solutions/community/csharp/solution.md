# C# solution

**Author:** clewBy
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-binary-string-alternating/solutions/2699933/](https://leetcode.com/problems/minimum-number-of-swaps-to-make-the-binary-string-alternating/solutions/2699933/)

---

```
public class Solution {
    public int MinSwaps(string s) {
        int ones = 0, zeros = 0;
        foreach(char ch in s){
            if(ch == '0') zeros++;
            else ones++;
        }

        if(Math.Abs(ones-zeros) > 1) return -1;
        else if(zeros > ones) return swaps(s, '0');
        else if(ones > zeros) return swaps(s, '1');
        else return Math.Min(swaps(s, '0'), swaps(s, '1'));
    }

    private int swaps(string s, char ch){
        int swaps = 0;
        for(int i = 0; i < s.Length; i = i+2){
            if(s[i] != ch) swaps++;
        }
        return swaps;
    }
}
```