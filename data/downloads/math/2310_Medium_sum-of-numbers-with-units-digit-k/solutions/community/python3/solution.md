# O(1) Python

**Author:** mrabhishek1379
**Votes:** 3
**Link:** [https://leetcode.com/problems/sum-of-numbers-with-units-digit-k/solutions/2195312/](https://leetcode.com/problems/sum-of-numbers-with-units-digit-k/solutions/2195312/)

---

```
	def minimumNumbers(self, num: int, k: int) -> int:
        t = num%10
        if num==0:
            return 0
        if num<k:
            return -1
        for i in range(1,11):
            if (i*k)%10 == t:
                if i*k <= num:
                    return i
        return -1
```