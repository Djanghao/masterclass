# Use Prefix Sum Approach, Remove Del Nodes from Hashmap TS

**Author:** anirbandGIT
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/solutions/4866101/](https://leetcode.com/problems/remove-zero-sum-consecutive-nodes-from-linked-list/solutions/4866101/)

---

# Intuition
Find the prefix sums and draw a graph w/ numbers in x axis and prefix sum in y axis, you can see if the match we remove the elements in between.

# Approach
Use a dummy node and do not start algo from head node as head node may be removed for final result.

Find prefix sums and store them as key=pSum(or sum) and value=currentNode. If a prefix sum is found that exists in the hashmap then remove the next elements till current.

Also remember to remove the prefix sums for the nodes from hashmap. Use a while loop from the found node to the current node and use a temp prefix sum variable to calculate the key again and remove the values, no need to remove the current node value as we did not add it to hashmap.

# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$
I think it will be O(n) as we do use up the space even though we clear it.

# Code
```
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function removeZeroSumSublists(head: ListNode | null): ListNode | null {
    let dummyNode = new ListNode(0, head), currentNode = head;
    let hashMap = new Map<number, ListNode>([[0, dummyNode]])
    let sum: number = 0;

    // need to find the prefix sums and store that in a hashMap, if the sum occurs again
    // need to remove after the node at which it is found
    while (currentNode) {
        sum += currentNode.val;

        if (hashMap.has(sum)) {
            // if hashmap has a node whose sum is same as current prefix sum then link that node
            // to the next node the remoe the elements in between
            let found: ListNode = hashMap.get(sum).next;
            hashMap.get(sum).next = currentNode.next;

            // also need to remove the hashMap values in between
            // !! we do not need to remove the last node hashMap value as it is not yet added
            // as the else block was not executed
            // let found: ListNode = hashMap.get(sum).next; // moved up
            let tempSum = sum; // note that the prefix sum at node to be removed is same as current sum
            while (found !== currentNode) {
                tempSum += found.val;
                hashMap.delete(tempSum);

                found = found.next;
            }
        }
        else hashMap.set(sum, currentNode);

        currentNode = currentNode.next;
    }

    return dummyNode.next;
};
```