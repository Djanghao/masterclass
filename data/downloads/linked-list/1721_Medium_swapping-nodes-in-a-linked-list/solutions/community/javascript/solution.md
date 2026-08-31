# JS, Python, Java, C++ | Short, Simple Solution w/ Explanation

**Author:** sgallivan
**Votes:** 44
**Link:** [https://leetcode.com/problems/swapping-nodes-in-a-linked-list/solutions/1108935/](https://leetcode.com/problems/swapping-nodes-in-a-linked-list/solutions/1108935/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

It's important to notice that the instructions don't specify that we have to actually swap the *nodes*, just the *values*. So the only thing remaining is to just find both nodes.

Since we don't know how long the linked list is, we'll have to iterate to the end of it before we can possibly find the second node to swap out. But to make things easier, we don't have to find and store the length and then calculate the difference, we can just take advantage of the fact that the distance from the **k**th node to the end is the same as the distance from the beginning to the **k**th node from the end.

![Visual 1](https://i.imgur.com/oQ76PFv.png)

We can move the first list (**A**) forward to the **k**th node, making sure to store it in a variable (**nodeK**), then start our staggered list (**B**) and iterate both until **A** ends, at which point we should be at the **k**th node from the end.

Then we just swap the values and **return head**.

---

#### ***Implementation:***

The code for all four languages is almost exactly the same.

---

#### ***Javascript Code:***

The best result for the code below is **484ms / 73.5MB** (beats 99% / 89%).
```javascript
var swapNodes = function(head, k) {
    let A = head, B = head, K, temp
    for (let i = 1; i < k; i++) A = A.next
    K = A, A = A.next
    while (A) A = A.next, B = B.next
    temp = K.val, K.val = B.val, B.val = temp
    return head
};
```

---

#### ***Python Code:***

The best result for the code below is **996ms / 48.7MB** (beats 99% / 97%).
```python
class Solution:
    def swapNodes(self, head: ListNode, k: int) -> ListNode:
        A, B = head, head
        for i in range(1, k): A = A.next
        nodeK, A = A, A.next
        while A: A, B = A.next, B.next
        nodeK.val, B.val = B.val, nodeK.val
        return head
```

---

#### ***Java Code:***

The best result for the code below is **2ms / 64.5MB** (beats 100% / 88%).
```java
class Solution {
    public ListNode swapNodes(ListNode head, int k) {
        ListNode A = head, B = head, nodeK;
        for (int i = 1; i < k; i++) A = A.next;
        nodeK = A;
        A = A.next;
        while (A != null) {
            A = A.next;
            B = B.next;
        }
        int temp = nodeK.val;
        nodeK.val = B.val;
        B.val = temp;
        return head;
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **572ms / 180.0MB** (beats 94% / 99%).
```c++
class Solution {
public:
    ListNode* swapNodes(ListNode* head, int k) {
        ListNode *A = head, *B = head, *nodeK;
        for (int i = 1; i < k; i++) A = A->next;
        nodeK = A, A = A->next;
        while (A) A = A->next, B = B->next;
        int temp = nodeK->val;
        nodeK->val = B->val, B->val = temp;
        return head;
    }
};
```