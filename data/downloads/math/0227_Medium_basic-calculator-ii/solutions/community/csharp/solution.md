# [C#] Simple Stack Solution

**Author:** Rokabot
**Votes:** 3
**Link:** [https://leetcode.com/problems/basic-calculator-ii/solutions/3358379/](https://leetcode.com/problems/basic-calculator-ii/solutions/3358379/)

---


# Code
```
public class Solution
{
    public int Calculate(string s)
    {
        if (string.IsNullOrWhiteSpace(s))
        {
            return 0;
        }

        s = s.Replace(" ", "");
        s = s + '+';
        Stack<int> stack = new Stack<int>();
        int result = 0;
        char prevOp = '+';
        int curNum = 0;
        foreach (char ch in s)
        {
            if (ch is >= '0' and <= '9')
            {
                curNum = curNum * 10 + ch - '0';
                continue;
            }

            switch (prevOp)
            {
                case '+':
                    stack.Push(curNum);
                    break;
                case '-':
                    stack.Push(-curNum);
                    break;
                case '*':
                    stack.Push(stack.Pop() * curNum);
                    break;
                case '/':
                    stack.Push(stack.Pop() / curNum);
                    break;
                default:
                    return 0;
            }

            prevOp = ch;
            curNum = 0;
        }
        
        while (stack.Count > 0)
        {
            result += stack.Pop();
        }
        
        return result;
    }
}
```