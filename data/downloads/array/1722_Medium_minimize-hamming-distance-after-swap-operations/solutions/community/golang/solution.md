# [Golang] Union Find

**Author:** user0440H
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimize-hamming-distance-after-swap-operations/solutions/3079414/](https://leetcode.com/problems/minimize-hamming-distance-after-swap-operations/solutions/3079414/)

---

```go
func minimumHammingDistance(source []int, target []int, allowedSwaps [][]int) int {
  n := len(source)
  root := make([]int, n)
  rank := make([]int, n)
  for i := 0; i < len(root); i++ {
    root[i] = i
  }
  for _, allowedSwap := range allowedSwaps {
    union(root, rank, allowedSwap[0], allowedSwap[1])
  }
  // Now that we've added all the edges/swaps. Let's go through each
  // component and see the number of elements that are not common
  componentIndices := make(map[int][]int)
  for i := 0; i < len(root); i++ {
    comp := find(root, i)
    componentIndices[comp] = append(componentIndices[comp], i)
  }
  var hammingDist int
  for _, indices := range componentIndices {
    // Let's collect what's in the source array in these indices
    sourceElems := make(map[int]int)
    for _, idx := range indices {
      sourceElems[source[idx]]++
    }
    var matched int
    // Now let's go through the target array and see how many elements don't match
    for _, idx := range indices {
      if c, ok := sourceElems[target[idx]]; ok && c > 0 {
        sourceElems[target[idx]]-- 
        matched++
      }
    }
    hammingDist += len(indices) - matched
  }
  return hammingDist
}


func diff(a, b int) int {
  if a > b {
    return a - b
  }
  return b - a
}

func find(root []int, x int) int {
  if root[x] == x {
    return x
  }
  root[x] = find(root, root[x])
  return root[x]
}

func union(root, rank []int, x, y int) {
  rootX := find(root, x)
  rootY := find(root, y)
  if rootX != rootY {
    if rank[rootX] > rank[rootY] {
      root[rootY] = rootX
    } else if rank[rootX] < rank[rootY] {
      root[rootX] = rootY
    } else {
      root[rootY] = rootX
      rank[rootX]++
    }
  }
}
```