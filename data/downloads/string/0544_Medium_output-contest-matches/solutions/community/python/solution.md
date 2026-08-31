# Recursive - Python

**Author:** worker-bee
**Votes:** 4
**Link:** [https://leetcode.com/problems/output-contest-matches/solutions/1337344/](https://leetcode.com/problems/output-contest-matches/solutions/1337344/)

---

```
    def findContestMatch(self, n: int) -> str:
        
        def f(arr):
            if len(arr) <= 2:
                return '('+str(arr[0])+','+str(arr[-1])+')'
        
            i,j = 0,len(arr)-1
            new_arr = []
            while i < j:
                new_arr.append('('+str(arr[i]) + ',' + str(arr[j]) + ')')
                i += 1
                j -= 1
            
            return f(new_arr)
        
        return f(list(range(1,n+1)))
```

Notice that this is tail recursion although python is infamous for not implementing any tail recursive optimizations