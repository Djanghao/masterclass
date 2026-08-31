# ruby, compact solution with recursion. 54ms

**Author:** chassot
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-distance-between-bst-nodes/solutions/4529298/](https://leetcode.com/problems/minimum-distance-between-bst-nodes/solutions/4529298/)

---



# Code
```
def helper(n)
  return nil unless n
  x,(ldif,lmin,lmax),(rdif,rmin,rmax) = n.val, helper(n.left), helper(n.right)
  mindif = [(x - lmax if lmax), (rmin - x if rmin), ldif, rdif].compact.min
  [mindif, lmin||x, rmax||x]
end

def min_diff_in_bst(root)
  helper(root)[0]
end
```