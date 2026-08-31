# ✅95%||✅Full Explanation🔥||Beginner Friendly🔥||Two-Pass Method✅

**Author:** singhhh_sidhantttt
**Votes:** 338
**Link:** [https://leetcode.com/problems/split-linked-list-in-parts/solutions/4007634/](https://leetcode.com/problems/split-linked-list-in-parts/solutions/4007634/)

---

# Problem Understanding
The problem asks us to **split a singly linked list into k consecutive** linked list parts while maintaining two important conditions:

1. The length of each part should be **as equal as possible**.
2. **No two parts should have a size differing by more than one**.
# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The key insight here is that we can efficiently split the linked list into **equal-sized parts** by calculating the **minimum guaranteed size** of each part (n) and distributing any extra nodes (r) as evenly as possible among the first r parts. **This approach ensures that we meet both conditions specified in the problem statement**.

**By maintaining two pointers (node and prev)** and updating them as we traverse the linked list, we can keep track of the current part and efficiently split the list into k parts.

# Approach
**To solve this problem efficiently, we can follow these steps:**
<!-- Describe your approach to solving the problem. -->
1. **Calculate the Length:** First, we need to **determine the length of the linked list**. This is **important because it helps** us evenly distribute the nodes among the k parts.
```
for (ListNode* node = root; node; node = node->next)
            len++;
```
2. **Calculate Sizes:** Calculate the minimum guaranteed size of each part, n, **by dividing the total length by k**. **Also, calculate the number of extra nodes, r**, which will be spread among the first r parts (remainder of length / k).
```
 // Calculate the minimum guaranteed part size (n) and the number of extra nodes (r).
        int n = len / k, r = len % k;
```
3. **Traverse and Split:** Initialize **two pointers**, node and prev, **to traverse the linked list.** Then, loop through each part:
    - **Store the current node** as the start of the current part in the parts array.
    - **Traverse n + 1 nodes** if there are remaining extra nodes (when r > 0). Otherwise, traverse only n nodes.
    - After traversing, **we disconnect the current part from the rest of the list by setting prev->next to nullptr**. This ensures that each part is isolated.
```
// Loop through each part.
        for (int i = 0; node && i < k; i++, r--) {
            // Store the current node as the start of the current part.
            parts[i] = node;
            // Traverse n + 1 nodes if there are remaining extra nodes (r > 0).
            // Otherwise, traverse only n nodes.
            for (int j = 0; j < n + (r > 0); j++) {
                prev = node;
                node = node->next;
            }
            // Disconnect the current part from the rest of the list by setting prev->next to nullptr.
            prev->next = nullptr;
        }
```   
4. **Return Result:** Return the parts array containing the k parts of the linked list.

---


# Till now if any doubt, Please see step by step Guide:
1. **We start by creating an array parts of size k** to store the resulting linked list parts. Initially, all elements are set to nullptr.
2. **We calculate the length of the input linked list by traversing it using a for loop**. This helps us determine the size of each part.
3. **We calculate two important values:**
    - **n: The minimum guaranteed size of each part**, obtained by dividing the total length by k.
    - **r: The number of extra nodes that need to be distributed among the first r parts**, where r is the remainder of the division.
4. **We initialize two pointers, node and prev**, to traverse the linked list. **node starts at the head of the linked list** (root), and **prev keeps track of the previous node.**
5. We loop through **each part of the result:**

    - Store the current node **as the start of the current part in the parts array.**
    - **Traverse n + 1 nodes if there are remaining extra nodes** (when r > 0). Otherwise, traverse only n nodes.
    - **After traversing, we disconnect the current part** from the rest of the list by setting prev->next to nullptr. This ensures that each part is isolated.
6. **Finally, we return the parts array** containing the k parts of the linked list.
# Complexity
- Time complexity: O(N), where N is the number of nodes in the linked list.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:O(K), where k is the number of parts in which the linked list is split.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->



---

# SMALL REQUEST : If you found this post even remotely helpful, be kind enough to smash a upvote. I will be grateful.I will be motivated\uD83D\uDE0A\uD83D\uDE0A

# Code
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
    vector<ListNode*> splitListToParts(ListNode* root, int k) {
        // Create a vector of ListNode pointers to store the k parts.
        vector<ListNode*> parts(k, nullptr);

        // Calculate the length of the linked list.
        int len = 0;
        for (ListNode* node = root; node; node = node->next)
            len++;

        // Calculate the minimum guaranteed part size (n) and the number of extra nodes (r).
        int n = len / k, r = len % k;

        // Initialize pointers to traverse the linked list.
        ListNode* node = root, *prev = nullptr;

        // Loop through each part.
        for (int i = 0; node && i < k; i++, r--) {
            // Store the current node as the start of the current part.
            parts[i] = node;
            // Traverse n + 1 nodes if there are remaining extra nodes (r > 0).
            // Otherwise, traverse only n nodes.
            for (int j = 0; j < n + (r > 0); j++) {
                prev = node;
                node = node->next;
            }
            // Disconnect the current part from the rest of the list by setting prev->next to nullptr.
            prev->next = nullptr;
        }

        // Return the array of k parts.
        return parts;
    }
};
```
```Java []
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
    public ListNode[] splitListToParts(ListNode root, int k) {
        // Create an array of ListNode pointers to store the k parts.
        ListNode[] parts = new ListNode[k];

        // Calculate the length of the linked list.
        int len = 0;
        ListNode node = root;
        while (node != null) {
            len++;
            node = node.next;
        }

        // Calculate the minimum guaranteed part size (n) and the number of extra nodes (r).
        int n = len / k, r = len % k;

        // Reset the pointer to the beginning of the linked list.
        node = root;
        ListNode prev = null;

        // Loop through each part.
        for (int i = 0; node != null && i < k; i++, r--) {
            // Store the current node as the start of the current part.
            parts[i] = node;

            // Traverse n + 1 nodes if there are remaining extra nodes (r > 0).
            // Otherwise, traverse only n nodes.
            for (int j = 0; j < n + (r > 0 ? 1 : 0); j++) {
                prev = node;
                node = node.next;
            }

            // Disconnect the current part from the rest of the list by setting prev.next to null.
            if (prev != null) {
                prev.next = null;
            }
        }

        // Return the array of k parts.
        return parts;
    }
}

