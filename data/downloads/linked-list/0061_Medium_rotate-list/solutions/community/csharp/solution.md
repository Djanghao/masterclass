# ✅ Easy-to-understand C# solution

**Author:** KamronSaliev
**Votes:** 6
**Link:** [https://leetcode.com/problems/rotate-list/solutions/3228968/](https://leetcode.com/problems/rotate-list/solutions/3228968/)

---

# Code
```
public class Solution 
{
    public ListNode RotateRight(ListNode head, int k)
    {
        if (head == null)
        {
            return null;
        }
        
        var length = 1;
        var tail = head;
    
        while (tail.next != null)
        {
            length++;
            tail = tail.next;
        }

        tail.next = head;
        
        k = length - k % length;

        for (var i = 0; i < k; i++)
        {
            head = head.next;
            tail = tail.next;
        }

        tail.next = null;

        return head;
    }
}
```

![pleaseupvote.jpg](./images/0.jpeg)
