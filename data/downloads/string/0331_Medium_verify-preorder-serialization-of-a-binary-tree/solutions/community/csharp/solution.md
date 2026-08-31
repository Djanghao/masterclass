# C# | Using Stack | O(N) Time Complexity & O(N) Space Complexity | Simple Solution

**Author:** vkonatha
**Votes:** 1
**Link:** [https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/solutions/6035197/](https://leetcode.com/problems/verify-preorder-serialization-of-a-binary-tree/solutions/6035197/)

---

# Intuition
I was initially thinking of using a DFS or building a tree but wanted to do a better to handle this, so came up with an O(N) approach that uses stack to solve this problem

# Approach
Will be using a stack to keep track on which direction we are moving, as we have only two directions left and right, I am using boolean to indicate this. 
True mean moving left 
False mean moving right 


# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```csharp []
public class Solution {
    public bool IsValidSerialization(string preorder) {
        //base condition
        if (preorder == "" || preorder.Length == 0 || (preorder.Length == 1 && preorder[0] == '#'))
        {
            return true;
        }
        //if we are starting with null, that means its not valid
        if (preorder[0] == '#')
        {
            return false;
        }
        Stack<bool> stack = new Stack<bool>(); //int this is direction
        //true means left 
        //false mean right
        stack.Push(true);
        var start = 0;

        while (start < preorder.Length && preorder[start] != ',')
        {
            start++;
        }
        start++;//default we are considering the initial node as parent and moving left for it
        for (var i = start; i < preorder.Length; i++)
        {
            while (i < preorder.Length && preorder[i] != ',')
            {
                i++;
            }
            if (stack.Count == 0) //if we are not left with any parent then its not valid any more
            {
                return false;
            }
            if (preorder[i - 1] == '#')
            {
                while (stack.Any())
                {
                    var direciton = stack.Pop();
                    if (direciton) //if we are moving left then now left move right
                    {
                        stack.Push(false);
                        break;
                    }
                    //if we are already moving right then we have to remove this and check for its parent
                }
            }
            else
            {
                stack.Push(true); //if not hash for newly inserted node we should go left
            }
        }
        return stack.Count == 0; //after all operations stack should be empty else its not valid
    }
}
```