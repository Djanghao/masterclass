# 0 ms | Simple Go solution

**Author:** akshaybharambe14
**Votes:** 5
**Link:** [https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/solutions/707425/](https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/solutions/707425/)

---

```
func getDecimalValue(head *ListNode) (decimal int) {
    
    for head != nil {
        decimal = (decimal*2 ) + head.Val
        head = head.Next
    }
    
    return
}
```