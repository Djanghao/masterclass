# [Swift] Solution of Dinner Plates

**Author:** _burning_ice_
**Votes:** 0
**Link:** [https://leetcode.com/problems/dinner-plate-stacks/solutions/3115244/](https://leetcode.com/problems/dinner-plate-stacks/solutions/3115244/)

---

- Space complexity: O(l + m), l - space for list of n stacks, m - space for unfullStacks maximum m == n
<!-- Add your space complexity here, e.g. $$O(n)$$ -->


# Code
```
class DinnerPlates {
    var list:[[Int]] = []
    var capacity: Int
    var unfullStacks: Set<Int> = []

    init(_ capacity: Int) {
        self.capacity = capacity
    }
    
    func push(_ val: Int) {
        if list.isEmpty || unfullStacks.isEmpty {
            list.append([val])
            if capacity > list[list.count - 1].count {
                unfullStacks.insert(list.count - 1)
            }
            return
        }

        var index = list.count - 1
        let indexes = Array(unfullStacks)
        for i in indexes {
            if index > i {
                index = i
            }
        }

        var stack = list[index]
        if stack.count < capacity {
            stack.append(val)
            list[index] = stack
            if stack.count == capacity {
                unfullStacks.remove(index)
            }
        }
    }
    
    func pop() -> Int {
        guard !list.isEmpty else {
            return -1
        }

        unfullStacks.remove(list.count - 1)
        var stack = list.removeLast()
        let value = stack.removeLast()
        if stack.count >= 1 {
            list.append(stack)
            unfullStacks.insert(list.count - 1)
            return value
        } 
        removeLastEmptyStacks()
        return value
    }
    
    func popAtStack(_ index: Int) -> Int {
        guard list.count > index else {
            return -1
        }

        var stack = list[index]
        guard !stack.isEmpty else {
            return -1
        }
        
        let value = stack.removeLast()
        list[index] = stack
        if index == list.count - 1, stack.isEmpty {
            removeLastEmptyStacks()
        } else {
            unfullStacks.insert(index)
        }
        return value
    }

    func removeLastEmptyStacks() {
        var i = list.count - 1
        while i >= 0 && list[i].isEmpty {
            list.removeLast()
            unfullStacks.remove(i)
            i -= 1  
        } 
    }
}

/**
 * Your DinnerPlates object will be instantiated and called as such:
 * let obj = DinnerPlates(capacity)
 * obj.push(val)
 * let ret_2: Int = obj.pop()
 * let ret_3: Int = obj.popAtStack(index)
 */
```