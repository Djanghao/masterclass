# Easy to read C# stack solution

**Author:** izpavlovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/construct-binary-tree-from-string/solutions/6034983/](https://leetcode.com/problems/construct-binary-tree-from-string/solutions/6034983/)

---

# Intuition
The stack solution is well described in editorial, however their implementation seems to be overly verbose. Here I am offering C# solution that is bit easier to read.

# Approach
There two special cases
1. Empty string
2. Single node

For everything else we are iterating trough the string and going down and up the tree using stack.

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(N)

# Code
```csharp []
public class Solution {
    public TreeNode Str2tree(string s) {
        if(s.Length == 0) return null;
        if(s.Last() != ')') return new TreeNode(int.Parse(s));

        Stack<TreeNode> q = [];
        int value = 0;
        int sign = 1;

        TreeNode result = null;

        for(int i = 0; i < s.Length; i++){
            if(s[i] == '(' || s[i] == ')'){
                var curr = new TreeNode(value * sign);
                if(q.Count > 0)
                    if(q.Peek().left == null) 
                        q.Peek().left = curr;
                    else 
                        q.Peek().right = curr;
                else
                    result = curr;
                q.Push(curr);

                while(i < s.Length && s[i] == ')') {
                    q.Pop();
                    i++;
                }
                
                value = 0;
                sign = 1;
            }
            else if(s[i] == '-') sign = -1;
            else{
                value = value * 10 + s[i] - '0';
            }
        }

        return result;
    }
}
```