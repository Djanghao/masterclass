# Python concise solution same as 31. Next Permutation

**Author:** gyh75520
**Votes:** 6
**Link:** [https://leetcode.com/problems/previous-permutation-with-one-swap/solutions/429618/](https://leetcode.com/problems/previous-permutation-with-one-swap/solutions/429618/)

---

The same technic to solve [31. Next Permutation](https://leetcode.com/problems/next-permutation/discuss/429593/Python-concise-solution)
you don't need to reverse the sequence
and [3,1,1,3] should be noticed
```python
    def prevPermOpt1(self, A: List[int]) -> List[int]:
        i = len(A)-2
        while i > -1:
            if A[i] > A[i+1]:
                pivot = j = i+1
                while j <len(A) and A[i] > A[j]:
                    if A[j] > A[pivot]:pivot = j  # the difference
                    j += 1
                A[i], A[pivot] = A[pivot], A[i]
                break
            i -= 1
        return A
```
