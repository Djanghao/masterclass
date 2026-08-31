# Swift solution

**Author:** yamironov
**Votes:** 1
**Link:** [https://leetcode.com/problems/prefix-and-suffix-search/solutions/1186574/](https://leetcode.com/problems/prefix-and-suffix-search/solutions/1186574/)

---

Swift solution
```
class Node {
    var char: Character
    var indexes: [Int]
    var nexts: [Node]
    init(_ char: Character) {
        self.char = char
        self.indexes = [Int]()
        self.nexts = [Node]()
    }
}

class WordFilter {

    var prefix: Node
    var suffix: Node
    var cache: [String: [String: Int]]

    init(_ words: [String]) {
        self.prefix = Node("?")
        self.suffix = Node("?")
        self.cache = [String: [String: Int]]()
        for wi in 0..<words.count {
            let word = Array(words[wi]), wc = word.count
            var prefixNode = prefix, suffixNode = suffix
            for ci in 0..<wc {
                var prefixNext: Node? = nil, suffixNext = prefixNext
                for next in prefixNode.nexts where next.char == word[ci] {
                    prefixNext = next
                }
                for next in suffixNode.nexts where next.char == word[wc - 1 - ci] {
                    suffixNext = next
                }
                if prefixNext == nil {
                    let prefixNew = Node(word[ci])
                    prefixNode.nexts.append(prefixNew)
                    prefixNode = prefixNew
                } else {
                    prefixNode = prefixNext!
                }
                prefixNode.indexes.append(wi)
                if suffixNext == nil {
                    let suffixNew = Node(word[wc - 1 - ci])
                    suffixNode.nexts.append(suffixNew)
                    suffixNode = suffixNew
                } else {
                    suffixNode = suffixNext!
                }
                suffixNode.indexes.append(wi)
            }
        }
    }
    
    func f(_ prefix: String, _ suffix: String) -> Int {
        if let cache1 = cache[prefix], let cache2 = cache1[suffix] { return cache2 }
        let aprefix = Array(prefix), asuffix = Array(suffix), pc = aprefix.count, sc = asuffix.count
        var pi = [Int](), si = pi, node: Node? = self.prefix
        processPrefix: for i in 0..<pc {
            for next in node!.nexts where next.char == aprefix[i] {
                node = next
                continue processPrefix
            }
            node = nil
            break
        }
        if node != nil { pi = node!.indexes }
        node = self.suffix
        processSuffix: for i in 0..<sc {
            for next in node!.nexts where next.char == asuffix[sc - 1 - i] {
                node = next
                continue processSuffix
            }
            node = nil
            break
        }
        if node != nil { si = node!.indexes }
        let results = Array(Set(pi).intersection(Set(si))).sorted(by: { $0 > $1 })
        let result = results.count > 0 ? results.first! : -1
        cache[prefix, default: [String: Int]()][suffix] = result
        return result
    }
}

/**
 * Your WordFilter object will be instantiated and called as such:
 * let obj = WordFilter(words)
 * let ret_1: Int = obj.f(prefix, suffix)
 */
```