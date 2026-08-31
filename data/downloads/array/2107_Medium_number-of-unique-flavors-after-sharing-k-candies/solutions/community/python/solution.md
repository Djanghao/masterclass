# Python Slide Window

**Author:** WangQiuc
**Votes:** 3
**Link:** [https://leetcode.com/problems/number-of-unique-flavors-after-sharing-k-candies/solutions/1630748/](https://leetcode.com/problems/number-of-unique-flavors-after-sharing-k-candies/solutions/1630748/)

---

Move the k-size window from left and right and keep updating the counter `ctr` which counts the number of each unique candy.
When the left end candy's count change from 0 to 1, increase the `cnt` by 1 (You get that candy back from your sister)
When the right end candy' count change from 1 to 0, decrease the `cnt` by 1 (You share this candy to your sister)
```
def shareCandies(candies: List[int], k: int) -> int:
	ctr = collections.Counter(candies[k:])
	ans = cnt = sum(v != 0 for v in ctr.values())
	for i, x in enumerate(candies[k:]):
		ctr[x] -= 1
		cnt += (ctr[candies[i]] == 0) - (ctr[x] == 0)
		ctr[candies[i]] += 1
		ans = max(ans, cnt)
	return ans
```