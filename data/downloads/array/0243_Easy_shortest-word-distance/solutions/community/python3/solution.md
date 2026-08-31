# Python 3 -> 99.31% faster. O(n) time complexity

**Author:** mybuddy29
**Votes:** 38
**Link:** [https://leetcode.com/problems/shortest-word-distance/solutions/934595/](https://leetcode.com/problems/shortest-word-distance/solutions/934595/)

---

**Suggestions to make it better are always welcomed.**

We are comparing 2 positions in words list. Let's use 2 pointer approach.

```
def shortestDistance(self, words: List[str], word1: str, word2: str) -> int:
	shortestDistance = len(words)
	position1, position2 = -1, -1
	for i in range(len(words)):
		if words[i]==word1:
			position1 = i
		elif words[i]==word2:
			position2 = i

		if position1!=-1 and position2!=-1:
			shortestDistance = min(shortestDistance, abs(position1 - position2))

	return shortestDistance
```

Other approach is to store all the positions of word1 in hashmap and also the positions of word2.
Then use nested for loops to iterate on all the positions of these 2 words and calculate the shortestDistance.
Unfortunately this approach won't be constant space.

**I hope that you've found this useful.
In that case, please upvote. It only motivates me to write more such posts\uD83D\uDE03**