# Unofficial solution intuitive explanations O(n) two different approaches

**Author:** kchow23
**Votes:** 129
**Link:** [https://leetcode.com/problems/maximum-product-subarray/solutions/490459/](https://leetcode.com/problems/maximum-product-subarray/solutions/490459/)

---

Let's summarize this question into our own words: given an array of integers (negative, zeros, positive inclusive), what is the maximum consecutive subarray? What starting point and ending point within the array has the largest product sum?

Thinking about simplifying the problem is helpful: specifically think about the easier version of the problem, maximum sum subarray that is solved with kadane's algorithm.

**Approach #1 Brute Force**
We try every possible starting and ending point pair within the array, done easily with two for loops.

Complexity
Time: O(n^2)
Space: O(1)

There are two approaches to the optimal solution, and they are slightly different. Instead of summing up elements, we multiply. Think about the properties of multiplication - any multiplication with a positive number will increase our max, anything by zero will zero us out, and multiplication by an EVEN amount of negative numbers will increase us also. 

Recall kadane's algorithm - in our one pass, we either extend our subarray to end at the nth item, or we start over at n.

**Approach #2 Kadane's algorithm** (Dynamic programming) track both max and mins

```
def maxProduct(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        prev_max = nums[0] # max from previous iteration
        prev_min = nums[0] # min from previous iteration
        max_to_n = nums[0] # max this iteration
        min_to_n = nums[0] # min this iteration
        ans = nums[0]
        
        for i in nums[1:]
			# use previous max/min*current i or restart from i. The absolute value of the min could be larger so we store it.
			max_to_n = max(max(prev_max*i, prev_min*i), i)
            min_to_n = min(min(prev_max*i, prev_min*i), i)
            prev_max = max_to_n
            prev_min = min_to_n
            ans = max(ans, max_to_n)
        return ans
```
The key intuition here is that when we can come upon a negative number, our current max can suddenly becomes a min but is still a max by absolute value. Following the next negative number, our min can become a max again. Therefore keeping track of min is useful.



Complexity
Time: O(n)
Space: O(1)

**Approach #3 Ad hoc** Linear algorithm without DP

```
def maxProduct(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        ans = nums[0]
        current = 1
		# left to right pass. Captures all potential subarrays containing first odd n negative numbers
        for i in nums:
            current*=i
            ans = max(ans, current)
			# zero is a delimiter, restart at 1. This is optimal since zero multiplied on is still zero.
            if current == 0:
                current = 1
        current = 1
		# right to left pass capturing all potential subarrays containing last odd n negative numbers
        for i in reversed(nums):
            current*=i
            ans = max(ans, current)
            if current == 0:
                current = 1
        return ans
```

As we described above, positive numbers don't matter, we always 'take' them and continue on and don't consider starting on them. Any array of positive, zero, and negative numbers can be thought of as zeros and negative numbers. Our answer will include an even number of negatives.

For example, [-3 -1, -10]. We can either take [-3, -1] or [-1, -10]. The former gives us 10 which is the maximum.

The positives don't exactly matter. [-3, 5, -3, 5, -10]. The max answer is different, but we could compress this array with positives into [-3, -1, -10] and assume we take/include positive numbers in between and skip onto the next negative number.

The zeros matter because they act like delimiters. Zero times anything = zero. You can think of this algorithm as splitting one array into subarrays delimited by zero, and picking the best even number of negatives. When you reach a zero, you need to restart. Imagine now you have an array with no zeros. If you have 3 negative numbers, pick the first two or the last two. If you have 5 negative numbers, the first four or the last four.

The elegant way to implement this is two passes - one from the left and one from the right. On the left pass, your cumulative multiply and check against your running max. This guarantees checking the first 3 or 5 or first n odd number of negative numbers. But the better answer could be [-1, -10] rather than [-3, -1]. If we pass from right to left, or traverse our array in reverse, we guarantee we also consider the last n odd number of negative numbers.

How do we deal with the zeros? When we hit a zero, we set our current local max back to 1. 

Complexity
Time: O(n)
Space: O(1)


Any feedback on these explanations is welcome.




