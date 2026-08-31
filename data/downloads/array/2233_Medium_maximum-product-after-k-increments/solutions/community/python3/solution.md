# heapq

**Author:** raviteja_29
**Votes:** 4
**Link:** [https://leetcode.com/problems/maximum-product-after-k-increments/solutions/5310025/](https://leetcode.com/problems/maximum-product-after-k-increments/solutions/5310025/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The idea is to leverage a priority queue (implemented using heapq in Python) to efficiently manage operations on a list, transforming it into a heap-like structure where elements can be manipulated to maximize their product.

# Approach
<!-- Describe your approach to solving the problem. -->
Start by turning the list nums into a min-heap using heapq.heapify(nums). This helps in quickly accessing and updating the smallest element, which is key for our operations.

Then, perform k operations:

Grab the smallest element from the heap using heapq.heappop(nums).
Increment this element by 1 and push it back into the heap with heapq.heappush(nums, smallest + 1).
Repeat these steps until all k operations are done. This transforms nums into a state where each element is maximized while keeping the heap structure intact.

Calculate the product of all elements left in nums, ensuring to use modulo 
10^9+7 for large numbers.

Finally, return the computed product as the maximum achievable product after k operations.
# Complexity
- Time complexity: O(n+klogn).
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution:
    def maximumProduct(self, nums: List[int], k: int) -> int:
        heapq.heapify(nums)
        while k:
            heapq.heappush(nums, heapq.heappop(nums)+1)
            k -= 1
        ans = 1
        for x in nums:
            ans = (ans * x) % 1000000007
        return ans
```