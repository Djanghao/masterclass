# c#, Stack

**Author:** bytchenko
**Votes:** 0
**Link:** [https://leetcode.com/problems/is-array-a-preorder-of-some-binary-tree/solutions/3726678/](https://leetcode.com/problems/is-array-a-preorder-of-some-binary-tree/solutions/3726678/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We can simulate preorder with a help of stack and check if this simulation is successful.

# Approach
<!-- Describe your approach to solving the problem. -->
Stack based simulation

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
    public bool IsPreorder(IList<IList<int>> nodes) {
        Stack<int> agenda = new();

        agenda.Push(nodes[0][0]); 

        foreach (var node in nodes.Skip(1)) {
            while (agenda.TryPeek(out var value) && value != node[1])
                agenda.Pop();

            if (agenda.Count == 0)
                return false;

            agenda.Push(node[0]);
        }

        return true;
    }
}
```