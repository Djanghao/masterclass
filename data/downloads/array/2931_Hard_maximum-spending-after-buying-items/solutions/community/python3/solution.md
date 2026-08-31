# Python | O(m*n log(m) time & O(m) space | minheap

**Author:** nicholasjano
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-spending-after-buying-items/solutions/5315520/](https://leetcode.com/problems/maximum-spending-after-buying-items/solutions/5315520/)

---

# Intuition
Since the day multiplies the price of an item, for me to to get the maximum spending, we need to purchase the most expensive items on the latest days. I can use a minheap to store the values of all possible items we can purchase for the day.

# Approach
- Create the minheap, and push all the values purchasable for the first day. I pop these values out of each shop to make sure I do not purchase duplicate items.
- While loop through the heap, which will end up being m*n time.
- Within each iteration of the loop, I pop the cheapest item from the heap. With that, I add the item value * day to the total spending, and add the next item in that shop to the heap if possible. The day increments at the end of the loop to ensure proper calculations.

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$O(m \\cdot n \\log(m))$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$O(m)$

# Code
```
class Solution:
    def maxSpending(self, values: List[List[int]]) -> int:
        heap = []
        heapify(heap)

        for i, shop in enumerate(values):
            heappush(heap, (shop.pop(), i))

        day, spent = 1, 0

        while heap:
            item = heappop(heap)

            spent += item[0] * day

            if len(values[item[1]]) > 0:
                heappush(heap, (values[item[1]].pop(), item[1]))

            day += 1
        
        return spent
```