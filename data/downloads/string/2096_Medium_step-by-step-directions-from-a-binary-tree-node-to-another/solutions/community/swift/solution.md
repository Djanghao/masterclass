# Swift Solution: 3 Steps by votrubac

**Author:** jameslovescoding
**Votes:** 3
**Link:** [https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/solutions/2098864/](https://leetcode.com/problems/step-by-step-directions-from-a-binary-tree-node-to-another/solutions/2098864/)

---

LeetCoder named Votrubac introduced the following solution to this problem. I re-write it in Swift language and it's 95% fast.

Thank you.

Step 1: 
Build directions for both start and destination from the root.
Say we get "LLRRL" and "LRR".

Step 2:
Remove common prefix path.
We remove "L", and now start direction is "LRRL", and destination - "RR"

Step 3:
Replace all steps in the start direction to "U" and add destination direction.
The result is "UUUU" + "RR".

```
class Solution {
    func getDirections(_ root: TreeNode?, _ startValue: Int, _ destValue: Int) -> String {
        var s = [Character](), d = [Character]()
        find(root!, startValue, &s)
        find(root!, destValue, &d)
        var i = 0, maxLength = min(s.count, d.count)
        while i < maxLength && s[s.count - i - 1] == d[d.count - i - 1] {
            i += 1
        }
        //print("\\(s),\\(d),\\(i)")
        let left = Array(repeating: Character("U"), count: s.count - i)
        let right = Array(d[0..<d.count-i]).reversed()
        return String(left) + String(right)
    }
    
    func find(_ node: TreeNode, _ val: Int, _ stringBuilder: inout [Character]) -> Bool {
        if node.val == val {
            return true
        }
        if node.left != nil && find(node.left!, val, &stringBuilder) {
            stringBuilder.append(Character("L"))
        } else if node.right != nil && find(node.right!, val, &stringBuilder) {
            stringBuilder.append(Character("R"))
        }
        return stringBuilder.isEmpty == false
    }
}
```