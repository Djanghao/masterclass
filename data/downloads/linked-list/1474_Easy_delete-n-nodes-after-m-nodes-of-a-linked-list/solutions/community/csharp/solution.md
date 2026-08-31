# C# solution

**Author:** ergosm
**Votes:** 1
**Link:** [https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/solutions/3530232/](https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/solutions/3530232/)

---

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
    private int _m;
    private int _n;

    public ListNode DeleteNodes(ListNode head, int m, int n) {
        ListNode current = head;
        ListNode last = head;

        int skipCounter = 0;
        int removeCounter = 0;

        while(current != null){
            if(skipCounter < m){
                skipCounter++;
                last = current;
                current = current.next;
            }
            else if(removeCounter < n){
                removeCounter++;
                current = current.next;
            }
            else{
                skipCounter = 0;
                removeCounter = 0;
                last.next = current;
            }
        }

        last.next = null;

        return head;
    }
}
```