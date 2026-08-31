# DELETE IN DISGUISE ✅✅69_BEATS_100%✅✅🔥Easy Solution🔥With Explanation🔥

**Author:** phoenix_sr
**Votes:** 4
**Link:** [https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/solutions/5744003/](https://leetcode.com/problems/delete-nodes-from-linked-list-present-in-array/solutions/5744003/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
we need to drop off all the nodes we dont want ie which are already in the nums array we can use 2 pointers to do this lets see

# Approach
<!-- Describe your approach to solving the problem. -->
first of all we will hash set the nums array for O(1) look up
then we will attach an empty node to our head and an anchor pointer to this empty node

then we will start travelling 
while there is a node next to our moving pointer,
we will check if this pointer is in the set or not 
if it is we have to drop it we will assign the next of our pointer to the next.next to skip this node 
if the node is not in the set we will simply move forward with the next node 

finally since our anchor is pointing to an empty node 
we will retrn anchor .next 
thats it 
# Complexity
- Time complexity:O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(N)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```javascript []
var modifiedList = function(nums, head) {
    const set = new Set(nums);
    let cur = new ListNode(null, head);
    let newHead = cur;

    while(cur.next) {
        if(set.has(cur.next.val)) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }

    return newHead.next;
};
```
```python []
class ListNode:
    def __init__(self, x, next=None):
        self.val = x
        self.next = next

def modified_list(nums, head):
    num_set = set(nums)
    dummy = ListNode(None, head)
    current = dummy

    while current.next:
        if current.next.val in num_set:
            current.next = current.next.next
        else:
            current = current.next

    return dummy.next

```
```ruby []
import java.util.HashSet;
import java.util.Set;

class ListNode {
    int val;
    ListNode next;
    ListNode(int x) {
        val = x;
        next = null;
    }
    ListNode(int x, ListNode next) {
        val = x;
        this.next = next;
    }
}

public class Solution {
    public ListNode modifiedList(int[] nums, ListNode head) {
        Set<Integer> set = new HashSet<>();
        for (int num : nums) {
            set.add(num);
        }

        ListNode dummy = new ListNode(-1, head);
        ListNode current = dummy;

        while (current.next != null) {
            if (set.contains(current.next.val)) {
                current.next = current.next.next;
            } else {
                current = current.next;
            }
        }

        return dummy.next;
    }
}

```
```c []
#include <stdlib.h>
#include <stdbool.h>

typedef struct ListNode {
    int val;
    struct ListNode *next;
} ListNode;

typedef struct HashSet {
    bool *data;
    int size;
} HashSet;

HashSet* createHashSet(int max_size) {
    HashSet *set = (HashSet *)malloc(sizeof(HashSet));
    set->data = (bool *)calloc(max_size, sizeof(bool));
    set->size = max_size;
    return set;
}

void addToHashSet(HashSet *set, int num) {
    if (num >= 0 && num < set->size) {
        set->data[num] = true;
    }
}

bool containsHashSet(HashSet *set, int num) {
    return num >= 0 && num < set->size && set->data[num];
}

void freeHashSet(HashSet *set) {
    free(set->data);
    free(set);
}

ListNode* modifiedList(int* nums, int numsSize, ListNode* head) {
    HashSet *set = createHashSet(100000);  // Assume a large enough size
    for (int i = 0; i < numsSize; i++) {
        addToHashSet(set, nums[i]);
    }

    ListNode dummy = {0, head};
    ListNode *current = &dummy;

    while (current->next != NULL) {
        if (containsHashSet(set, current->next->val)) {
            ListNode *temp = current->next;
            current->next = temp->next;
            free(temp);
        } else {
            current = current->next;
        }
    }

    freeHashSet(set);
    return dummy.next;
}
```