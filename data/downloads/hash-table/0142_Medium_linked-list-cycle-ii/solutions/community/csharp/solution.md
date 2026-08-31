# Naive HashSet approach, no list modification

**Author:** anikit
**Votes:** 7
**Link:** [https://leetcode.com/problems/linked-list-cycle-ii/solutions/1701894/](https://leetcode.com/problems/linked-list-cycle-ii/solutions/1701894/)

---

Track visited nodes using HashSet and return as soon as there is a match:

```csharp
public class Solution
{
    public ListNode DetectCycle(ListNode head)
    {
        HashSet<ListNode> visited = new();
            
        while (head is not null)
        {
            if (visited.Contains(head)) return head;
            visited.Add(head);
            head = head.next;
        }

        return null;
    }
}
```