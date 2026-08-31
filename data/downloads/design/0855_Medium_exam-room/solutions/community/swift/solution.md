# Swift linear solution

**Author:** ericdrew08
**Votes:** 1
**Link:** [https://leetcode.com/problems/exam-room/solutions/3289911/](https://leetcode.com/problems/exam-room/solutions/3289911/)

---

# Code
```

class ExamRoom {
    // seated is an array of seats taken
    // a sorted set may be faster
    var seated: [Int]
    let n: Int

    init(_ n: Int) {
        self.n = n
        seated = []
    }
    
    func seat() -> Int {
        if seated.isEmpty {
            seated.append(0)
            return 0
        }

        var idx = 0
        var value = 0
        var maxDistance = seated[0] // inital distance is first seat to the beginning

        // for each seat that is taken,
        // calculate the distance between seats
        for i in 0..<seated.count - 1 {
            let midDistance = (seated[i + 1] - seated[i]) / 2

            if midDistance > maxDistance {
                idx = i + 1
                value = seated[i] + midDistance
                maxDistance = midDistance
            }
        }

        if n - 1 - seated.last! > maxDistance {
            // distance from last seat taken to the end
            // is greater than max distance
            seated.append(n - 1)
            return n - 1
        } else {
            // insert at idx so that the seated array remains sorted
            seated.insert(value, at: idx)
            return value
        }
    }
    
    func leave(_ p: Int) {
        // remove seat from array
        seated = seated.filter { $0 != p }
    }
}

```