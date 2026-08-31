# Share my JAVA solution, 1ms, very short and concise.

**Author:** JosephTao
**Votes:** 705
**Link:** [https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/solutions/35476/](https://leetcode.com/problems/convert-sorted-list-to-binary-search-tree/solutions/35476/)

---

    public class Solution {
    public TreeNode sortedListToBST(ListNode head) {
        if(head==null) return null;
        return toBST(head,null);
    }
    public TreeNode toBST(ListNode head, ListNode tail){
        ListNode slow = head;
        ListNode fast = head;
        if(head==tail) return null;
        
        while(fast!=tail&&fast.next!=tail){
            fast = fast.next.next;
            slow = slow.next;
        }
        TreeNode thead = new TreeNode(slow.val);
        thead.left = toBST(head,slow);
        thead.right = toBST(slow.next,tail);
        return thead;
    }
}