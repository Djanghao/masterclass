# Concise C++ one-pass traversal with explanation and comments

**Author:** zzg_zzm
**Votes:** 21
**Link:** [https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/solutions/633773/](https://leetcode.com/problems/insert-into-a-sorted-circular-linked-list/solutions/633773/)

---

Since the circular list is sorted, image the values are `v[1] <= v[2] <= ... <= v[n]`. There are two cases to insert a new value `insertVal` into the curcular list:
1. `insertVal` is inside some sub-interval `[v[i], v[i+1]]`, so position after `v[i]` is the insertion point.
2. `insertVal` is outside the range `(v[1], v[N])`, so position after `v[N]` is the insertion point.

We will traverse through the circular list and compare the value of current node `cur->val` and next node `cur->next->val` to check if we have encountered either case and then insert a new node at position `cur->next`.

```cpp
    Node* insert(Node* head, int insertVal) {
      if (!head) {
        // create a single node circular list
        Node* inserted_node = new Node(insertVal);
        inserted_node->next = inserted_node;
        return inserted_node;
      }
      
      Node* cur = head;
      
      // loop list to find insertion position: cur->next
      for (; cur->next != head; cur = cur->next) {
        int curVal = cur->val;
        int nextVal = cur->next->val;
        
        // curVal is max (nextVal is min), and insertVal is outside (min, max)
        if (curVal > nextVal && (insertVal >= curVal || insertVal <= nextVal)) break;
        
        // insertVal is inside [curVal, nextVal]
        if (curVal <= insertVal && insertVal <= nextVal) break; 
      }
      
      // insert a new node
      Node* inserted_node = new Node(insertVal, cur->next);
      cur->next = inserted_node;
      
      return head;
    }
```