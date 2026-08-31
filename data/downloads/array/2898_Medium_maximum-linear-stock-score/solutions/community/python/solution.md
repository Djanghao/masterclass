# [Python3] O(n) hashmap with detailed explanation

**Author:** NotTheSwimmer
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-linear-stock-score/solutions/4158339/](https://leetcode.com/problems/maximum-linear-stock-score/solutions/4158339/)

---

## Problem Understanding
Given a list of stock prices, our goal is to find the maximum possible sum of a linear subsequence of stock prices. A subsequence is linear if the difference between successive elements is equal to the difference in their original indices.

## Approach
The key observation here is to understand how the prices change relative to their indices. If two numbers have the same difference with their indices, they can be part of the same linear subsequence.

To see this, consider the difference between the prices and their indices:

```python
prices[i] - i
```

If this difference remains constant for later elements, then those elements are part of the same linear subsequence.

### Example

Given the prices:

```python
[1,5,3,7,8]
```
Subtracting their indices, we get:

```python
[1,4,1,4,4]
```
Notice that the subsequence `[5,7,8]` corresponds to the difference sequence `[4,4,4]`.

#### Detailed Walkthrough
1. **Creating the Difference Array**

	Begin by computing the difference between each stock price and its index:

	```python
	[1,5,3,7,8] - [0,1,2,3,4] == [1,4,1,4,4]
	```

2. **Grouping by Difference**

	Next, notice that the differences which are the same correspond to a linear subsequence. In the above array, the value 4 appears thrice consecutively, which means the stock prices at those indices form a linear subsequence.

	| Price | Index | Difference |
	|-------|-------|------------|
	| 1     | 0     | 1          |
	| 5     | 1     | 4          |
	| 3     | 2     | 1          |
	| 7     | 3     | 4          |
	| 8     | 4     | 4          |

3. **Computing the Score for Each Group**

	We can compute the score for each group by adding the stock prices of each group. For the difference value 4, the score would be:

	```python
	5 + 7 + 8 == 20
	```
	For the difference value 1, the score would be:

	```python
	1 + 3 == 4
	```
	
## Efficient Calculation
Instead of manually sifting through every potential subsequence, the strategy employed here makes use of a dictionary to keep track of the cumulative sum for each difference. This ensures that the solution is both concise and efficient, making it a valuable approach for tackling similar problems.

```python
price_sum_by_difference = defaultdict(int)
for index, price in enumerate(prices):
	difference = price - index
	price_sum_by_difference[difference] += price 
```
In the above code, seen maps each difference to its cumulative sum.

### Final Result

Lastly, the maximum score that a linear selection can have is simply the maximum value in the seen dictionary:

```python
return max(price_sum_by_difference.values())
```

## Conclusion
The described approach effectively leverages the properties of linear sequences to simplify the problem. By observing that the difference between prices and their indices could be used to group potential linear subsequences, the problem is solved in an efficient O(n) manner. Below is the full implementation of the solution:

```python
class Solution:
    def maxScore(self, prices: List[int]) -> int:
        price_sum_by_difference = defaultdict(int)
        for index, price in enumerate(prices):
            difference = price - index
            price_sum_by_difference[difference] += price 
        return max(price_sum_by_difference.values())
```