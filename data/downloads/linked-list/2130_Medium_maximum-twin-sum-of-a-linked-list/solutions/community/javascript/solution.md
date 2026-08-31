# Beginner friendly [Java/JavaScript/Python] Solution

**Author:** HimanshuBhoir
**Votes:** 22
**Link:** [https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/solutions/1728750/](https://leetcode.com/problems/maximum-twin-sum-of-a-linked-list/solutions/1728750/)

---

**Time Complexity : O(n)
where n is height of head**

```java []
class Solution {
    public int pairSum(ListNode head) {
        Stack<ListNode> stack = new Stack<>();
        ListNode dummy = head;
        while(dummy != null){
            stack.push(dummy);
            dummy = dummy.next;
        }
        int max = 0;
        while(stack.size() > stack.size()/2){
            max = Math.max(max, (head.val + stack.pop().val));
            head = head.next;
        }
        return max;
    }
}
```

```javascript []
var pairSum = function(head) {
    var st = []; 
    while(head != null){
        st.push(head.val);
        head = head.next;
    }
    let max = 0;
    for(let i=0; i<st.length; i++){
        max = Math.max(max, (st[i] + st[st.length-1-i]));
    }
    return max;
};
```

```python []
class Solution(object):
    def pairSum(self, head):
        st = []
        while head:
            st.append(head.val)
            head = head.next
        max_sum = 0
        for i in range(len(st)/2):
            max_sum = max(max_sum, st[i] + st[len(st)-1-i])
        return max_sum
```