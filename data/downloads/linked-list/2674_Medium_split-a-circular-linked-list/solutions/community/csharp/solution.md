# C# Fast and Slow Pointers

**Author:** ilya-a-f
**Votes:** 0
**Link:** [https://leetcode.com/problems/split-a-circular-linked-list/solutions/5785278/](https://leetcode.com/problems/split-a-circular-linked-list/solutions/5785278/)

---

```csharp
public class Solution
{
    public ListNode[] SplitCircularLinkedList(ListNode list)
    {
        var len = 1;
        var fast = list;
        var slow = list;

        while (fast.next != list)
        {
            len += 1;
            fast = fast.next;

            if (int.IsOddInteger(len))
                slow = slow.next;
        }

        var head1 = list;
        var head2 = slow.next;
        slow.next = head1;
        fast.next = head2;

        return [head1, head2];
    }
}
```