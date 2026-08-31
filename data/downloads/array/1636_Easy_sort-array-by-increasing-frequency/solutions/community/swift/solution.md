# Swift - Easy way - HashMap(Dictionary)

**Author:** h_crane
**Votes:** 3
**Link:** [https://leetcode.com/problems/sort-array-by-increasing-frequency/solutions/986778/](https://leetcode.com/problems/sort-array-by-increasing-frequency/solutions/986778/)

---


```swift
    func frequencySort(_ nums: [Int]) -> [Int] {
        var dict = [Int: Int]()
        
        for num in nums {
            dict[num] = (dict[num] ?? 0) + 1
        }

        return dict
            .sorted { $1.key < $0.key }
            .sorted { $0.value < $1.value }
            .map { [Int](repeating: $0.key, count: $0.value) }
            .flatMap { $0 }
    }
```