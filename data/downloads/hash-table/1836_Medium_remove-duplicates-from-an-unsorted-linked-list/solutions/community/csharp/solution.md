# C# Two-pass

**Author:** ilya-a-f
**Votes:** 0
**Link:** [https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/solutions/5777118/](https://leetcode.com/problems/remove-duplicates-from-an-unsorted-linked-list/solutions/5777118/)

---

```csharp
public class Solution
{
    public ListNode DeleteDuplicatesUnsorted(ListNode head)
    {
        // 1st pass
        var toDelete = new Dictionary<int, bool>();
        for (var node = head; node != null; node = node.next)
            toDelete[node.val] = toDelete.ContainsKey(node.val);

        // 2nd pass
        ref var curr = ref head;
        while (curr != null)
        {
            if (toDelete[curr.val])
                curr = curr.next;
            else
                curr = ref curr.next;
        }

        return head;
    }
}
```