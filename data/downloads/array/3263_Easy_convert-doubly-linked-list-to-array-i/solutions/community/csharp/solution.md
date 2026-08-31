# C# 100% Single Traversal Solution

**Author:** Stacks_And_Queues
**Votes:** 0
**Link:** [https://leetcode.com/problems/convert-doubly-linked-list-to-array-i/solutions/5677323/](https://leetcode.com/problems/convert-doubly-linked-list-to-array-i/solutions/5677323/)

---

# Code
```csharp []
public class Solution {
    public int[] ToArray(Node head) {
        var res = new List<int>();
        var dummy = head;
        while(dummy != null)
        {
            res.Add(dummy.val);
            dummy = dummy.next;
        }
        return res.ToArray();
    }
}
```