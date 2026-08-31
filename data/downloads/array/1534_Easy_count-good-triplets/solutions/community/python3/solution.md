# Python sol with generator and loops

**Author:** brianchiang_tw
**Votes:** 31
**Link:** [https://leetcode.com/problems/count-good-triplets/solutions/772455/](https://leetcode.com/problems/count-good-triplets/solutions/772455/)

---

Python sol with generator and loops

---

**Implementation** by nested loops:

```
class Solution:
    def countGoodTriplets(self, arr: List[int], a: int, b: int, c: int) -> int:
        
        size = len(arr)
        
        good_count = 0
        
        for i in range(size-2):
            for j in range(i+1, size-1):
                for k in range(j+1, size):
                    
                    ok_a = abs(arr[i] - arr[j]) <= a
                    ok_b = abs(arr[j] - arr[k]) <= b
                    ok_c = abs(arr[i] - arr[k]) <= c
                    
                    if all((ok_a, ok_b, ok_c)):
                        good_count += 1
                        
                        
        return good_count

```

---

**Implementation** by generator expression and sum:

```
class Solution:
    def countGoodTriplets(self, arr: List[int], a: int, b: int, c: int) -> int:
        
        
        def is_good(i, j, k):
            
            ok_a = abs(arr[i] - arr[j]) <= a
            ok_b = abs(arr[j] - arr[k]) <= b
            ok_c = abs(arr[i] - arr[k]) <= c

            return all((ok_a, ok_b, ok_c))
        
        # -------------------------------------
        
        size = len(arr)
            
        return sum(1 for i in range(size-2) for j in range(i+1, size-1) for k in range(j+1, size) if is_good(i,j,k))
```

---

Reference:

[1] [Python official docs about generator expression](https://www.python.org/dev/peps/pep-0289/)