# ✅Beats 100% in Java - Explained with [ Video ] - C++/Java/Python/JS  - No Sorting - Visualized

**Author:** lancertech6
**Votes:** 43
**Link:** [https://leetcode.com/problems/buy-two-chocolates/solutions/4427521/](https://leetcode.com/problems/buy-two-chocolates/solutions/4427521/)

---


![Screenshot 2023-12-20 075307.png](./images/0.png)


# YouTube Video Explanation:

[https://youtu.be/weqf9dNcIIA](https://youtu.be/weqf9dNcIIA)
<!-- **If you want a video for this question please write in the comments** -->

**\uD83D\uDD25 Please like, share, and subscribe to support our channel's mission of making complex concepts easy to understand.**

Subscribe Link: https://www.youtube.com/@leetlogics/?sub_confirmation=1

*Subscribe Goal: 1000 Subscribers*
*Current Subscribers: 917*

---

# Example Explanation

Let's see a step-by-step explanation using tables:

### Algorithm Explanation

#### Input
- `arr`: An array representing the prices of chocolates.
- `key`: The initial amount of money.

#### Variables
- `ans`: To store the minimum sum of prices.
- `fin`: To store the leftover amount.

#### Process

| Step | Description |
|------|-------------|
| 1    | Initialize `ans` to `Integer.MAX_VALUE`. |
| 2    | Iterate through each pair of chocolates using two nested loops. |
| 3    | Calculate the sum `arr[i] + arr[j]` for each pair. |
| 4    | Update `ans` with the minimum of its current value and the calculated sum. |
| 5    | After the loops, calculate the leftover amount `fin` as `key - ans`. |
| 6    | If `fin` is non-negative, return `fin`; otherwise, return the initial money `key`. |


### Example

```plaintext
Input: arr = [3, 2, 3], key = 3
Output: 3

Explanation:
   Iterate through pairs:
   (3, 2) -> sum = 5
   (3, 3) -> sum = 6
   (2, 3) -> sum = 5

   Minimum sum = 5

   Leftover amount = key - minimum sum = 3 - 5 = -2 (negative)

   Return initial money (key) = 3
```
---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The goal is to find the minimum sum of prices for two chocolates such that the leftover money is non-negative. We need to iterate through all possible pairs of chocolates and calculate the sum of their prices. The minimum sum will be subtracted from the initial money to find the leftover amount.

# Approach
<!-- Describe your approach to solving the problem. -->
1. Initialize a variable `ans` to `Integer.MAX_VALUE` to keep track of the minimum sum of chocolate prices.
2. Iterate through each pair of chocolates using two nested loops.
3. For each pair (i, j), calculate the sum `arr[i] + arr[j]`.
4. Update `ans` with the minimum of its current value and the calculated sum.
5. After the loops, calculate the leftover amount `fin` as `key - ans`.
6. If `fin` is non-negative, return `fin`; otherwise, return the initial money `key`.

# Complexity
- The time complexity is O(N^2), where N is the length of the array `arr`.
- The space complexity is O(1) as we are using constant space.

# Code
```java []
class Solution {
    public int buyChoco(int[] arr, int key) {

        int ans = Integer.MAX_VALUE;
        int fin;
        for (int i = 0; i < arr.length; i++) {
            for (int j = 0; j < arr.length; j++) {
                if (i != j ) {
                    int sum = arr[i] + arr[j];
                    ans = Math.min(ans, sum);
                }
            }
        }
       
        fin = key - ans;
        if(fin>=0){
        return fin;
        }
        else{
            return key;
        }
    }
}
```
```C++ []
class Solution {
public:
    int buyChoco(vector<int>& prices, int money) {
        int ans = INT_MAX;;
        int fin;
        for (int i = 0; i < prices.size(); i++) {
            for (int j = 0; j < prices.size(); j++) {
                if (i != j ) {
                    int sum = prices[i] + prices[j];
                    ans = min(ans, sum);
                }
            }
        }
       
        fin = money - ans;
        if(fin>=0){
        return fin;
        }
        else{
            return money;
        }
    }
};
```
```Python []
class Solution(object):
    def buyChoco(self, arr, key):
        ans = float('inf')

        for i in range(len(arr)):
            for j in range(len(arr)):
                if i != j:
                    total = arr[i] + arr[j]
                    ans = min(ans, total)

        fin = key - ans
        if(fin>=0):
            return fin
        else:
            return key
        
```
```JavaScript []
var buyChoco = function(arr, key) {
    let ans = Infinity;
        let fin;

        for (let i = 0; i < arr.length; ++i) {
            for (let j = 0; j < arr.length; ++j) {
                if (i !== j) {
                    const sum = arr[i] + arr[j];
                    ans = Math.min(ans, sum);
                }
            }
        }

        fin = key - ans;
        if(fin>=0){
        return fin;
        }
        else{
            return key;
        }
};
```


![upvote.png](./images/1.png)
