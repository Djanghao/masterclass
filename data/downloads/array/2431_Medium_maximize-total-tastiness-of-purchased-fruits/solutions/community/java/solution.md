# Java | Easy Bottom-Up DP Solution | Space Optimized

**Author:** AyushAgrawal-A2
**Votes:** 7
**Link:** [https://leetcode.com/problems/maximize-total-tastiness-of-purchased-fruits/solutions/2677946/](https://leetcode.com/problems/maximize-total-tastiness-of-purchased-fruits/solutions/2677946/)

---

**Vanilla DP**


    public int maxTastiness(int[] price, int[] tastiness, int maxAmount, int maxCoupons) {
	
        int n = price.length;
        
        int[][][] dp = new int[n+1][maxAmount+1][maxCoupons+1];    
        // 3 dimentional array to save max tastiness at dp[x][y][z], 
		// which is max tastiness at xth fruit with y amount of total money and z amount of total coupons.
        
        for(int x=1; x<=n; x++) {   // iterate over n fruits (1 indexed for convinience).
            for(int y=0; y<=maxAmount; y++) {   // iterate over amount from 0 to maxAmount.
                for(int z=0; z<=maxCoupons; z++) {  // iterate over coupons from 0 to maxCoupon.
                    
                    // option 1 - don't buy, then tastiness will be the same as previous state i.e. previous fruit with same money and coupon.
                    dp[x][y][z] = dp[x-1][y][z];    
                    
                    // option 2 - if you have sufficient money,
					// buy and take max of previous state i.e. previous fruit with less money.
                    if(y>=price[x-1])   
                        dp[x][y][z] = Math.max(dp[x][y][z], tastiness[x-1] + dp[x-1][y-price[x-1]][z]);
                    
                    // option 3 - if you have coupon and half money required,
					// buy and take max of previous state i.e. previous fruit with less money and one less coupon.  
                    if(z>0 && y>=price[x-1]/2)
                        dp[x][y][z] = Math.max(dp[x][y][z], tastiness[x-1] + dp[x-1][y-price[x-1]/2][z-1]);
                }
            }
        }
        // answer is dp[max fruits][max money][max coupon]
        return dp[n][maxAmount][maxCoupons];
    }
* Time Complexity  - O(n * maxAmount * maxCoupons)
* Space Complexity - O(n * maxAmount * maxCoupons)




**Space Optimized**

It turns out we don't need to store max tastiness for all previous fruits. Just the last one is sufficient.




    public int maxTastiness(int[] price, int[] tastiness, int maxAmount, int maxCoupons) {
        int n = price.length;
        
        int[][] dpPrev = new int[maxAmount+1][maxCoupons+1];    
        // 2 dimentional array to save max tastiness at dp[y][z],
		// which is max tastiness at previous fruit with y amount of total money and z amount of total coupons.
        
        for(int x=1; x<=n; x++) {   // iterate over n fruits.
		
            int[][] dpCur = new int[maxAmount+1][maxCoupons+1]; // new dp array for current fruit.
			
            for(int y=0; y<=maxAmount; y++) {   // iterate over amount from 0 to maxAmount.
                for(int z=0; z<=maxCoupons; z++) {  // iterate over coupons from 0 to maxCoupon.
				
                    // option 1 - don't buy, then tastiness will be the same as previous state i.e. previous fruit with same money and coupon.
                    dpCur[y][z] = dpPrev[y][z];    
                    
                    // option 2 - if you have sufficient money,
					// buy and take max of previous state i.e. previous fruit with less money.
                    if(y>=price[x-1])   
                        dpCur[y][z] = Math.max(dpCur[y][z], tastiness[x-1] + dpPrev[y-price[x-1]][z]);
                    
                    // option 3 - if you have coupon and half money required,
					// buy and take max of previous state i.e. previous fruit with less money and one less coupon.  
                    if(z>0 && y>=price[x-1]/2)
                        dpCur[y][z] = Math.max(dpCur[y][z], tastiness[x-1] + dpPrev[y-price[x-1]/2][z-1]);
                }
            }
            dpPrev = dpCur; // make current fruit -> previous fruit for next iteration.
        }
        // answer is dp[max money][max coupon] of previous (nth) fruit.
        return dpPrev[maxAmount][maxCoupons];
    }
	
* Time Complexity  - O(n * maxAmount * maxCoupons)
* Space Complexity - O(maxAmount * maxCoupons)