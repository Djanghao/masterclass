# bs ^^

**Author:** andrii_khlevniuk
**Votes:** 0
**Link:** [https://leetcode.com/problems/divide-chocolate/solutions/3254564/](https://leetcode.com/problems/divide-chocolate/solutions/3254564/)

---

**Linearithmic time / range binary search**
**time: `O(N log R)`; space: `O(1)`**
```
int maximizeSweetness(vector<int> & s, int K) 
{
	int l{};
	for(int h{INT_MAX}; l+1<h; )
	{
		int n{}, m{midpoint(l,h)};
		for(int c{}; const auto & s : s)
			if((c+=s)>=m) ++n, c=0;
		(K<n ? l : h) = m;
	}
	return l;
}
```

**Similar bs problems:**
[875. Koko Eating Bananas](https://leetcode.com/problems/koko-eating-bananas/discuss/2053517/bs?currentPage=1&orderBy=most_relevant&query=android)
[1891. Cutting Ribbons](https://leetcode.com/problems/cutting-ribbons/discuss/2963593/bs)
[2064. Minimized Maximum of Products Distributed to Any Store](https://leetcode.com/problems/minimized-maximum-of-products-distributed-to-any-store/discuss/2127417/binary-search)
[1760. Minimum Limit of Balls in a Bag](https://leetcode.com/problems/minimum-limit-of-balls-in-a-bag/discuss/1676227/binary-search)
[1300. Sum of Mutated Array Closest to Target](https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/discuss/2969866/bs)
[1552. Magnetic Force Between Two Balls](https://leetcode.com/problems/magnetic-force-between-two-balls/discuss/3251398/ok)
[2517. Maximum Tastiness of Candy Basket](https://leetcode.com/problems/maximum-tastiness-of-candy-basket/discuss/3251393/ok)
[1482. Minimum Number of Days to Make m Bouquets](https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/discuss/3253585/bs)
[1231. Divide Chocolate](https://leetcode.com/problems/divide-chocolate/discuss/3254564/bs)
[2226. Maximum Candies Allocated to K Children](https://leetcode.com/problems/maximum-candies-allocated-to-k-children/discuss/3807049/bs)
[2187. Minimum Time to Complete Trips](https://leetcode.com/problems/minimum-time-to-complete-trips/discuss/3808940/bs)
[2594. Minimum Time to Repair Cars](https://leetcode.com/problems/minimum-time-to-repair-cars/discuss/3945204/range-bs)
[2560. House Robber IV](https://leetcode.com/problems/house-robber-iv/discuss/5461921/ok)