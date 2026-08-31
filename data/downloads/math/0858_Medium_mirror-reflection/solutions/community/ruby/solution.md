# [Ruby] O(1)

**Author:** mistersky
**Votes:** 1
**Link:** [https://leetcode.com/problems/mirror-reflection/solutions/939378/](https://leetcode.com/problems/mirror-reflection/solutions/939378/)

---

```
# @param {Integer} p
# @param {Integer} q
# @return {Integer}
def mirror_reflection(p, q)
  k = 1
  
  while k*q%p>0
    k += 1
  end
  
  k%2==0 ? 2 : (k*q/p)%2
end
```