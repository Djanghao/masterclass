# Single traversal | Constant space | Easy and Concise

**Author:** sri93
**Votes:** 2
**Link:** [https://leetcode.com/problems/linked-list-components/solutions/452897/](https://leetcode.com/problems/linked-list-components/solutions/452897/)

---

```
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number[]} G
 * @return {number}
 */
var numComponents = function(head, G) {
  if(!head) return null;
  let GSet = new Set(G);  
  let ret = 0, series = 0;
  while(head) {
    series = GSet.has(head.val) ? series + 1 : 0;
    if(series == 1)
      ret += 1;
    head = head.next;
  }
  return ret;
};
```