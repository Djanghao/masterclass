# Swift - Graph

**Author:** pitt500
**Votes:** 3
**Link:** [https://leetcode.com/problems/accounts-merge/solutions/806505/](https://leetcode.com/problems/accounts-merge/solutions/806505/)

---

```
class Solution {
    func accountsMerge(_ accounts: [[String]]) -> [[String]] {
        var emailRelation = [String: Set<String>]()
        var emailToName = [String: String]()
        
        buildGraph(accounts, &emailRelation, &emailToName)
        
        return dfs(emailRelation, emailToName)
    }
    
    private func buildGraph(_ accounts: [[String]],_ emailRelation: inout [String: Set<String>],_ emailToName: inout [String: String]) {
        for account in accounts {
            let name = account[0]
            let emails = Array(account[1...])
            let first = emails[0]
            
            for email in emails {
                emailRelation[first, default: []].insert(email)
                emailRelation[email, default: []].insert(first)
                emailToName[email] = name
            }
        }
    }
    
    private func dfs(_ emailRelation: [String: Set<String>],_ emailToName: [String: String]) -> [[String]] {
        var result: [[String]] = []
        var visited = Set<String>()
        
        for email in emailRelation.keys {
            if !visited.contains(email) {
                visited.insert(email)
                
                var stack: [String] = []
                var emailList: [String] = []
                
                stack.append(email)
                
                while !stack.isEmpty {
                    let em = stack.removeLast()
                    emailList.append(em)
                    
                    for neigbor in emailRelation[em]! where !visited.contains(neigbor) {
                        visited.insert(neigbor)
                        stack.append(neigbor)
                    }
                }
                
                result.append([emailToName[email]!] + emailList.sorted() )
                
            }
        }
        
        return result
    }
}
```