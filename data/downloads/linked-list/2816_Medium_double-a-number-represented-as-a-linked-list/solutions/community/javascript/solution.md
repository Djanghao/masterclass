# ✅Detailed Explanation💯4 Methods🔥🔥Recursive | Stack | Reversal | One Pointer-Simple Math🔥1 pass🔥

**Author:** Saketh3011
**Votes:** 26
**Link:** [https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/solutions/5122935/](https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/solutions/5122935/)

---

# \uD83C\uDFAF Problem Explanation:
We are given `head` of a non-empty linked list representing a non-negative integer without leading zeroes, the task is to double the number represented by the linked list and return the head of the resulting linked list.

## \uD83E\uDDD0 Thinking Through:
- When we double a digit it can give `carry`. Which needs to be added in previous node. This can keep on repeating.
- If the first node gives a carry, new node needs to be added.
- Max `carry` is 1. 
    - Let's take max digit 9 which already has carry.
    - (9x2) + 1 = **1**9 -> 1 carry.


---
# \uD83D\uDD0D Methods To Solve This Problem:
This post covers the following approches: [Time complexity, Space complexity]
1. Recursion [O(n), O(n)]
2. Stack [O(n), O(n)]
3. List Reversal [O(n), O(1)]
4. One Pointer - Math [O(n), O(1)]\uD83D\uDD25

---

# Method 1 - Recursion
## \uD83E\uDD14 Intuition:
We can recursive approach to doubling each node of the linked list as this problem breaking down can into smaller subproblems. We recursively traverse the linked list, doubling each node's value and handling any resulting carries. We can use a function which return carry and recursively iterate through handling carry. 

## \uD83E\uDDE0 Approach:
1. Define a recursive function `twice` that doubles the value of each node and returns the carry generated.
2. Traverse the linked list recursively using the `twice` function, starting from the head node.
3. At each step, compute the doubled value of the current node and propagate any resulting carry to the next node.
4. Update the value of the current node with the remainder of the doubled value modulo 10.
5. If there's a carry after traversing the entire list, prepend a new node with the carry as its value to the beginning of the list.

## \u2699\uFE0F Dry Run:
**Input:** 1 -> 8 -> 9
- Initial call: `twice(head)`
   - Recursive call on `head = 1`
     - Recursive call on `head = 8`
       - Recursive call on `head = 9`
         - Recursive call on `head = None`
         - Return 0
       - `doubled_value = 9 * 2 + 0 = 18`
       - Update `head.val` to 8
       - Return 1 (carry)
     - `doubled_value = 8 * 2 + 1 = 17`
     - Update `head.val` to 7
     - Return 1 (carry)
   - `doubled_value = 1 * 2 + 1 = 3`
   - Update `head.val` to 3
   - Return 0

**Output:** 3 -> 7 -> 8

## \uD83D\uDCD2 Complexity:
- \u23F0 Time complexity: $$O(n)$$, where n is the number of nodes in the linked list. 
- \uD83E\uDDFA Space complexity: $$O(n)$$, due to the recursive calls and stack space required.

## \uD83E\uDDD1\u200D\uD83D\uDCBB Code
``` python []
class Solution:    
    def doubleIt(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # Doubles the node and gives carry
        def twice(self, head: Optional[ListNode]) -> int:
            if not head:
                return 0            
            doubled_value = head.val * 2 + twice(head.next)
            head.val = doubled_value % 10
            return doubled_value // 10
        
        carry = twice(head)
        if carry:
            head = ListNode(carry, head)
        return head
```
``` java []
class Solution {
    public ListNode doubleIt(ListNode head) {
        int carry = twice(head);
        if (carry > 0) {
            head = new ListNode(carry, head);
        }
        return head;
    }

    private int twice(ListNode head) {
        if (head == null) {
            return 0;
        }
        int doubledValue = head.val * 2 + twice(head.next);
        head.val = doubledValue % 10;
        return doubledValue / 10;
    }
}
```
``` cpp []
class Solution {
public:
    ListNode* doubleIt(ListNode* head) {
        int carry = twice(head);
        if (carry > 0) {
            head = new ListNode(carry, head);
        }
        return head;
    }

private:
    int twice(ListNode* head) {
        if (head == nullptr) {
            return 0;
        }
        int doubledValue = head->val * 2 + twice(head->next);
        head->val = doubledValue % 10;
        return doubledValue / 10;
    }
};
```
``` javascript []
var doubleIt = function(head) {
    var twice = function(head) {
        if (!head) {
            return 0;
        }
        var doubledValue = head.val * 2 + twice(head.next);
        head.val = doubledValue % 10;
        return Math.floor(doubledValue / 10);
    };

    var carry = twice(head);
    if (carry > 0) {
        head = new ListNode(carry, head);
    }
    return head;
};
```
---
# Method 2 - Stack Approach
## \uD83E\uDD14 Intuition:
The idea is to traverse the linked list, doubling each node's value while maintaining the carryover. We'll use a stack to traverse the list in reverse order to simplify the process.

