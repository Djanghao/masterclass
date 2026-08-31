# ✔️ 100% Fastest Swift Solution, time: O(n), space: O(n).

**Author:** sergeyleschev
**Votes:** 15
**Link:** [https://leetcode.com/problems/simplify-path/solutions/1915724/](https://leetcode.com/problems/simplify-path/solutions/1915724/)

---

```
class Solution {
    // - Complexity:
    //   - time: O(n), where n is the length of path.
    //   - space: O(n), where n is the length of path.

    func simplifyPath(_ path: String) -> String {
        let paths = path.split(separator: "/")
        
        var stack = [String]()
        for path in paths {
            guard path != ".", !path.isEmpty else { continue }
            
            if path == ".." {
                if !stack.isEmpty {
                    stack.removeLast()
                }
            } else {
                stack.append(String(path))
            }
        }
        
        return "/\\(stack.joined(separator: "/"))"
    }

}
```

Let me know in comments if you have any doubts. I will be happy to answer.

Please upvote if you found the solution useful.