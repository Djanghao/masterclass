# Beats 100% of submissions #Ghost_programmer😴

**Author:** pravinkabi6
**Votes:** 2
**Link:** [https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/solutions/3577438/](https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/solutions/3577438/)

---

# Intuition
Simple approach you can go through it:)

# Approach


# Complexity
- Time complexity:
  O(nlongn)

- Space complexity:
   O(1)

# Code
```
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public ListNode deleteNodes(ListNode head, int m, int n) {
        ListNode temp=head;
        ListNode num=new ListNode();
        int i=m-1,j=n+1;
        while(head!=null){
            while(i>0 && head!=null){
                head=head.next;
                i--;
            }
            i=m-1;
            if(head==null) break;
            num=head;
            while(j>0 && num!=null){
                num=num.next;
                j--;
            }
            j=n+1;
            head.next=num;
            if(head==null) break;
            head=head.next;
        } 
        return temp;
    }
}
```