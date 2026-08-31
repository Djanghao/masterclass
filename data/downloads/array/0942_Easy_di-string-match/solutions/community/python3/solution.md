# Very simple solution in python, with explanations

**Author:** sadman022
**Votes:** 17
**Link:** [https://leetcode.com/problems/di-string-match/solutions/619851/](https://leetcode.com/problems/di-string-match/solutions/619851/)

---

the solution can be achieved with a combination of two steps:

=> proceeding forward from s (s=0)
=> proceeding backwards from l (l = length of string)
the code explains the rest. 

after the loop breaks, you still have one more number to append, which that should be?
Easy! after the loop terminates, s==l, so append any one. and you're good to go 

```
def diStringMatch(self, S: str) -> List[int]:
	s, l = 0, len(S)
	res = []
	for c in S:
		if c=="I":
			res.append(s)
			s+=1
		else:
			res.append(l)
			l-=1
	res.append(s)
	return res
```