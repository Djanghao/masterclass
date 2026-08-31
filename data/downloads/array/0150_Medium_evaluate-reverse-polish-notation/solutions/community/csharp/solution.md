# c#, dictionary for operations

**Author:** bytchenko
**Votes:** 18
**Link:** [https://leetcode.com/problems/evaluate-reverse-polish-notation/solutions/2919606/](https://leetcode.com/problems/evaluate-reverse-polish-notation/solutions/2919606/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Here we have a standard stack machine: on `int` value we push it to the stack, on operation we pop arguments from stack, perform operation and pop the result to the stack 

# Approach
<!-- Describe your approach to solving the problem. -->
Let's extract model (supported functions) into a dictionary. All the rest is a simple loop and stack for arguments

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```
public class Solution {
    private static Dictionary<string, Func<int, int, int>> s_Funcs = new () {
      { "+", (a, b) => a + b },
      { "-", (a, b) => b - a },
      { "*", (a, b) => a * b },
      { "/", (a, b) => b / a },   
    };

    public int EvalRPN(string[] tokens) {
      Stack<int> data = new ();
        
      foreach (string token in tokens) 
        if (int.TryParse(token, out int value))
          data.Push(value);
        else   
          data.Push(s_Funcs[token](data.Pop(), data.Pop()));
        
      return data.Pop();
    }
}
```