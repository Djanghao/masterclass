# [swift]BFS

**Author:** KuShuLian
**Votes:** 0
**Link:** [https://leetcode.com/problems/zuma-game/solutions/468918/](https://leetcode.com/problems/zuma-game/solutions/468918/)

---

```swift
 //https://leetcode.com/problems/zuma-game/
 extension Sequence where Element == Character  {
    var counter: [Character:Int] {
        var ans = [Character:Int]()
        for ch in self {
            if let c = ans[ch] {
                ans.updateValue(c + 1, forKey: ch)
            }  else {
                ans.updateValue(1, forKey: ch)
            }
        }
        return ans
    }
 }
  class Solution {
    struct State: Hashable {
        var chars: [Character]
        var remain: [Character:Int]
    }
    func findMinStep(_ board: String, _ hand: String) -> Int {
        let handCounter = hand.counter
        let boardChars = [Character](board)
        var visited = Set<State>()
        var queue = [State]()
        let startState = State(chars: boardChars, remain: handCounter)
        visited.insert(startState)
        queue.append(startState)
        var depth = 0
        while !queue.isEmpty {
            depth += 1
            var nextLevel = [State]()
            for current in queue {
                let states = getNextStates(current: current)
                guard !states.1 else {
                    return depth
                }
                for state in states.0 {
                    if !visited.contains(state) {
                        visited.insert(state)
                        nextLevel.append(state)
                    }
                }
            }
            queue = nextLevel
        }
        return -1
    }
    private func getNextStates(current: State) -> ([State],Bool) {
        
        var ans = [State]()
        let counter = current.remain
        let chars = current.chars
        
        var pre = Array<Int>(repeating: 1, count: chars.count)
        for index in 1..<chars.count {
            if chars[index] == chars[index - 1] {
                pre[index] = pre[index - 1] + 1
            }
        }
        for index in 0..<chars.count {
            if pre[index] == 1 {
                if let c = counter[chars[index]] {
                    var nextCounter = counter
                    if c == 1{
                        nextCounter.removeValue(forKey: chars[index])
                    } else {
                        nextCounter.updateValue(c - 1, forKey: chars[index])
                    }
                    var charsCopy = chars
                    charsCopy.insert(chars[index], at: index)
                    charsCopy = simplify(chars: charsCopy)
                    guard !charsCopy.isEmpty else {
                        return ([],true)
                    }
                    ans.append(Solution.State(chars: charsCopy, remain: nextCounter))
                }
            }
        }
        return (ans,false)
    }
    private func simplify(chars: [Character]) -> [Character] {
        let count = chars.count
        var prefix = Array<Int>(repeating: 0, count: count)
        prefix[0] = 1
        for index in 1..<chars.count{
            if chars[index] == chars[index - 1] {
                prefix[index] = prefix[index - 1] + 1
            } else {
                prefix[index]  = 1
            }
        }
        guard let index = prefix.lastIndex(where: { $0 >= 3 }) else {
            return chars
        }
        var charsCopy = chars
        charsCopy.replaceSubrange(Range<Int>(uncheckedBounds: (lower: index + 1 - prefix[index], upper: index + 1)), with: [])
        return charsCopy.count < 3 ? charsCopy : simplify(chars: charsCopy)
    }
 }
```