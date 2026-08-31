# [Golang] Binary Index Tree

**Author:** vasakris
**Votes:** 2
**Link:** [https://leetcode.com/problems/queries-on-a-permutation-with-key/solutions/3531000/](https://leetcode.com/problems/queries-on-a-permutation-with-key/solutions/3531000/)

---

# Intuition
Binary Index Tree to find number of elements prev to given element

# Approach
1. Build Binary Index Tree with size 2*m and starting postion as m.
2. Each Index from [m, 2*m] is updated with value 1, which tells number of elements before to each given index/element
3. When query starts, get prefixSum, number of elements before the queried element
4. Remove the queried element from that postion
5. And move queried element to start of Binary Index Tree

# Complexity
- Time complexity:
n - number of queries
m - size of Binary Index Tree

O(m*log(m)) + O(n*(logm + logm)) = O(mlogm) + O(nlogm)
m >= n
O(mlogm) + O(nlogm) =  O(mlogm)

- Space complexity:
O(m) - for biTree and dict

# Code
```
func processQueries(queries []int, m int) []int {
    // Create BIT with size 2*m+1
    biTree := make([]int, 2*m+1)
    res := []int{}
    dict := make(map[int]int)

    // Start biTree build from m-th postion, i.e [m to 2*m]
    // set 1 for each index, so we can query prefixSum, which will no of elements before
    // O(mlogm)
    for i := 1; i <= m; i++ {
        dict[i] = i+m
        update(biTree, i+m, 1)
    }

    // For each query
    //   Find the index of the number using dict
    //   Then find prefixSum, which is no of elements before that element
    //   Update current index to -1, like removing that number from that index
    //   Move that number to m-1 (start-1 index of current biTree)
    // O(n * (logm + logm))
    for _, query := range queries {
        res = append(res, prefixSum(biTree, dict[query])-1)
        update(biTree, dict[query], -1)
        update(biTree, m, 1)
        dict[query] = m
        m--
    }

    return res
}

func update(biTree []int, idx, val int) {
    for i := idx; i < len(biTree); i += lsb(i) {
        biTree[i] += val
    }
}

func prefixSum(biTree []int, idx int) int {
    sum := 0
    for i := idx; i > 0; i -= lsb(i) {
        sum += biTree[i]
    }
    return sum
}

func lsb(n int) int {
    return n & (-n)
}
```