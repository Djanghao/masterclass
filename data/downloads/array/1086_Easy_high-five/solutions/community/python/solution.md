# Python 3 -> 97.09% faster. bisect.insort simplified with simple code

**Author:** mybuddy29
**Votes:** 45
**Link:** [https://leetcode.com/problems/high-five/solutions/819216/](https://leetcode.com/problems/high-five/solutions/819216/)

---

**Suggestions to make it better are always welcomed.**

**Found this technique in one of the discussion forums** which uses bisect.insort(). I loved it because it's a 4 line code. cc: @JummyEgg
```
D = collections.defaultdict(list)
for student, score in items:
	bisect.insort(D[student], score) # insert in a list in increasing order.
return [[student, sum(D[student][-5:])//5] for student in D]
```

**For new Python developers, above code works as below:**
```
def highFive(self, items: List[List[int]]) -> List[List[int]]:
	mapping = {}
	result = []
	for x in items:                        # For every student, create a list of their scores using dictionary
		if x[0] in mapping:
			mapping[x[0]].append(x[1])
		else:
			mapping[x[0]] = [x[1]]
			
	for x, y in mapping.items():            # Traverse through the dictionary elements and take average of sorted scores.
		y.sort()
		total = 0
		i = 0
		while i < 5 and i < len(y):         # Since the problem statement doesn't say there will be at least 5 scores for each student, 
			total += y[i]                   # instead of using sum() and dividing by 5, I used loop and divided by i.
			i += 1
		result.append([x, total//i])        # Store the average for every student id in result
	return result
```

**I hope that you've found this useful.
In that case, please upvote. It only motivates me to write more such posts\uD83D\uDE03**