## \uD83E\uDDE0 Approach:
1. Traverse the given linked list and push each node onto a stack.
2. Initialize variables `nxt` (to hold the next node in the resulting list) and `carry` (to hold the carryover value).
3. Pop each node from the stack and update its value by doubling it, adjusting for carryover. Update its `next` pointer to point to the previous node.
4. If there's a remaining carry after processing all nodes, create a new node with the carry value and update its `next` pointer to the last processed node.
5. Return the head of the resulting linked list.

## \u2699\uFE0F Dry Run:
#### Example 1:
**Input:** 1 -> 8 -> 9
- Stack: [9, 8, 1], nxt = None, carry = 0
- Iterate through stack:
    - Pop node 9:
        - Double: 18, carry = 0
        - Value: ~~1~~8
        - Previous nxt: None
        - Updated nxt:  8

    - Pop node 8:
        - Double: 16, carry = 1 (carry from previous)
        - Value: ~~1~~7
        - Previous nxt: 8
        - Updated nxt:  7

    - Pop node 1:
        - Double: 2, carry = 1 (carry from previous)
        - Value: 3
        - Previous nxt: 7
        - Updated nxt:  3

**Output:** 3 -> 7 -> 8

#### Example 2
**Input:** 9 -> 9 -> 9
- Stack: [9, 9, 9], nxt = None, carry = 0
- Iterate through stack:
    - Pop node 9:
        - Double: 18, carry = 0
        - Value: ~~9~~8
        - Previous nxt: None
        - Updated nxt:  8

    - Pop node 9:
        - Double: 18, carry = 1
        - Value: ~~1~~9
        - Previous nxt: 9
        - Updated nxt:  9

    - Pop node 9:
        - Double: 18, carry = 1
        - Value: ~~1~~9
        - Previous nxt: 9
        - Updated nxt:  9
- Carry > 0:
    -   Value: 1
    - Previous nxt: 9
    - Updated nxt:  1

**Output:** 1 -> 9 -> 9 -> 8


# \uD83D\uDCD2 Complexity:
- \u23F0 Time complexity: O(n) - We traverse the list once.
- \uD83E\uDDFA Space complexity: O(n) - We use a stack to store the nodes temporarily.

## \uD83E\uDDD1\u200D\uD83D\uDCBB Code
``` python []
class Solution:
    def doubleIt(self, head: Optional[ListNode]) -> Optional[ListNode]:
        stack = []
        while head:
            stack.append(head)
            head = head.next

        nxt, carry = None, 0
        while stack:
            curr = stack.pop()
            curr.next = nxt
            nxt = curr
            carry += curr.val * 2
            curr.val = carry % 10
            carry //= 10

        if carry > 0:
            curr = ListNode(carry, nxt)

        return curr
```
``` java []
class Solution {
    public ListNode doubleIt(ListNode head) {
        ListNode curr = head;
        Stack<ListNode> stack = new Stack<>();
        while (curr != null) {
            stack.push(curr);
            curr = curr.next;
        }
        ListNode nxt = null;
        int carry = 0;

        while (!stack.isEmpty()) {
            curr = stack.pop();
            curr.next = nxt;
            nxt = curr;
            carry += curr.val * 2;
            curr.val = carry % 10;
            carry /= 10;
        }

        if (carry > 0) {
            curr = new ListNode(carry);
            curr.next = nxt;
        }

        return curr;
    }
}
```
``` cpp []
class Solution {
public:
    ListNode* doubleIt(ListNode* head) {
        stack<ListNode*> stack;
        ListNode* curr = head;
        while (curr != nullptr) {
            stack.push(curr);
            curr = curr->next;
        }

        ListNode* nxt = nullptr;
        int carry = 0;

        while (!stack.empty()) {
            curr = stack.top();
            stack.pop();
            curr->next = nxt;
            nxt = curr;
            carry += curr->val * 2;
            curr->val = carry % 10;
            carry /= 10;
        }

        if (carry > 0) {
            curr = new ListNode(carry);
            curr->next = nxt;
        }

        return curr;
    }
};
```
``` javascript []
var doubleIt = function(head) {
    let curr = head;
    const stack = [];
    while (curr !== null) {
        stack.push(curr);
        curr = curr.next;
    }

    let nxt = null;
    let carry = 0;

    while (stack.length > 0) {
        curr = stack.pop();
        curr.next = nxt;
        nxt = curr;
        carry += curr.val * 2;
        curr.val = carry % 10;
        carry = Math.floor(carry / 10);
    }

    if (carry > 0) {
        curr = new ListNode(carry);
        curr.next = nxt;
    }

    return curr;
}
```

