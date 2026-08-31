# 🚀✅🚀 101% beats Easy solution Time complexity: O(n) ✅🔥

**Author:** ilxamovic
**Votes:** 30
**Link:** [https://leetcode.com/problems/buy-two-chocolates/solutions/4427795/](https://leetcode.com/problems/buy-two-chocolates/solutions/4427795/)

---

![image.png](./images/0.png)


# Intuition
The code aims to find two minimum values in the given array `prices` and then checks if their sum is less than or equal to a given `money` value. If true, it returns the remaining money after buying the chocolates; otherwise, it returns the original money.

# Approach
The approach is to iterate through the array `prices` and maintain the two minimum values (`min1` and `min2`). The loop compares each element with these minimum values and updates them accordingly. After the loop, it checks if the sum of the two minimum values is less than or equal to `money`. If true, it returns the remaining money after buying chocolates (original money minus the sum of two minimum values); otherwise, it returns the original money.

# Complexity
- Time complexity: O(n) where n is the length of the `prices` array. The code iterates through the array once.
- Space complexity: O(1) because the algorithm uses a constant amount of space to store variables (`min1` and `min2`). The space required does not depend on the input size.

# Code
```csharp []
public class Solution {
    public int BuyChoco(int[] prices, int money) {
        var (min1, min2) = (101, 101);
        for (int i = 0; i < prices.Length; i++){
            if (prices[i] < min1) {
                min2 = min1;
                min1 = prices[i];
            }
            else if (prices[i] < min2) {
                min2 = prices[i];
            }
        }
        return (min1 + min2 <= money) ? money - (min1 + min2) : money;
    }
}
``` 
```Java []
public class Solution {
    public int buyChoco(int[] prices, int money) {
        int min1 = 101, min2 = 101;
        for (int price : prices) {
            if (price < min1) {
                min2 = min1;
                min1 = price;
            } else if (price < min2) {
                min2 = price;
            }
        }
        return (min1 + min2 <= money) ? money - (min1 + min2) : money;
    }
}
```
```Python []
class Solution:
    def buy_choco(self, prices, money):
        min1, min2 = 101, 101
        for price in prices:
            if price < min1:
                min2, min1 = min1, price
            elif price < min2:
                min2 = price
        return money - (min1 + min2) if min1 + min2 <= money else money
```
```Go []
func buyChoco(prices []int, money int) int {
    min1, min2 := 101, 101
    for _, price := range prices {
        if price < min1 {
            min2, min1 = min1, price
        } else if price < min2 {
            min2 = price
        }
    }
    if min1+min2 <= money {
        return money - (min1 + min2)
    }
    return money
}
```
```Rust []
fn buy_choco(prices: &[i32], money: i32) -> i32 {
    let mut min1 = 101;
    let mut min2 = 101;

    for &price in prices {
        if price < min1 {
            min2 = min1;
            min1 = price;
        } else if price < min2 {
            min2 = price;
        }
    }

    if min1 + min2 <= money {
        return money - (min1 + min2);
    }

    money
}
```

![image name](https://i.imgur.com/JdL5kBI.gif)

- Please upvote me !!!