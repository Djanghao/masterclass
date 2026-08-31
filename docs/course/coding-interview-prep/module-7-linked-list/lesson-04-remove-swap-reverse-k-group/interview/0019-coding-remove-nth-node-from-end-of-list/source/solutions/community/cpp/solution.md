# 【Video】Using distance between two pointers

**Author:** niits
**Votes:** 310
**Link:** [https://leetcode.com/problems/remove-nth-node-from-end-of-list/solutions/5418407/](https://leetcode.com/problems/remove-nth-node-from-end-of-list/solutions/5418407/)

---

# Intuition
Using distance between two pointers to find nth node from the last.

# Solution Video

https://youtu.be/D56o6uCaVJM

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 4,565
Thank you for your support!

---

# Approach

A challenging point of this question is that Linked List doesn't have index number, so we don't know which node is the last Nth node from the last.

My strategy is to create `dummy` pointer and create distance `dummy` pointer and `head` pointer.


```
Input: head = [1,2,3,4,5], n = 2
```
```
[1,2,3,4,5]
 d   h
 r

d = dummy
h = head
r = res (return value)
```
Now we move `dummy` and `head` at the same time until `head` is at the last node.

```
[1,2,3,4,5]
   d   h
 r

[1,2,3,4,5]
     d   h
 r
```
This example has `n = 2`, so we should remove ` node 4`. Luckily, we stop at `node 3` which is right before `node 4`. That is very important.

Why?

That's because if we stop right before target node, we can remove the target node like this.


```
dummy.next = dummy.next.next(= 5 in this case)
```
But what if we stop at the target node.
```
[1,2,3,4,5]
       d   h
```
It's going to be tough to remove the target node. That's why it's important to stop right before the target node.

Before we return a new list, we have one more problem. How can we return whole new list? Because `head` pointer is now the last node and `dummy` pointer is pointing to `node 3`.

```
[1,2,3,4,5]
     d   h
 r
```
That's why at first we have `dummy` pointer and `result` pointer. The `result` pointer is still pointing to `node 1`.

All we have to do is just
```
return res.next
```


---

https://youtu.be/bU_dXCOWHls


---

# Complexity
- Time complexity: $$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


```python []
class Solution:
    def removeNthFromEnd(self, head: Optional[ListNode], n: int) -> Optional[ListNode]:
        res = ListNode(0, head)
        dummy = res

        for _ in range(n):
            head = head.next
        
        while head:
            head = head.next
            dummy = dummy.next
        
        dummy.next = dummy.next.next

        return res.next
```
```javascript []
var removeNthFromEnd = function(head, n) {
    let res = new ListNode(0, head);
    let dummy = res;

    for (let i = 0; i < n; i++) {
        head = head.next;
    }

    while (head) {
        head = head.next;
        dummy = dummy.next;
    }

    dummy.next = dummy.next.next;

    return res.next;    
};
```
```java []
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
        ListNode res = new ListNode(0, head);
        ListNode dummy = res;

        for (int i = 0; i < n; i++) {
            head = head.next;
        }

        while (head != null) {
            head = head.next;
            dummy = dummy.next;
        }

        dummy.next = dummy.next.next;

        return res.next;        
    }
}
```
```C++ []
class Solution {
public:
    ListNode* removeNthFromEnd(ListNode* head, int n) {
        ListNode* res = new ListNode(0, head);
        ListNode* dummy = res;

        for (int i = 0; i < n; i++) {
            head = head->next;
        }

        while (head != nullptr) {
            head = head->next;
            dummy = dummy->next;
        }

        dummy->next = dummy->next->next;

        return res->next;        
    }
};
```

# Step by Step Algorithm

1. **Initialize variables:**
    - We create a dummy node `res` with a value of 0 and set its next pointer to the head of the original list. This dummy node helps in handling edge cases when removing the first node.
    - We initialize another pointer `dummy` to the dummy node `res`. This pointer will be used to traverse the list.

    ```python
    res = ListNode(0, head)
    dummy = res
    ```

2. **Move `head` pointer forward by `n` nodes:**
    - We iterate `n` times using a for loop to advance the `head` pointer `n` nodes forward. This effectively moves `head` to the nth node from the beginning.

    ```python
    for _ in range(n):
        head = head.next
    ```

3. **Find the node before the node to be removed:**
    - We use a while loop to traverse the list with both `head` and `dummy` pointers.
    - As long as `head` is not None, we move both `head` and `dummy` pointers one node forward in each iteration.
    - After this loop, `dummy` will be pointing to the node right before the node to be removed.

    ```python
    while head:
        head = head.next
        dummy = dummy.next
    ```

4. **Remove the nth node from the end:**
    - Once the loop finishes, `dummy` will be pointing to the node right before the node to be removed.
    - We update the `next` pointer of the node pointed by `dummy` to skip the next node, effectively removing the nth node from the end.

    ```python
    dummy.next = dummy.next.next
    ```

5. **Return the modified list:**
    - Finally, we return the next node after the dummy node `res`, which is the head of the modified list.

    ```python
    return res.next
    ```

This algorithm effectively removes the nth node from the end of the linked list by traversing it only once.

---

Thank you for reading my post. Please upvote it and don't forget to subscribe to my channel!

### \u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

### \u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ

### \u2B50\uFE0F Related question #167 - Two Sum II - Input Array Is Sorted

https://youtu.be/fj5ruWT6B5U

