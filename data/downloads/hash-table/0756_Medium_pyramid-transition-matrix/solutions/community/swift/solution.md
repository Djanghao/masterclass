# Swift DFS with top level combinations with caching

**Author:** arrb
**Votes:** 0
**Link:** [https://leetcode.com/problems/pyramid-transition-matrix/solutions/5968531/](https://leetcode.com/problems/pyramid-transition-matrix/solutions/5968531/)

---

# Code
```swift []
class Solution {
    var baseToTopDict = [String: [String]]()
    var cache = [String: Bool]()

    func pyramidTransition(_ bottom: String, _ allowed: [String]) -> Bool {
        //lets keep a map of base to top strings
        for allow in allowed {
            let base = String(allow.prefix(2))
            let top = String(allow.suffix(1))
            baseToTopDict[base, default: []].append(top)
        }
      
        return pyramidTransitionHelper(bottom)
    }

    private func pyramidTransitionHelper(_ bottom: String) -> Bool {
        if let value = cache[bottom] {
            return value
        }

        if bottom.count == 1 {
            return true
        }
        
        var topListStrings = [[String]]() //contains list of all possible tops for each bottom 2 chars
        for i in 0..<bottom.count - 1 {
            let startIndex = bottom.index(bottom.startIndex, offsetBy: i)
            let endIndex = bottom.index(bottom.startIndex, offsetBy: i+1)
            let base = String(bottom[startIndex...endIndex])

            //if it is an invalid base, then no need to proceed further
            guard let topList = baseToTopDict[base] else {
                cache[base] = false
                return false
            }
            topListStrings.append(topList)
        }
        //topListStrings will be something like [["C"], ["E"]] for bottom = BCD since it takes BC and then CD and then appends top strings
        //topListStrings will be something like [["B", "C"], ["B", "C"],  ["B", "C"]] for bottom = AAAA since it takes AA, AA, AA 3 times
        var nextLevelCombinationStrings = [String]()
        nextTopPossibleStrings(topListStrings, 0, &nextLevelCombinationStrings, "")

        //for bottom = AAAA, nextLevelCombinationStrings will be like ["BBB", "BBC", "CBB", ....]
        for topLevel in nextLevelCombinationStrings {
            if pyramidTransitionHelper(topLevel) {
                cache[topLevel] = true
                return true
            }
        }

        cache[bottom] = false
        return false
    }

    private func nextTopPossibleStrings(_ topListStrings: [[String]], _ index: Int, _ result: inout [String], _ temp: String) {
        if index == topListStrings.count {
            result.append(temp)
            return
        }

        let currentList = topListStrings[index]
        for current in currentList {
            nextTopPossibleStrings(topListStrings, index + 1, &result, temp + current)
        }
    }
}
```