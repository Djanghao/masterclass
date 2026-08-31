# ✅ Swift: Stream of Characters [24.9 MB, 100%] (+ Test case)

**Author:** AsahiOcean
**Votes:** 3
**Link:** [https://leetcode.com/problems/stream-of-characters/solutions/1610735/](https://leetcode.com/problems/stream-of-characters/solutions/1610735/)

---

```swift
class StreamChecker {
    
    private final class TrieNode {
        var children: [Character:TrieNode]
        var word: Bool
        init(children: [Character:TrieNode] = [:], word: Bool = false) {
            self.children = children
            self.word = word
        }
    }
    
    private let trie: TrieNode
    private var stream: [Character]
    private let longWord: Int
    
    init(_ words: [String]) {
        trie = TrieNode()
        stream = [Character]()
        var lw = 0
        
        for word in words {
            lw = max(lw, word.count)
            
            var node = trie
            for ch in word.reversed() {
                if node.children[ch] == nil {
                    node.children[ch] = TrieNode()
                }
                if let child = node.children[ch] {
                    node = child
                }
            }
            node.word = true
        }
        self.longWord = lw
    }
    
    func query(_ letter: Character) -> Bool {
        stream.insert(letter, at: 0)
        
        if stream.count > longWord {
            stream.removeLast()
        }
        
        var node = trie
        for ch in stream {
            guard !node.word else { return true }
            if let child = node.children[ch] {
                node = child
            } else {
                return false
            }
        }
        return node.word
    }
}
```

```swift
// Result: Executed 1 test, with 0 failures (0 unexpected) in 0.041 (0.043) seconds

import XCTest

class Tests: XCTestCase {
    
    func test0() {
        let sc = StreamChecker(["cd","f","kl"])
        XCTAssertFalse(sc.query("a")) // false
        XCTAssertFalse(sc.query("b")) // false
        XCTAssertFalse(sc.query("c")) // false
        XCTAssertTrue(sc.query("d"))  // true, because 'cd' is in the wordlist
        XCTAssertFalse(sc.query("e")) // false
        XCTAssertTrue(sc.query("f"))  // true, because 'f' is in the wordlist
        XCTAssertFalse(sc.query("g")) // false
        XCTAssertFalse(sc.query("h")) // false
        XCTAssertFalse(sc.query("i")) // false
        XCTAssertFalse(sc.query("j")) // false
        XCTAssertFalse(sc.query("k")) // false
        XCTAssertTrue(sc.query("l"))  // true, because 'kl' is in the wordlist
    }
}

Tests.defaultTestSuite.run()
```