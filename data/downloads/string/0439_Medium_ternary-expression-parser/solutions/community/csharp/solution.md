# C# - [Made Simple] One Pass Stack

**Author:** TheSnappl
**Votes:** 2
**Link:** [https://leetcode.com/problems/ternary-expression-parser/solutions/3813034/](https://leetcode.com/problems/ternary-expression-parser/solutions/3813034/)

---

# Code
```
public class Solution {
    
    public string ParseTernary(string expression) {
        
        var stack = new Stack<char>();
        int index = expression.Length - 1;

        while (index >= 0){

            char cur = expression[index];

            if ((cur >= '0' && cur <= '9') || cur == 'F' || cur == 'T'){
                stack.Push(cur);
            }else if(cur == '?'){
                char onTrue = stack.Pop();
                char onFalse = stack.Pop();
                stack.Push(expression[index - 1] == 'T' ? onTrue : onFalse);
                index--;
            }

            index--;
        }

        return stack.Peek().ToString();
    }
}
```