# Iterative Solution with Tuples and No Recursion

**Author:** anikit
**Votes:** 8
**Link:** [https://leetcode.com/problems/swap-nodes-in-pairs/solutions/1775417/](https://leetcode.com/problems/swap-nodes-in-pairs/solutions/1775417/)

---

Pointer swapping can be done in a modern way using tuples:
```csharp
public class Solution
{
    public ListNode SwapPairs(ListNode head)
    {
        ListNode prev = new();
        var a = head;
        var b = head?.next;

        head = b ?? a;

        while (a != null && b != null)
        {
            (prev.next, a.next, b.next) = (b, b.next, a); //swap the nodes
            (prev, a, b) = (a, a.next, a.next?.next); //move on
        }

        return head;
    }
}
```