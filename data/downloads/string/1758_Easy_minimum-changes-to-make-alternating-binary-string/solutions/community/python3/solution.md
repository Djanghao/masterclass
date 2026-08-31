# Python | 51ms Faster than 92% |  Soln without '%' or 'sum'

**Author:** IdealYuvi
**Votes:** 28
**Link:** [https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/solutions/2376974/](https://leetcode.com/problems/minimum-changes-to-make-alternating-binary-string/solutions/2376974/)

---

From an observation we can find that ```s = "0100"``` can have only two solutions which are ``` 0101``` and ```1010```.

If we find the number of operations to change ```s``` to first solution ```0101```, we can find the number of operations required to change ```s``` to second solution ```1010``` with simple maths.
```0100 -> 0101``` takes ```1``` operation
```0100 -> 1010``` takes ```3``` operations, which is nothing but ```len(s) - number of operations for previous solution``` that is ```4 - 1 = 3```

Another example,
```s = "100101"``` can have only two solutions which are ```101010``` and ```010101```
```100101 -> 101010``` takes ```4``` operations
```100101 -> 010101``` takes ```2``` operations, which is nothing but ```len(s) - number of operations for previous solution``` that is ```6 - 4 = 2```

Time: ```O(n)```
Space: ```O(1)```
```
def minOperations(self, s: str) -> int:
	startsWith0 = 0
	flag = 0 # here we are first calculating the soln starting with 0, so flag = 0

	for c in s:
		if int(c) != flag:
			startsWith0 += 1

		flag = not flag # alternates b/w 0 & 1

	startsWith1 = len(s) - startsWith0

	return min(startsWith0, startsWith1)
```

![image](./images/0.png)

