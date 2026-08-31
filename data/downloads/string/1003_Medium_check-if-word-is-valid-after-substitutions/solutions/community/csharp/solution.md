# C# || Check if word is valid after substitutions || Very Easy || 100% beat

**Author:** gamdevAbhi
**Votes:** 1
**Link:** [https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/solutions/3362070/](https://leetcode.com/problems/check-if-word-is-valid-after-substitutions/solutions/3362070/)

---

# Approach
In this case we use iterative approach for saving space with the help of stack.

# Complexity
- Time complexity: O(n)

- Space complexity: O(1)

# Code
```
public class Solution 
{
    public bool IsValid(string s) 
    {
        if(s.Length % 3 != 0) return false;

        Stack<char> stack = new Stack<char>();

        for(int i = 0; i < s.Length; i++)
        {
            if(s[i] != 'c') stack.Push(s[i]);
            else
            {
                if(stack.Count < 2) return false;
                if(stack.Pop() != 'b' || stack.Pop() != 'a') return false;
            }
        }

        return (stack.Count == 0)? true : false;
    }
}
```