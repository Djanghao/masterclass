# Python, 3 steps

**Author:** warmr0bot
**Votes:** 98
**Link:** [https://leetcode.com/problems/minimum-number-of-people-to-teach/solutions/1031079/](https://leetcode.com/problems/minimum-number-of-people-to-teach/solutions/1031079/)

---

First, find those who can't communicate with each other.
Then, find the most popular language among them.
Then teach that language to the minority who doesn't speak it: 
```
def minimumTeachings(self, n: int, languages: List[List[int]], friendships: List[List[int]]) -> int:
	languages = [set(l) for l in languages]

	dontspeak = set()
	for u, v in friendships:
		u = u-1
		v = v-1
		if languages[u] & languages[v]: continue
		dontspeak.add(u)
		dontspeak.add(v)

	langcount = Counter()
	for f in dontspeak:
		for l in languages[f]:
			langcount[l] += 1

	return 0 if not dontspeak else len(dontspeak) - max(list(langcount.values()))
```