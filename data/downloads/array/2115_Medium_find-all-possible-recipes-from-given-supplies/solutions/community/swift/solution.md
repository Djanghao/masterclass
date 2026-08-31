# swift

**Author:** sunitamnit
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/solutions/1648630/](https://leetcode.com/problems/find-all-possible-recipes-from-given-supplies/solutions/1648630/)

---

```
 func findAllRecipes(_ recipes: [String], _ ingredients: [[String]], _ supplies: [String]) -> [String] {
        var dict: [String: Bool] = [:]
        var output: [String] = []
        for str in supplies {
            dict[str] = true
        }
        
        var istrue = true
        while(istrue) {
            var c = 0
        for i in 0..<ingredients.count {
            if i < recipes.count, dict[recipes[i]] != nil {
                continue
            } 
            var t = ingredients[i]
            var tt = 0
            for k in 0..<t.count {
                if dict[t[k]] == nil {
                    break
                }
               
                tt = k+1
            }
            if tt == t.count, i < recipes.count {
                output.append(recipes[i])
                dict[recipes[i]] = true
                c = 1
            }
        }
            if c == 0 {
                istrue = false
            }
        }
        
        return output
    }