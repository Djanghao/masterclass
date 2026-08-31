# ✅ JS || Three Approaches  || With explanation || Easy to understand

**Author:** pmistry_
**Votes:** 7
**Link:** [https://leetcode.com/problems/palindrome-linked-list/solutions/2619017/](https://leetcode.com/problems/palindrome-linked-list/solutions/2619017/)

---

I just found this Blog and Github repository with solutions to Leetcode problems.
https://leet-codes.blogspot.com
It is very useful, and I just wanted to share it with you.
Note: You can bookmark it as a resource, and for another approaches
<br>

```
var isPalindrome = function (head) {
    // Store all values from the linked list in an array
    let valuesFound = [];
    while (head) {
        valuesFound.push(head.val);
        head = head.next;
    }

    // Check if the list of values are a palindrome
    let left = 0;
    let right = valuesFound.length - 1;
    while (left <= right) {
        if (valuesFound[left] !== valuesFound[right]) {
            return false;
        }
        left++, right--;
    }

    return true;
};
```

This approach is fast, but it isn\u2019t great on memory, as we\u2019re creating a new block of data that is proportionate to the original Linked List.

For 2 more approach with explanation please ref: 
https://leet-codes.blogspot.com/2022/09/234-palindrome-linked-list.html

*(Note: You can bookmark it for your future ref)*