# Swift : Binary Search + PriorityQueue(kind)

**Author:** deepal15
**Votes:** 4
**Link:** [https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/solutions/3102004/](https://leetcode.com/problems/the-k-weakest-rows-in-a-matrix/solutions/3102004/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Binary Search

# Approach
<!-- Describe your approach to solving the problem. -->
1. Collect the number of soldiers in each row in an array
2. Sort them in increasing order
3. Collect their indexes of first `k` elements

# Complexity
- Time complexity: $$ O(n log m) + O(n log n) + O(k)$$
    1. Binary search of m size * number of rows
    2. Sorting
    3. k elements from sorted results
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:  $$ O(n) + O(n) $$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func kWeakestRows(_ mat: [[Int]], _ k: Int) -> [Int] {
        var result = [Int]()
        for element in mat {
            result.append(f(element))
        }
        let sorted = result.enumerated().sorted { $0.1 < $1.1 }
        
        var finalResult = [Int]()
        for i in 0 ..< k {
            finalResult.append(sorted[i].0)
        }
        return finalResult
    }

    private func f(_ nums: [Int]) -> Int {
        var low = 0
        var high = nums.count - 1

        while low <= high {
            let mid = low + (high - low) / 2
            if nums[mid] == 1 {
                low = mid + 1
            } else {
                high = mid - 1
            }
        }
        return low
    }
}
```