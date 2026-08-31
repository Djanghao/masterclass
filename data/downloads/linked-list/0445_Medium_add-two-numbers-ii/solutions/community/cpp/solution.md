# ✅Beat's 100% || 2 Method's || C++ || JAVA || PYTHON || Beginner Friendly🔥🔥🔥

**Author:** rahulvarma5297
**Votes:** 93
**Link:** [https://leetcode.com/problems/add-two-numbers-ii/solutions/3776021/](https://leetcode.com/problems/add-two-numbers-ii/solutions/3776021/)

---

# Intuition:
The stack-based approach for adding two numbers represented by linked lists involves using stacks to process the digits in reverse order. By pushing the digits of the linked lists onto separate stacks, we can simulate iterating through the numbers from the least significant digit to the most significant digit. We perform digit-wise addition, considering any carry-over, and construct a new linked list to represent the sum. This process continues until both input lists and the carry value are exhausted, resulting in a linked list that represents the sum of the input numbers in the correct order.

# Approach 1: (Reverse LL):
# Explanation:
[2. Add Two Numbers](https://leetcode.com/problems/add-two-numbers/solutions/3675747/beats-100-c-java-python-beginner-friendly/)
[206. Reverse Linked List](https://leetcode.com/problems/reverse-linked-list/solutions/3620367/best-method-100-c-java-python-beginner-friendly/)

# Code
```C++ []
class Solution {
public:
    ListNode* reverseList(ListNode* head) {
        ListNode* prev = NULL;

        while(head) {
            ListNode* nxt = head->next;
            head->next = prev;
            prev = head;
            head = nxt;
        }
        return prev;
    }

    ListNode* Helper(ListNode* l1, ListNode* l2) {
        ListNode* dummyHead = new ListNode(0);
        ListNode* tail = dummyHead;
        int carry = 0;

        while (l1 != nullptr || l2 != nullptr || carry != 0) {
            int digit1 = (l1 != nullptr) ? l1->val : 0;
            int digit2 = (l2 != nullptr) ? l2->val : 0;

            int sum = digit1 + digit2 + carry;
            int digit = sum % 10;
            carry = sum / 10;

            ListNode* newNode = new ListNode(digit);
            tail->next = newNode;
            tail = tail->next;

            l1 = (l1 != nullptr) ? l1->next : nullptr;
            l2 = (l2 != nullptr) ? l2->next : nullptr;
        }

        ListNode* result = dummyHead->next;
        delete dummyHead;
        return result;
    }

    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        l1 = reverseList(l1);
        l2 = reverseList(l2);
        ListNode* ans = Helper(l1, l2);
        return reverseList(ans);
    }
};
```
```Java []
class Solution {
    public ListNode reverseList(ListNode head) {
        ListNode prev = null;
        ListNode curr = head;

        while (curr != null) {
            ListNode next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        
        return prev;
    }

    public ListNode helper(ListNode l1, ListNode l2) {
        ListNode dummyHead = new ListNode(0);
        ListNode tail = dummyHead;
        int carry = 0;

        while (l1 != null || l2 != null || carry != 0) {
            int digit1 = (l1 != null) ? l1.val : 0;
            int digit2 = (l2 != null) ? l2.val : 0;

            int sum = digit1 + digit2 + carry;
            int digit = sum % 10;
            carry = sum / 10;

            ListNode newNode = new ListNode(digit);
            tail.next = newNode;
            tail = tail.next;

            l1 = (l1 != null) ? l1.next : null;
            l2 = (l2 != null) ? l2.next : null;
        }

        ListNode result = dummyHead.next;
        return result;
    }

    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        l1 = reverseList(l1);
        l2 = reverseList(l2);
        ListNode ans = helper(l1, l2);
        return reverseList(ans);
    }
}
```
```Python3 []
class Solution:
    def reverseList(self, head: ListNode) -> ListNode:
        prev = None
        curr = head

        while curr:
            nxt = curr.next
            curr.next = prev
            prev = curr
            curr = nxt
        
        return prev

    def helper(self, l1: ListNode, l2: ListNode) -> ListNode:
        dummyHead = ListNode(0)
        tail = dummyHead
        carry = 0

        while l1 or l2 or carry:
            digit1 = l1.val if l1 else 0
            digit2 = l2.val if l2 else 0

            total = digit1 + digit2 + carry
            digit = total % 10
            carry = total // 10

            newNode = ListNode(digit)
            tail.next = newNode
            tail = tail.next

            l1 = l1.next if l1 else None
            l2 = l2.next if l2 else None

        result = dummyHead.next
        return result

    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        l1 = self.reverseList(l1)
        l2 = self.reverseList(l2)
        ans = self.helper(l1, l2)
        return self.reverseList(ans)
```

# Approach 2: (Using Stack)

# Code
```C++ []
class Solution {
public:
    ListNode* Helper(ListNode* l1, ListNode* l2) {
        stack<int> stack1, stack2;

        while (l1 != nullptr) {
            stack1.push(l1->val);
            l1 = l1->next;
        }

        while (l2 != nullptr) {
            stack2.push(l2->val);
            l2 = l2->next;
        }

        ListNode* result = nullptr;
        int carry = 0;

        while (!stack1.empty() || !stack2.empty() || carry != 0) {
            int digit1 = !stack1.empty() ? stack1.top() : 0;
            int digit2 = !stack2.empty() ? stack2.top() : 0;

            int sum = digit1 + digit2 + carry;
            int digit = sum % 10;
            carry = sum / 10;

            ListNode* newNode = new ListNode(digit);
            newNode->next = result;
            result = newNode;

            if (!stack1.empty())
                stack1.pop();
            if (!stack2.empty())
                stack2.pop();
        }

        return result;
    }

    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
        ListNode* ans = Helper(l1, l2);
        return ans;
    }
};
```
```Java []
import java.util.Stack;

class Solution {
    public ListNode helper(ListNode l1, ListNode l2) {
        Stack<Integer> stack1 = new Stack<>();
        Stack<Integer> stack2 = new Stack<>();

        while (l1 != null) {
            stack1.push(l1.val);
            l1 = l1.next;
        }

        while (l2 != null) {
            stack2.push(l2.val);
            l2 = l2.next;
        }

        ListNode result = null;
        int carry = 0;

        while (!stack1.empty() || !stack2.empty() || carry != 0) {
            int digit1 = !stack1.empty() ? stack1.pop() : 0;
            int digit2 = !stack2.empty() ? stack2.pop() : 0;

            int sum = digit1 + digit2 + carry;
            int digit = sum % 10;
            carry = sum / 10;

            ListNode newNode = new ListNode(digit);
            newNode.next = result;
            result = newNode;
        }

        return result;
    }

    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
        ListNode ans = helper(l1, l2);
        return ans;
    }
}
```
```Python3 []
class Solution:
    def helper(self, l1: ListNode, l2: ListNode) -> ListNode:
        stack1 = []
        stack2 = []

        while l1:
            stack1.append(l1.val)
            l1 = l1.next

        while l2:
            stack2.append(l2.val)
            l2 = l2.next

        result = None
        carry = 0

        while stack1 or stack2 or carry:
            digit1 = stack1.pop() if stack1 else 0
            digit2 = stack2.pop() if stack2 else 0

            total = digit1 + digit2 + carry
            digit = total % 10
            carry = total // 10

            newNode = ListNode(digit)
            newNode.next = result
            result = newNode

        return result

    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        ans = self.helper(l1, l2)
        return ans
```

**If you found my solution helpful, I would greatly appreciate your upvote, as it would motivate me to continue sharing more solutions.**

