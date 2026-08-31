# Swift using hash

**Author:** bekadeveloper
**Votes:** 2
**Link:** [https://leetcode.com/problems/subdomain-visit-count/solutions/1393631/](https://leetcode.com/problems/subdomain-visit-count/solutions/1393631/)

---

```
class Solution {
    func subdomainVisits(_ cpdomains: [String]) -> [String] {
        var hash: [String: Int] = [:]
		
        for cpdomain in cpdomains {
            let temp = cpdomain.components(separatedBy: " ")
            let count = Int(temp[0])!
            let domain = temp[1].components(separatedBy: ".")
            var i = 0
			
            while i < domain.count {
                let subDomain = domain[i...].joined(separator: ".")
                hash[subDomain, default: 0] += count
                i += 1
            }
        }
		
        return hash.map { "\\($0.value) \\($0.key)" }
    }
}
```