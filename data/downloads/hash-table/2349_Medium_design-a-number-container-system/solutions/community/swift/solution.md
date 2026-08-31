# 2 Solutions: Basic Array and Sorted Array(for optimisation). Two Maps.

**Author:** blest
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-a-number-container-system/solutions/3634448/](https://leetcode.com/problems/design-a-number-container-system/solutions/3634448/)

---

# Naive
```
class NumberContainers {
    var nums: [Int: Int]
    var indexes: [Int: [Int]]
    init() {
        nums = [:]
        indexes = [:]
    }
    
    func change(_ index: Int, _ number: Int) {
        if let n = nums[index] {
            indexes[n]!.removeAll { $0 == index }
        }
        nums[index] = number
        indexes[number, default: []].append(index)
    }
    
    func find(_ number: Int) -> Int {
        indexes[number]?.min() ?? -1
    }
}

```
# Optimized (Use SortedArray instead of regular array)
```
class NumberContainers {
    var nums: [Int: Int]
    var indexes: [Int: SortedArray<Int>]
    init() {
        nums = [:]
        indexes = [:]
    }
    
    func change(_ index: Int, _ number: Int) {
        if let n = nums[index] {
            indexes[n]!.remove(index)
        }
        nums[index] = number
        indexes[number, default: SortedArray()].insert(index)
    }
    
    func find(_ number: Int) -> Int {
        indexes[number]?.min() ?? -1
    }
}

struct SortedArray<T: Comparable> {
    private var arr: [T]
    var count: Int {
        arr.count
    }
    init(_ arr: [T]? = []) {
        self.arr = []
        for ele in arr ?? [] {
            self.insert(ele)
        }
    }
    
    mutating func insert(_ element: T) {
        let i = bisectRight(element)
        arr.insert(element, at: i)
    }
    
    mutating func remove(_ value: T) {
        let i = bisectRight(value) - 1
        arr.remove(at: i)
    }
    
    private func bisectRight(_ target: T) -> Int {
        var (lo, hi) = (0, count)
        while lo < hi {
            let mid = lo + (hi - lo) / 2
            if arr[mid] <= target {
                lo = mid + 1
            } else {
                hi = mid
            }
        }
        return lo
    }
    
    func min() -> T? {
        arr.min()
    }
}
```