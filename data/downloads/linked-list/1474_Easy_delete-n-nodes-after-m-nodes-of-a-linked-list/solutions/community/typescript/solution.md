# Typescript | Javascript | Beats 100% | With comments

**Author:** OsidAbu-Alrub
**Votes:** 2
**Link:** [https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/solutions/2530500/](https://leetcode.com/problems/delete-n-nodes-after-m-nodes-of-a-linked-list/solutions/2530500/)

---

```
function deleteNodes(head: ListNode | null, m: number, n: number): ListNode | null {
  let current = head;
  
  // as long as we have a current
  while(current){
    
    // have these two variables to track how
    // many nodes we've deleted and how many nodes we've skipped
    let skipped = 0;
    let deleted = 0;
    
    // keep skipping until you reach a node
    // before the first node that needs to be deleted
    while(current && skipped < m - 1){
      current = current.next;
      skipped++;
    }
    
    // delete n nodes
    while(current && current.next && deleted < n){
      current.next = current.next.next;
      deleted++;
    }
    
    // move to next node
    if(current)
      current = current.next;
  }
  return head;
};
```