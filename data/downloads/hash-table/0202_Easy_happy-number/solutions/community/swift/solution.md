# 2 Swift solutions with explanations. Set & 2 pointers.

**Author:** iilyasov
**Votes:** 3
**Link:** [https://leetcode.com/problems/happy-number/solutions/596509/](https://leetcode.com/problems/happy-number/solutions/596509/)

---

2 pointers solution. Space O(1)
This method is also being used to find a cycle in a Linked List
- first pointer is moving slow, one step at a time
- second pointer moves fast, two steps at a time
- if there is cycle slow and fast pointers will meet at some point
```
    func isHappy(_ n: Int) -> Bool {
        var slow = n
        var fast = n
        
        while true {
            slow = getNext(slow)
            fast = getNext(fast)
            fast = getNext(fast)
            
            if slow == fast {
                break
            }
        }
        
        return fast == 1
    }
```

Helper method to calculate the sum
```
    private func getNext(_ n: Int) -> Int {
        var sum = 0
        var input = n
            
        while input > 0 {
            let remainder = input % 10
            sum += remainder * remainder
            input /= 10
        }
        
        return sum
    }
```

Use a Set to detect cycle. Space O(n)
```
    func isHappy2(_ n: Int) -> Bool {
        var input = n
        var seen = Set<Int>()
        
        while input != 1 {
            if seen.contains(input) {
                return false
            }
            
            seen.insert(input)
            input = getNext(input)
        }
        
        return true
    }