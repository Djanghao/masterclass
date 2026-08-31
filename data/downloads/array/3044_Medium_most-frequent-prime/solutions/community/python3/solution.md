# Python 3 || 15 lines, Counter, no strings || T/S: 97% / 98%

**Author:** Spaulding_
**Votes:** 13
**Link:** [https://leetcode.com/problems/most-frequent-prime/solutions/4753882/](https://leetcode.com/problems/most-frequent-prime/solutions/4753882/)

---

Here's the plan:
- We iterate though the elements in`mat`, and also iterate through`dir` for each element. Finally for each such direction, we increment in that direction until we reach the boundary of `mat`. 

- We append each integer encountered in the iterations to`nums`. When that task is completed, we construct `Counter(nums)`, and we filter the keys of this counter to primes greater than ten.

- We return the optimum of these keys based on the problem's description.

```
class Solution:
    def mostFrequentPrime(self, mat: List[List[int]]) -> int:

        nums = []
        m,n, d = range(len(mat)),range(len(mat[0])), (-1,0,1)
        
        def isPrime(num):
            if num < 10 or num%2 == 0: return False
            for i in range(3, isqrt(num)+1, 2):
                if num %i == 0: return False
            return True
        
        for x, y, dx,dy in product(m,n, d,d):
                if dx == 0 == dy: continue
                X, Y, num = x+dx, y+dy, mat[x][y]

                while X in m and Y in n:
                    nums.append(num:= num*10 + mat[X][Y])
                    X+= dx
                    Y+= dy      
        
        return max(filter(isPrime, ctr:= Counter(nums)), 
                key = lambda x: (ctr[x], x), default = -1)
```
[https://leetcode.com/problems/most-frequent-prime/submissions/1285347012/](https://leetcode.com/problems/most-frequent-prime/submissions/1285347012/)


I could be wrong, but I think that time complexity is *O*(*MNK*) and space complexity is *O*(*MNK*), in which *M*,*N* ~ `m`,`n` and *K* ~ the maximum length of the numbers formed by traversing the matrix.