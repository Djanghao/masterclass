# [Python] ACCEPTED SOLUTION with dictionary (hashmap) and set

**Author:** it_bilim
**Votes:** 23
**Link:** [https://leetcode.com/problems/making-file-names-unique/solutions/697825/](https://leetcode.com/problems/making-file-names-unique/solutions/697825/)

---

**Explanation**
Using set we check the name which is already user or not, if not used we can keep name's version k and increment k until we reach our version.
In dictionary, key = name, value = version.

**Complexity**
Time ```O(N)``` \xA0
Space ```O(N)```

```
    from collections import defaultdict
    def getFolderNames(self, names: List[str]) -> List[str]:
        used, hashmap = set(), defaultdict(int)
        result = []
        for name in names:
            k = hashmap[name]
            current = name
            while current in used:
                k += 1
                current = '%s(%d)' % (name, k)  # alternative to current = name+'('+str(k)+')'
            hashmap[name] = k
            result.append(current)
            used.add(current)
        return result
```