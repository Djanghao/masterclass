# Two Stack Swift Solution

**Author:** AlteredTuning
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-a-text-editor/solutions/3115456/](https://leetcode.com/problems/design-a-text-editor/solutions/3115456/)

---

```
class TextEditor {

    var left: [Character]
    var right: [Character]
    var cursor = 0
    init() {
        self.left = []
        self.right = []
        self.cursor = 0
    }
    
    func addText(_ text: String) {
       for c in text {
           left.append(c)
       }
    }
    
    func deleteText(_ k: Int) -> Int {
        var n = k
        while n > 0 && !left.isEmpty {
            left.removeLast()
            n -= 1
        }
        return n == 0 ? k : k - n
    }
    
    func cursorLeft(_ k: Int) -> String {
        var k = k
        while k > 0 && !left.isEmpty {
            let a = left.removeLast()
            right.append(a)
            k -= 1
        }
        let n = left.count, start = n - min(10,n)
        return String(left[start..<left.count])
    }
    
    func cursorRight(_ k: Int) -> String {
        var k = k
        while k > 0 && !right.isEmpty {
            let b = right.removeLast()
            left.append(b)
            k -= 1
        }
        let n = left.count, start = n - min(10,n)
        return String(left[start..<left.count])
    }
}

/**
 * Your TextEditor object will be instantiated and called as such:
 * let obj = TextEditor()
 * obj.addText(text)
 * let ret_2: Int = obj.deleteText(k)
 * let ret_3: String = obj.cursorLeft(k)
 * let ret_4: String = obj.cursorRight(k)
 */
```