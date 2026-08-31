# Simple Dart Solution

**Author:** AndreLock
**Votes:** 1
**Link:** [https://leetcode.com/problems/odd-even-linked-list/solutions/3563230/](https://leetcode.com/problems/odd-even-linked-list/solutions/3563230/)

---



# Approach
Place the values into two seperate arrays for odd and even. Then from there create a new linked list in the expected format and return it.

# Complexity
- Time complexity:
O(n)


# Code
```
class Solution {
  ListNode? oddEvenList(ListNode? head) {
    if(head == null){
      return head;
    }
      List<int> even = [];
      List<int> odd = [];
      while(head != null){
          even.add(head.val);
          head = head.next;
          if(head?.val != null){
            odd.add((head?.val ?? 0));
          }
          head = head?.next;
      }
      return listify(even, odd);
  }
  ListNode listify(List<int> first , List<int> second){
    ListNode first_ln = new ListNode(first[0]);
    ListNode last = first_ln;
    for(int i = 1 ; i < first.length ; ++i){
      ListNode current = new ListNode(first[i]);
      last.next = current;
      last = current;
    }
    for(int i = 0 ; i < second.length ; ++i){
      ListNode current = new ListNode(second[i]);
      last.next = current;
      last = current;
    }

    return first_ln;
  }
}
```