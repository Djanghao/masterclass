# Javascript - O(n) solution using stack.

**Author:** MrCoder1991
**Votes:** 24
**Link:** [https://leetcode.com/problems/add-two-numbers-ii/solutions/367026/](https://leetcode.com/problems/add-two-numbers-ii/solutions/367026/)

---

```
var addTwoNumbers = function(l1, l2) {
    let stack1 = [];
    let stack2 = [];
    while(l1) {
        stack1.push(l1.val);
        l1 = l1.next;
    }
    while(l2) {
        stack2.push(l2.val);
        l2 = l2.next;
    }
    let l3 = new ListNode(0);
    while(stack1.length || stack2.length) {
        let sum = 0;
        if(stack1.length) sum += stack1.pop();
        if(stack2.length) sum += stack2.pop();
        sum += l3.val;
        l3.val = sum%10;
        let head = new ListNode(Math.floor(sum/10));
        head.next = l3;
        l3 = head;
    }
    return (l3.val === 0) ? l3.next : l3;
};
```