# [Python/C/C++/Java] Legit iterative solutions. O(1) space! No recursion! With detailed explaination

**Author:** ChrisTrompf
**Votes:** 443
**Link:** [https://leetcode.com/problems/sort-list/solutions/166324/](https://leetcode.com/problems/sort-list/solutions/166324/)

---

# **TL;DR**
### **Short and sweet. O(nlogn) time, O(1) space.**
``` python []
def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
  dummy = ListNode(0)
  dummy.next = head

  # Grab sublists of size 1, then 2, then 4, etc, until fully merged
  steps = 1
  while True:
    # Record the progress of the current pass into a single semi sorted list by updating
    # the next of the previous node (or the dummy on the first loop)
    prev = dummy

    # Keep track of how much is left to process on this pass of the list
    remaining = prev.next

    # While the current pass though the list has not been completed
    num_loops = 0
    while remaining:
      num_loops += 1

      # Split 2 sublists of steps length from the front
      sublists = [None, None]
      sublists_tail = [None, None]
      for i in range(2):
        sublists[i] = remaining
        substeps = steps
        while substeps and remaining:
          substeps -= 1
          sublists_tail[i] = remaining
          remaining = remaining.next
        # Ensure the subslist (if one was made) is terminated
        if sublists_tail[i]:
          sublists_tail[i].next = None

      # We have two sublists of (upto) length step that are sorted, merge them onto 
      # the end into a single list of (upto) step * 2
      while sublists[0] and sublists[1]:
        if sublists[0].val <= sublists[1].val:
          prev.next = sublists[0]
          sublists[0] = sublists[0].next
        else:
          prev.next = sublists[1]
          sublists[1] = sublists[1].next
        prev = prev.next
      
      # One list has been finished, attach what ever is left of the other to the end
      if sublists[0]:
        prev.next = sublists[0]
        prev = sublists_tail[0]
      else:
        prev.next = sublists[1]
        prev = sublists_tail[1]
    
    # Double the steps each go around
    steps *= 2

    # If the entire list was fully processed in a single loop, it means we've completely sorted the list and are done
    if 1 >= num_loops:
      return dummy.next
```

``` c []
struct ListNode* sortList(struct ListNode* head){
  /* Grab sublists of size 1, then 2, then 4, etc, until fully merged */
  for (int steps = 1;; steps *= 2) {
    /* Keep track of how much is left to process on this pass of the list */
    struct ListNode* remaining = head;

    /*
    Record the progress of the current pass into a single semi sorted list by updating the next pointer
    of the previous node (or the head on the first loop)
    */
    struct ListNode** next_ptr = &head;

    int num_loops = 0;
    for (; remaining; ++num_loops) {
      /* Split 2 sublists of steps length from the front */
      struct ListNode* sublists[2];
      struct ListNode* sublists_tail[2] = {NULL, NULL};
      for (int i = 0; i < 2; ++i) {
        sublists[i] = remaining;
        for (int j = 0; remaining && j < steps; ++j) {
          sublists_tail[i] = remaining;
          remaining = remaining->next;
        }
        /* Ensure the subslist (if one was made) is terminated */
        if (sublists_tail[i]) {
          sublists_tail[i]->next = NULL;
        }
      }

      /* We have two sublists of (upto) length step that are sorted, merge them onto the end into a single list of (upto) step * 2 */
      while (sublists[0] && sublists[1]) {
        if (sublists[0]->val <= sublists[1]->val) {
          *next_ptr = sublists[0];
          next_ptr = &sublists[0]->next;
          sublists[0] = sublists[0]->next;
        } else {
          *next_ptr = sublists[1];
          next_ptr = &sublists[1]->next;
          sublists[1] = sublists[1]->next;
        }
      }   

      /* One list has been finished, attach what ever is left of the other to the end */
      if (sublists[0]) {
        *next_ptr = sublists[0];
        next_ptr = &sublists_tail[0]->next;
      } else {
        *next_ptr = sublists[1];
        next_ptr = &sublists_tail[1]->next;
      }
    }

    /* If the entire list was fully processed in a single loop, it means we've completely sorted the list and are done */
    if (1 >= num_loops) {
      return head;
    }
  }
}
```

``` cpp []
ListNode* sortList(ListNode* head) {
  // Grab sublists of size 1, then 2, then 4, etc, until fully merged
  for (int steps = 1;; steps *= 2) {
    // Keep track of how much is left to process on this pass of the list
    ListNode* remaining = head;

    // Record the progress of the current pass into a single semi sorted list by updating the next pointer
    // of the previous node (or the head on the first loop)
    ListNode** next_ptr = &head;

    int num_loops = 0;
    for (; remaining; ++num_loops) {
      // Split 2 sublists of steps length from the front
      ListNode* sublists[2];
      ListNode* sublists_tail[2] = {nullptr, nullptr};
      for (int i = 0; i < 2; ++i) {
        sublists[i] = remaining;
        for (int j = 0; remaining && j < steps; ++j) {
          sublists_tail[i] = remaining;
          remaining = remaining->next;
        }
        // Ensure the subslist (if one was made) is terminated
        if (sublists_tail[i]) {
          sublists_tail[i]->next = nullptr;
        }
      }

      // We have two sublists of (upto) length step that are sorted, merge them onto the end into a single list of (upto) step * 2
      while (sublists[0] && sublists[1]) {
        if (sublists[0]->val <= sublists[1]->val) {
          *next_ptr = sublists[0];
          next_ptr = &sublists[0]->next;
          sublists[0] = sublists[0]->next;
        } else {
          *next_ptr = sublists[1];
          next_ptr = &sublists[1]->next;
          sublists[1] = sublists[1]->next;
        }
      }   

      // One list has been finished, attach what ever is left of the other to the end
      if (sublists[0]) {
        *next_ptr = sublists[0];
        next_ptr = &sublists_tail[0]->next;
      } else {
        *next_ptr = sublists[1];
        next_ptr = &sublists_tail[1]->next;
      }
    }

    // If the entire list was fully processed in a single loop, it means we've completely sorted the list and are done
    if (1 >= num_loops) {
      return head;
    }
  } 
}
```

``` java []
public ListNode sortList(ListNode head) {
  ListNode dummy = new ListNode(0);
  dummy.next = head;

  ListNode [] sublists = new ListNode[2];
  ListNode [] sublists_tail = new ListNode[2];

  // Grab sublists of size 1, then 2, then 4, etc, until fully merged
  for (int steps = 1;; steps *= 2) {
    // Record the progress of the current pass into a single semi sorted list by updating
    // the next of the previous node (or the dummy on the first loop)
    ListNode prev = dummy;

    // Keep track of how much is left to process on this pass of the list
    ListNode remaining = prev.next;

    int num_loops = 0;
    for (; null != remaining; ++num_loops) {
      // Split 2 sublists of steps length from the front
      for (int i = 0; i < 2; ++i) {
        sublists[i] = remaining;
        sublists_tail[i] = null;
        for (int j = 0; null != remaining && j < steps; ++j) {
          sublists_tail[i] = remaining;
          remaining = remaining.next;
        }
        // Ensure the subslist (if one was made) is terminated
        if (null != sublists_tail[i]) {
          sublists_tail[i].next = null;
        }
      }

      // We have two sublists of (upto) length step that are sorted, merge them onto the end into a single list of (upto) step * 2
      while (null != sublists[0] && null != sublists[1]) {
        if (sublists[0].val <= sublists[1].val) {
          prev.next = sublists[0];
          sublists[0] = sublists[0].next;
        } else {
          prev.next = sublists[1];
          sublists[1] = sublists[1].next;
        }
        prev = prev.next;
      }   

      // One list has been finished, attach what ever is left of the other to the end
      if (null != sublists[0]) {
        prev.next = sublists[0];
        prev = sublists_tail[0];
      } else {
        prev.next = sublists[1];
        prev = sublists_tail[1];
      }
    }

    // If the entire list was fully processed in a single loop, it means we've completely sorted the list and are done
    if (1 >= num_loops) {
      return dummy.next;
    }
  }
}
```

### **Using a holding buffer for extra speed. O(nlogn) time, O(1) space, with lower constant.**
Code is a little more complex, can make a big performance difference. See desciption below.
``` python []
def sortList(self, head: Optional[ListNode]) -> Optional[ListNode]:
  buffer_size = 8

  dummy = ListNode(0)
  dummy.next = head

  # Grab sublists of size 1, then buffer_size, then buffer_size^2, etc, until fully merged
  steps = 1
  while True:
    # Record the progress of the current pass into a single semi sorted list by updating
    # the next of the previous node (or the dummy on the first loop)
    prev = dummy

    # Keep track of how much is left to process on this pass of the list
    remaining = prev.next

    # While the current pass though the list has not been completed
    num_loops = 0
    while remaining:
      num_loops += 1

      # Split buffer_size sublists of upto steps length from the front
      sublists = [None] * buffer_size
      sublists_tail = [None] * buffer_size
      for i in range(buffer_size):
        sublists[i] = remaining
        substeps = steps
        while substeps and remaining:
          substeps -= 1
          sublists_tail[i] = remaining
          remaining = remaining.next
        # Ensure the subslist (if one was made) is terminated
        if sublists_tail[i]:
          sublists_tail[i].next = None

      # Keep merging all the sublists we have in the working buffer until we have a single sublist.
      # That is 8 sublists get merged into 4, then 4 into 2, then 2 into 1.
      num_sublists = buffer_size
      while 1 < num_sublists:
        # Merge each pair of sublists
        subdummy = ListNode()
        for i in range(0, num_sublists, 2):
          subprev = subdummy;
          subprev.next = None

          # We have two sublists of (upto) length step that are sorted, merge them onto 
          # the end into a single list of (upto) step * 2
          while sublists[i] and sublists[i + 1]:
            if sublists[i].val <= sublists[i + 1].val:
              subprev.next = sublists[i]
              sublists[i] = sublists[i].next
            else:
              subprev.next = sublists[i + 1]
              sublists[i + 1] = sublists[i + 1].next
            subprev = subprev.next
      
          # One list has been finished, attach what ever is left of the other to the end
          if sublists[i]:
            subprev.next = sublists[i]
            sublists_tail[i // 2] = sublists_tail[i]
          else:
            subprev.next = sublists[i + 1]
            sublists_tail[i // 2] = sublists_tail[i + 1]

          # Record the head of our new longer sublist in the correct location for the next loop around
          sublists[i // 2] = subdummy.next;

        # Half the sublists remain now that we have merged each pair of lists
        num_sublists //= 2

      # Attach the single sublist into this passes progress
      prev.next = sublists[0];
      prev = sublists_tail[0];
    
    # Increase the steps each go around
    steps *= buffer_size

    # If the entire list was fully processed in a single loop, it means we've completely sorted the list and are done
    if 1 >= num_loops:
      return dummy.next
```

``` c []

struct ListNode* sortList(struct ListNode* head){
  const int BUFFER_SIZE = 8;

  /* Grab sublists of size 1, then 2, then 4, etc, until fully merged */
  for (int steps = 1;; steps *= BUFFER_SIZE) {
    /* Keep track of how much is left to process on this pass of the list */
    struct ListNode* remaining = head;

    /*
    Record the progress of the current pass into a single semi sorted list by updating the next pointer
    of the previous node (or the head on the first loop)
    */
    struct ListNode** next_ptr = &head;

    int num_loops = 0;
    for (; remaining; ++num_loops) {
      /* Split BUFFER_SIZE sublists of upto steps length from the front */
      struct ListNode* sublists[BUFFER_SIZE];
      struct ListNode* sublists_tail[BUFFER_SIZE];
      for (int i = 0; i < BUFFER_SIZE; ++i) {
        sublists[i] = remaining;
        sublists_tail[i] = NULL;
        for (int j = 0; remaining && j < steps; ++j) {
          sublists_tail[i] = remaining;
          remaining = remaining->next;
        }
        /* Ensure the subslist (if one was made) is terminated */
        if (sublists_tail[i]) {
          sublists_tail[i]->next = NULL;
        }
      }

      /*
      Keep merging all the sublists we have in the working buffer until we have a single sublist.
      That is 8 sublists get merged into 4, then 4 into 2, then 2 into 1.
      */
      for (int num_sublists = BUFFER_SIZE; 1 < num_sublists; num_sublists /= 2) {
        /* Merge each pair of sublists */
        for (int i = 0; i < num_sublists; i += 2) {
          struct ListNode* subhead = NULL;
          struct ListNode** sub_next_ptr = &subhead;
      
          /* We have two sublists of (upto) length step that are sorted, merge them onto the end into a single list of (upto) step * 2 */
          while (sublists[i] && sublists[i + 1]) {
            if (sublists[i]->val <= sublists[i + 1]->val) {
              *sub_next_ptr = sublists[i];
              sub_next_ptr = &sublists[i]->next;
              sublists[i] = sublists[i]->next;
            } else {
              *sub_next_ptr = sublists[i + 1];
              sub_next_ptr = &sublists[i + 1]->next;
              sublists[i + 1] = sublists[i + 1]->next;
            }
          }

          /* One list has been finished, attach what ever is left of the other to the end */
          if (sublists[i]) {
            *sub_next_ptr = sublists[i];
            sublists_tail[i / 2] = sublists_tail[i];
          } else {
            *sub_next_ptr = sublists[i + 1];
            sublists_tail[i / 2] = sublists_tail[i + 1];
          }

          /* Record the head of our new longer sublist in the correct location for the next loop around */
          sublists[i / 2] = subhead;
        }
      }

      /* Attach the single sublist into this passes progress */
      *next_ptr = sublists[0];
      next_ptr = &sublists_tail[0]->next;
    }

    /* If the entire list was fully processed in a single loop, it means we've completely sorted the list and are done */
    if (1 >= num_loops) {
      return head;
    }
  }
}
```

```cpp []
ListNode* sortList(ListNode* head) {
  constexpr const int BUFFER_SIZE = 8;

  // Grab sublists of size 1, then BUFFER_SIZE, then BUFFER_SIZE^2, etc, until fully merged
  for (int steps = 1;; steps *= BUFFER_SIZE) {
    // Keep track of how much is left to process on this pass of the list
    ListNode* remaining = head;

    // Record the progress of the current pass into a single semi sorted list by updating the next pointer
    // of the previous node (or the head on the first loop)
    ListNode** next_ptr = &head;

    int num_loops = 0;
    for (; remaining; ++num_loops) {
      // Split BUFFER_SIZE sublists of upto steps length from the front
      ListNode* sublists[BUFFER_SIZE];
      ListNode* sublists_tail[BUFFER_SIZE];
      for (int i = 0; i < BUFFER_SIZE; ++i) {
        sublists[i] = remaining;
        sublists_tail[i] = NULL;
        for (int j = 0; remaining && j < steps; ++j) {
          sublists_tail[i] = remaining;
          remaining = remaining->next;
        }
        // Ensure the subslist (if one was made) is terminated
        if (sublists_tail[i]) {
          sublists_tail[i]->next = NULL;
        }
      }

      // Keep merging all the sublists we have in the working buffer until we have a single sublist.
      // That is 8 sublists get merged into 4, then 4 into 2, then 2 into 1.
      for (int num_sublists = BUFFER_SIZE; 1 < num_sublists; num_sublists /= 2) {
        // Merge each pair of sublists
        for (int i = 0; i < num_sublists; i += 2) {
          ListNode* subhead = NULL;
          ListNode** sub_next_ptr = &subhead;
      
          // We have two sublists of (upto) length step that are sorted, merge them onto the end into a single list of (upto) step * 2
          while (sublists[i] && sublists[i + 1]) {
            if (sublists[i]->val <= sublists[i + 1]->val) {
              *sub_next_ptr = sublists[i];
              sub_next_ptr = &sublists[i]->next;
              sublists[i] = sublists[i]->next;
            } else {
              *sub_next_ptr = sublists[i + 1];
              sub_next_ptr = &sublists[i + 1]->next;
              sublists[i + 1] = sublists[i + 1]->next;
            }
          }

          // One list has been finished, attach what ever is left of the other to the end
          if (sublists[i]) {
            *sub_next_ptr = sublists[i];
            sublists_tail[i / 2] = sublists_tail[i];
          } else {
            *sub_next_ptr = sublists[i + 1];
            sublists_tail[i / 2] = sublists_tail[i + 1];
          }

          // Record the head of our new longer sublist in the correct location for the next loop around
          sublists[i / 2] = subhead;
        }
      }

      // Attach the single sublist into this passes progress
      *next_ptr = sublists[0];
      next_ptr = &sublists_tail[0]->next;
    }

    // If the entire list was fully processed in a single loop, it means we've completely sorted the list and are done
    if (1 >= num_loops) {
      return head;
    }
  }
}
```

```java []
public ListNode sortList(ListNode head) {
  int BUFFER_SIZE = 8;

  ListNode dummy = new ListNode(0);
  ListNode subdummy = new ListNode(0);
  dummy.next = head;

  ListNode [] sublists = new ListNode[BUFFER_SIZE];
  ListNode [] sublists_tail = new ListNode[BUFFER_SIZE];

  // Grab sublists of size 1, then BUFFER_SIZE, then BUFFER_SIZE^2, etc, until fully merged
  for (int steps = 1;; steps *= BUFFER_SIZE) {
    // Record the progress of the current pass into a single semi sorted list by updating
    // the next of the previous node (or the dummy on the first loop)
    ListNode prev = dummy;

    // Keep track of how much is left to process on this pass of the list
    ListNode remaining = prev.next;

    int num_loops = 0;
    for (; null != remaining; ++num_loops) {
      // Split BUFFER_SIZE sublists of upto steps length from the front
      for (int i = 0; i < BUFFER_SIZE; ++i) {
        sublists[i] = remaining;
        sublists_tail[i] = null;
        for (int j = 0; null != remaining && j < steps; ++j) {
          sublists_tail[i] = remaining;
          remaining = remaining.next;
        }
        // Ensure the subslist (if one was made) is terminated
        if (null != sublists_tail[i]) {
          sublists_tail[i].next = null;
        }
      }

      // Keep merging all the sublists we have in the working buffer until we have a single sublist.
      // That is 8 sublists get merged into 4, then 4 into 2, then 2 into 1.
      for (int num_sublists = BUFFER_SIZE; 1 < num_sublists; num_sublists /= 2) {
        // Merge each pair of sublists
        for (int i = 0; i < num_sublists; i += 2) {
          ListNode subprev = subdummy;
          subprev.next = null;
      
          // We have two sublists of (upto) length step that are sorted, merge them onto the end into a single list of (upto) step * 2
          while (null != sublists[i] && null != sublists[i + 1]) {
            if (sublists[i].val <= sublists[i + 1].val) {
              subprev.next = sublists[i];
              sublists[i] = sublists[i].next;
            } else {
              subprev.next = sublists[i + 1];
              sublists[i + 1] = sublists[i + 1].next;
            }
            subprev = subprev.next;
          }

          // One list has been finished, attach what ever is left of the other to the end
          if (null != sublists[i]) {
            subprev.next = sublists[i];
            sublists_tail[i / 2] = sublists_tail[i];
          } else {
            subprev.next = sublists[i + 1];
            sublists_tail[i / 2] = sublists_tail[i + 1];
          }

          // Record the head of our new longer sublist in the correct location for the next loop around
          sublists[i / 2] = subdummy.next;
        }
      }

      // Attach the single sublist into this passes progress
      prev.next = sublists[0];
      prev = sublists_tail[0];
    }

    // If the entire list was fully processed in a single loop, it means we've completely sorted the list and are done
    if (1 >= num_loops) {
      return dummy.next;
    }
  }
}
```

### **Using a holding buffer for extra speed. O(nlogn) time, O(1) space, with lower constant. Using subfunctions**

Same idea as the holding buffer above, but using subfunctions to `split_list` to extract the sublists and `merge_lists` for the merge step. It might help demonstrate the main loop better.

```cpp []
/// Take a list and split it into sublists of the requested size, return the remainder of the input list
static
ListNode* split_list(ListNode* head, int sz, ListNode* lists_out[], int num_lists) {
  for (int i = 0; i < num_lists; ++i) {
    lists_out[i] = head;
    ListNode* tail = nullptr;
    for (int j = 0; head && j < sz; ++j) {
      tail = head;
      head = head->next;
    }
    // Ensure the subslist (if one was made) is terminated */
    if (tail) {
      tail->next = nullptr;
    }
  }
  return head;
}

/// Merge two sorted lists into one, the head and tail of the new list is returned
static
std::pair<ListNode*, ListNode*> merge_lists(ListNode* l1, ListNode* l2) {
  ListNode* head = nullptr;
  ListNode* tail = nullptr;
  ListNode** next_ptr = &head;
  while (l1 || l2) {
    if (!l2 || (l1 && l1->val <= l2->val)) {
      tail = l1;
      l1 = l1->next;
    } else {
      tail = l2;
      l2 = l2->next;
    }
    *next_ptr = tail;
    next_ptr = &tail->next;
  }
  return std::make_pair(head, tail);
}

ListNode* sortList(ListNode* head) {
  constexpr const int BUFFER_SIZE = 8;

  // Grab sublists of size 1, then BUFFER_SIZE, then BUFFER_SIZE^2, etc, until fully merged
  for (int steps = 1;; steps *= BUFFER_SIZE) {
    // Keep track of how much is left to process on this pass of the list
    ListNode* remaining = head;

    // Record the progress of the current pass into a single semi sorted list by updating the next pointer
    // of the previous node (or the head on the first loop)
    ListNode** next_ptr = &head;

    int num_loops = 0;
    for (; remaining; ++num_loops) {
      // Split BUFFER_SIZE sublists of upto steps length from the front
      ListNode* sublists[BUFFER_SIZE];
      remaining = split_list(remaining, steps, sublists, BUFFER_SIZE);

      // Keep merging all the sublists we have in the working buffer until we have a single sublist.
      // That is 8 sublists get merged into 4, then 4 into 2, then 2 into 1.
      ListNode* tail;
      for (int num_sublists = BUFFER_SIZE; 1 < num_sublists; num_sublists /= 2) {
        // Merge each pair of sublists
        for (int i = 0; i < num_sublists; i += 2) {
          auto [subhead, subtail] = merge_lists(sublists[i], sublists[i + 1]);

          // Record the head of our new longer sublist in the correct location for the next loop around
          sublists[i / 2] = subhead;
          tail = subtail;
        }
      }

      // Attach the single sublist into this passes progress
      *next_ptr = sublists[0];
      next_ptr = &tail->next;
    }

    // If the entire list was fully processed in a single loop, it means we've completely sorted the list and are done
    if (1 >= num_loops) {
      return head;
    }
  }
}
```

```c []

/* Take a list and split it into sublists of the requested size, return the remainder of the input list */
static
struct ListNode* split_list(struct ListNode* head, int sz, struct ListNode* lists_out[], int num_lists) {
  for (int i = 0; i < num_lists; ++i) {
    lists_out[i] = head;
    struct ListNode* tail = NULL;
    for (int j = 0; head && j < sz; ++j) {
      tail = head;
      head = head->next;
    }
    /* Ensure the subslist (if one was made) is terminated */
    if (tail) {
      tail->next = NULL;
    }
  }
  return head;
}

/* Merge two sorted lists into one, the head and tail of the new list is returned */
static
void merge_lists(struct ListNode* l1, struct ListNode* l2, struct ListNode** head_out, struct ListNode** tail_out) {
  struct ListNode* head = NULL;
  struct ListNode* tail = NULL;
  struct ListNode** next_ptr = &head;
  while (l1 || l2) {
    if (!l2 || (l1 && l1->val <= l2->val)) {
      tail = l1;
      l1 = l1->next;
    } else {
      tail = l2;
      l2 = l2->next;
    }
    *next_ptr = tail;
    next_ptr = &tail->next;
  }
  *head_out = head;
  *tail_out = tail;
}

struct ListNode* sortList(struct ListNode* head) {
  const int BUFFER_SIZE = 8;

  /* Grab sublists of size 1, then BUFFER_SIZE, then BUFFER_SIZE^2, etc, until fully merged */
  for (int steps = 1;; steps *= BUFFER_SIZE) {
    // Keep track of how much is left to process on this pass of the list
    struct ListNode* remaining = head;

    // Record the progress of the current pass into a single semi sorted list by updating the next pointer
    // of the previous node (or the head on the first loop)
    struct ListNode** next_ptr = &head;

    int num_loops = 0;
    for (; remaining; ++num_loops) {
      /* Split BUFFER_SIZE sublists of upto steps length from the front */
      struct ListNode* sublists[BUFFER_SIZE];
      remaining = split_list(remaining, steps, sublists, BUFFER_SIZE);

      /*
      Keep merging all the sublists we have in the working buffer until we have a single sublist.
      That is 8 sublists get merged into 4, then 4 into 2, then 2 into 1.
      */
      struct ListNode* tail;
      for (int num_sublists = BUFFER_SIZE; 1 < num_sublists; num_sublists /= 2) {
        /* Merge each pair of sublists */
        for (int i = 0; i < num_sublists; i += 2) {
          merge_lists(sublists[i], sublists[i + 1], &sublists[i / 2], &tail);
        }
      }

      /* Attach the single sublist into this passes progress */
      *next_ptr = sublists[0];
      next_ptr = &tail->next;
    }

    /* If the entire list was fully processed in a single loop, it means we've completely sorted the list and are done */
    if (1 >= num_loops) {
      return head;
    }
  }
}
```
### **Short quicksort for fun. O(nlogn) time, O(logn) stack space.**
```cpp []
  ListNode* sortList(ListNode* head, ListNode* tail = nullptr)
  {
    if (head != tail) {
      // Use head node as the pivot node
      // Everything in the _smaller_ list will be less than _head_
      // and everything appearing after _head_ in the list is greater or equal
      ListNode* smaller;
      ListNode** smaller_next = &smaller;
      for (ListNode** prev = &head->next; *prev != tail; ) {
        if (head->val > (**prev).val) {
          *smaller_next = *prev;
          smaller_next = &((**smaller_next).next);

          // Remove smaller node from original list
          *prev = (**prev).next;
        } else {
          // Correct position, skip over
          prev = &((**prev).next);
        }
      }

      // Connect the end of smaller list to the head (which is the partition node)
      // We now have. [smaller list...] -> head -> [larger list]
      *smaller_next = head;

      // Continue to sort everything after head
      head->next = sortList(head->next, tail);

      // Sort everything upto head
      head = sortList(smaller, head);
    }
    return head;
  }
```	
# Details
### **Basic description**
The problem calls for O(1) space. Therefore a solution that does not use recursion is required. Quicksort is out, merge sort is in.
The idea is to merge progressively larger sublists together until the resulting list is sorted. A walkthough will help explain.

Imagine the input list [3, 45, 2, 15, 37, 19, 39, 20], first process the list as sublists of length _1_, [3], [45], [2], [15], [37], [19], [39], [20]. As they are size _1_, they are obviously sorted sublists. Merge each pair of sublists together to produce 4 sorted sublists of size _2_ [3, 45], [2, 15], [19, 37], [20, 39], these are reassemble into the original list to produce [3, 45, 2, 15, 19, 37, 20, 39]. After this pass first pass, every 2 nodes is sorted. That is 3 is before 45, 2 is before 15, 19 is before 37, etc. Increasing the step size to _2_ and repeat. This produces the following table;
|Progress|Step size|Sublists|Merged|
|---|---|---|---|
|[3, 45, 2, 15, 37, 19, 39, 20]|1|[3], [45], [2], [15], [37], [19], [39], [20]|[3, 45], [2, 15], [19, 37], [20, 39]|
|[3, 45, 2, 15, 19, 37, 20, 39]|2|[3, 45], [2, 15], [19, 37], [20, 39]|[2, 3, 15, 45], [19, 20, 37, 39]|
|[2, 3, 15, 45, 19, 20, 37, 39]|4|[2, 3, 15, 45], [19, 20, 37, 39]|[2, 3, 15, 19, 20, 37, 39, 45]|

Since recursion is out, the process must be done inplace as we go. Basically for each pass;
1. Grab two sorted lists of size _step_
2. Merge the two lists into a single sorted list of size _step * 2_ and reattach to input list
3. Repeat from step 1. until entire list has been sorted (which will be when step * 2 >= length)

This produces the first relatively compact solution shown above.
### **Complexity**
#### **Space complexity**
There are only a few fixed, stack allocated, variables whose creation is not based on the length of the input list and there is no recursion. Therefore it is O(1) space complexity.
#### **Time complexity**
The list will be completely sorted once _step_ * 2 becomes greater than _n_, with _step_ doubling each pass (1, 2, 4, 8, ...). Therefore it will take logn passes to sort the list. Each pass though requires _n_ moves to produce the sublists and the merge of two sorted lists takes _step_ moves for _n/step_ sublists. Therefore it takes _n_ time for each of the logn passes. Therefore the time complexity is O(nlogn).
### **Improvements**
In practice, in the real world no one would implement the initial solution as is, instead it would be improved substansually (without impacting space complexity), by using a small holding buffer. Allowing for larger sorted sublists to be created with each full pass of the list. This is the second solution presented above.

Consider the first solution, the output of each pass produces the input of the next pass. For example, the first pass, when _step_ is 1, produces sublists of _step * 2_, which is exactly what is needed for the next pass. However, there is nowhere to hold this in O(1) space so we must reassemble the list fully ready for the next pass. However, with a small working buffer we can leaverage this and focus on sorting blocks of nodes. By that I mean, we grab _buf_sz_ sublists, and keep merging them together until we have a single, sorted, sublist in our holding buffer. The sublist is then linked back into the input list before progressing onto the next set of _buf_sz_ sublists.

With a working buffer of 4, using the input [6, 38, 25, 46, 45, 90, 97, 52, 75, 18] an initial pass would progress as follows;
|Progress|State 1, grab 4 sublists of _step_ size (1)|State 2, merge into 2 sublists|State 3, merge into 1 sublist|
|---|---|---|---|
|[6, 38, 25, 46, 45, 90, 97, 52, 75, 18]|[6], [38], [25], [46], [45, 90, 97, 52, 75, 18]|[6, 38], [25, 46], [45, 90, 97, 52, 75, 18]|[6, 25, 38, 46], [45, 90, 97, 52, 75, 18]|
|[6, 25, 38, 46, 45, 90, 97, 52, 75, 18]|[6, 25, 38, 46], [45], [90], [97], [52], [75, 18]|[6, 25, 38, 46], [45, 90], [52, 97], [75, 18]|[6, 25, 38, 46], [45, 52, 90, 97], [75, 18]|
|[6, 25, 38, 46, 45, 52, 90, 97, 75, 18]|[6, 25, 38, 46, 45, 52, 90, 97], [75], [18]|[6, 25, 38, 46, 45, 52, 90, 97], [18, 75]|[6, 25, 38, 46, 45, 52, 90, 97], [18, 75]|

The end of the list has been reached, so _step_ is increased, but this time, instead of doubling, it is multiplied by 4, as we now know every 4 nodes forms a sorted sublist. The next pass then becomes;

|Progress|State 1, grab 4 sublists of _step_ size (4)|State 2, merge into 2 sublists|State 3, merge into 1 sublist|
|---|---|---|---|
|[6, 25, 38, 46, 45, 52, 90, 97, 18, 75]|[6, 25, 38, 46], [45, 52, 90, 97], [18, 75]|[6, 25, 38, 45, 46, 52, 90, 97], [18, 75]|[6, 18, 25, 38, 45, 46, 52, 75, 90, 97]|

Finished!
Increasing the buffer to 8 or 16 makes a huge difference as we will be sorting blocks of nodes as follows;
|Buffer size|Pass 1|Pass 2|Pass 3|
|---|---|---|---|
|2|2|4|8|
|4|4|16|64|
|8|8|64|512|
|16|16|256|4096|

So after 3 passes of the list, with a buffer size of 8, we will have divided the input list into sorted sublists of size 512. Where as with buffer size of 2, we will only have sublists of size 8. Making processing a huge lists considerably faster.
## **Quicksort**
I added the quicksort solution for fun as it is quite compact, even if it doesn't fullfil the requirements of O(1) space. It does of course suffer from the normal problems of quicksort, that being a worst case of O(n^2) if the input list is already sorted.

Basically, grab the _head_ of the list and use it as a pivot. Then using code adopted from [partition list](https://leetcode.com/problems/partition-list/discuss/155293/Short-single-pass-iterative-c++-solution.-No-allocation-or-dummy-required.-O(n)-time-O(1)-space), divide into two sublists, those nodes less than _head->val_ and those greater or equal. Recurse around, partitioning those lists around a new pivot. Rince and repeat until each sublist is down to a size of 1 and is hence sorted.

I did it more for fun as the code is really small. Without comments it is;
```cpp []
  ListNode* sortList(ListNode* head, ListNode* tail = nullptr)
  {
    if (head != tail) {
      ListNode* smaller;
      ListNode** smaller_next = &smaller;
      for (ListNode** prev = &head->next; *prev != tail; ) {
        if (head->val > (**prev).val) {
          *smaller_next = *prev;
          smaller_next = &((**smaller_next).next);
          *prev = (**prev).next;
        } else {
          prev = &((**prev).next);
        }
      }

      *smaller_next = head;
      head->next = sortList(head->next, tail);
      head = sortList(smaller, head);
    }
    return head;
  }
```	

**Please give me a thumbs up if this helped explain this problem for you**