# Use Dictionary as internal storage

**Author:** kiemtien
**Votes:** 0
**Link:** [https://leetcode.com/problems/map-sum-pairs/solutions/5148680/](https://leetcode.com/problems/map-sum-pairs/solutions/5148680/)

---

```

class MapSum {
  private var storage: [String: Int]
  
  init() {
    storage = [String: Int]()
  }
  
  func insert(_ key: String, _ val: Int) {
    storage.updateValue(val, forKey: key)
  }
  
  func sum(_ prefix: String) -> Int {
    var sum = 0
    for key in storage.keys {
      if key.hasPrefix(prefix) {
        sum += storage[key] ?? 0
      }
    }
    return sum
  }
}

