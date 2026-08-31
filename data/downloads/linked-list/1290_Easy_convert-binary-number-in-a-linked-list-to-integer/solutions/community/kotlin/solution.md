# ✅ [Kotlin/JavaScript] Fast & Straightforward || Simple & Easy to understand

**Author:** PoeticIvy302543
**Votes:** 2
**Link:** [https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/solutions/2242841/](https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/solutions/2242841/)

---

**Runtime: 137 ms, faster than 100.00% of Kotlin online submissions for Convert Binary Number in a Linked List to Integer.
Memory Usage: 33.6 MB, less than 92.86% of Kotlin online submissions for Convert Binary Number in a Linked List to Integer.**

Kotlin code:
```
    fun getDecimalValue(head: ListNode?): Int {
        val list = mutableListOf<Int>()
        var h = head
        while (h!=null) {
            list.add(h.`val`)
            h = h.next
        }
        var num = 0
        for (i in list) {
            num*=2
            num+=i
        }
        return num
    }
```

**Runtime: 63 ms, faster than 93.36% of JavaScript online submissions for Convert Binary Number in a Linked List to Integer.
Memory Usage: 42.1 MB, less than 40.80% of JavaScript online submissions for Convert Binary Number in a Linked List to Integer.**

JavaScript code:
```
function getDecimalValue(head) {
    let list = [];
    let h = head
    let num = 0
    while (h!=null) {
        list.push(h.val)
        h = h.next
    } for (let i of list) {
        num*=2
        num+=i
    } return num
}
```