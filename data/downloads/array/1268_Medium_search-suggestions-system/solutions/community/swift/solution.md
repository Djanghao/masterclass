# Swift + Sort

**Author:** stasost
**Votes:** 2
**Link:** [https://leetcode.com/problems/search-suggestions-system/solutions/671177/](https://leetcode.com/problems/search-suggestions-system/solutions/671177/)

---

```        
let sortedProducts = products.sorted()
        var result = [[String]]()
    
	    var prefix = ""
        for char in searchWord {
            var current = [String]()
            prefix.append(char)
        
            for product in sortedProducts where current.count < 3 {
                if product.hasPrefix(prefix) {
                    current.append(product)
                }
            }
        
            result.append(current)
        }

        return result
}