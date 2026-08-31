# Java readable code and difference between Next Greater Number II

**Author:** 416486188
**Votes:** 14
**Link:** [https://leetcode.com/problems/next-greater-node-in-linked-list/solutions/296091/](https://leetcode.com/problems/next-greater-node-in-linked-list/solutions/296091/)

---

**Strategy**

I will leave the mono-stack explanation since it is a basic pattern explained in detail in **[739. Daily Temperatures](https://leetcode.com/problems/daily-temperatures/)** and **[496. Next Greater Element I](https://leetcode.com/problems/next-greater-element-i/)** and **[503. Next Greater Element II](https://leetcode.com/problems/next-greater-element-ii/)...**

Note that: **we need to store the index of elements and be able to get the value of elements in the stack**

---
**Analysis**

Difference between **Next Greater Number II** and **this problem**:
1. **Next Greater Number II**, the input is an **array `int[]`**, we can get the index of elements in the array directly. But for this problem, the input is a **linked list**, we cannot get the index of elements, so we need to set the index manually. 

---
**Data stucture of elements in `stack`**

**Above all, to set the index and get the value together, we make elements in the form of  `int[]{index, value}` in the stack where `array[0] is the index and array[1] is its value`.**

---
Also like other solution, if you put all the ListNode to `ArrayList` from the linkedlist, it is also a way if you do not mind it takes extra space.

---
**Final code**

```java
class Solution {
    public int[] nextLargerNodes(ListNode head) {
        // decreasing stack
        Deque<int[]> stack = new ArrayDeque<>(); // index of elements
        
        int n = getSize(head); // get the length of linked list
        int[] res = new int[n];
        int i = 0;
        ListNode cur = head;
        while(cur != null){
            while(!stack.isEmpty() && cur.val > stack.peekFirst()[1]){
                int[] prev = stack.pollFirst();
                res[prev[0]] = cur.val;
            }
            stack.offerFirst(new int[]{i, cur.val});
            i++;
            cur = cur.next;
        }
        
        return res;
    }
    
    public int getSize(ListNode head){
        ListNode cur = head;
        int size = 0;
        while(cur != null){
            cur = cur.next;
            size++;
        }
        return size;
    }
}
```

---
TC: `O(n)`
SC: `O(n)` when the linked list is in **non-increasing** order.