# Very simple and very unoptimized solution in typescript.

**Author:** AnaySharma
**Votes:** 1
**Link:** [https://leetcode.com/problems/add-two-numbers-ii/solutions/3779717/](https://leetcode.com/problems/add-two-numbers-ii/solutions/3779717/)

---

# Intuition
I am ashamed.

# Approach
store both linked list numbers as string, convert them to BigInt, then add them, then convert sum to string and iterate over sum string and append new listnode for every digit in sum string to result linked list.

# Complexity
- Time complexity: O(max(m, n) + k)

- Space complexity: O(m + n + k)

> m = $$length\\ of\\ l1$$
> n = $$length\\ of\\ l2$$
> k = $$length\\ of\\ resulting\\ sum\\ string$$

# Code
```
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
    let number1 = "";
    let number2 = "";

    while (l1 || l2) {
        if (l1 !== null) {
            number1 += l1.val;
            l1 = l1.next;
        }
        if (l2 !== null) {
            number2 += l2.val;
            l2 = l2.next;
        }
    }

    let sum = BigInt(number1) + BigInt(number2);
    let sumStr = sum.toString();

    const res = new ListNode(Number(sumStr[0]));
    let ptr = res;
    
    for (let i = 1; i < sumStr.length; i++) {
        let temp = new ListNode(Number(sumStr[i]));
        ptr.next = temp;
        ptr = ptr.next;
    }

    return res;
};
```