# Simple, Beginner Friendly & Dry Run | Greedy Approach & Readable Sol |Time O(N) & Space O(1)|Gits✅✅✅

**Author:** GiteshSK_12
**Votes:** 360
**Link:** [https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/solutions/4836121/](https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/solutions/4836121/)

---

# Intuition \uD83D\uDC48

In the given problem, we are provided with an array named "prices," where `prices[i]` represents the current price of a stock on day `i`. The task is to determine the maximum profit that can be achieved from selling the stock.

# Approach \uD83D\uDC48

To solve this question we will use Greedy Algorithm.

**Now if you don't know anything about Greedy algorithm here is the small explanation of the Greedy.**

Greedy algorithms are a class of algorithms that make locally optimal choices at each step with the hope of finding a global optimum solution. In these algorithms, decisions are made based on the information available at the current moment without considering the consequences of these decisions in the future. The key idea is to select the best possible choice at each step, leading to a solution that may not always be the most optimal but is often good enough for many problems.

# Code Explanation \uD83D\uDC48
*   **Variable Initialization**:
    
    *   `max` is initialized to `0`. This variable will accumulate the maximum profit throughout the iteration.
    *   `start` is initialized to `prices[0]`, the price of the stock on the first day. This variable represents the buying price of the stock.
    *   `len` is initialized to `prices.length`, the length of the `prices` array, representing the total number of days.
*   **Iteration**: A `for` loop iterates through the `prices` array starting from the second element (`i = 1`) to the end of the array (`i < len`). This loop is used to calculate the profit for each transaction.
    
*   **Profit Calculation**:
    
    *   Within the loop, there's an `if` statement checking if the current price (`prices[i]`) is greater than the buying price (`start`). If true, it indicates a potential profit opportunity.
    *   The difference between the current price and the buying price (`prices[i] - start`) is calculated and added to `max`. This step simulates selling the stock bought at `start` price, capturing the profit, and then considering the current price as a new buying price for potential future transactions.
    *   Regardless of whether a profit was made or not, the `start` is updated to the current price (`prices[i]`). This step prepares for the next iteration, considering the current day's price as the new buying price.
*   **Return Statement**: After the loop finishes executing, the method returns the accumulated `max` value, which represents the maximum profit that could have been achieved based on the given stock prices.

# Complexity \uD83D\uDC48
- Time complexity: O(N)

- Space complexity: O(1)

# Code \uD83D\uDC48

```C []
int maxProfit(int* prices, int pricesSize) {
    int max = 0;
    int start = prices[0];
    for(int i = 1;i<pricesSize; i++){
        if(start < prices[i]){
            max += prices[i] - start;
        }
        start = prices[i];
    }
    return max;
}
```
```C++ []
class Solution {
public:
    int maxProfit(vector<int>& prices) {
        int max = 0;
        int start = prices[0];
        int len = prices.size();
        for(int i = 1;i<len; i++){
            if(start < prices[i]){
                max += prices[i] - start;
            }
            start = prices[i];
        }
        return max;
    }
};
```
```Java []
class Solution {
    public int maxProfit(int[] prices) {
        int max = 0;
        int start = prices[0];
        int len = prices.length;
        for(int i = 1;i<len; i++){
            if(start < prices[i]) max += prices[i] - start;
            start = prices[i];
        }
        return max;
    }
}
```
```JavaScript []
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let start = prices[0];
    let len = prices.length;
        for(let i = 1;i<len; i++){
            if(start < prices[i]){
                max += prices[i] - start;
            }
            start = prices[i];
        }
    return max;
};
```
```TypeScript []
function maxProfit(prices: number[]): number {
    let max = 0;
    let start = prices[0];
    let len = prices.length;
    for(let i = 1;i<len; i++){
        if(start < prices[i]) max += prices[i] - start;
        start = prices[i];
    }
    return max;
};
```
```C# []
public class Solution {
    public int MaxProfit(int[] prices) {
        int max = 0;
        int start = prices[0];
        int len = prices.Length;
        for(int i = 1;i<len; i++){
            if(start < prices[i]){
                max += prices[i] - start;
            }
            start = prices[i];
        }
        return max;
    }
}
```
```Python []
class Solution(object):
    def maxProfit(self, prices):
        """
        :type prices: List[int]
        :rtype: int
        """
        max = 0
        start = prices[0]
        len1 = len(prices)
        for i in range(0 , len1):
            if start < prices[i]: 
                max += prices[i] - start
            start = prices[i]
        return max
```
```ruby []
# @param {Integer[]} prices
# @return {Integer}
def max_profit(prices)
    max = 0
    start = prices[0]
    len1 = prices.length() - 1
    for i in 0..len1 do
        if start < prices[i] 
            max += prices[i] - start
        end
        start = prices[i]
    end
    return max
end
```
```PHP []
class Solution {

    /**
     * @param Integer[] $prices
     * @return Integer
     */
    function maxProfit($prices) {
        $maxProfit = 0;
        $len = count($prices);
        for($i = 1; $i < $len; $i++) {
            if($prices[$i-1] < $prices[$i]) {
                $maxProfit += $prices[$i] - $prices[$i-1];
            }
        }
        return $maxProfit;
    }
}
```

# Dry Run \uD83D\uDC48

Initial Setup:

*   `max` = 0 (Maximum profit initialized to 0)
*   `start` = prices\\[0\\] = 7 (Starting price is the price on the first day)
*   `len` = prices.length = 6 (Length of the prices array)
*   `prices` array = \\[7, 1, 5, 3, 6, 4\\]

The for loop iterates from `i = 1` to `i = 5` (since `len = 6`):

1.  **i = 1**: prices\\[i\\] = 1
    
    *   `start < prices[i]`? No (7 is not less than 1)
    *   `start` is updated to 1.
    *   `max` remains 0.
2.  **i = 2**: prices\\[i\\] = 5
    
    *   `start < prices[i]`? Yes (1 is less than 5)
    *   `max += prices[i] - start` = 0 + (5 - 1) = 4.
    *   `start` is updated to 5.
3.  **i = 3**: prices\\[i\\] = 3
    
    *   `start < prices[i]`? No (5 is not less than 3)
    *   `start` is updated to 3.
    *   `max` remains 4.
4.  **i = 4**: prices\\[i\\] = 6
    
    *   `start < prices[i]`? Yes (3 is less than 6)
    *   `max += prices[i] - start` = 4 + (6 - 3) = 7.
    *   `start` is updated to 6.
5.  **i = 5**: prices\\[i\\] = 4
    
    *   `start < prices[i]`? No (6 is not less than 4)
    *   `start` is updated to 4.
    *   `max` remains 7.

End of loop, the method returns `max = 7`.


# If you find the solution and the explanation helpful, please upvote me.\u2764\uFE0F\u2764\uFE0F\u2764\uFE0F\u2764\uFE0F\u2764\uFE0F\u2764\uFE0F

![Screenshot 2024-02-08 140339.png](./images/0.png)

# Note -> 
**I will upload same solution using Dynamic Approach.**
