# ✅ Clean swift solution

**Author:** kulizhnikov
**Votes:** 0
**Link:** [https://leetcode.com/problems/lfu-cache/solutions/3114788/](https://leetcode.com/problems/lfu-cache/solutions/3114788/)

---

# Complexity
- Time complexity: O(1)

- Space complexity: O(n)

# Code
```
class LFUCache {
    var capacity: Int
    var valueAndFrequencyFor: [Int: (Int, Int)] = [:]
    var keysForFrequency: [Int: [Int]] = [:]
    var minFrequency = 0

    init(_ capacity: Int) {
        self.capacity = capacity
    }
    
    func get(_ key: Int) -> Int {
        guard let (value, freq) = valueAndFrequencyFor[key] else { return -1 }

        keysForFrequency[freq, default: []].removeAll(where: { $0 == key })
        keysForFrequency[freq + 1, default: []].append(key)
        valueAndFrequencyFor[key] = (value, freq + 1)
        if keysForFrequency[minFrequency, default: []].isEmpty {
            minFrequency += 1
        }
        return value
    }
    
    func put(_ key: Int, _ value: Int) {
        guard capacity > 0 else { return }

        if let (oldValue, freq) = valueAndFrequencyFor[key] {
            keysForFrequency[freq, default: []].removeAll(where: { $0 == key })
            keysForFrequency[freq + 1, default: []].append(key)
            valueAndFrequencyFor[key] = (value, freq + 1)
            if keysForFrequency[minFrequency, default: []].isEmpty {
                minFrequency += 1
            }
        } else {
            if valueAndFrequencyFor.count == capacity {
                if let key = keysForFrequency[minFrequency, default: []].first {
                    valueAndFrequencyFor.removeValue(forKey: key)
                    keysForFrequency[minFrequency, default: []].removeFirst()
                }
            }
            valueAndFrequencyFor[key] = (value, 1)
            keysForFrequency[1, default: []].append(key)
            minFrequency = 1
        }
    }
}
```