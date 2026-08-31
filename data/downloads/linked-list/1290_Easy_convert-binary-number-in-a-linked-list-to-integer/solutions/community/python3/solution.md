# [Python] Simple. 20ms.

**Author:** rohin7
**Votes:** 265
**Link:** [https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/solutions/455239/](https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/solutions/455239/)

---

Read the binary number from MSB to LSB
```
class Solution:
    def getDecimalValue(self, head: ListNode) -> int:
        answer = 0
        while head: 
            answer = 2*answer + head.val 
            head = head.next 
        return answer 
```