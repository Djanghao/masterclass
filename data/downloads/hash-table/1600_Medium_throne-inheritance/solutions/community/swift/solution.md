# Swift Solution | Simple To Understand | Simple Traversal

**Author:** Amangoel123
**Votes:** 0
**Link:** [https://leetcode.com/problems/throne-inheritance/solutions/4487102/](https://leetcode.com/problems/throne-inheritance/solutions/4487102/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
> Basic do whatever is written in the question.
# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
> For getInheritanceOrder the time complexity is going to be O (N) since we are going to traverse all the nodes.
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
> Space complexity is going to be O(N) approximately.
# Code
```

class ThroneInheritance {
    var store = [String: [String]]()
    var storeDeath = Set<String>()
    var startPoint = ""

    init(_ kingName: String) {
        startPoint = kingName
    }
    
    func birth(_ parentName: String, _ childName: String) {
        if let _ = store[parentName] {
            store[parentName]!.append(childName)
        } else {
            store[parentName] = [String]()
            store[parentName]!.append(childName)
        }
    }
    
    func death(_ name: String) {
        storeDeath.insert(name)
    }
    
    func traverse(_ node: String, _ ans: inout [String], _ storeDeath: Set<String>) {
        if storeDeath.contains(node) == false {
            ans.append(node)    
        }

        if let tempArray = store[node] {
            for iterator in tempArray {
                traverse(iterator, &ans, storeDeath)
            }
        }
    }

    func getInheritanceOrder() -> [String] {
        var ans = [String]()
        traverse(startPoint, &ans, storeDeath)
        return ans
    }
}

/**
 * Your ThroneInheritance object will be instantiated and called as such:
 * let obj = ThroneInheritance(kingName)
 * obj.birth(parentName, childName)
 * obj.death(name)
 * let ret_3: [String] = obj.getInheritanceOrder()
 */
```