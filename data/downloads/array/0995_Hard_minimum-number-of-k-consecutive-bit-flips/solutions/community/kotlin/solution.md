# Single pass solution with deque

**Author:** drgavrikov
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/solutions/5364120/](https://leetcode.com/problems/minimum-number-of-k-consecutive-bit-flips/solutions/5364120/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
- Bit Flips: 

A K-bit flip means flipping K consecutive bits in the array. For example, flipping the bits [0, 1, 0] with K=3 would result in [1, 0, 1]. 
If nums[index] is equal to 0, then this index needs to be covered by an odd number of flipping intervals. Traversing the array from left to right, if we encounter a 0, it needs to be covered by at least one or an odd number of intervals; if we encounter a 1, it needs to be covered by none or an even number of intervals.

- Deque: 

A double-ended queue (ArrayDeque) is used to keep track of the end indices of the current flip operations.

# Approach
<!-- Describe your approach to solving the problem. -->
- Iterate Through the Array:

Loop through each index index in the array nums. 

- Remove Outdated Flips:

If the deque is not empty and the first element in the deque is less than the current index (deque.first() < index), it means the effect of the flip at that index has ended, so remove it from the deque.

- Check the Current Bit:

Check if the current bit needs to be flipped. This is done using $(nums[index] + deque.size) % 2 == 0$: 
If deque.size is even, the current bit is considered as it is in nums.
If deque.size is odd, the current bit is considered flipped.

If the result of the check is $0$, it means the current bit needs to be flipped.

- Perform the Flip:

If the current index plus k exceeds the array length $(index + k > nums.size)$, return $-1$ because it's not possible to flip k bits starting from this index. Otherwise, add the end index of this flip operation to the deque $(index + k - 1)$.

Increment the flip counter.


# Complexity
- Time complexity: $O(N)$ because the solution involves a single pass through the array.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $O(K)$ as a maximum size of deque
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    fun minKBitFlips(nums: IntArray, k: Int): Int {
        val deque = ArrayDeque<Int>()
        var flips = 0

        for (index in nums.indices) {
            if (deque.isNotEmpty() && deque.first() < index) deque.removeFirst()
            if ((nums[index] + deque.size) % 2 == 0) {
                if (index + k - 1 >= nums.size) return -1

                deque.addLast(index + k - 1)
                flips++
            }
        }
        return flips
    }
}
```

Most of my solutions are in\xA0[C++](https://github.com/drgavrikov/leetcode-cpp)\xA0and\xA0[Kotlin](https://github.com/drgavrikov/leetcode-jvm)\xA0on my\xA0Github.
