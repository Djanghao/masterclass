# 【Video】Simple addition algorithm - Python, JavaScript, Java and C++

**Author:** niits
**Votes:** 923
**Link:** [https://leetcode.com/problems/add-two-numbers/solutions/5184763/](https://leetcode.com/problems/add-two-numbers/solutions/5184763/)

---

# Intuition
Simply calculate addition with a few points.

# Solution Video

https://youtu.be/DFDTaCGlzTY

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 3,964
Thank you for your support!

---

# Approach

This question is very simple. All we have to do is just to calculate node values from `l1` and `l2`. Let's think about this case.

```
Input: l1 = [2,4,3], l2 = [5,6]
```
In the case, output should be
```
[2,4,3]
[5,6]
-------
[7,0,4]
```
We will implement simple algorithm and create a new LinkedList.

First of all, we create dummy node with value `0`(you can put any number instead of 0).

```
0 \u2192 None
d
r

d is dummy pointer
r is result pointer
```
We copy dummy pointer and create result pointer. I'll explain why we need result pointer later.

Basically, we calculate addition with values from `l1` and `l2` at the same index. Let's begin.

```
[2,4,3]
[5,6]
 \u2191

2 + 5 = 7
```
We got 7 as a total, so we create a new node with `7` and then connect it with `node 0`.
```
0 \u2192 7 \u2192 None
r   d

```
We move dummy pointer to the next node(= `7`) so that we can connect the next new node easily after `7`.

Let's calculate addition with the next values.
```
[2,4,3]
[5,6]
   \u2191

4 + 6 = 10
```
We got `10`. In that case, we want to put `0` for current digit. How can we put `0`?

---

\u2B50\uFE0F Points

Simply, we use remainder divided by `10`.

```
total % 10
```
For example,
```
10 % 10 = 0
15 % 10 = 5
7 % 10 = 7
```
You can use it when total is one digit. For example, previous digit 2 + 5 = 7

---

We have one more important thing. We have carry for a next digit, because total of current digit is `10`. How can we calculate the carry?

---

\u2B50\uFE0F Points

Just divide total by `10`, but this time we use `//` in Python.
```
total // 10
```
For example,
```
8 // 10 = 0
18 // 10 = 1
```
Now, we can get `0` for the current digit and carry `1` for the next digit, so we create a new node with `0` and then connect it with `node 7` and move dummy pointer to `node 0`
```
0 \u2192 7 \u2192 0 \u2192 None
r       d

carry = 1
```
Next
```
[2,4,3]
[5,6]
     \u2191

3 + 0 + 1 = 4

0 comes after 6 in the second list
1 is carry
```
Now, we can get `4` for the current digit and carry `0` for the next digit, so we create a new node with `4` and then connect it with `node 0` and move dummy pointer to `node 4`
```
0 \u2192 7 \u2192 0 \u2192 4 \u2192 None
r           d

carry = 0
```
We finish iteration. Problem here is that dummy pointer is at `node 4` but we want to return `7 \u2192 0 \u2192 4`, how can we return the whole new list?

---

\u2B50\uFE0F Points

Luckily, we have result pointer that is pointing to the first `node 0`. That is a reason why we copy dummy pointer and create result pointer at first.

---

We should return `r.next`(= `node 7`).
```
return 7 \u2192 0 \u2192 4
```

Let me add one more explanation. This is about conditions to continue calculating addition. To understand it, let's add `7` to the second list after `6`.

```
 0,0,1,1 (= carry)
[2,4,3]
[5,6,7]
--------
[7,0,1,1]
```
In this case, `1 + 3 + 7` creates carry, so we should add `node 1` at last. From this example, we have 3 conditions to continue calculating.

---

\u2B50\uFE0F Points

If list 1 has a value(= not null) or list 2 has a value(= not null) or we have a carry, then we continue to calculate addtion.

In the solution code, I use `while` instead of `if`. 

---

Easy\uD83D\uDE04!
Let's see solution codes and step by step algorithm!

---

https://youtu.be/5_lYYnSsOGU

---

# Solution Codes

```python []
class Solution:
    def addTwoNumbers(self, l1: Optional[ListNode], l2: Optional[ListNode]) -> Optional[ListNode]:
        
        dummy = ListNode()
        res = dummy

        total = carry = 0

        while l1 or l2 or carry:
            total = carry

            if l1:
                total += l1.val
                l1 = l1.next
            if l2:
                total += l2.val
                l2 = l2.next
            
            num = total % 10
            carry = total // 10
            dummy.next = ListNode(num)
            dummy = dummy.next
        
        return res.next
```
```javascript []
var addTwoNumbers = function(l1, l2) {
    let dummy = new ListNode();
    let res = dummy;
    let total = 0, carry = 0;

    while (l1 || l2 || carry) {
        total = carry;

        if (l1) {
            total += l1.val;
            l1 = l1.next;
        }
        if (l2) {
            total += l2.val;
            l2 = l2.next;
        }

        let num = total % 10;
        carry = Math.floor(total / 10);
        dummy.next = new ListNode(num);
        dummy = dummy.next;
    }

    return res.next;    
};
```
```java []
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode dummy = new ListNode();
        ListNode res = dummy;
        int total = 0, carry = 0;

        while (l1 != null || l2 != null || carry != 0) {
            total = carry;

            if (l1 != null) {
                total += l1.val;
                l1 = l1.next;
            }
            if (l2 != null) {
                total += l2.val;
                l2 = l2.next;
            }

            int num = total % 10;
            carry = total / 10;
            dummy.next = new ListNode(num);
            dummy = dummy.next;
        }

        return res.next;        
    }
}
```
```C++ []
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode* dummy = new ListNode();
        ListNode* res = dummy;
        int total = 0, carry = 0;

        while (l1 || l2 || carry) {
            total = carry;

            if (l1) {
                total += l1->val;
                l1 = l1->next;
            }
            if (l2) {
                total += l2->val;
                l2 = l2->next;
            }

            int num = total % 10;
            carry = total / 10;
            dummy->next = new ListNode(num);
            dummy = dummy->next;
        }

        ListNode* result = res->next;
        delete res;
        return result;         
    }
};
```

## Step by step algorithm

1. **Initialization**: Initialize a dummy node and a result pointer to the dummy node. Also, set `total` and `carry` variables to 0.

    ```python
    dummy = ListNode()
    res = dummy
    total = carry = 0
    ```

2. **Traversing Lists**: Traverse through both linked lists (`l1` and `l2`) until either of them or the carry has a value.

    ```python
    while l1 or l2 or carry:
    ```

3. **Calculating Sum**: At each iteration, calculate the total sum of corresponding digits from `l1`, `l2`, and the carry.

    ```python
    total = carry
    if l1:
        total += l1.val
        l1 = l1.next
    if l2:
        total += l2.val
        l2 = l2.next
    ```

4. **Extracting Digit and Carry**: Extract the digit by taking the modulo 10 of the total sum and update the carry for the next iteration by dividing the total sum by 10.

    ```python
    num = total % 10
    carry = total // 10
    ```

5. **Creating New Node**: Create a new ListNode with the extracted digit and attach it to the result linked list.

    ```python
    dummy.next = ListNode(num)
    dummy = dummy.next
    ```

6. **Return Result**: Finally, return the next node of the dummy node, which contains the head of the resultant linked list.

    ```python
    return res.next
    ```

This algorithm effectively adds two numbers represented as linked lists, considering carryovers at each step.

# Complexity
- Time complexity: $$O(n)$$
`n` is number of nodes in longer list `l1` or `l2`.

- Space complexity:$$O(n)$$ or $$O(1)$$
If we count new list we create, that is $$O(n)$$. If we don't count, that is $$O(1)$$

---

Thank you for reading my post. Please upvote it and don't forget to subscribe to my channel!

\u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

\u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ

\u2B50\uFE0F The next question #3 - Longest Substring Without Repeating Characters

post
https://leetcode.com/problems/longest-substring-without-repeating-characters/solutions/4840693/video-3-ways-to-solve-this-question-sliding-window-set-hashing-and-the-last-position/

video
https://youtu.be/n4zCTMh03_M

