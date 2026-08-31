# facil solution

**Author:** irwinekabakti
**Votes:** 1
**Link:** [https://leetcode.com/problems/buy-two-chocolates/solutions/4427686/](https://leetcode.com/problems/buy-two-chocolates/solutions/4427686/)

---

# Approach
<!-- Describe your approach to solving the problem. -->
Sorting Array

# Complexity
- Time complexity: O(n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code

```typescript []
function buyChoco(prices: number[], money: number): number {
  let min1: number = Number.POSITIVE_INFINITY;
  let min2: number = Number.POSITIVE_INFINITY;

  for (const price of prices) {
    if (price < min1) {
      min2 = min1;
      min1 = price;
    } else if (price < min2) {
      min2 = price;
    }
  }

  const priceItem = min1 + min2;

  return priceItem > money ? money : money - priceItem;
};
```
```javascript []
var buyChoco = function(prices, money) {
  prices.sort((a, b) => a - b);
  const priceItem = prices[0] + prices[1];
  
  return priceItem > money ? money : money - priceItem;
};
```

```golang []
func buyChoco(prices []int, money int) int {
  min1 := math.MaxInt
  min2 := math.MaxInt

  for _, price := range prices {
	if price < min1 {
		min2 = min1
		min1 = price
	} else if price < min2 {
		min2 = price
	}
  }

  priceItem := min1 + min2

  if priceItem > money {
	return money
  }

  return money - priceItem
}
```

```ruby []
def buy_choco(prices, money)
  min1 = Float::INFINITY
  min2 = Float::INFINITY

  prices.each do |price|
    if price < min1
      min2 = min1
      min1 = price
    elsif price < min2
      min2 = price
    end
  end

  price_item = min1 + min2

  return money if price_item > money

  money - price_item    
end
```

```rust []
impl Solution {
    pub fn buy_choco(prices: Vec<i32>, money: i32) -> i32 {
      let mut min1 = i32::MAX;
      let mut min2 = i32::MAX;

      for &price in prices.iter() {
        if price < min1 {
            min2 = min1;
            min1 = price;
        } else if price < min2 {
            min2 = price;
        }
      }

      let price_item = min1 + min2;

      if price_item > money {
          money
      } else {
          money - price_item
      }
    }
}
```

