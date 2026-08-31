# swift easy to understand

**Author:** umam
**Votes:** 0
**Link:** [https://leetcode.com/problems/unique-word-abbreviation/solutions/2853170/](https://leetcode.com/problems/unique-word-abbreviation/solutions/2853170/)

---

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
init: $$O(n)$$
isUnique: $$O(1)$$

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$

# Code
```

class ValidWordAbbr {
    var dict: [String: Set<String>] = [:]

    // O(n)
    init(_ dictionary: [String]) {
        for word in dictionary {
            dict[makeAbv(word), default: []].insert(word)
        }
    }
    
    // O(1)
    func isUnique(_ word: String) -> Bool {
        let abv = makeAbv(word)

        if let val = dict[abv] {
            if val.count > 1 { return false }
            return val.first! == word
        } else {
            return true
        }
    }

    // O(1)
    func makeAbv(_ word: String) -> String {
        let count = word.count
        guard count > 2 else { return word }
        let W = Array(word)
        let distance = count - 2

        return "\\(W[0])\\(distance)\\(W.last)"
    }
}

/**
 * Your ValidWordAbbr object will be instantiated and called as such:
 * let obj = ValidWordAbbr(dictionary)
 * let ret_1: Bool = obj.isUnique(word)
 */
```