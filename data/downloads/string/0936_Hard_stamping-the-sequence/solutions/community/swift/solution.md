# Greedy solution + comment

**Author:** GV1506
**Votes:** 1
**Link:** [https://leetcode.com/problems/stamping-the-sequence/solutions/2460031/](https://leetcode.com/problems/stamping-the-sequence/solutions/2460031/)

---

```
class Solution {
	func movesToStamp(_ stamp: String, _ target: String) -> [Int] {
        let stampArr = Array(stamp)
        let stampLen = stamp.count
	    var targetArr = Array(target)
        let targetLen = target.count
	    var result = [Int]()

        // check if the [startId..<startId+size] can be stamped
        func canStamp(_ startId: Int) -> Bool {
            for i in 0..<stampLen {
                if targetArr[startId + i] == "?" { continue }
                if targetArr[startId + i] != stampArr[i] {
                    return false
                }
            }
            return true
        }
        
        // update the [startId..<startId+size] window to all `?`
        func update(_ startId: Int) {
            for i in 0..<stampLen {
                targetArr[startId + i] = "?"
            }
        }
        
        // check if the [startId..<startId+size] window is all `?`
        func isAllQuestionMark(_ startId: Int, _ size: Int) -> Bool {
            for i in 0..<size {
                if targetArr[startId + i] != "?" {
                    return false
                }
            }
            return true
        }

        
		while !isAllQuestionMark(0, targetLen) {
			if result.count > targetLen * 10 { return [] }

			var found = false
			for i in 0...(targetLen - stampLen) {
				if isAllQuestionMark(i, stampLen) { continue }

				if canStamp(i) {
					update(i)
					result.append(i)
					found = true
					break
				}
			}
			if !found {
				return []
			}
		}

		return result.reversed()
	}
}
```