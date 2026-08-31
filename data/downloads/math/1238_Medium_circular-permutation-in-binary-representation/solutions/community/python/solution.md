# Python 4 lines easy understanding

**Author:** mrabhishek1379
**Votes:** 1
**Link:** [https://leetcode.com/problems/circular-permutation-in-binary-representation/solutions/2027985/](https://leetcode.com/problems/circular-permutation-in-binary-representation/solutions/2027985/)

---

```
def circularPermutation(self, n: int, start: int) -> List[int]:
    res = [i ^ (i // 2) for i in range(pow(2, n))]   #store gray code
    for i in range(len(res)):            
        if start == res[i]:             #match with start value
            return res[i:]+res[:i]
```