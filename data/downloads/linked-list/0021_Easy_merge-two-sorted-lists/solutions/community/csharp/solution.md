# csharp Recursive Solution

**Author:** QiaoBilly
**Votes:** 59
**Link:** [https://leetcode.com/problems/merge-two-sorted-lists/solutions/402908/](https://leetcode.com/problems/merge-two-sorted-lists/solutions/402908/)

---

`````
public ListNode MergeTwoLists(ListNode l1, ListNode l2){
        if(l1 == null) return l2;
        if(l2 == null) return l1;
        if(l1.val <= l2.val){
            l1.next = MergeTwoLists(l1.next,l2);
            return l1;
        }else{
            l2.next = MergeTwoLists(l1,l2.next);
            return l2;
        }
    }
````