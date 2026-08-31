# CanIWin - task 22

**Author:** PRIMD
**Votes:** 0
**Link:** [https://leetcode.com/problems/can-i-win/solutions/5552895/](https://leetcode.com/problems/can-i-win/solutions/5552895/)

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
    public bool CanIWin(int maxChoosableInteger, int desiredTotal) {
        if (maxChoosableInteger >= desiredTotal || desiredTotal == 0) return true;
        if ((maxChoosableInteger+1)*maxChoosableInteger/2 < desiredTotal) return false;

        Dictionary<int, bool> variants = new Dictionary<int, bool>();

        return CanIWinHelp(desiredTotal, 0);

        bool CanIWinHelp(int WinSum, int used){

            if (variants.ContainsKey(used)) return variants[used];
            if (WinSum <= 0) {
                variants[used] = true;
                return true;
            }

            for(int i = 0; i < maxChoosableInteger; i++){

                if ((used & (1 << (i+1))) == 0) {
                    if ((i+1) >= WinSum || !CanIWinHelp(WinSum - i - 1, used | (1 << (i+1)))){
                        variants[used] = true;
                        return true;
                    }
                }
            }


            variants[used] = false;
            return false;
        }
    }
}
```