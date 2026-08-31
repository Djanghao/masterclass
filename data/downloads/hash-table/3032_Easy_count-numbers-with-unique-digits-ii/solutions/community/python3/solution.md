# Python3 solution

**Author:** albertoadami
**Votes:** 1
**Link:** [https://leetcode.com/problems/count-numbers-with-unique-digits-ii/solutions/5731700/](https://leetcode.com/problems/count-numbers-with-unique-digits-ii/solutions/5731700/)

---

# Intuition
The problem asks us to count how many numbers between a and b (inclusive) have all unique digits. The first idea that comes to mind is to iterate through each number in the range and check whether its digits are unique. If a number has unique digits, we count it; otherwise, we skip it. We can use a dynamic programming approach to efficiently accumulate the count as we progress through the range.


# Approach
1. Dynamic Programming Setup: We maintain a dictionary dp where dp[i] represents the cumulative count of numbers with unique digits from a to i.
2. Iterate Through Range: For each number i in the range [a, b]:
    - Convert the number to a string.
    - Check if the digits are unique by comparing the length of the string with the length of the set of characters in the string.
    - If the digits are unique, set count to 1; otherwise, set it to 0.
    - Update dp[i] based on whether the digits of i are unique, adding count to the cumulative count from dp[i-1].
3. Return Result: Finally, return dp[b], which contains the total number of numbers with unique digits in the range [a, b].
# Complexity
- Time complexity:
O(n) where n is the number of numbers between a and b
- Space complexity:
O(n)
# Code
```python3 []
class Solution:
    def numberCount(self, a: int, b: int) -> int:

        dp = {}

        for i in range(a, b + 1):
            number = str(i)
            is_unique = len(number) == len(set(number))

            count = 0 if not is_unique else 1

            if i == a:
                dp[i] = count
            else:
                dp[i] = dp[i-1] + count


        return dp[b]


        
```