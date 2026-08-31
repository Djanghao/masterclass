# Swift DFS/Binary search solution

**Author:** ivanlesko
**Votes:** 0
**Link:** [https://leetcode.com/problems/closest-nodes-queries-in-a-binary-search-tree/solutions/3647343/](https://leetcode.com/problems/closest-nodes-queries-in-a-binary-search-tree/solutions/3647343/)

---

# Intuition
Perform binary search on the inorder DFS values.

There are two cases that can happen.  The tree contains `queries[i]` or it doesn't. Append `[queries[i], queries[i]]` to the result if it does.  The greatest number less than or equal to itself is itself.  The lowest number greater than or equal to itself is itself.

If the tree does not contain `queries[i]`, `[minI, maxI]` = binary search index range `[right, left]`.  This is because the smallest value greater than `queries[i]` will be `mid + 1`.  The greatest value less than `queries[i]` will be `mid - 1`.

Example:

```
query: 5
     r l
[1,3,4,6,7]
 0 1 2 3 4 
```
After the binary search ends the, `l` and `r` indices indicate where the search ended.

Example when indices are out of bounds:
```
Query: 4
r l
 [5,6,7,8,9]

Query: 10
          r l
 [5,6,7,8,9]
```

If `l` or `r` indices are outside of the value array's indices we can assume the number does not exist and we append `-1` to the result.


```
class Solution {
    func dfs(_ root: TreeNode?, _ arr: inout [Int]) {
        guard let root = root else {
            return
        }

        dfs(root.left, &arr)
        arr.append(root.val)
        dfs(root.right, &arr)
    }

    func closestNodes(_ root: TreeNode?, _ queries: [Int]) -> [[Int]] {
        var store = [Int](), res = [[Int]]()
        dfs(root, &store)

        for query in queries {
            var l = 0, r = store.count - 1
            while l <= r {
                let mid = (l + r) / 2
                let val = store[mid]
                if query == val {
                    l = mid
                    r = mid
                    break
                }

                if query > val  {
                    l = mid + 1
                } else {
                    r = mid - 1
                }
            }

            if l == r {
                res.append([query, query])
            } else {
                res.append([store.indices.contains(r) ? store[r] : -1, store.indices.contains(l) ? store[l] : -1])
            }
        }

        return res
    }
}
```