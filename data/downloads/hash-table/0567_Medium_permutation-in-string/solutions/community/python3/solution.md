# ✔️ [Python3] SLIDING WINDOW OPTIMIZED ( ❝̆ ·̫̮ ❝̆ )✧, Explained

**Author:** artod
**Votes:** 280
**Link:** [https://leetcode.com/problems/permutation-in-string/solutions/1761953/](https://leetcode.com/problems/permutation-in-string/solutions/1761953/)

---

**UPVOTE if you like (\uD83C\uDF38\u25E0\u203F\u25E0), If you have any question, feel free to ask.**

The only thing we care about any particular substring in `s2` is having the same number of characters as in the `s1`. So we create a hashmap with the count of every character in the string `s1`. Then we slide a window over the string `s2` and decrease the counter for characters that occurred in the window. As soon as all counters in the hashmap get to zero that means we encountered the permutation.

Time: **O(n)** - linear for window sliding and counter
Space: **O(1)** - conctant for dictionary with the maximum 26 pairs (English alphabet)

```
def checkInclusion(self, s1: str, s2: str) -> bool:
	cntr, w = Counter(s1), len(s1)   

	for i in range(len(s2)):
		if s2[i] in cntr: 
			cntr[s2[i]] -= 1
		if i >= w and s2[i-w] in cntr: 
			cntr[s2[i-w]] += 1

		if all([cntr[i] == 0 for i in cntr]): # see optimized code below
			return True

	return False
```

### Optimized:
We can use an auxiliary variable to count a number of characters whose frequency gets to zero during window sliding. That helps us to avoid iterating over the hashmap for every cycle tick to check whether frequencies turned into zero.
```
def checkInclusion(self, s1: str, s2: str) -> bool:
	cntr, w, match = Counter(s1), len(s1), 0     

	for i in range(len(s2)):
		if s2[i] in cntr:
			if not cntr[s2[i]]: match -= 1
			cntr[s2[i]] -= 1
			if not cntr[s2[i]]: match += 1

		if i >= w and s2[i-w] in cntr:
			if not cntr[s2[i-w]]: match -= 1
			cntr[s2[i-w]] += 1
			if not cntr[s2[i-w]]: match += 1

		if match == len(cntr):
			return True

	return False
```

**UPVOTE if you like (\uD83C\uDF38\u25E0\u203F\u25E0), If you have any question, feel free to ask.**