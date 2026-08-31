# C# Solution - elegant and simple 7 lines (Runtime: faster than 99.90%; Memory: less than 48.94%)

**Author:** pabloduo
**Votes:** 68
**Link:** [https://leetcode.com/problems/valid-parentheses/solutions/356741/](https://leetcode.com/problems/valid-parentheses/solutions/356741/)

---

Just one thing to note in this solution, use of `Stack<char>` helps to avoid unnecessary __boxing/unboxing__ and improves performance (_eq. runtime_) metrics:
```
public class Solution {
    public bool IsValid(string s) {
        // Get ready initial state (enforce element type)
        var k = new Stack<char>();
        // Evaluate each character for potential mismatch 
        foreach(char c in s) {
            // Push closing round bracket onto the stack
            if (c == '(') { k.Push(')'); continue; }
            // Push closing curly bracket onto the stack
            if (c == '{') { k.Push('}'); continue; }
            // Push closing square bracket onto the stack
            if (c == '[') { k.Push(']'); continue; }
            // Look out for imbalanced strings or mismatches
            if (k.Count == 0 || c != k.Pop()) return false;
        }
        // Empty stack means string is valid and invalid otherwise
        return k.Count == 0;
    }
}
```