---
# Method 3 - Reverse, Double, Reverse

## \uD83E\uDD14 Intuition:
If we reverse the linked list we can keep carry after doubling and add it in next node or make a new node and then reverse it again.
First the linked list is reversed to facilitate the doubling of each node's value. After the doubling operation, if there's a carry, a new node is appended to the end of the list to accommodate it. Finally, the list is reversed again to restore the original order.

## \uD83E\uDDE0 Approach:
1. Reverse the linked list to simplify the doubling operation. This involves traversing the list and reversing the pointers.
2. Traverse the reversed list and double each node's value while keeping track of any carry generated.
3. If there's a carry after traversing the list, append a new node with the carry value to the end of the list.
4. Reverse the modified list again to restore the original order.

## \u2699\uFE0F Dry Run:
**Input:** head = **1 -> 8 -> 9**
1. Reverse the list: **9 -> 8 -> 1**
2. Traverse the reversed list:
   - Double each node's value and handle carries:

| Node | Doubled Value| Carry | Updated Value|
|:----:|:----:|:----:|:----:|
|  9   | 9 * 2 = 18     |  1   |  8   |
|  8   | 8 * 2 + 1 = 17 |  1   |  7   |
|  1   | 1 * 2 + 1 = 3  |  0   |  3   |

3. Append a new node with value 1 to accommodate the carry: **8 -> 7 -> 3**
4. Reverse the list again to restore the original order: **3 -> 7 -> 8**


# \uD83D\uDCD2 Complexity:
- \u23F0 Time complexity: $$O(n)$$. 3 pass (Reverse + Iterate + Reverse)
- \uD83E\uDDFA Space complexity: $$O(n)$$, as the reversed list and potentially a new node are stored in memory.

