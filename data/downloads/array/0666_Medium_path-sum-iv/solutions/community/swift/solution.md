# Swift DFS using Adjacency List

**Author:** liampronan
**Votes:** 0
**Link:** [https://leetcode.com/problems/path-sum-iv/solutions/5708896/](https://leetcode.com/problems/path-sum-iv/solutions/5708896/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```swift []
class Solution {
    func pathSum(_ nums: [Int]) -> Int {
        // build adj List
        // dfs from top

        var adjList = [Int: [Int]]()

        for i in nums.indices {
            adjList[nums[i]] = [Int]()
            for j in i+1..<nums.count {
                // only next level is valid. example at root (100 level) only 200s are valid 
                guard nums[j]/100 - 1 == nums[i]/100 else { continue }
                // a node is a child if its index is (parentIndex * 2) || (parentIndex * 2 - 1). example: parent 2 can have children with index 3 or 4
                guard nums[j] % 100 / 10 == nums[i] % 100 / 10 * 2 || nums[j] % 100 / 10 == nums[i] % 100 / 10 * 2 - 1 else { continue }
                adjList[nums[i]]!.append(nums[j])
            }
        }

        var sum = 0 
        dfs(adjList, nums[0], &sum)

        return sum
    }

    func dfs(_ adjList: [Int: [Int]], _ node: Int, _ sum: inout Int, currSum: Int = 0) {
        let valHere = node % 100 % 10
        // once we hit a leaf (i.e., no more neighbors), add to sum
        guard !adjList[node]!.isEmpty else { 
            sum += (currSum + valHere)
            return
        }

        for neighbor in adjList[node, default: []] {
            dfs(adjList, neighbor, &sum, currSum: currSum + valHere)
        }

    }
}

// [113,215,221, 311]
```