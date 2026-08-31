# JS, Python, Java, C++ | Easy O(1) Extra Space Solution w/ Visual Explanation

**Author:** sgallivan
**Votes:** 499
**Link:** [https://leetcode.com/problems/intersection-of-two-linked-lists/solutions/1092898/](https://leetcode.com/problems/intersection-of-two-linked-lists/solutions/1092898/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

The naive approach here would be to store each node reference in a data structure until we saw the same one twice, but that would take **O(N) extra space**.

In order to solve this problem with only **O(1) extra space**, we'll need to find another way to align the two linked lists. More importantly, we need to find a way to line up the *ends* of the two lists. And the easiest way to do that is to concatenate them in opposite orders, **A+B** and **B+A**. This way, the ends of the two original lists will align on the second half of each merged list.

![Visual 1](https://i.imgur.com/hcpocCV.png)

![Visual 2](https://i.imgur.com/dDUjSPk.png)

Then we just need to check if at some point the two merged lists are pointing to the same node. In fact, even if the two merged lists don't intersect, the value of **a** and **b** will be the same (**null**) when we come to the end of the merged lists, so we can use that as our exit condition.

We just need to make sure to string **headB** onto **a** and vice versa if one (but not both) list ends.

---

#### ***Implementation:***

There code for all four languages is almost identical.

---

#### ***Javascript Code:***

The best result for the code below is **96ms / 45.7MB** (beats 98% / 95%).
```javascript
var getIntersectionNode = function(headA, headB) {
    let a = headA, b = headB
    while (a !== b) {
        a = !a ? headB : a.next
        b = !b ? headA : b.next
    }
    return a
};
```

---

#### ***Python Code:***

The best result for the code below is **156ms / 29.3MB** (beats 88% / 88%).
```python
class Solution:
    def getIntersectionNode(self, headA: ListNode, headB: ListNode) -> ListNode:
        a, b = headA, headB
        while (a != b):
            a = headB if not a else a.next
            b = headA if not b else b.next
        return a
```

---

#### ***Java Code:***

The best result for the code below is **1ms / 41.6MB** (beats 98% / 88%).
```java
public class Solution {
    public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
        ListNode a = headA, b = headB;
        while (a != b) {
            a = a == null ? headB : a.next;
            b = b == null ? headA : b.next;
        }
        return a;
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **36ms / 14.5MB** (beats 96% / 96%).
```c++
class Solution {
public:
    ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
        ListNode *a = headA, *b = headB;
        while (a != b) {
            a = !a ? headB : a->next;
            b = !b ? headA : b->next;
        }
        return a;
    }
};
```