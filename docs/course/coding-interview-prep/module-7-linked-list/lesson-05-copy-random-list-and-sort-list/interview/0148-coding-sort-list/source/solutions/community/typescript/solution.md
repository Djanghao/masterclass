# Sorting Linked Lists With Merge Sort

**Author:** _selelel
**Votes:** 1
**Link:** [https://leetcode.com/problems/sort-list/solutions/5697834/](https://leetcode.com/problems/sort-list/solutions/5697834/)

---

# Intuition
When I first thought about sorting a singly linked list, the challenge was figuring out how to divide the list efficiently and then merge it back together in sorted order. Since the linked list doesn't have random access, typical array-based sorting techniques wouldn't work. That's why I decided to go with Merge Sort, which is naturally suited for linked lists because it doesn't rely on accessing elements by index.

# Approach
The approach involves several steps:
1. **Length Calculation**: First, I determine the length of the linked list to help with splitting.
2. **Splitting the List**: I split the linked list into two halves. This is done by iterating to the middle of the list and severing the connection, creating two separate lists.
3. **Recursive Sorting**: Each half is recursively sorted using the same approach.
4. **Merging**: Finally, I merge the two sorted halves back together into a single sorted list.

# Complexity
- **Time complexity**:  
  The time complexity of this approach is $$O(n \\log n)$$, where $$n$$ is the number of nodes in the linked list. This is due to the repeated splitting of the list and the merging process.

- **Space complexity**:  
  The space complexity is $$O(\\log n)$$ due to the recursive call stack during the merge sort process.

# Code
```typescript
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

const length = (list: ListNode): number =>  {
    let curr = list;
    let length = 0;

    while(curr !== null) {
        curr = curr.next;
        ++length;
    }

    return length;
}

const split = (list: ListNode): {f : ListNode, s : ListNode } => {
    const first = new ListNode(-1);
    first.next = list;
    let curr = first;
    let second = new ListNode(-1);
    let iterations = Math.floor(length(list) / 2);

    while(iterations > 0) {
        --iterations;
        curr = curr.next;

        if(iterations === 0){
            let temp = curr.next;
            curr.next = null;
            second.next = temp;
        }
    }

    return {f : first.next, s : second.next};
}

const merge = (list1: ListNode, list2: ListNode): ListNode | null =>  {
    const res = new ListNode(-1);
    let curr = res;

    while(list1 !== null && list2 !== null) {
        if(list1.val < list2.val) {
            curr.next = list1;
            list1 = list1.next;
        } else {
            curr.next = list2;
            list2 = list2.next;
        }
        curr = curr.next;
    }

    if(list1 !== null) {
        curr.next = list1;
    } else if(list2 !== null){
        curr.next = list2;
    }

    return res.next;
};

const sortList = (head: ListNode | null): ListNode | null => {
    if(!head?.next) return head;
    let spl = split(head);
    
    return merge(sortList(spl.f), sortList(spl.s));
}