## \uD83E\uDDD1\u200D\uD83D\uDCBB Code
``` python []
class Solution:
    def doubleIt(self, head: Optional[ListNode]) -> Optional[ListNode]:
        prev, curr = None, head

        while curr:
            curr.next, prev, curr = prev, curr, curr.next
        tail = prev

        curr = prev
        carry = 0
        while curr:
            current_double = curr.val * 2 + carry
            curr.val = current_double % 10
            carry = current_double // 10
            prev = curr
            curr = curr.next

        if carry > 0:
            prev.next = ListNode(carry)

        prev, curr = None, tail
        while curr:
            curr.next, prev, curr = prev, curr, curr.next

        return prev
```
``` java []
class Solution {
    public ListNode doubleIt(ListNode head) {
        ListNode prev = null, curr = head;

        while (curr != null) {
            ListNode nextNode = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextNode;
        }
        ListNode tail = prev;

        curr = prev;
        int carry = 0;
        while (curr != null) {
            int doubledValue = curr.val * 2 + carry;
            curr.val = doubledValue % 10;
            carry = doubledValue / 10;
            prev = curr;
            curr = curr.next;
        }
        if (carry > 0) {
            prev.next = new ListNode(carry);
        }

        prev = null;
        curr = tail;
        while (curr != null) {
            ListNode nextNode = curr.next;
            curr.next = prev;
            prev = curr;
            curr = nextNode;
        }

        return prev;
    }
}
```
``` cpp []
class Solution {
public:
    ListNode* doubleIt(ListNode* head) {
        ListNode* prev = nullptr;
        ListNode* curr = head;

        while (curr != nullptr) {
            ListNode* nextNode = curr->next;
            curr->next = prev;
            prev = curr;
            curr = nextNode;
        }
        ListNode* tail = prev;

        curr = prev;
        int carry = 0;
        while (curr != nullptr) {
            int doubledValue = curr->val * 2 + carry;
            curr->val = doubledValue % 10;
            carry = doubledValue / 10;
            prev = curr;
            curr = curr->next;
        }

        if (carry > 0) {
            prev->next = new ListNode(carry);
        }

        prev = nullptr;
        curr = tail;
        while (curr != nullptr) {
            ListNode* nextNode = curr->next;
            curr->next = prev;
            prev = curr;
            curr = nextNode;
        }

        return prev;
    }
};
```
``` javascript []
var doubleIt = function(head) {
    let prev = null, curr = head;

    while (curr !== null) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }
    let tail = prev;

    curr = prev;
    let carry = 0;
    while (curr !== null) {
        let doubledValue = curr.val * 2 + carry;
        curr.val = doubledValue % 10;
        carry = Math.floor(doubledValue / 10);
        prev = curr;
        curr = curr.next;
    }

    if (carry > 0) {
        prev.next = new ListNode(carry);
    }

    prev = null;
    curr = tail;
    while (curr !== null) {
        let nextNode = curr.next;
        curr.next = prev;
        prev = curr;
        curr = nextNode;
    }

    return prev;
};
```

---

# Method 4 - One Pointer - Math (Best)

## \uD83E\uDD14 Intuition:
- When do we actually get carry?
    - If a digit falls within the range [5, 9], doubling it will yield a range of [10, 19], which implies a **carry**. 
    - Conversely, if a digit falls within the range [0, 4], doubling it will result in a range of [0, 9], eliminating the possibility of a carry, **no carry**.
- We can traverse the linked list from head to tail, doubling each digit and adding `1`(carry) if next is greater than 4. First check if head is greater than 4 , if yes handle carry by adding a new node before head as new head.

## \uD83E\uDDE0 Approach:
1. If the value of the head node is greater than 4 (indicating a carry), prepend a new node with value 0 to the list.
2. Traverse the linked list and double each digit. If a node's value is greater than 4 and it has a next node, increment the next node's value by 1.
3. Return the head of the modified linked list.

## \uD83D\uDCD2 Complexity:
- \u23F0 Time complexity: $$O(n)$$, where n is the number of nodes in the linked list.
- \uD83E\uDDFA Space complexity: $$O(1)$$, as no extra space is used apart from a few pointers.

## \uD83E\uDDD1\u200D\uD83D\uDCBB Code
```python []
class Solution:
    def doubleIt(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if head.val > 4:
            head = ListNode(0, head)
        curr = head
        while curr:
            curr.val = (curr.val * 2) % 10
            if curr.next and curr.next.val > 4:
                curr.val += 1
            curr = curr.next
        return head
```
``` java []
class Solution {
    public ListNode doubleIt(ListNode head) {
        if (head.val > 4) {
            head = new ListNode(0, head);
        }
        ListNode curr = head;
        while (curr != null) {
            curr.val = (curr.val * 2) % 10;
            if (curr.next != null && curr.next.val > 4) {
                curr.val += 1;
            }
            curr = curr.next;
        }
        return head;
    }
}
```
``` cpp []
class Solution {
public:
    ListNode* doubleIt(ListNode* head) {
        if (head->val > 4) {
            head = new ListNode(0, head);
        }
        ListNode* curr = head;
        while (curr != nullptr) {
            curr->val = (curr->val * 2) % 10;
            if (curr->next != nullptr && curr->next->val > 4) {
                curr->val += 1;
            }
            curr = curr->next;
        }
        return head;
    }
};
```
``` javascript []
var doubleIt = function(head) {
    if (head.val > 4) {
        head = new ListNode(0, head);
    }
    let curr = head;
    while (curr !== null) {
        curr.val = (curr.val * 2) % 10;
        if (curr.next !== null && curr.next.val > 4) {
            curr.val += 1;
        }
        curr = curr.next;
    }
    return head;
};
```
---
# Please consider giving an Upvote!
![upvote.png](./images/0.png)
