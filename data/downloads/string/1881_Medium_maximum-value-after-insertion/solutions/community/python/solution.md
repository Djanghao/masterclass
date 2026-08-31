# 75% TC and 98% SC easy python solution

**Author:** nitanshritulon
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-value-after-insertion/solutions/2464011/](https://leetcode.com/problems/maximum-value-after-insertion/solutions/2464011/)

---

```
def maxValue(self, n: str, x: int) -> str:
	if(n[0] == "-"):
		i = 1
		while(i < len(n) and int(n[i]) <= x):
			i += 1
	else:
		i = 0
		while(i < len(n) and int(n[i]) >= x):
			i += 1
	return n[:i]+str(x)+n[i:]
```