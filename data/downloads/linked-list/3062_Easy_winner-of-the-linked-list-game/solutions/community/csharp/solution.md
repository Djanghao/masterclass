# C# 100% Solution /w 2 ptr

**Author:** Stacks_And_Queues
**Votes:** 0
**Link:** [https://leetcode.com/problems/winner-of-the-linked-list-game/solutions/5212690/](https://leetcode.com/problems/winner-of-the-linked-list-game/solutions/5212690/)

---

# Code
```
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     public int val;
 *     public ListNode next;
 *     public ListNode(int val=0, ListNode next=null) {
 *         this.val = val;
 *         this.next = next;
 *     }
 * }
 */
public class Solution {
    public string GameResult(ListNode head) {
        if (head == null)
            return "Tie";
        var a = head.next;
        var b = head;
        var tracker = new int[2];

        while(a != null)
        {
            if(a.val > b.val)
                tracker[1]++;
            else if(a.val < b.val)
                tracker[0]++;
            if(a == null || a.next == null)
                break;
            a = a.next.next;
            b = b.next.next;
        }
        if(tracker[0] == tracker[1])
            return "Tie";
        return (tracker[0] > tracker[1]) ? "Even" : "Odd";
    }
}
```