# ✅💯🔥Simple Code📌🚀| 🔥✔️Easy to understand🎯 | 🎓🧠Beginner friendly🔥| O(n) Time Complexity💀💯

**Author:** atishayj4in
**Votes:** 4
**Link:** [https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/solutions/5772543/](https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/solutions/5772543/)

---

# Tuntun Mosi ko Pranam
Solution tuntun mosi ki photo ke baad hai. Scroll Down
![fd9d3417-20fb-4e19-98fa-3dd39eeedf43_1723794694.932518.png](./images/0.png)
# Code
```java []
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
    public ListNode modifiedList(int[] nums, ListNode head) {
        Set<Integer> setz = new HashSet<>();
        for(int num : nums){
            setz.add(num);
        }
        ListNode curr = head;
        ListNode prev = head;
        while(curr!=null){
            ListNode next = curr.next;
            if(setz.contains(curr.val)){
                if(curr==head){
                    head=next;
                }
                prev.next = next;
            }else{
                prev = curr;
            }
            curr = next;
        }
        return head;
    }
}
```
![7be995b4-0cf4-4fa3-b48b-8086738ea4ba_1699897744.9062278.jpeg](./images/1.jpeg)