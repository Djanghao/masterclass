# [Ruby] O(1)

**Author:** mistersky
**Votes:** 0
**Link:** [https://leetcode.com/problems/reach-a-number/solutions/990956/](https://leetcode.com/problems/reach-a-number/solutions/990956/)

---

```
def reach_number(target)
  target = target.abs
  k = ((Math.sqrt(8*target+1)-1)/2).ceil
  
  while (k*(k+1)/2 - target).odd?
    k += 1
  end    
  
  k 
end
```