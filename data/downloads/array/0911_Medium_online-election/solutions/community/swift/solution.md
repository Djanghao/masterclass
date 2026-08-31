# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/online-election/solutions/4272498/](https://leetcode.com/problems/online-election/solutions/4272498/)

---

```
class TopVotedCandidate {

    private var win: [(Int, Int)]

    init(_ persons: [Int], _ times: [Int]) {
        
        var votes = [Int: Int]()
        var ma = 0
        
        win = [(Int, Int)]()

        for i in times.indices {
            let c = votes[persons[i], default: 0] + 1
            votes[persons[i]] = c
            
            if win.isEmpty || c >= ma {
                win.append((times[i], persons[i]))
                ma = c
            }
            else {
                win.append((times[i], win.last!.1))
            }
        }
    }
    
    func q(_ t: Int) -> Int {
        win.last(where: { $0.0 <= t })!.1
   }
}
```