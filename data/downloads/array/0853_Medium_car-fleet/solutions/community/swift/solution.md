# Swift | Easy

**Author:** artemvor1997
**Votes:** 3
**Link:** [https://leetcode.com/problems/car-fleet/solutions/3168903/](https://leetcode.com/problems/car-fleet/solutions/3168903/)

---

# Complexity
- Time complexity: O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
    func carFleet(_ target: Int, _ position: [Int], _ speed: [Int]) -> Int {
        if speed.count == 1 {return 1}
        let array = zip(position, speed).sorted{$0.0 < $1.0}
        var stack = [Double]()
        
        for (x, v) in array {
            let time = Double(target - x) / Double(v)
            while !stack.isEmpty && time >= stack.last! {
                stack.popLast()
            }
            stack.append(time) 
        }
        return stack.count
    } 
}
```