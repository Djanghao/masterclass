# Go, memorization

**Author:** viktor_komarov
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-total-tastiness-of-purchased-fruits/solutions/4719355/](https://leetcode.com/problems/maximize-total-tastiness-of-purchased-fruits/solutions/4719355/)

---

# Code
```
func maxTastiness(price []int, tastiness []int, maxAmount int, maxCoupons int) int {
    var dp func(i, sum, maxCoupons int) int 
    cache := make(map[[3]int]int)

    dp = func(i, sum, maxCoupons int) int {
        if i >= len(price) {
            return 0
        }

        key := [3]int{i, sum, maxCoupons}
        if maxTastiness, ok := cache[key]; ok {
            return maxTastiness
        }

        takeFruit := 0
        if price[i] + sum <= maxAmount {
            takeFruit = tastiness[i] + dp(i+1, sum+price[i], maxCoupons)
        }
        applyCoupon := 0
        priceWithCoupon := int(math.Round(float64(price[i]/2)))
        if maxCoupons > 0 && priceWithCoupon + sum <= maxAmount {
            applyCoupon = tastiness[i] + dp(i+1, sum+priceWithCoupon, maxCoupons-1)
        }
        ignoreFruit :=  dp(i+1, sum, maxCoupons)
        cache[key] = max(applyCoupon, max(takeFruit,ignoreFruit)) 
        return cache[key]
    }  

    return dp(0, 0, maxCoupons) 
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}
```