# Simple Python Solution | (Buy, Don't Buy, Buy with Coupon)

**Author:** anish_adnani
**Votes:** 11
**Link:** [https://leetcode.com/problems/maximize-total-tastiness-of-purchased-fruits/solutions/2669572/](https://leetcode.com/problems/maximize-total-tastiness-of-purchased-fruits/solutions/2669572/)

---

Clean and Simple Solution
Traverse the array of fruits
There are only 3 possible operations for any fruit 
	1. Buy the fruit without coupon
	2. Buy the fruit with coupon
	3. Do not buy the fruit
This makes a simple base for recursion
Cache (Memoization) the results to avoid recomputation (Saving from TLE)
```
class Solution:
    def maxTastiness(self, price: List[int], tastiness: List[int], maxAmount: int, maxCoupons: int) -> int:
        
        ## [buy without coupon, no-buy, buy with coupon] are the only 3 options for each fruit
        n = len(price)
        
        @cache
        def find_ans(indx, ma, mc):
            if indx == n:
                return 0
            
            else:
                ans = 0
                
                ans = max(ans, find_ans(indx+1,ma,mc)) ## do not buy this fruit

                if ma >= price[indx]: ## buy this fruit without coupon
                    ans = max(ans, tastiness[indx] + find_ans(indx+1, ma-price[indx], mc))


                if mc >= 1 and ma >= price[indx]//2: ## buy this fruit with coupon
                    ans = max(ans, tastiness[indx] + find_ans(indx+1, ma-(price[indx]//2), mc-1))

            return ans

        return find_ans(0, maxAmount, maxCoupons)
```