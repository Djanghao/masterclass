# Runtime 45 ms Beats 100.00%

**Author:** rafatgofers
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/solutions/4864714/](https://leetcode.com/problems/sort-items-by-groups-respecting-dependencies/solutions/4864714/)

---

**Intuition:**

The problem requires sorting items by groups while respecting dependencies between items. To achieve this, we can follow a two-step approach:
1. Perform a topological sort on the items within each group to obtain the order of items within each group.
2. Perform a topological sort on the groups based on their dependencies to obtain the order of groups.

**Approach:**

1. Adjust Group Assignments: If any item is not assigned to a group (-1), assign it a new group number starting from m.
2. Construct Adjacency Lists: Create adjacency lists for items and groups based on the dependency information.
3. Topological Sort on Items: Perform a depth-first search (DFS) on items to obtain the topological order of items within each group.
4. Topological Sort on Groups: Perform a DFS on groups to obtain the topological order of groups based on their dependencies.
5. Combine Ordering Sequences: Combine the ordering sequences of items within groups according to the order of groups.
6. Return Final Sorted Order: Return the final sorted order of items.

**Complexity:**

- **Time Complexity:** Let n be the number of items and m be the number of groups.
  - Constructing adjacency lists and performing DFS on items and groups: O(n + m)
  - Combining ordering sequences: O(n + m)
  Overall, the time complexity is O(n + m).

- **Space Complexity:** The additional space complexity is O(n + m) for storing adjacency lists, visited arrays, and output arrays.

Overall, the provided solution efficiently sorts items by groups while respecting dependencies.

# Code
```
func reverse(nums []int) {
    for i, j := 0, len(nums) - 1; i < j; i, j = i + 1, j - 1 {
        nums[i], nums[j] = nums[j], nums[i]
    }
}

func dfs(curr int, color []byte, adjList [][]int, ans *[]int) bool {
    color[curr] = 'G'
    for _, next := range adjList[curr] {
        if color[next] == 'G' || (color[next] == 'W' && dfs(next, color, adjList, ans)) {
            return true
        }    
    }
    *ans = append(*ans, curr)
    color[curr] = 'B'
    return false
}

func sortItems(n int, m int, group []int, beforeItems [][]int) []int {
    for i := 0; i < n; i++ {
        if group[i] == -1 {
            group[i] = m
            m++
        }
    }
    itemList := make([][]int, n)
    groupList := make([][]int, m)
    itemOrder, groupOrder, ans := []int{}, []int{}, []int{}
    for i := 0; i < n; i++ {
        for _, j := range beforeItems[i] {
            itemList[j] = append(itemList[j], i)
            if group[i] != group[j] {
                groupList[group[j]] = append(groupList[group[j]], group[i])
            }
        }
    }
    itemVisited := make([]byte, n)
    for i := 0; i < n; i++ {itemVisited[i] = 'W'}
    for i := 0; i < n; i++ {
        if itemVisited[i] == 'W' && dfs(i, itemVisited, itemList, &itemOrder) {
            return []int{}
        }
    }
    groupVisited := make([]byte, m)
    for i := 0; i < m; i++ {groupVisited[i] = 'W'}
    for i := 0; i < m; i++ {
        if groupVisited[i] == 'W' && dfs(i, groupVisited, groupList, &groupOrder) {
            return []int{}
        }
    }
    reverse(itemOrder)
    Map := make(map[int][]int)
    for _, i := range itemOrder {
        Map[group[i]] = append(Map[group[i]], i)
    }
    reverse(groupOrder)
    for _, i := range groupOrder {
        for _, j := range Map[i] {
            ans = append(ans, j)
        }
    }
    return ans
}
```