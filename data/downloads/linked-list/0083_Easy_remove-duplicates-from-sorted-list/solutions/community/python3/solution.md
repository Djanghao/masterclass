# 【Video】Explain important points

**Author:** niits
**Votes:** 132
**Link:** [https://leetcode.com/problems/remove-duplicates-from-sorted-list/solutions/5810798/](https://leetcode.com/problems/remove-duplicates-from-sorted-list/solutions/5810798/)

---

# Intuition
Remove next duplicate node.

---

# Solution Video

https://youtu.be/uyd5vc0TZmA

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 5,119
Thank you for your support!

---

# Approach

Let's think about this example.
```
Input: head = 1 \u2192 1 \u2192 2
```
That is very simple. All we have to do is just to remove next duplicate node then connect current node with next next node.

---

\u2B50\uFE0F Points

Connect a current node with next next node when we found duplicate values.

```
1 \u2192 1 \u2192 2
h

1 \u2192 2
h

head.next(= 1) = head.next.next(= 2)
```

One more important thing is that **we don't move head pointer to next when we found a duplicate value.**

Why?

Look at this example.

```
1\u3000\u2192\u30001\u3000\u2192\u30001\u3000\u2192\u30002
h      
```
In this case we have a duplicate `1` and `1`, so remove `1`(= second `1`). Then move head pointer to next
```
1 \u2192 1 \u2192 2
    h      
```
We still have duplicate `1` and `1`. But it's hard to remove `1` because we are now at second `1`.

That's why it's good idea to stay at the same place when we found a duplicate value.

```
1 \u2192 1 \u2192 2
h      
```
We found duplicate, so 

```
head.next(= 1) = head.next.next(= 2)

1 \u2192 2
    h      
```

---

Next difficulty is that **we want to return whole non duplicate list but head pointer is pointing at the last node.**

How can we deal with the problem?

My strategy is to copy head pointer to another variable. Let's say `res` before we iterate through the input list.

```
Input: head = 1 \u2192 1 \u2192 2 \u2192 3 \u2192 3
```

Let's see one by one.

```
 1 \u2192 1 \u2192 2 \u2192 2 \u2192 3
 h
 r
```
Found a duplicate value at the next node. Remove it.
```
 1 \u2192 2 \u2192 2 \u2192 3
 h
 r
```
Next no duplicate (1 vs 2). Move head pointer to next.
```
 1 \u2192 2 \u2192 2 \u2192 3
 r   h
```
Again found a duplicate value. Just remove it. We don't move the head pointer to next.

```
 1 \u2192 2 \u2192 3
 r   h
```
Next, `2 vs 3`. They are different, so move head pointer to next.
```
 1 \u2192 2 \u2192 3
 r       h

```
Then finish iteration. Now we have to return whole non duplicate list, luckily we have `res` pointing at the first node.

```
return res (= 1 \u2192 2 \u2192 3)
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
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        res = head

        while head and head.next:
            if head.val == head.next.val:
                head.next = head.next.next
            else:
                head = head.next
        
        return res
```
```javascript []
var deleteDuplicates = function(head) {
    let res = head;

    while (head && head.next) {
        if (head.val === head.next.val) {
            head.next = head.next.next;
        } else {
            head = head.next;
        }
    }

    return res;    
};
```
```java []
class Solution {
    public ListNode deleteDuplicates(ListNode head) {
        ListNode res = head;

        while (head != null && head.next != null) {
            if (head.val == head.next.val) {
                head.next = head.next.next;
            } else {
                head = head.next;
            }
        }

        return res;        
    }
}
```
```C++ []
class Solution {
public:
    ListNode* deleteDuplicates(ListNode* head) {
        ListNode* res = head;

        while (head && head->next) {
            if (head->val == head->next->val) {
                head->next = head->next->next;
            } else {
                head = head->next;
            }
        }

        return res;        
    }
};
```

# Step by Step Algorithm

1. **Initialization**:
    ```python
    res = head
    ```

    - The function takes the `head` of a sorted linked list as input.
    - It initializes a variable `res` to keep track of the head of the modified list.
    

2. **Traverse the Linked List**:
    ```python
    while head and head.next:
    ```
    
    - The function uses a `while` loop to traverse the linked list.
    - The loop continues as long as `head` and `head.next` are not `None`.
    
3. **Check for Duplicates**:
    ```python
    if head.val == head.next.val:
    ``` 
    - Inside the loop, it checks if the current node's value (`head.val`) is equal to the next node's value (`head.next.val`).
    

4. **Remove Duplicates**:
    ```python
    head.next = head.next.next
    ```
 
    - If the values are equal, it means there is a duplicate.
    - The `next` pointer of the current node is updated to skip the next node and point to the node after the next (`head.next.next`).
    
5. **Move to the Next Node**:
    ```python
    else:
        head = head.next
    ``` 
    - If the values are not equal, the function moves the `head` pointer to the next node.
    

6. **Return the Result**:
    ```python
    return res
    ```
    - After the loop completes, the function returns `res`, which points to the head of the modified linked list with duplicates removed.

---

Thank you for reading my post.


### \u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

### \u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ

### \u2B50\uFE0F My previous video - Merge Intervals #56

https://youtu.be/DAppffTClNQ    
