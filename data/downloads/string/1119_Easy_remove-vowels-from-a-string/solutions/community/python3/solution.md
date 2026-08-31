# Python 3 -> 90% faster

**Author:** mybuddy29
**Votes:** 13
**Link:** [https://leetcode.com/problems/remove-vowels-from-a-string/solutions/832291/](https://leetcode.com/problems/remove-vowels-from-a-string/solutions/832291/)

---

**Suggestions to make it better are always welcomed.**

First I tried to do in place. But string assignment isn't allowed.
That's why it's good to create new string, result.

```
def removeVowels(self, S: str) -> str:
	result = []
	for i in range(len(S)):
		if S[i] not in 'aeiou':
			result.append(S[i])
	return ''.join(result)
```

**I hope that you've found this useful.
In that case, please upvote. It only motivates me to write more such posts\uD83D\uDE03**