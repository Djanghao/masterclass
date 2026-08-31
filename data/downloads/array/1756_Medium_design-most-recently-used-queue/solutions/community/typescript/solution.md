# [TypeScript/JS] Easy, simple to read solution - [O(n) fetch]

**Author:** deleted_user
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-most-recently-used-queue/solutions/3610529/](https://leetcode.com/problems/design-most-recently-used-queue/solutions/3610529/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Pretty simple problem, but the hard part comes when asked to optimize the fetch function, which would require the use of a doubly-linked list.

# Approach
<!-- Describe your approach to solving the problem. -->
The main idea would be to simply remove the kth element from the queue, and then just append it to the end of the queue, and return it. This way, it would become the most recently used item. Nothing else needs to be considered. Of course, this approach comes at the cost of using the `splice` function which is `O(n)` for the `fetch` function.

# Complexity
- Time complexity: O(n) (fetch)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class MRUQueue {
  private queue: number[]

  constructor(n: number) {
    // Create the array using `Array.from` and a higher-order
    // function to specify the pattern of the elements.
    this.queue = Array.from({length: n}, (_, i) => i + 1)
  }

  fetch(k: number): number {
    // Remove the kth element from the queue.
    const kth = this.queue.splice(k - 1, 1)[0]

    // Append it on the end to mark it as most recently
    // used.
    this.queue.push(kth)

    return kth
  }
}
```