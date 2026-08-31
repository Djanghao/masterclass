# easy to understand javascript / typescript solution with explanation comments

**Author:** Selithrarion
**Votes:** 10
**Link:** [https://leetcode.com/problems/swapping-nodes-in-a-linked-list/solutions/1913025/](https://leetcode.com/problems/swapping-nodes-in-a-linked-list/solutions/1913025/)

---

upvote if it helps :)

```
  // initialize
  let first = head
  let second = head
  let endDummy = head
  
  // get kth node from beginning. move endDummy to k
  for (let i = 1; i < k; i++) {
    first = first.next
    endDummy = endDummy.next
  }
  
  // get kth node from end. move endDummy to end,
  // if we reach endDummy end it means we also found kth node from end in second variable
  // cuz diff between second and endDummy exactly k nodes thanks to previous cycle
  while(endDummy.next) {
    second = second.next
    endDummy = endDummy.next
  }
  
  // swap values. also we can use temp var
  [first.val, second.val] = [second.val, first.val]
  
  return head
```