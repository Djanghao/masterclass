# [Swift][Answer for the interview]

**Author:** ViLkiS
**Votes:** 2
**Link:** [https://leetcode.com/problems/time-based-key-value-store/solutions/4174231/](https://leetcode.com/problems/time-based-key-value-store/solutions/4174231/)

---

# Code
```

class TimeMap {

    var dict = [String: [(Int, String)]]()

    init() {
        
    }
    func set(_ key: String, _ value: String, _ timestamp: Int) {
        dict[key, default: []].append((timestamp, value))
    }
    
    func get(_ key: String, _ timestamp: Int) -> String {
        guard let one = dict[key] else  { return "" }

            var l = 0
            var r = one.count - 1

            while l <= r {
                var mid = (l + r) / 2

                if one[mid].0 <= timestamp {
                    l = mid + 1
                } else {
                    r = mid - 1
                }
            }

            return r >= 0 ? one[r].1 : ""
    }
}
```

# Upvote if it helped you
![Youre-Breathtaking-Keanu-Reeves.png](./images/0.png)