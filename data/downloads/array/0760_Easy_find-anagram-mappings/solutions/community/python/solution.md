# Python 3 -> 2 solutions. One with dictionary and other without.

**Author:** mybuddy29
**Votes:** 10
**Link:** [https://leetcode.com/problems/find-anagram-mappings/solutions/819159/](https://leetcode.com/problems/find-anagram-mappings/solutions/819159/)

---

**Suggestions to make it better are always welcomed.**

Solution 2 is faster. Both the solutions have T = O(n) and S = O(n)

**Solution 1:** Using dictionary
```
def anagramMappings(self, A: List[int], B: List[int]) -> List[int]:
	mapping = {}
	for i in range(len(B)):
		if B[i] not in mapping:
			mapping[B[i]] = i
	return [mapping[A[i]] for i in range(len(A))]
```

**Solution 2:** Without using dictionary. To do this, we use list.index() to get the index of A[i] in B
```
def anagramMappings(self, A: List[int], B: List[int]) -> List[int]:
	result = []
	for i in range(len(A)):
		result.append(B.index(A[i]))
	return result
```

**If this solution helped, please upvote it for others to take advantage of it and learn their techniques**