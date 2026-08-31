# 💡Swift - Optimal Solution - Binary Indexed Tree

**Author:** bernikovich
**Votes:** 0
**Link:** [https://leetcode.com/problems/distribute-elements-into-two-arrays-ii/solutions/4839584/](https://leetcode.com/problems/distribute-elements-into-two-arrays-ii/solutions/4839584/)

---

# Solution
```swift
class Solution {
    func resultArray(_ nums: [Int]) -> [Int] {
        // Building trees.
        // Map indices of the sorted elements by their values, converted to 1-indexed.
        let indicesMap = nums.sorted().enumerated().reduce(into: [:]) { $0[$1.element] = $1.offset + 1 }
        let tree1 = FenwickTree(nums.count)
        let tree2 = FenwickTree(nums.count)

        // Initial state.
        var arr1: [Int] = [nums[0]]
        var arr2: [Int] = [nums[1]]
        tree1.update(indicesMap[nums[0]]!, 1)
        tree2.update(indicesMap[nums[1]]!, 1)
        
        // Distribute elements following the given criteria.
        for num in nums[2...] {
            let index = indicesMap[num, default: 0]
            let gc1 = arr1.count - tree1.prefixSum(index)
            let gc2 = arr2.count - tree2.prefixSum(index)
            if gc1 > gc2 || (gc1 == gc2 && arr1.count <= arr2.count) {
                arr1.append(num)
                tree1.update(index, 1)
            } else {
                arr2.append(num)
                tree2.update(index, 1)
            }
        }

        return arr1 + arr2
    }
}

class FenwickTree {
    var tree: [Int]
    init(_ size: Int) {
        tree = Array(repeating: 0, count: size + 1)
    }
    func update(_ index: Int, _ delta: Int) {
        var index = index
        while index < tree.count {
            tree[index] += delta
            index += index & -index
        }
    }
    func prefixSum(_ index: Int) -> Int {
        var index = index
        var sum = 0
        while index > 0 {
            sum += tree[index]
            index -= index & -index
        }
        return sum
    }
}
```
# Complexity
- Time: $$O(n \\cdot logn)$$
- Space: $$O(n)$$