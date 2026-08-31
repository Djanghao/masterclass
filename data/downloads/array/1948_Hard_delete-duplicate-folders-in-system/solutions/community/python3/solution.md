# [Python3] serialize sub-trees

**Author:** ye15
**Votes:** 4
**Link:** [https://leetcode.com/problems/delete-duplicate-folders-in-system/solutions/1360749/](https://leetcode.com/problems/delete-duplicate-folders-in-system/solutions/1360749/)

---


```
class Solution:
    def deleteDuplicateFolder(self, paths: List[List[str]]) -> List[List[str]]:
        paths.sort()
        
        tree = {"#": -1}
        for i, path in enumerate(paths): 
            node = tree
            for x in path: node = node.setdefault(x, {})
            node["#"] = i
        
        seen = {}
        mark = set()
        
        def fn(n): 
            """Return serialized value of sub-tree rooted at n."""
            if len(n) == 1: return "$" # leaf node 
            vals = []
            for k in n: 
                if k != "#": vals.append(f"${k}${fn(n[k])}")
            hs = "".join(vals)
            if hs in seen: 
                mark.add(n["#"])
                mark.add(seen[hs])
            if hs != "$": seen[hs] = n["#"]
            return hs
        
        fn(tree)
        
        ans = []
        stack = [tree]
        while stack: 
            n = stack.pop()
            if n["#"] >= 0: ans.append(paths[n["#"]])
            for k in n: 
                if k != "#" and n[k]["#"] not in mark: stack.append(n[k])
        return ans 
```