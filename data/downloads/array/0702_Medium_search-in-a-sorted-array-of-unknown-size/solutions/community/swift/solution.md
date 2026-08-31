# ✅ Solution in swift (Binary Search)

**Author:** JSiraswa
**Votes:** 0
**Link:** [https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/solutions/4694839/](https://leetcode.com/problems/search-in-a-sorted-array-of-unknown-size/solutions/4694839/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(logM)$$, where M is an index of target value
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$ since it's a constant space solution.
# Code
```
/**
 * // This is ArrayReader's API interface.
 * // You should not implement it, or speculate about its implementation
 * public class ArrayReader {
 *     public func get(_ index: Int) -> Int {}
 * }
 */

class Solution {
    func search(_ reader: ArrayReader, _ target: Int) -> Int {
    if reader.get(0) == target {
        return 0
    }
    var left = 0, right = 1
    while reader.get(right) < target {
        left = right
        right <<= 1 //this will double the right
    }
    
    while left <= right {
        let middle = left + (right - left)/2
        let num = reader.get(middle)
        
        if num == target {
            return middle
        } else if num > target {
            right = middle - 1
        } else {
            left = middle + 1
        }
    }
    return -1
}
}

class ArrayReader {
    var array : [Int]
    
    init(array: [Int]) {
        self.array = array
    }

    public func get(_ index: Int) -> Int {
        if index < array.count {
            return array[index]
        } else {
            return Int(pow(2.00, 31))
        }
    }
}
```