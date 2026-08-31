# Swift | Two Stacks

**Author:** OrchidHunter
**Votes:** 3
**Link:** [https://leetcode.com/problems/design-browser-history/solutions/3309351/](https://leetcode.com/problems/design-browser-history/solutions/3309351/)

---

**Two Stacks (accepted answer)**
```
class BrowserHistory {
    var history = [String]()
	var future  = [String]()
    
    init(_ homepage: String) {
        visit(homepage)
    }
    
    func visit(_ url: String) {
        future = []
        history.append(url)
    }
    
    func back(_ steps: Int) -> String {
        for i in 0 ..< min(steps, history.count-1) {
            future.append(history.last!)
            history.removeLast()
        }
        return history.last!
    }
    
    func forward(_ steps: Int) -> String {
        for i in 0 ..< min(steps, future.count) {
            history.append(future.last!)
            future.removeLast()
        }        
        return history.last!
    }
}
```