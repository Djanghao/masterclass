# Python hashmap O(n) solution. NO Sorting!

**Author:** sguaaa
**Votes:** 159
**Link:** [https://leetcode.com/problems/find-original-array-from-doubled-array/solutions/1485450/](https://leetcode.com/problems/find-original-array-from-doubled-array/solutions/1485450/)

---

The tricky part of the problem is to handle groups of numbers such as `[1, 2, 2, 4, 4, 4, 8, 8]`, which won't necessarily appear in order. The O(n)-time way of handling this is to first find the smallest number in the group (linear time with a hash map) and then walk up through the chain by doubling the number each time (linear time).

The `collections.Counter` here is just a python shortcut for a counter hashmap.

```
class Solution:
    def findOriginalArray(self, changed: List[int]) -> List[int]:
        counter = collections.Counter(changed)
        res = []
        for k in counter.keys():
            
            if k == 0:
                # handle zero as special case
                if counter[k] % 2 > 0:
                    return []
                res += [0] * (counter[k] // 2)
                
            elif counter[k] > 0:
                x = k
                
                # walk down the chain
                while x % 2 == 0 and x // 2 in counter:
                    x = x // 2
                    
                # walk up and process all numbers within the chain. mark the counts as 0
                while x in counter:
                    if counter[x] > 0:
                        res += [x] * counter[x]
                        if counter[x+x] < counter[x]:
                            return []
                        counter[x+x] -= counter[x]
                        counter[x] = 0
                    x += x
        return res
```