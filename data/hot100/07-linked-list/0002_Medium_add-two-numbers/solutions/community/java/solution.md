# ✅Beats 100% || C++ || JAVA || PYTHON || Beginner Friendly🔥🔥🔥

**Author:** rahulvarma5297
**Votes:** 2292
**Link:** [https://leetcode.com/problems/add-two-numbers/solutions/3675747/](https://leetcode.com/problems/add-two-numbers/solutions/3675747/)

---

# Intuition:
The Intuition is to iterate through two linked lists representing non-negative integers in reverse order, starting from the least significant digit. It performs digit-wise addition along with a carry value and constructs a new linked list to represent the sum. The process continues until both input lists and the carry value are exhausted. The resulting linked list represents the sum of the input numbers in the correct order.

# Explanation: 
1. Create a placeholder node called `dummyHead` with a value of 0. This node will hold the resulting linked list.
2. Initialize a pointer called `tail` and set it to `dummyHead`. This pointer will keep track of the last node in the result list.
3. Initialize a variable called `carry` to 0. This variable will store the carry value during addition.
4. Start a loop that continues until there are no more digits in both input lists (`l1` and `l2`) and there is no remaining carry value.
5. Inside the loop:
   - Check if there is a digit in the current node of `l1`. If it exists, assign its value to a variable called `digit1`. Otherwise, set `digit1` to 0.
   - Check if there is a digit in the current node of `l2`. If it exists, assign its value to a variable called `digit2`. Otherwise, set `digit2` to 0.
   - Add the current digits from `l1` and `l2`, along with the carry value from the previous iteration, and store the sum in a variable called `sum`.
   - Calculate the unit digit of `sum` by taking the modulus (`%`) of `sum` by 10. This digit will be placed in a new node for the result.
   - Update the `carry` variable by dividing `sum` by 10 and taking the integer division (`/`) part. This gives us the carry value for the next iteration.
   - Create a new node with the calculated digit as its value.
   - Attach the new node to the `tail` node of the result list.
   - Move the `tail` pointer to the newly added node.
   - Move to the next nodes in both `l1` and `l2`, if they exist. If either list is exhausted, set the corresponding pointer to `nullptr`.
6. After the loop, obtain the actual result list by skipping the `dummyHead` node.
7. Delete the `dummyHead` node.
8. Return the resulting list.

# Code
```C++ []
class Solution {
public:
    ListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {
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
};
```
```Java []
class Solution {
    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {
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
        dummyHead.next = null;
        return result;
    }
}
```
```Python3 []
class Solution:
    def addTwoNumbers(self, l1: ListNode, l2: ListNode) -> ListNode:
        dummyHead = ListNode(0)
        tail = dummyHead
        carry = 0

        while l1 is not None or l2 is not None or carry != 0:
            digit1 = l1.val if l1 is not None else 0
            digit2 = l2.val if l2 is not None else 0

            sum = digit1 + digit2 + carry
            digit = sum % 10
            carry = sum // 10

            newNode = ListNode(digit)
            tail.next = newNode
            tail = tail.next

            l1 = l1.next if l1 is not None else None
            l2 = l2.next if l2 is not None else None

        result = dummyHead.next
        dummyHead.next = None
        return result
```

![CUTE_CAT.png](./images/0.png)

**If you are a beginner solve these problems which makes concepts clear for future coding:**
1. [Two Sum](https://leetcode.com/problems/two-sum/solutions/3619262/3-method-s-c-java-python-beginner-friendly/)
2. [Roman to Integer](https://leetcode.com/problems/roman-to-integer/solutions/3651672/best-method-c-java-python-beginner-friendly/)
3. [Palindrome Number](https://leetcode.com/problems/palindrome-number/solutions/3651712/2-method-s-c-java-python-beginner-friendly/)
4. [Maximum Subarray](https://leetcode.com/problems/maximum-subarray/solutions/3666304/beats-100-c-java-python-beginner-friendly/)
5. [Remove Element](https://leetcode.com/problems/remove-element/solutions/3670940/best-100-c-java-python-beginner-friendly/)
6. [Contains Duplicate](https://leetcode.com/problems/contains-duplicate/solutions/3672475/4-method-s-c-java-python-beginner-friendly/)
7. [Add Two Numbers](https://leetcode.com/problems/add-two-numbers/solutions/3675747/beats-100-c-java-python-beginner-friendly/)
8. [Majority Element](https://leetcode.com/problems/majority-element/solutions/3676530/3-methods-beats-100-c-java-python-beginner-friendly/)
9. [Remove Duplicates from Sorted Array](https://leetcode.com/problems/remove-duplicates-from-sorted-array/solutions/3676877/best-method-100-c-java-python-beginner-friendly/)
10. **Practice them in a row for better understanding and please Upvote the post for more questions.**


**If you found my solution helpful, I would greatly appreciate your upvote, as it would motivate me to continue sharing more solutions.**