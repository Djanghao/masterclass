# ‎️‍🔥 DART‎️‍ 🔥Recursive✅ 🚀

**Author:** Mahmoud_Zakaria
**Votes:** 3
**Link:** [https://leetcode.com/problems/remove-linked-list-elements/solutions/2922842/](https://leetcode.com/problems/remove-linked-list-elements/solutions/2922842/)

---


<!-- Describe your first thoughts on how to solve this problem. -->

# Approach \uD83D\uDD25Recursive\u2705 \uD83D\uDE80
<!-- Describe your approach to solving the problem. -->

If you Learned something new please give it upvote;
otherwise thank you for having a look \uD83D\uDE4F\uD83C\uDFFB

# Code
```

class Solution {
  ListNode? removeElements(ListNode? head, int val) {
        if(head==null)return null ;
        if(head.next!=null)head.next = removeElements(head.next , val);
        if(head.val==val)head = head.next ;
        return head ;
  }
}
```
Pls upvote the solution if you found helpful, it means a lot.
Also comment down your doubts.
Happy Coding :)