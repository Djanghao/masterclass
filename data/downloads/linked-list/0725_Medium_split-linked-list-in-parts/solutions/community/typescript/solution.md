# Easy & readable solution | (^_^) 🔥🧐

**Author:** ate3f
**Votes:** 1
**Link:** [https://leetcode.com/problems/split-linked-list-in-parts/solutions/5754785/](https://leetcode.com/problems/split-linked-list-in-parts/solutions/5754785/)

---


# Have fun with my Code
```typescript []
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function splitListToParts(head: ListNode | null, k: number): Array<ListNode | null> {
  let ptr : ListNode | null = head
  let len = 0
  const ans = []

  while(ptr) { 
    ptr = ptr.next
    len += 1
  }
  const first_fill = Math.ceil(len / k)
  const num_of_fill = len % k
  const rest_fill = Math.floor(len / k)

  let counter = 1
  ptr = head
  let helper = 0

  while(ptr) { 
    if (counter % first_fill == 0 && helper < num_of_fill || counter % rest_fill == 0 && helper >= num_of_fill) { 
      ans.push(head)
      head = ptr.next
      ptr.next = null
      ptr = head
      helper += 1
      counter = 1
    }
    else { 
      counter += 1
      ptr = ptr.next
    } 
  }

  while (ans.length < k) ans.push(null)
  
  return ans
};
```
# Happy Coding - Hey bro vote for me if you can
![download (3).jfif](./images/0.jpeg)
