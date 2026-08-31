# 💯Faster✅💯Less Mem✅4 Methods🧠Detailed Approach🎯🔥Reversing🔥Stack🔥Recursion🔥2Ptr🔥Python🐍Java☕

**Author:** Mohammed_Raziullah_Ansari
**Votes:** 116
**Link:** [https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/solutions/5123064/](https://leetcode.com/problems/double-a-number-represented-as-a-linked-list/solutions/5123064/)

---

# \uD83D\uDE80 Hi, I'm [Mohammed Raziullah Ansari](https://leetcode.com/Mohammed_Raziullah_Ansari/), and I'm excited to share 4 ways to solve this question with detailed explanation of each approach:

# \uD83C\uDFAFProblem Explaination: 
You're given a linked list where each node represents a digit of a non-negative integer. For instance, if the linked list is 1 -> 2 -> 3, it represents the number 123. Your task is to double this number and represent the result as a linked list.

### \uD83D\uDCE5Input:
The input consists of a linked list where each node contains a single digit from 0 to 9. The linked list is non-empty and does not contain any leading zeroes.

### \uD83D\uDCE4Output:
The output should be the head of the modified linked list after doubling the number it represents. The resulting linked list should also not have any leading zeroes.

# \uD83D\uDD0D Methods To Solve This Problem:
I'll be covering four different methods to solve this problem:
1. Reversing the List
2. Using Stack
3. Recursion
4. Two Pointers

# 1\uFE0F\u20E3Reversing the List\uD83E\uDD13: 
**\uD83E\uDDE0Intuition:**
The problem requires us to double the value represented by a given non-empty linked list without leading zeroes. To achieve this, we can reverse the linked list to simplify the doubling process. Once reversed, we traverse the list, doubling each node's value while keeping track of any carry generated. After the traversal, if there's still a carry, we append a new node to the list. Finally, we reverse the list again to restore its original order and return the result.

**\uD83D\uDCDADetailed Approach:**
1. **Reverse the Linked List:** The first step is to reverse the given linked list. Reversing the list simplifies the doubling process as it allows us to traverse the list from the least significant digit to the most significant digit.

2. **Traverse the Reversed List:** Traverse the reversed linked list while maintaining two pointers - `current` and `previous`. Start with `current` pointing to the head of the reversed list and `previous` initialized to None.

3. **Double the Node Values:** While traversing the list, double the value of each node and add any carry generated from the previous node.

4. **Update Node Values and Carry:** Calculate the new value for the current node by doubling its value and adding any carry from the previous node. Update the value of the current node with the new value modulo 10 (to handle cases where the doubled value exceeds 9). Update the carry for the next iteration.

5. **Handle Carry:** If there's still a carry after traversing the entire list, append a new node with the carry value to the end of the list.

6. **Reverse the List Again:** Once all nodes are processed, reverse the list again to restore its original order.

7. **Return the Result:** Return the head of the reversed and doubled linked list.


<!-- # Complexity
* \u23F1\uFE0F Time Complexity: `O(nlogn)` for summing up the array.

* \uD83D\uDE80 Space Complexity: `O(1)`  -->

# Code\uD83D\uDC68\uD83C\uDFFB\u200D\uD83D\uDCBB:
```Python []
class Solution:
    def doubleIt(self, head: ListNode) -> ListNode:
        # Reverse the linked list
        reversed_list = self.reverse_list(head)
        # Initialize variables to track carry and previous node
        carry = 0
        current, previous = reversed_list, None

        # Traverse the reversed linked list
        while current:
            # Calculate the new value for the current node
            new_value = current.val * 2 + carry
            # Update the current node's value
            current.val = new_value % 10
            # Update carry for the next iteration
            carry = 1 if new_value > 9 else 0
            # Move to the next node
            previous, current = current, current.next

        # If there's a carry after the loop, add an extra node
        if carry:
            previous.next = ListNode(carry)

        # Reverse the list again to get the original order
        result = self.reverse_list(reversed_list)

        return result

    # Method to reverse the linked list
    def reverse_list(self, node: ListNode) -> ListNode:
        previous, current = None, node

        # Traverse the original linked list
        while current:
            # Store the next node
            next_node = current.next
            # Reverse the link
            current.next = previous
            # Move to the next nodes
            previous, current = current, next_node

        # Previous becomes the new head of the reversed list
        return previous
```
```Java []
public class Solution {
    public ListNode doubleIt(ListNode head) {
        // Reverse the linked list
        ListNode reversedList = reverseList(head);
        // Initialize variables to track carry and previous node
        int carry = 0;
        ListNode current = reversedList, previous = null;

        // Traverse the reversed linked list
        while (current != null) {
            // Calculate the new value for the current node
            int newValue = current.val * 2 + carry;
            // Update the current node's value
            current.val = newValue % 10;
            // Update carry for the next iteration
            if (newValue > 9) {
                carry = 1;
            } else {
                carry = 0;
            }
            // Move to the next node
            previous = current;
            current = current.next;
        }

        // If there's a carry after the loop, add an extra node
        if (carry != 0) {
            ListNode extraNode = new ListNode(carry);
            previous.next = extraNode;
        }

        // Reverse the list again to get the original order
        ListNode result = reverseList(reversedList);

        return result;
    }

    // Method to reverse the linked list
    public ListNode reverseList(ListNode node) {
        ListNode previous = null, current = node, nextNode;

        // Traverse the original linked list
        while (current != null) {
            // Store the next node
            nextNode = current.next;
            // Reverse the link
            current.next = previous;
            // Move to the next nodes
            previous = current;
            current = nextNode;
        }
        // Previous becomes the new head of the reversed list
        return previous;
    }
}
```
```C++ []
class Solution {
public:
    ListNode* doubleIt(ListNode* head) {
        // Reverse the linked list
        ListNode* reversedList = reverseList(head);
        // Initialize variables to track carry and previous node
        int carry = 0;
        ListNode* current = reversedList, *previous = nullptr;

        // Traverse the reversed linked list
        while (current != nullptr) {
            // Calculate the new value for the current node
            int newValue = current->val * 2 + carry;
            // Update the current node's value
            current->val = newValue % 10;
            // Update carry for the next iteration
            if (newValue > 9) {
                carry = 1;
            } else {
                carry = 0;
            }
            // Move to the next node
            previous = current;
            current = current->next;
        }

        // If there's a carry after the loop, add an extra node
        if (carry != 0) {
            ListNode* extraNode = new ListNode(carry);
            previous->next = extraNode;
        }

        // Reverse the list again to get the original order
        ListNode* result = reverseList(reversedList);

        return result;
    }

    // Method to reverse the linked list
    ListNode* reverseList(ListNode* node) {
        ListNode* previous = nullptr, *current = node, *nextNode;

        // Traverse the original linked list
        while (current != nullptr) {
            // Store the next node
            nextNode = current->next;
            // Reverse the link
            current->next = previous;
            // Move to the next nodes
            previous = current;
            current = nextNode;
        }
        // Previous becomes the new head of the reversed list
        return previous;
    }
};
```
#  2\uFE0F\u20E3Using Stack\uD83D\uDE0E:
### \uD83E\uDDE0Intuition:
This approach utilizes a stack to store the values of the linked list in reverse order, allowing us to process the digits from least significant to most significant. After storing the values, it iterates over them while maintaining a carry, doubling each digit and updating the carry as necessary. It then constructs a new linked list by creating nodes with the calculated values, effectively doubling the original number represented by the linked list.

### \uD83D\uDCDADetailed Approach:
1. **Initialize Stack and Variables:** Begin by initializing an empty stack (`values`) to store the values of the linked list in reverse order. Also, initialize a variable `val` to track the carryover during doubling.

2. **Traverse Linked List and Push Values onto Stack:** Traverse the original linked list, pushing each node's value onto the stack. This step effectively reverses the order of the values in the linked list.

3. **Initialize New Tail Pointer:** Initialize a pointer `new_tail` to `None`, which will be used to construct the new linked list.

4. **Process Values and Carryover:**
   - Iterate over the stack (`values`) and the carryover (`val`).
   - Inside the loop, create a new ListNode with value 0 and the previous tail (`new_tail`) as its next node. This step effectively builds the new linked list in reverse order.
   - Calculate the new value for the current node by doubling the last digit, adding the carry (`val`), and getting the remainder after division by 10. Update `val` accordingly for the next iteration.
   - If there are no more values in the stack but there's still a carryover, continue processing it until it becomes zero.

5. **Return New Tail of Linked List:** Once all nodes are processed and the carryover is resolved, return the `new_tail`, which represents the head of the newly constructed linked list.

<!-- # Complexity
* \u23F1\uFE0F Time Complexity: `O(n)` - for summing up the array.

* \uD83D\uDE80 Space Complexity: `O(1)` -->

# Code\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB:
```Python []
class Solution:
    def doubleIt(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # Initialize an empty list to store the values of the linked list
        values = []
        val = 0

        # Traverse the linked list and push its values onto the list
        while head is not None:
            values.append(head.val)
            head = head.next

        new_tail = None

        # Iterate over the list of values and the carryover
        while values or val != 0:
            # Create a new ListNode with value 0 and the previous tail as its next node
            new_tail = ListNode(0, new_tail)

            # Calculate the new value for the current node
            # by doubling the last digit, adding carry, and getting the remainder
            if values:
                val += values.pop() * 2
            new_tail.val = val % 10
            val //= 10

        # Return the tail of the new linked list
        return new_tail
```
```Java []
public class Solution {
    public ListNode doubleIt(ListNode head) {
        // Initialize a stack to store the values of the linked list
        Stack<Integer> values = new Stack<>();
        int val = 0;

        // Traverse the linked list and push its values onto the stack
        while (head != null) {
            values.push(head.val);
            head = head.next;
        }

        ListNode newTail = null;

        // Iterate over the stack of values and the carryover
        while (!values.isEmpty() || val != 0) {
            // Create a new ListNode with value 0 and the previous tail as its next node
            newTail = new ListNode(0, newTail);

            // Calculate the new value for the current node
            // by doubling the last digit, adding carry, and getting the remainder
            if (!values.isEmpty()) {
                val += values.pop() * 2;
            }
            newTail.val = val % 10;
            val /= 10;
        }

        // Return the tail of the new linked list
        return newTail;
    }
}

```
```C++ []
class Solution {
public:
    ListNode* doubleIt(ListNode* head) {
        // Initialize a stack to store the values of the linked list
        stack<int> values;
        int val = 0;

        // Traverse the linked list and push its values onto the stack
        while (head != nullptr) {
            values.push(head->val);
            head = head->next;
        }

        ListNode* newTail = nullptr;

        // Iterate over the stack of values and the carryover
        while (!values.empty() || val != 0) {
            // Create a new ListNode with value 0 and the previous tail as its next node
            newTail = new ListNode(0, newTail);
            
            // Calculate the new value for the current node
            // by doubling the last digit, adding carry, and getting the remainder
            if (!values.empty()) {
                val += values.top() * 2;
                values.pop();
            }
            newTail->val = val % 10;
            val /= 10;
        }

        // Return the tail of the new linked list
        return newTail;
    }
};
```
# 3\uFE0F\u20E3Recursion\uD83D\uDE0E:
### \uD83E\uDDE0Intuition:
This recursive approach processes each node of the linked list, doubling its value and propagating any carry generated to the next node. It starts from the least significant digit (the tail of the linked list) and recurses towards the most significant digit (the head of the linked list). After processing all nodes, if there's a carry, it inserts a new node at the beginning of the linked list to accommodate the carry. Finally, it returns the head of the updated linked list.

### \uD83D\uDCDADetailed Approach:
1. **twice_of_val Function:**
   - This function computes twice the value of each node's value and propagates any carry generated to the next node.
   - It takes the head of the current linked list as input.
   - **Base Case:** If the head is None, indicating the end of the linked list, return 0.
   - Recursively call `twice_of_val` on the next node to compute the doubled value of the remaining linked list.
   - Double the value of the current node (`head.val`) and add it to the result of the next nodes.
   - Update the current node's value with the units digit of the result (`doubled_value % 10`).
   - Return the carry, which is the tens digit of the result (`doubled_value // 10`).

2. **doubleIt Function:**
   - This function initializes the recursion by calling `twice_of_val` on the head of the linked list.
   - It takes the head of the linked list as input.
   - Compute the carry by calling `twice_of_val` on the head.
   - If there's a carry, insert a new node at the beginning of the linked list with the carry value and update the head.
   - Return the head of the updated linked list.


<!-- # Complexity
* \u23F1\uFE0F Time Complexity: `O(n)` - for XORing all the numbers

* \uD83D\uDE80 Space Complexity: `O(1)` -->

# Code\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB:
```Python []
class Solution:
    # To compute twice the value of each node's value and propagate carry
    def twice_of_val(self, head: Optional[ListNode]) -> int:
        # Base case: if head is None, return 0
        if not head:
            return 0
        
        # Double the value of current node and add the result of next nodes
        doubled_value = head.val * 2 + self.twice_of_val(head.next)
        
        # Update current node's value with the units digit of the result
        head.val = doubled_value % 10
        
        # Return the carry (tens digit of the result)
        return doubled_value // 10
    
    def doubleIt(self, head: Optional[ListNode]) -> Optional[ListNode]:
        carry = self.twice_of_val(head)
        
        # If there's a carry, insert a new node at the beginning with the carry value
        if carry:
            head = ListNode(carry, head)
        
        # Return the head of the updated linked list
        return head
```
```Java []
public class Solution {
    // To compute twice the value of each node's value and propagate carry
    public int twiceOfVal(ListNode head) {
        // Base case: if head is null, return 0
        if (head == null) return 0;
        
        // Double the value of current node and add the result of next nodes
        int doubledValue = head.val * 2 + twiceOfVal(head.next);
        
        // Update current node's value with the units digit of the result
        head.val = doubledValue % 10;
        
        // Return the carry (tens digit of the result)
        return doubledValue / 10;
    }
    
    public ListNode doubleIt(ListNode head) {
        int carry = twiceOfVal(head);
        
        // If there's a carry, insert a new node at the beginning with the carry value
        if (carry != 0) {
            head = new ListNode(carry, head);
        }
        
        return head;
    }
}

```
```C++ []
class Solution {
public:
    // To compute twice the value of each node's value and propagate carry
    int twiceOfVal(ListNode* head){
        // Base case: if head is null, return 0
        if (!head) return 0;
        
        // Double the value of current node and add the result of next nodes
        int doubledValue = head->val * 2 + twiceOfVal(head->next);
        
        // Update current node's value with the units digit of the result
        head->val = doubledValue % 10;
        
        // Return the carry (tens digit of the result)
        return doubledValue / 10;
    }
    
    ListNode* doubleIt(ListNode* head) {
        int carry = twiceOfVal(head);
        
        // If there's a carry, insert a new node at the beginning with the carry value
        if (carry) 
            head = new ListNode(carry, head);
        
        return head;
    }
};
```
# 4\uFE0F\u20E3Two Pointers:
### \uD83E\uDDE0Intuition:
This approach traverses the linked list using two pointers, `curr` and `prev`, to keep track of the current and previous nodes, respectively. During traversal, it doubles the value of each node and handles any carry generated. If the doubled value of a node is less than 10, it updates the node's value accordingly. If the doubled value is 10 or greater, it distributes the carry to the previous node's value. If the first node requires a carry, it adds a new node with the carry as its value and links it to the current node. Finally, it returns the head of the modified linked list.

### \uD83D\uDCDADetailed Approach:
1. **Initialize Pointers:** Initialize `curr` to point to the head of the linked list and `prev` to `None`.

2. **Traverse the Linked List:**
   - Start traversing the linked list using the `curr` pointer.
   - While traversing:
     - Calculate the doubled value of the current node's value (`twice_of_val`).
     - Check if the doubled value is less than 10.
       - If yes, update the current node's value to `twice_of_val`.
     - If the doubled value is 10 or greater:
       - Check if `prev` is not None (i.e., the current node is not the first node).
         - If yes:
           - Update the current node's value with the units digit of `twice_of_val`.
           - Add 1 to the value of the previous node to handle the carry.
       - If `prev` is None (i.e., the current node is the first node):
         - Create a new node with the carry (1) as its value and link it to the current node.
         - Update the current node's value with the units digit of `twice_of_val`.
   
3. **Update Pointers:**
   - Update `prev` to point to the current node (`prev = curr`).
   - Move `curr` to the next node (`curr = curr.next`).

4. **Return Modified Linked List:** After traversing the entire linked list, return the head of the modified linked list (`head`).

<!-- # Complexity
* \u23F1\uFE0F Time Complexity: `O(n)` for iterating over the array and the sequence.

* \uD83D\uDE80 Space Complexity: `O(n)` for the hash table. -->

# Code\uD83D\uDC69\uD83C\uDFFB\u200D\uD83D\uDCBB:
```Python []
class Solution:
    def doubleIt(self, head: ListNode) -> ListNode:
        curr = head
        prev = None

        # Traverse the linked list
        while curr:
            twice_of_val = curr.val * 2

            # If the doubled value is less than 10
            if twice_of_val < 10:
                curr.val = twice_of_val
            # If doubled value is 10 or greater
            elif prev:  # other than first node
                # Update current node's value with units digit of the doubled value
                curr.val = twice_of_val % 10
                # Add the carry to the previous node's value
                prev.val += 1
            else:  # first node
                # Create a new node with carry as value and link it to the current node
                head = ListNode(1, curr)
                # Update current node's value with units digit of the doubled value
                curr.val = twice_of_val % 10

            # Update prev and curr pointers
            prev = curr
            curr = curr.next

        return head

```
```Java []
public class Solution {
    public ListNode doubleIt(ListNode head) {
        ListNode curr = head;
        ListNode prev = null;

        // Traverse the linked list
        while (curr != null) {
            int twiceOfVal = curr.val * 2;

            // If the doubled value is less than 10
            if (twiceOfVal < 10) {
                curr.val = twiceOfVal;
            } 
            // If doubled value is 10 or greater
            else if (prev != null) { // other than first node
                // Update current node's value with units digit of the doubled value
                curr.val = twiceOfVal % 10;
                // Add the carry to the previous node's value
                prev.val = prev.val + 1;
            } 
            // If it's the first node and doubled value is 10 or greater
            else { // first node
                // Create a new node with carry as value and link it to the current node
                head = new ListNode(1, curr);
                // Update current node's value with units digit of the doubled value
                curr.val = twiceOfVal % 10;
            }

            // Update prev and curr pointers
            prev = curr;
            curr = curr.next;
        }
        return head;
    }
}
```
```C++ []
class Solution {
public:
    ListNode* doubleIt(ListNode* head) {
        ListNode* curr = head;
        ListNode* prev = nullptr;

        // Traverse the linked list
        while (curr != nullptr) {
            int twiceOfVal = curr->val * 2;

            // If the doubled value is less than 10
            if (twiceOfVal < 10) {
                curr->val = twiceOfVal;
            } 

            // If doubled value is 10 or greater
            else if (prev != nullptr) { // other than first node
                // Update current node's value with units digit of the doubled value
                curr->val = twiceOfVal % 10;
                // Add the carry to the previous node's value
                prev->val = prev->val + 1;
            } 
            // If it's the first node and doubled value is 10 or greater
            else { // first node
                // Create a new node with carry as value and link it to the current node
                head = new ListNode(1, curr);
                // Update current node's value with units digit of the doubled value
                curr->val = twiceOfVal % 10;
            }

            // Update prev and curr pointers
            prev = curr;
            curr = curr->next;
        }
        return head;
    }
};
```

# \uD83D\uDCA1 I invite you to check out [my profile](https://leetcode.com/Mohammed_Raziullah_Ansari/) for detailed explanations and code for each method. Happy coding and learning! \uD83D\uDCDA