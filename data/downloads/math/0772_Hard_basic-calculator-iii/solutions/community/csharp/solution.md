# C# O(n) Stack + Recursion (beats 100%)

**Author:** sgasilov
**Votes:** 0
**Link:** [https://leetcode.com/problems/basic-calculator-iii/solutions/5218937/](https://leetcode.com/problems/basic-calculator-iii/solutions/5218937/)

---

# Approach
    1. Make recursive call to solve expression in brackets
    2. Use stack for storing expression results on every recursion level

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
public class Solution {
    public int Calculate(string s)
    {
        var input = s.Replace(" ", "");
        var index = 0;
        var result = Solve(input, ref index);

        return result;
    }

    private int Solve(string input, ref int index)
    {
        var stack = new Stack<int>();
        var current = 0;
        var prevSign = '+';
        for (; index < input.Length; index++)
        {
            var symbol = input[index];
            if (char.IsNumber(symbol))
            {
                current = current * 10 + symbol - '0';
                continue;
            }

            if (symbol == '(')
            {
                index++;
                current = Solve(input, ref index);
                continue;
            }

            if (symbol == ')')
            {
                break;
            }

            PushToStack(stack, current, prevSign);

            prevSign = symbol;
            current = 0;
        }
        
        PushToStack(stack, current, prevSign);

        var result = 0;
        while (stack.Count > 0)
        {
            result += stack.Pop();
        }

        return result;
    }

    private void PushToStack(Stack<int> stack, int current, char prevSign)
    {
        switch (prevSign)
        {
            case '+':
                stack.Push(current);
                break;
            case '-':
                stack.Push(-current);
                break;
            case '*':
                stack.Push(stack.Pop() * current);
                break;
            case '/':
                stack.Push(stack.Pop() / current);
                break;
        }
    }
}
```