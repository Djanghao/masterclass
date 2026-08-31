# Fast and Intuitive Dart Solution

**Author:** exoad
**Votes:** 0
**Link:** [https://leetcode.com/problems/linked-list-random-node/solutions/5994885/](https://leetcode.com/problems/linked-list-random-node/solutions/5994885/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```dart []
/**
 * Definition for singly-linked list.
 * class ListNode {
 *   int val;
 *   ListNode? next;
 *   ListNode([this.val = 0, this.next]);
 * }
 */
class Solution {
  List<int> values;
  Random rng;
  Solution(ListNode? head):values=<int>[],rng=Random() {
    ListNode? curr=head;
    while(curr!=null)
    {
        values.add(curr.val);
        curr=curr.next;
    }
  }
  
  int getRandom() {
    return values[rng.nextInt(values.length)];
  }
}

/**
 * Your Solution object will be instantiated and called as such:
 * Solution obj = Solution(head);
 * int param1 = obj.getRandom();
 */
```