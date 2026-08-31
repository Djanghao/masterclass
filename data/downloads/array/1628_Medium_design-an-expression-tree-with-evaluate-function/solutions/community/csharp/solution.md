# C# Stack faster than 100%

**Author:** gbamqzkdyg
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-an-expression-tree-with-evaluate-function/solutions/4335770/](https://leetcode.com/problems/design-an-expression-tree-with-evaluate-function/solutions/4335770/)

---

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```
/**
 * This is the interface for the expression tree Node.
 * You should not remove it, and you can define some classes to implement it.
 */

public abstract class Node {
    public abstract int evaluate();
};

public class N : Node
{
    private Stack<string> stack;

    public N(string[] postfix)
    {
        this.stack = new();
        for (var i = postfix.Length - 1; i >= 0; --i) this.stack.Push(postfix[i]);
    }

    public override int evaluate()
    {
        var tmp = new Stack<int>();
        while (this.stack.Count > 0)
        {
            var opt = this.stack.Pop();
            while (opt.Length > 1 || opt[0] >= '0')
            {
                var a = 0;
                foreach (var ch in opt) a = a * 10 + ch - '0';
                tmp.Push(a);
                opt = this.stack.Pop();
            }

            var oprand2 = tmp.Pop();
            var oprand1 = tmp.Pop();

            tmp.Push(opt[0] switch
            {
                '+' => oprand1 + oprand2,
                '-' => oprand1 - oprand2,
                '*' => oprand1 * oprand2,
                '/' => oprand1 / oprand2,
                _ => -1,
            });
        }

        return tmp.Pop();
    }
}


/**
 * This is the TreeBuilder class.
 * You can treat it as the driver code that takes the postinfix input 
 * and returns the expression tree represnting it as a Node.
 */

public class TreeBuilder {
    public Node buildTree(string[] postfix) => new N(postfix);
}


/**
 * Your TreeBuilder object will be instantiated and called as such:
 * TreeBuilder obj = new TreeBuilder();
 * Node expTree = obj.buildTree(postfix);
 * int ans = expTree.evaluate();
 */
```