# Python backtracking solution faster than 94.18%

**Author:** Tayalarajan
**Votes:** 6
**Link:** [https://leetcode.com/problems/number-of-squareful-arrays/solutions/1559047/](https://leetcode.com/problems/number-of-squareful-arrays/solutions/1559047/)

---

```
class Solution:
    def numSquarefulPerms(self, nums: List[int]) -> int:
        def isPerfectSquare(x):
            if (math.ceil(math.sqrt(x))==math.floor(math.sqrt(x))):
                return True
            else:
                return False
            
        def permutation(self):
            if len(path)>1:
                if not isPerfectSquare(path[-1]+path[-2]):
                    return
                
            if len(path)==len(nums):
                if path not in paths:
                    paths.append(path.copy())
                return
            
            for num in counter:
                if counter[num]>0:
                    path.append(num)
                    counter[num]-=1
                    permutation(self)
                    path.pop()
                    counter[num]+=1
            
        path=[]
        paths=[]
        counter=Counter(nums)
        permutation(self)
        return len(paths)
```