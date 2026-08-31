# Python with explanation. Rolling sum.

**Author:** Hai_dee
**Votes:** 196
**Link:** [https://leetcode.com/problems/grumpy-bookstore-owner/solutions/299284/](https://leetcode.com/problems/grumpy-bookstore-owner/solutions/299284/)

---

The way I approached this problem was to split it into 2 smaller problems. 

The first involves counting how many customers are already satisfied, i.e. those where the shopkeeper is not grumpy. I also set any slots with already satisfied customers to 0, so that we will be left with only the currently unsatisfied customers in the list.

For the second part, the array now only contains customers who will not be satisfied. We are able to make X adjacent times \u201Chappy\u201D, so we want to find the subarray of length X that has the most customers. We can just keep a rolling sum of the last X customers in the array, and then the best solution is the max the rolling sum ever was.

Finally we return the sum of the 2 parts: the customers who were already satisfied, and the maximum number who can be made satisfied by stopping the shop keeper from being grumpy for X time.

Note that both parts can be combined into a single loop, but I felt this way was probably easier for understanding, and both are still ```O(n)``` time. I'll shortly include code for how to merge it all together.

```
class Solution:
    def maxSatisfied(self, customers: List[int], grumpy: List[int], X: int) -> int:
        
        # Part 1 requires counting how many customers
        # are already satisfied, and removing them
        # from the customer list.
        already_satisfied = 0
        for i in range(len(grumpy)):
            if grumpy[i] == 0: #He's happy
                already_satisfied += customers[i]
                customers[i] = 0
        
        # Part 2 requires finding the optinal number
        # of unhappy customers we can make happy.
        best_we_can_make_satisfied = 0
        current_satisfied = 0
        for i, customers_at_time in enumerate(customers):
            current_satisfied += customers_at_time # Add current to rolling total
            if i >= X: # We need to remove some from the rolling total
                current_satisfied -= customers[i - X]
            best_we_can_make_satisfied = max(best_we_can_make_satisfied, current_satisfied)
        
        # The answer is the sum of the solutions for the 2 parts.
        return already_satisfied + best_we_can_make_satisfied
```