```
```Python3 []
# Definition for singly-linked list.
class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def splitListToParts(self, root, k):
        # Create a list of ListNode pointers to store the k parts.
        parts = [None] * k

        # Calculate the length of the linked list.
        len = 0
        node = root
        while node:
            len += 1
            node = node.next

        # Calculate the minimum guaranteed part size (n) and the number of extra nodes (r).
        n, r = divmod(len, k)

        # Reset the pointer to the beginning of the linked list.
        node = root
        prev = None

        # Loop through each part.
        for i in range(k):
            # Store the current node as the start of the current part.
            parts[i] = node

            # Traverse n + 1 nodes if there are remaining extra nodes (r > 0).
            # Otherwise, traverse only n nodes.
            for j in range(n + (1 if r > 0 else 0)):
                prev = node
                node = node.next

            # Disconnect the current part from the rest of the list by setting prev.next to None.
            if prev:
                prev.next = None

            # Decrement the count of extra nodes (r) if applicable.
            if r > 0:
                r -= 1

        # Return the list of k parts.
        return parts

```
``` Javascript []
// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = val;
    this.next = next || null;
}

var splitListToParts = function(root, k) {
    // Create an array of ListNode pointers to store the k parts.
    const parts = new Array(k).fill(null);

    // Calculate the length of the linked list.
    let len = 0;
    let node = root;
    while (node) {
        len++;
        node = node.next;
    }

    // Calculate the minimum guaranteed part size (n) and the number of extra nodes (r).
    const n = Math.floor(len / k);
    let r = len % k;

    // Reset the pointer to the beginning of the linked list.
    node = root;
    let prev = null;

    // Loop through each part.
    for (let i = 0; node && i < k; i++, r--) {
        // Store the current node as the start of the current part.
        parts[i] = node;

        // Traverse n + 1 nodes if there are remaining extra nodes (r > 0).
        // Otherwise, traverse only n nodes.
        for (let j = 0; j < n + (r > 0 ? 1 : 0); j++) {
            prev = node;
            node = node.next;
        }

        // Disconnect the current part from the rest of the list by setting prev.next to null.
        if (prev) {
            prev.next = null;
        }
    }

    // Return the array of k parts.
    return parts;
};

```

---


# SMALL REQUEST : If you found this post even remotely helpful, be kind enough to smash a upvote. I will be grateful.I will be motivated\uD83D\uDE0A\uD83D\uDE0A

![UPVOTE.png](./images/0.png)
