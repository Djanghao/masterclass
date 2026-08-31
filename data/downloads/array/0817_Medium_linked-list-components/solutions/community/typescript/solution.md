# Easy to Follow (beat 80% of other submissions' runtime) Typescript Solution

**Author:** atolagbeelisha001
**Votes:** 0
**Link:** [https://leetcode.com/problems/linked-list-components/solutions/5513587/](https://leetcode.com/problems/linked-list-components/solutions/5513587/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Get first connected component, set count to count+1  and isCurrentlyConnected to true on initial encounter of a connected component. Always move curr to curr.next

Continue step tru till you get a disconnected component, which resets the isCurretlyConnected to false, signifying a disconnection.

# Approach
<!-- Describe your approach to solving the problem. -->
use a set to store the hash of nums
step tru the list
if curr.val is in the set
 check if we DONT have a current connection
  DONT have: Increase result/count =+1
  else: move curr to next

if curr.val is not in set
 just move curr to curr.next

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
O(n) step tru

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
O(m)  where m is the length of the given nums. Space grows as Set grow for which nums is stored

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

function numComponents(head: ListNode | null, nums: number[]): number {
    let result: number = 0;
    let curr: ListNode | null = head;
    let numsSet: Set<number> = new Set(nums);
    let currentlyConnected: boolean = false;

    while (curr) {
        if (numsSet.has(curr.val)) {
            if (!currentlyConnected) {
                result += 1;
                currentlyConnected = true;
            }
            curr = curr.next;
        } else {
            currentlyConnected = false;
            curr = curr.next;
        }
    }

    return result;
};


```