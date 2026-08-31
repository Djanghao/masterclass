# [Greedy + Tutorial] Buy Two Chocolates

**Author:** never_get_piped
**Votes:** 9
**Link:** [https://leetcode.com/problems/buy-two-chocolates/solutions/5330601/](https://leetcode.com/problems/buy-two-chocolates/solutions/5330601/)

---

**Topic** :  Greedy
Greedy algorithms are a class of algorithms that make locally optimal choices at each step with the hope of finding a global optimum solution. In these algorithms, decisions are made based on the information available at the current moment without considering the consequences of these decisions in the future. The key idea is to select the best possible choice at each step, leading to a solution that may not always be the most optimal but is often good enough for many problems. (GFG Reference)

___

## Solution 1
The **greedy intuition** suggests selecting the two chocolates with the smallest prices to minimize the total money spent.

We can start by sorting the array and then compare the sum of the two smallest elements with `money`. If the sum is less than or equal to `money`, we return the difference between `money` and the sum of the two smallest elements. Otherwise, we simply return `money`.

```c++ []
class Solution {
public:
    int buyChoco(vector<int>& prices, int money) {
        sort(prices.begin(), prices.end());
        if(prices[0] + prices[1] > money) {
            return money;
        }
        return money - (prices[0] + prices[1]);
    }
};
```
```java []
class Solution {
    public int buyChoco(int[] prices, int money) {
        Arrays.sort(prices);
        if (prices[0] + prices[1] > money) {
            return money;
        }
        return money - (prices[0] + prices[1]);
    }
}
```
```python []
class Solution:
    def buyChoco(self, prices: List[int], money: int) -> int:
        prices.sort()
        if prices[0] + prices[1] > money:
            return money
        return money - (prices[0] + prices[1])
```
```Go []
func buyChoco(prices []int, money int) int {
    sort.Ints(prices)
	if prices[0] + prices[1] > money {
		return money
	}
	return money - (prices[0] + prices[1])
}
```
```PHP []
class Solution {

    /**
     * @param Integer[] $prices
     * @param Integer $money
     * @return Integer
     */
    function buyChoco($prices, $money) {
        sort($prices);
        if ($prices[0] + $prices[1] > $money) {
            return $money;
        }
        return $money - ($prices[0] + $prices[1]);
    }
}
```
```javascript []
/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    prices.sort((a, b) => a - b);
    if (prices[0] + prices[1] > money) {
        return money;
    }
    return money - (prices[0] + prices[1]);
};
```

**Complexity**:
* Time Complexity : `O(n log n)`
* Space Complexity : `O(1)`

## Solution 2
The core concept remains unchanged from the previous solution. We can efficiently find the two smallest elements in the array without sorting it, achieving linear time complexity.

```c++ []
class Solution {
public:
    int buyChoco(vector<int>& prices, int money) {
        vector<int> two(2, 1000000000);
        for(int i = 0; i < prices.size(); i++) {
            if(prices[i] < two[0]) {
                two[1] = two[0];
                two[0] = prices[i];
            } else if(prices[i] < two[1]) {
                two[1] = prices[i];
            }
        }
        return (two[0] + two[1] > money) ? money : money - (two[0] + two[1]);
    }
};
```
```java []
class Solution {
    public int buyChoco(int[] prices, int money) {
        int[] two = {Integer.MAX_VALUE, Integer.MAX_VALUE};
        for (int i = 0; i < prices.length; i++) {
            if (prices[i] < two[0]) {
                two[1] = two[0];
                two[0] = prices[i];
            } else if (prices[i] < two[1]) {
                two[1] = prices[i];
            }
        }
        return (two[0] + two[1] > money) ? money : money - (two[0] + two[1]);
    }
}
```
```python []
class Solution:
    def buyChoco(self, prices: List[int], money: int) -> int:
        two = [float('inf'), float('inf')]
        for price in prices:
            if price < two[0]:
                two[1] = two[0]
                two[0] = price
            elif price < two[1]:
                two[1] = price
        return money if two[0] + two[1] > money else money - (two[0] + two[1])
```
```Go []
func buyChoco(prices []int, money int) int {
    two := []int{math.MaxInt32, math.MaxInt32}
	for _, price := range prices {
		if price < two[0] {
			two[1] = two[0]
			two[0] = price
		} else if price < two[1] {
			two[1] = price
		}
	}
	if two[0] + two[1] > money {
		return money
	}
	return money - (two[0] + two[1])
}
```
```PHP []
class Solution {

    /**
     * @param Integer[] $prices
     * @param Integer $money
     * @return Integer
     */
    function buyChoco($prices, $money) {
        $two = [PHP_INT_MAX, PHP_INT_MAX];
        foreach ($prices as $price) {
            if ($price < $two[0]) {
                $two[1] = $two[0];
                $two[0] = $price;
            } elseif ($price < $two[1]) {
                $two[1] = $price;
            }
        }
        return ($two[0] + $two[1] > $money) ? $money : $money - ($two[0] + $two[1]);
    }
}
```
```javascript []
/**
 * @param {number[]} prices
 * @param {number} money
 * @return {number}
 */
var buyChoco = function(prices, money) {
    let two = [Number.MAX_SAFE_INTEGER, Number.MAX_SAFE_INTEGER];
    for (let price of prices) {
        if (price < two[0]) {
            two[1] = two[0];
            two[0] = price;
        } else if (price < two[1]) {
            two[1] = price;
        }
    }
    return (two[0] + two[1] > money) ? money : money - (two[0] + two[1]);
};
```


**Complexity**:
* Time Complexity : `O(n)`
* Space Complexity : `O(1)`

**Feel free to leave a comment if something is confusing, or if you have any suggestions on how I can improve the post.**