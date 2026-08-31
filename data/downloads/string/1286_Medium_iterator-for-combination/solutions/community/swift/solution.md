# [Accepted] Swift

**Author:** vasilisiniak
**Votes:** 0
**Link:** [https://leetcode.com/problems/iterator-for-combination/solutions/3233393/](https://leetcode.com/problems/iterator-for-combination/solutions/3233393/)

---

```
class CombinationIterator {

    private var opts: [String]

    init(_ characters: String, _ combinationLength: Int) {
        
        func gen(_ stock: [Character] = characters.map { $0 }, _ len: Int = combinationLength) -> [[Character]] {
            guard len > 1 else { return stock.map { [$0] } }
            return stock
                .indices
                .dropLast(len - 1)
                .flatMap { i -> [[Character]] in
                    let opts = gen(Array(stock[i...].dropFirst()), len - 1)
                    return opts.map { [stock[i]] + $0 }
                }
        }

        opts = gen().map { String($0) }
    }
    
    func next() -> String {
        opts.removeFirst()
    }
    
    func hasNext() -> Bool {
        !opts.isEmpty
    }
}
```