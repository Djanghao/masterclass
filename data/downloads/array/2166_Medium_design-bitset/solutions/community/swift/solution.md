# Swift O(n) Dictionary Set

**Author:** tmunir
**Votes:** 0
**Link:** [https://leetcode.com/problems/design-bitset/solutions/4515159/](https://leetcode.com/problems/design-bitset/solutions/4515159/)

---

# Complexity
- Time complexity: $$O(n)$$

- Space complexity: $$O(n)$$

# Code
```

class Bitset {

    private let size: Int
    private var bitsFreq: [Int: Set<Int>]

    init(_ size: Int) {
        self.size = size
        bitsFreq = [
            0: Set(0..<size),
            1: [],
        ]
    }
    
    func fix(_ idx: Int) {
        bitsFreq[0]!.remove(idx)
        bitsFreq[1]!.insert(idx)
    }
    
    func unfix(_ idx: Int) {
        bitsFreq[1]!.remove(idx)
        bitsFreq[0]!.insert(idx)
    }
    
    func flip() {
        (bitsFreq[0], bitsFreq[1]) = (bitsFreq[1], bitsFreq[0])
    }
    
    func all() -> Bool {
        count() == size
    }
    
    func one() -> Bool {
        !bitsFreq[1]!.isEmpty
    }
    
    func count() -> Int {
        bitsFreq[1]!.count
    }
    
    func toString() -> String {
        return Array(0..<size)
            .reduce("") { 
                $0 + (bitsFreq[1]!.contains($1) ? "1" : "0") 
            }
    }
}
```