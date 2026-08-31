# ✅Beats 100% -Explained with [ Video ] -C++/Java/Python/ - O(n) Time O(k) Space- Explained in Detail

**Author:** lancertech6
**Votes:** 121
**Link:** [https://leetcode.com/problems/split-linked-list-in-parts/solutions/5752989/](https://leetcode.com/problems/split-linked-list-in-parts/solutions/5752989/)

---

![Screenshot 2024-09-08 061942.png](./images/0.png)

# YouTube Video Explanation:

### To watch the video please click on "Watch On Youtube" option  available the left bottom corner of the thumbnail.

<!-- **If you want a video for this question please write in the comments** -->


https://youtu.be/1kWcQuz4VTo


**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Subscribe Goal: 2900 Subscribers*
*Current Subscribers: 2804*

Follow me on Instagram : https://www.instagram.com/divyansh.nishad/

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem is about splitting a linked list into k parts such that the sizes of the parts are as equal as possible. Some parts may have a size that differs by at most 1. The goal is to achieve this without creating extra space and by modifying the input linked list itself.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Calculate the Size of the Linked List:

    - Traverse the linked list and count the total number of nodes (size).
2. Determine the Split Sizes:

    - Each part will have a minimum size of size // k.
    - There may be some leftover nodes (size % k) which need to be distributed to the first few parts. Therefore, the first size % k parts will have an extra node.

3. Splitting the List into Parts:

    - Initialize a ListNode[] ans of size k to store the resulting parts.
    - For each part, calculate its size. For the first size % k parts, the size will be splitSize + 1. For the remaining parts, the size will be splitSize.
    - For each part, traverse the corresponding number of nodes, and then break the list by setting the next pointer of the last node in the current part to null.
    - Continue this process for all parts and assign the heads of each part to ans[i].
4. Return the Result:

    - Return the array ans which contains the heads of the k parts.

# Complexity
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
- Time complexity:
    - The algorithm traverses the list twice. Once to calculate the total size `(O(n))`, and once to divide it into k parts by reassigning pointers `(O(n))`.
    - Therefore, the time complexity is `O(n)`, where n is the number of nodes in the linked list.

<!-- Add your space complexity here, e.g. $$O(n)$$ -->
- Space complexity: 
    - The space complexity is `O(k)` for the result array `ans` of size `k`.
    - Since we are modifying the input linked list and not using any additional space for new nodes, the space complexity remains low.

# Step By Step Explanation

### Example Input:
- **Linked List**: `1 \u2192 2 \u2192 3 \u2192 4 \u2192 5 \u2192 6 \u2192 7 \u2192 8 \u2192 9 \u2192 10`
- **k**: `3`

### Step 1: Determine the Length of the Linked List
Traverse the linked list to calculate its total length.

| Node   | Value |
|--------|-------|
| Node 1 | 1     |
| Node 2 | 2     |
| Node 3 | 3     |
| Node 4 | 4     |
| Node 5 | 5     |
| Node 6 | 6     |
| Node 7 | 7     |
| Node 8 | 8     |
| Node 9 | 9     |
| Node 10| 10    |

- **Total Length**: `10`

### Step 2: Calculate Size of Each Part
Compute the basic size and handle any remaining nodes.

- **Basic Size of Each Part**: `Total Length \xF7 k`
  - `splitSize = 10 \xF7 3 = 3`
- **Remaining Nodes**: `Total Length % k`
  - `remainder = 10 % 3 = 1`

Thus, the sizes of the parts are:
- **Part Sizes**: `[4, 3, 3]`

### Step 3: Splitting the List into Parts
Traverse the list and split it based on the calculated sizes.

#### Part 1 (Size = 4)
- **Nodes**: `1 \u2192 2 \u2192 3 \u2192 4`
- **Cut Point**: After node `4`

#### Part 2 (Size = 3)
- **Nodes**: `5 \u2192 6 \u2192 7`
- **Cut Point**: After node `7`

#### Part 3 (Size = 3)
- **Nodes**: `8 \u2192 9 \u2192 10`
- **Cut Point**: After node `10`

### Summary Table for Each Part:

| Part Number | Nodes in Part     |
|-------------|--------------------|
| Part 1      | `1 \u2192 2 \u2192 3 \u2192 4`    |
| Part 2      | `5 \u2192 6 \u2192 7`        |
| Part 3      | `8 \u2192 9 \u2192 10`       |

### Key Points to Explain:
1. **Basic Size Calculation**: The size of each part is determined by dividing the total length of the list by `k`.
2. **Distribute Extra Nodes**: The first `remainder` number of parts get one extra node.
3. **Cutting the List**: For each part, traverse the required number of nodes and then cut the list by setting the last node\u2019s `next` pointer to `null`.

---


# Code
```java []
/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {

    public ListNode[] splitListToParts(ListNode head, int k) {
        ListNode[] ans = new ListNode[k];

        // get total size of linked list
        int size = 0;
        ListNode current = head;
        while (current != null) {
            size++;
            current = current.next;
        }

        // minimum size for the k parts
        int splitSize = size / k;

        // Remaining nodes after splitting the k parts evenly.
        // These will be distributed to the first (size % k) nodes
        int numRemainingParts = size % k;

        current = head;
        ListNode prev = current;
        for (int i = 0; i < k; i++) {
            // create the i-th part
            ListNode newPart = current;
            // calculate size of i-th part
            int currentSize = splitSize;
            if (numRemainingParts > 0) {
                numRemainingParts--;
                currentSize++;
            }

            // traverse to end of new part
            int j = 0;
            while (j < currentSize) {
                prev = current;
                current = current.next;
                j++;
            }
            // cut off the rest of linked list
            if (prev != null) {
                prev.next = null;
            }

            ans[i] = newPart;
        }

        return ans;
    }
}
```
```C++ []
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
    vector<ListNode*> splitListToParts(ListNode* head, int k) {
        vector<ListNode*> ans(k);

        // get total size of linked list
        int size = 0;
        ListNode* current = head;
        while (current != nullptr) {
            size++;
            current = current->next;
        }

        // minimum size for the k parts
        int splitSize = size / k;

        // Remaining nodes after splitting the k parts evenly.
        // These will be distributed to the first (size % k) nodes
        int numRemainingParts = size % k;

        current = head;
        ListNode* prev = current;
        for (int i = 0; i < k; i++) {
            // create the i-th part
            ListNode* newPart = current;
            // calculate size of i-th part
            int currentSize = splitSize;
            if (numRemainingParts > 0) {
                numRemainingParts--;
                currentSize++;
            }

            // traverse to end of new part
            int j = 0;
            while (j < currentSize) {
                prev = current;
                if (current != nullptr) {
                    current = current->next;
                }
                j++;
            }

            // cut off the rest of linked list
            if (prev != nullptr) {
                prev->next = nullptr;
            }

            ans[i] = newPart;
        }

        return ans;
    }
};
```
```Python []
# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
# Definition for singly-linked list.

class Solution:
    def splitListToParts(self, head, k):
        ans = [None] * k

        # Calculate total size of the linked list
        size = 0
        current = head
        while current:
            size += 1
            current = current.next

        # Minimum size of each part
        split_size = size // k
        remainder = size % k  # Remaining nodes to distribute

        current = head
        for i in range(k):
            ans[i] = current
            current_size = split_size + (1 if remainder > 0 else 0)
            remainder -= 1

            # Traverse to the end of the current part
            for _ in range(current_size - 1):
                if current:
                    current = current.next

            # Cut the list
            if current:
                next_part = current.next
                current.next = None
                current = next_part

        return ans
```
```JavaScript []
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode[]}
 */
var splitListToParts = function(head, k) {
    let ans = new Array(k).fill(null);

    // Calculate total size of the linked list
    let size = 0;
    let current = head;
    while (current) {
        size++;
        current = current.next;
    }

    // Minimum size of each part
    let splitSize = Math.floor(size / k);
    let remainder = size % k; // Remaining nodes to distribute

    current = head;
    let prev = null;
    for (let i = 0; i < k; i++) {
        ans[i] = current;
        let currentSize = splitSize + (remainder > 0 ? 1 : 0);
        remainder--;

        // Traverse to the end of the current part
        for (let j = 0; j < currentSize; j++) {
            prev = current;
            current = current.next;
        }

        // Cut the list
        if (prev) prev.next = null;
    }

    return ans;
};
```
![upvote.png](./images/1.png)
