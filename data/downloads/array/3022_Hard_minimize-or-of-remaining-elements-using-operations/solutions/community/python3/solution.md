# O(N) solution with detailed explanation and pictures

**Author:** eweitnauer
**Votes:** 36
**Link:** [https://leetcode.com/problems/minimize-or-of-remaining-elements-using-operations/solutions/4645082/](https://leetcode.com/problems/minimize-or-of-remaining-elements-using-operations/solutions/4645082/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The problem asks us to take a list of numbers and combine adjacent pairs of them using bitwise AND, to minimize the bitwise OR of the resulting list. We are allowed `k` AND operations.

**What's the effect of the final OR?**
The result of a bitwise OR has a bit set in each position where at least one of the numbers has a bit set.

<img src="https://assets.leetcode.com/users/images/24c8c010-38f6-44ba-8c8b-67e700bbd8be_1706536771.3806982.png" width=150>

To reduce the result of the OR, we need to remove *all* numbers from the list that have a certain bit set, for as many bit positions as possible. We'll focus on the highest bit first (value 8 in the example), since its value is higher than the value of all following bits combined (4+2+1=7). In general, we'll spend our AND operations to minimize the highest bit, then the next highest, and so on.

**What's the effect of the AND operations?**
The bitwise AND of two numbers has a bit set in all positions where both numbers have the bit set.

<img src="https://assets.leetcode.com/users/images/aa1079c9-27ec-4827-9328-7fac50b68da1_1706536994.8122084.png" width=150>

We'll use two properties of the bitwise AND operation in our solution: First, the operation is commutative and associative, which means it doesn't matter in which order we combine a list of numbers - the result is always the same. Second, AND-ing a number with another one will never add new bits. These two properties will allow us to move through the list of numbers from left to right and greedily combine numbers with bits we want to remove.

# Approach
<!-- Describe your approach to solving the problem. -->

To solve this problem, we'll figure out which bits we can remove from all numbers using the given number of AND operations. We'll use a greedy approach to focus on removing the highest bit first and then continue to check if it is possible to *additionally* remove the next-highest bit, and so on.

For efficiency, we won't actually replace two numbers with the result of AND-ing them, and instead keep track of a) how many operations would be necessary and b) their effect on the final OR result. We'll use a number called `mask` to represent which bits we can remove from all numbers.

**Example Step 1:**
We first set the highest bit in `mask` to 1 and check how many operations we need to replace all numbers with that bit.

<img src="https://assets.leetcode.com/users/images/0a68868c-ed51-427c-87d2-b9ee7d429c55_1706538325.8523884.png" width=150px>

There is only one number that has this bit set, and since there is at least one number without that bit, a single AND will be enough. For example, we could replace 4 and 9 with 0 (`4 & 9 = 0`) or replace 9 and 5 with 1 (`9 & 5 = 1`). Let's assume that `k=1`, in which case we are able to remove the highest bit. We'll keep it in our `mask` since any better solution would have to still remove the highest bit, too.

**Example Step 2:**
We next check if we can remove the second-highest bit from all numbers, while still removing the highest bit.

<img src="https://assets.leetcode.com/users/images/55949b71-c18f-425f-957a-de24c5e9dcb2_1706538645.816408.png" width=150>

The mask now checks for the highest and second-highest bit, and there are 3 numbers that have at least one of those bits set. We need at least 2 operations to combine them, so for `k=1` we can't remove this bit. We still need to check if we can remove any smaller bits, so we remove the current bit from our mask and keep going.

**Example Step 3:**
We now check if we can remove the third-heighest bit, while still removing all bits from our previous best solution.

<img src="https://assets.leetcode.com/users/images/2965632a-b76c-48ee-8cf5-047f3aeead71_1706538939.4289043.png" width=150>

No numbers have the 3rd bit set, so the result is the same as for Step 1: we need one AND operation. We keep the third bit in our mask to remember that the final OR result won't have this bit set and move on to the last bit.

**Example Step 4:**
We finally check whether we can remove the last bit from all numbers using `k=1` operations.

<img src="https://assets.leetcode.com/users/images/744273ed-2ea6-4c8b-84d4-5f9d4bdf60ce_1706539238.79952.png" width=150>

There are two numbers (9 and 5) that have at least one of the bits from our mask set. They are next to each other, so we can replace them with 1 (`9 & 5 = 1`). However, we still need another operation to get rid of the 1-bit in 1, which means that `k=1` operations are not enough. We remove the 1-bit from the mask.

**Example Step 5: Result**

Our final mask is `b1010`. Since the mask has a bit set in each place that we can **remove** from all numbers, we can invert the mask to get all bits that will be present when OR-ing all numbers after the AND operations. The result is `b0101` = 5, which is the minimal OR after k=1 operations.

### Counting the Number of Needed Operations

Since we are not actually replacing any numbers with the result of AND-ing them, counting operations is a little tricky. Consider this example:

<img src="https://assets.leetcode.com/users/images/c1283f64-257d-42e3-8c89-1979238201a5_1706541388.7790878.png" width=150>

Here, the idea is to replace the first two numbers with 0 (`4 & 9 = 0`). Since `0` doesn't overlap with the mask, we are done. When replacing the last two numbers with 4 (`6 & 5 = 4`), the result 4 still overlaps with the mask and we'd need another operation to get rid of that bit (combining the 4 with the adjacent 2 to get 0).

How do we keep track of that, without actually replacing any numbers? We can loop over all numbers to: a) find the next number that overlaps with the mask, then b) keep AND-ing it with the next number until there is no overlap with the mask. Then we go back to a). After looping over every number, we might still have an overlapping number (the 4 in our example), in which case we need one more AND operation. Using this approach, we can simply count the number of performed ANDs.

> This works because a) the problem states that we always AND *adjacent* numbers, b) AND-ing numbers is commutative so order doesn't matter, and c) we are trying to get rid of *all* numbers that overlap with the mask, so we can greedily merge each overlapping number with its next sibling.

One last consideration: What happens if all numbers have a certain bit set to 1, in which case it is impossible to remove it with AND? Our counting approach would count N-1 operations plus an extra one, so `operationsNeeded` would be `N`. The problem states that `k < N`, so checking whether `operationsNeeded > k` will catch this case, too!

# Complexity
- Time complexity: O(n). There are 30 bits we need to check and for each of the bits we iterate over all n numbers: O(30n) = O(n).
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
- Space complexity: O(1).
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

**Try to code your own solution based on the description above before reading  this one :)**

```
class Solution:
    def minOrAfterOperations(self, nums: List[int], k: int) -> int:
        mask = 0
        # iterate from highest bit 29 down to 0
        for bit in range(29, -1, -1):
            # mask has all previous removable bits set and the current one
            mask |= 1 << bit
            opsNeeded = 0
            andRes = 0
            # iterate over all numbers and count how many ops we need
            for x in nums:
                if andRes != 0:
                    andRes &= x
                    opsNeeded += 1
                elif x & mask != 0:
                    andRes = x & mask
            if andRes != 0: opsNeeded += 1
            # if we'd need to many ops, remove the bit from the mask
            if opsNeeded > k: mask -= 1 << bit
        # return the inverted mask
        return (1 << 30) - 1 - mask
```