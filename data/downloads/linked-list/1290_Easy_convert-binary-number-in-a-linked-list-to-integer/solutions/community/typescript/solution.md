# Typescript - JavaScript O(n)

**Author:** aramfilak
**Votes:** 4
**Link:** [https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/solutions/3407981/](https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/solutions/3407981/)

---

Time: O(n)
Space: O(1)
# Code
```
function getDecimalValue(head: ListNode | null): number {
    let cur = head; 
    let dec= 0; 
    while(cur){
        dec*=2;
        dec +=cur.val;
        cur = cur.next 
    }

    return dec;
}
```