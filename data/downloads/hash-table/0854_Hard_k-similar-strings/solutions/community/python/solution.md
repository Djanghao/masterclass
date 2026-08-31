# Python Graph BFS

**Author:** WangQiuc
**Votes:** 57
**Link:** [https://leetcode.com/problems/k-similar-strings/solutions/269517/](https://leetcode.com/problems/k-similar-strings/solutions/269517/)

---

We can treat each string as a node. If two strings ```x``` and ```y``` differ by one swap and that swap makes ```x``` more simliar to target string ```B```, there is a directed edges between them.
So we can build a directed graph BFS based on that to find the value of ```k```.

I used a function ```nei``` to generate all children node of a node ```x```. Each child node requires one swap to change from ```x``` and each child node has one character more similiar to ```B``` than ```x```.

Then we just perform a regular BFS. Since A and B are garuanteed to be k-similiar. We can always reach ```B``` from ```A```.
```
def kSimilarity(A, B):
	def nei(x):
		i = 0
		while x[i] == B[i]: i+=1
		for j in range(i+1, len(x)):
			if x[j] == B[i]: yield x[:i]+x[j]+x[i+1:j]+x[i]+x[j+1:]
	q, seen = [(A,0)], {A}
	for x, d in q:
		if x == B: return d
		for y in nei(x):
			if y not in seen:
				seen.add(y), q.append((y,d+1))
```