# Python simple beats 99.45%

**Author:** notSoNovice
**Votes:** 3
**Link:** [https://leetcode.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance/solutions/829239/](https://leetcode.com/problems/filter-restaurants-by-vegan-friendly-price-and-distance/solutions/829239/)

---

Filter out the restaurants according to the restrictions and then sort and return.
```
ans = []
        for rest in restaurants:
            if rest[3]<=maxPrice and rest[4]<=maxDistance:
                if veganFriendly==1 and rest[2]!=veganFriendly:
                    continue
                ans.append(rest)
        # print(ans)         
        ans = [x[0] for x in sorted(ans, key=lambda x: (-x[1], -x[0]))]
        return ans
```
Time complexity: O(nlogn)
Space complexity: O(n)