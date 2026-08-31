# C# | DFS | Three possible operators | Warmup

**Author:** jianminchen
**Votes:** 0
**Link:** [https://leetcode.com/problems/expression-add-operators/solutions/5132188/](https://leetcode.com/problems/expression-add-operators/solutions/5132188/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
It takes time to figure out hard algorithm. The expression can be composed as number1 + number2 and then take next number.
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
    /// <summary>
/// Using DFS search all possible combinations - 
/// </summary>
/// <param name="num"></param>
/// <param name="target"></param>
/// <returns></returns>
public IList<string> AddOperators(string num, int target)
{
    var result = new List<string>();

    runDFS(result, "", 0, 0, num, target);

    return result;
}

/// <summary>
/// Design number1 + number2 
/// Argue that number1 * number2 may not work - since one number can be 1 * number1 or 0 + number1
/// But if there is number1 * number2 + number3, then it will be number12 + number3; in other words,
/// it has to be in the form of '+' operator; high precedence of '*' should be calculated first before '+'.
/// Consider a few things:
/// 1. 10 digits string - fit into one integer range
/// 2. +,-, *, three operators 
/// 3. 
/// </summary>
/// <param name="result"></param>
/// <param name="expression"></param>
/// <param name="number1"></param>
/// <param name="number2"></param>
/// <param name="digit"></param>
/// <param name="target"></param>
private void runDFS(IList<string> result, string expression, long number1, long number2, string digits, long target)
{
    if (digits.Length == 0)
    {
        if (target - number1 - number2 == 0)
        {
            result.Add(expression);
        }

        return;
    }

    // integer 1 - 10 digits
    for (int i = 1; i < 11 && i <= digits.Length; i++)
    {
        var substring = digits.Substring(0, i);
        var next = digits.Substring(i);

        //long value = Convert.ToInt64(substring); // try ... catch, exception

        var parse = Int64.TryParse(substring, out long value);
        if (!parse)
        {
            break; 
        }

        if (value > int.MaxValue || number2 > int.MaxValue)
        {
            break;
        }

        if (expression.Length == 0)
        {
            runDFS(result, substring, 0, value, next, target);
        }
        else
        {
            // keep * high precedence above +/-
            // three DFS calls for */+/- 
            // number1 + number2 * number3 -> number1 + (number2 * number3)
            // number1 + number2 + number3 -> (number1 + number2) + number3                    
            // number1 + number2 - number3 -> (number1 + number2) + (-1 * number3)
            runDFS(result, expression + "*" + substring, number1, number2 * value, next, target);
            runDFS(result, expression + "+" + substring, number1 + number2, value, next, target);
            runDFS(result, expression + "-" + substring, number1 + number2, -value, next, target);
        }

        if (value == 0)
        {
            // if the first char of string starting from '0', length bigger than 1, then stop here!
            break; // avoid result of "000"/"012" etc. 
        }
    }
}
}
```