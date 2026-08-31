# Swift - BFS - Much easier to understand than proposed solution with DFS

**Author:** pitt500
**Votes:** 1
**Link:** [https://leetcode.com/problems/remove-invalid-parentheses/solutions/843872/](https://leetcode.com/problems/remove-invalid-parentheses/solutions/843872/)

---

Some notes:
- Why did I create a custom Queue instead of using a regular array and using `.removeFirst()` to get first element?
	- Because each call is an `O(n)` operation.
	- My `Queue` class amortizes the cost by using the `two stack` technique.

```
class Queue {
  private var waiting: [String] = []
  private var process: [String] = []
  
  func pop() -> String? {
    fillProcessIfNeeded()
    return process.popLast()
  }
  
  func append(_ s: String) {
    waiting.append(s)
  }
  
  var hasValues: Bool {
    return !waiting.isEmpty || !process.isEmpty
  }
  
  private func fillProcessIfNeeded() {
    if process.isEmpty {
      while !waiting.isEmpty {
        process.append(waiting.removeLast())
      }
    }
  }
}

class Solution {
  func removeInvalidParentheses(_ s: String) -> [String] {
    var visited = Set<String>()
    var result = [String]()
    
    let queue = Queue()
    var found = false
    
    queue.append(s)
    visited.insert(s)
    
    while queue.hasValues {
      let current = queue.pop()!
      
      if isValid(current) {
        result.append(current)
        found = true
      }
      
      if found {
        //No more enqueuing, just checking if remaining items in queue are valid too.
        continue
      }
      
      let arrayCurr = Array(current)
      for i in 0..<arrayCurr.count where isParenthesis(arrayCurr[i]) {
        //String excluding current parenthesis
        let temp = String(arrayCurr[0..<i] + arrayCurr[(i+1)...])
        
        if !visited.contains(temp) {
          visited.insert(temp)
          queue.append(temp)
        }
      }
    }
    
    return result
  }
  
  private func isValid(_ s: String) -> Bool {
    var count = 0
    
    for c in s {
      if c == "(" {
        count += 1
      } else if c == ")" {
        guard count > 0 else { return false }
        count -= 1
      }
    }
    
    return count == 0
  }
  
  private func isParenthesis(_ c: Character) -> Bool {
    return c == "(" || c == ")"
  }
}
```