# Ruby - O(n)

**Author:** GuptaPrachur10
**Votes:** 0
**Link:** [https://leetcode.com/problems/diameter-of-n-ary-tree/solutions/1788811/](https://leetcode.com/problems/diameter-of-n-ary-tree/solutions/1788811/)

---

```
def diameter(root)
    @res = 0
	dfs(root)
    @res
end
def dfs(root)
    f, s = 0,0
    for n in root.children
        d = dfs(n)
        if d>f
            f, s = d, f
        elsif d>s
            s = d
        end
    end
    @res = [@res, f+s].max
    f+1
end
```