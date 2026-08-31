# ✅ Accepted | 100% | O(N) | O(N/2)

**Author:** rnin
**Votes:** 1
**Link:** [https://leetcode.com/problems/exclusive-time-of-functions/solutions/5339148/](https://leetcode.com/problems/exclusive-time-of-functions/solutions/5339148/)

---

# Complexity
- Time complexity:
O(N) where n is the # of logs

- Space complexity:
O(N/2) at any point in time we will have max of N/2  events 

# Code
```
class Solution {

    enum Event: String {
        case start = "start"
        case end = "end"
    }

    func exclusiveTime(_ n: Int, _ logs: [String]) -> [Int] {
        var time: [Int] = Array(repeating: 0, count: n)
        var callStack: [(Int, Event, Int)] = []

        for log in logs {
            let parsedLog = parseLog(log)
            let (id, event, duration) = parsedLog
            switch event {
                case .start:
                    if let previousStartEvent = callStack.last, previousStartEvent.1 == .start {
                        time[previousStartEvent.0] += duration - previousStartEvent.2
                        callStack[callStack.count - 1].2 = duration
                    }
                    callStack.append(parsedLog)
                case .end:
                    let lastLog = callStack.removeLast()
                    time[lastLog.0] += duration - lastLog.2 + 1
                    if let previousStartEvent = callStack.last, previousStartEvent.1 == .start {
                        callStack[callStack.count - 1].2 = duration + 1
                    }
            }
        }
        return time
    }

    func parseLog(_ log: String) -> (Int, Event, Int) {
        let components = log.split(separator: ":").map(String.init)
        return (
            Int(components[0])!,
            Event(rawValue: components[1])!, 
            Int(components[2])!
        )
    }
}
```