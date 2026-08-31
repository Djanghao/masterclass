# Left to right and right to left approach

**Author:** ItsLoki
**Votes:** 0
**Link:** [https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/solutions/5125485/](https://leetcode.com/problems/check-if-a-parentheses-string-can-be-valid/solutions/5125485/)

---

# Complexity
- Time complexity:$$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public bool CanBeValid(string s, string locked) {
        return s.Length % 2 == 0 && CheckIfValid('(', s, locked) && CheckIfValid(')', s, locked);
    }

    private bool CheckIfValid(char op, string s, string locked){
        int balance = 0, n = s.Length;
        var start = op == '(' ? 0 : n - 1;
        var iteration = op == '(' ? 1 : -1;
        for(int i = start; i >= 0 && i < n; i += iteration){
            if(locked[i] == '0' || s[i] == op){
                balance++;
            }
            else{
                balance--;
            }

            if(balance < 0){
                return false;
            }
        }

        return true;
    }
}
```