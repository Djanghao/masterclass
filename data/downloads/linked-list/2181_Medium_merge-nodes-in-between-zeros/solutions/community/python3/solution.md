# 💯✅🔥Detailed Easy Java ,Python3 ,C++ Solution|| 4 ms ||≧◠‿◠≦✌

**Author:** suyalneeraj09
**Votes:** 25
**Link:** [https://leetcode.com/problems/merge-nodes-in-between-zeros/solutions/5412432/](https://leetcode.com/problems/merge-nodes-in-between-zeros/solutions/5412432/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The intuition behind this approach is to use the first node between two zeros as a marker to store the sum of all the nodes between them. By recursively calling the mergeNodes function on the remaining part of the list, we can calculate the sum of all the nodes between the next two zeros and assign it to the corresponding marker node.

---
# Approach
<!-- Describe your approach to solving the problem. -->
The approach is to traverse the linked list and calculate the sum of all the nodes between two consecutive zeros. The sum is then assigned to the first node between the two zeros, and the process is repeated recursively until the end of the list is reached.

---
# Complexity
- Time complexity:O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
---
- Space complexity:O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
---
# Step by Step Explanation
Sure! Let's go through the step-by-step explanation of merging the nodes in the list [0, 3, 1, 0, 4, 5, 2, 0] using the `mergeNodes` function.

1. Initial state:
   ```
   0 -> 3 -> 1 -> 0 -> 4 -> 5 -> 2 -> 0
   ```

2. Recursive call: `mergeNodes(head)`
   - Base case: `head.next` is not null, so we proceed to the next step.

3. Fetch sum from current 0 to next 0:
   - `ptr` is initialized to `head.next`, pointing to the first node after the first zero.
   - `sum` is initialized to 0.
   - We traverse the list using `ptr` until we reach the next zero.
     - `ptr` points to 3, `sum` is updated to 3.
     - `ptr` points to 1, `sum` is updated to 4.
     - `ptr` points to 0, we stop the loop since we found the next zero.

4. Assign sum on the first node between nodes having value 0:
   - We assign the value of `sum` (4) to the first node between the two zeros (the node with value 3).
   - The list now looks like: `0 -> 4 -> 1 -> 0 -> 4 -> 5 -> 2 -> 0`

5. Recursive call: `mergeNodes(ptr)`
   - We recursively call `mergeNodes` with `ptr` pointing to the next zero (0).

6. Fetch sum from current 0 to next 0:
   - `ptr` is initialized to `head.next`, pointing to the first node after the second zero.
   - `sum` is initialized to 0.
   - We traverse the list using `ptr` until we reach the next zero.
     - `ptr` points to 4, `sum` is updated to 4.
     - `ptr` points to 5, `sum` is updated to 9.
     - `ptr` points to 2, `sum` is updated to 11.
     - `ptr` points to 0, we stop the loop since we found the next zero.

7. Assign sum on the first node between nodes having value 0:
   - We assign the value of `sum` (11) to the first node between the two zeros (the node with value 4).
   - The list now looks like: `0 -> 4 -> 1 -> 0 -> 11 -> 0`

8. Recursive call: `mergeNodes(ptr)`
   - We recursively call `mergeNodes` with `ptr` pointing to the next zero (0).

9. Base case: `head.next` is null, so we return `nullptr` (or `None` in Python).

10. Return the modified list:
    - The final modified list is: `0 -> 4 -> 1 -> 0 -> 11 -> 0`

The `mergeNodes` function returns the modified list starting from the second node, which becomes the new head of the list.

---

# Code
```java []
class Solution {
    public ListNode mergeNodes(ListNode head) {
        // BASE CASE -> if we have a single zero, simply return null
        if (head.next == null) return null;
        
        // fetch sum from current 0 to next 0
        ListNode ptr = head.next;
        int sum = 0;
        while (ptr.val != 0) {
            sum += ptr.val;
            ptr = ptr.next;
        }
        
        // assign sum on the first node between nodes having value 0
        head.next.val = sum;
        
        // call and get the answer and connect the answer to next of head->next
        head.next.next = mergeNodes(ptr);
        
        // return head->next..=> new head
        return head.next;
    }
}
```
```python3 []
class Solution:
    def mergeNodes(self, head: Optional[ListNode]) -> Optional[ListNode]:
        # BASE CASE -> if we have a single zero, simply return null
        if not head.next:
            return None
        
        # fetch sum from current 0 to next 0
        ptr = head.next
        sum = 0
        while ptr.val != 0:
            sum += ptr.val
            ptr = ptr.next
        
        # assign sum on the first node between nodes having value 0
        head.next.val = sum
        
        # call and get the answer and connect the answer to next of head->next
        head.next.next = self.mergeNodes(ptr)
        
        # return head->next..=> new head
        return head.next
```
```C++ []
class Solution {
public:
    ListNode* mergeNodes(ListNode* head){
    //BASE CASE -> if we have a single zero, simply return null
    if(!head->next) return nullptr;
    
    //fetch sum from current 0 to next 0
    ListNode* ptr= head->next;
    int sum=0;
    while(ptr->val!=0) sum+= ptr->val, ptr=ptr->next;
    
    //assign sum on the first node between nodes having value 0.
    head->next->val= sum;
    
    //call and get the answer and connect the answer to next of head->next
    head->next->next= mergeNodes(ptr);
    
    //return head->next..=> new head
    return head->next;
}
};
```
---
![upvote.png](./images/0.png)



