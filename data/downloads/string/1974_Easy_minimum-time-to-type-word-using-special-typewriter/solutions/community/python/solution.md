# 2 Line code simple to understand => PYTHON

**Author:** sudharshan1706
**Votes:** 20
**Link:** [https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/solutions/1437003/](https://leetcode.com/problems/minimum-time-to-type-word-using-special-typewriter/solutions/1437003/)

---


```
pre = "a"
sum1 = 0
for i in word:
	L = abs((ord(i)-ord(pre)))
	sum1 += min(L,26-L)
	pre = i
return (sum1+len(word))
```


hope it is usefull, UPVOTE will make my day :) 
thank you in advance