# Typescript solution

**Author:** jonathanng222
**Votes:** 2
**Link:** [https://leetcode.com/problems/rotate-list/solutions/3960293/](https://leetcode.com/problems/rotate-list/solutions/3960293/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. iterate, get length of list
2. assign tail to head
3. iterate through again to length - (k % length)
4. length - (k % length) + 1 is new head
5. go to length - (k % length), delete reference
6. return head

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: Constant
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
function rotateRight(head: ListNode | null, k: number): ListNode | null {
    if (!head) return head
    let length = 1
    let tmp = head
    while (tmp.next) {
        length++
        tmp = tmp.next
    }
    tmp.next = head
    for (let i = 0; i < length - (k % length); i++) {
        tmp = tmp.next
    }
    head = tmp.next
    tmp.next = null
    return head
};
```