# Swift: Prefix mix Suffix Trie

**Author:** www16852
**Votes:** 0
**Link:** [https://leetcode.com/problems/count-prefix-and-suffix-pairs-ii/solutions/4746310/](https://leetcode.com/problems/count-prefix-and-suffix-pairs-ii/solutions/4746310/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
O(The sum of the lengths of all words[i])
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
O(The sum of the lengths of all words[i])
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    
    var root = Trie()
    
    func countPrefixSuffixPairs(_ words: [String]) -> Int {
        let n = words.count
        var j = n-1
        var res = 0
        while j >= 0 {
            let i = j
            let inStr = words[i].map{"\\($0)"}
            // \u63D2\u5165i\u5224\u65B7\u6709\u6C92\u6709\u76F8\u5C0D\u61C9\u7684j
            var len = 1
            var cur = root
            var add = 0
            while len <= inStr.count {
                let pre = inStr[len-1]
                let sub = inStr[inStr.count-1-(len-1)]
                let str = pre + "_" + sub
                if let t = cur.map[str] {
                    add = t.cnt
                    cur = t
                } else {
                    add = 0
                    break
                }
                len += 1
            }
            // print("words[i]=\\(words[i]) add=\\(add)")
            res += add
            
            // \u5EFA\u69CBj Trie
            len = 1
            cur = root
            while len <= inStr.count {
                let pre = inStr[len-1]
                let sub = inStr[inStr.count-1-(len-1)]
                let str = pre + "_" + sub
                var subTrie: Trie = Trie()
                if let t = cur.map[str] {
                    subTrie = t
                    subTrie.cnt += 1
                }
                cur.map[str] = subTrie
                cur = subTrie
                len += 1
            }
            
            j -= 1
        }
        // print("words=\\(words)")
        // print("preRoot=\\(preRoot.map)")
        // print("sufRoot=\\(sufRoot.map)\
")
        return res
    }
}

class Trie {
    var map: [String: Trie] = [:]
    var cnt = 1
}
```