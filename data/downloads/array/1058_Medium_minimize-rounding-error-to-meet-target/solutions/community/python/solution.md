# Python: Greedy solution - O(nlogn) time

**Author:** tea_for_two
**Votes:** 4
**Link:** [https://leetcode.com/problems/minimize-rounding-error-to-meet-target/solutions/807584/](https://leetcode.com/problems/minimize-rounding-error-to-meet-target/solutions/807584/)

---

Hello,

**Intuition**:
The key idea in this problem is the fact that `ceil(price) - floor(price)` is always equal to `1` or `0`:
-  E.g. 1. `ceil(0.7) - floor(0.7) ==  1`
-  E.g. 2. `ceil(2.0) - floor(2.0) ==  0`

Therefore, we can get the minimum rouding error by:
- 1st. computing the minimum rounded sum:
	-  `rounded_sum = sum of floor(prices)`.
	-   `STOP` if it's `>= target`.
- 2nd. replacing 1 `floor` by `ceil`at a time until we reach target:
	- This will increase `rounded_sum` by one `+1` or `+0`
	- Since we're looking to find the minimum rounding error, we'll choose the price with the min rounding error: `min(ceil(price) - price)`

```

def minimizeError(self, prices: List[str], target: int) -> str:
        
        float_prices = [float(price) for price in prices]
        
        # 1. Compute the min rounded sum:
        rounded_sum = 0
        rounding_error = 0
        for price in float_prices:
            rounded_price = floor(price)
            
            rounded_sum += rounded_price
            rounding_error += price - rounded_price
        if rounded_sum >= target: # STOP
            return '%.3f' % rounding_error if rounded_sum == target else '-1'
        
        elif rounded_sum + len(prices) < target:
            return '-1'
        
        # 2. Replace 1 floor by ceil at a time until we reach target: choose the price with the min rounding error
        float_prices.sort(key=lambda price: ceil(price) - price) # ... Sort prices by ceil error to get the min rounding error
        for price in float_prices:
            rounded_sum += ceil(price) - floor(price) # +1 or +0
            rounding_error += (ceil(price) - price) - (price - floor(price)) # Replace the floor rounding by the ceil rounding
            
            if rounded_sum >= target:
                break
        
        return '%.3f' % rounding_error if rounded_sum == target else '-1'

```