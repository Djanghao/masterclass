# Swift solution

**Author:** Slava200412
**Votes:** 0
**Link:** [https://leetcode.com/problems/powerful-integers/solutions/3933675/](https://leetcode.com/problems/powerful-integers/solutions/3933675/)

---


# Code
```
import Foundation
class Solution {
    func powerfulIntegers(_ x: Int, _ y: Int, _ bound: Int) -> [Int] 
    {
        var arr:[Int] = []
        var temp = 0.0
        Outerloop:for i in 0...19{
            for j in 0...19{
                temp = pow(Double(x),Double(i)) + pow(Double(y), Double(j))
                if temp > Double(Int.max){
                    continue Outerloop
                }
                guard Int(temp) <= bound else{continue Outerloop}
                guard !arr.contains(Int(temp)) else{continue}
                arr.append(Int(temp))
                }
            }
    return arr
        }
}
```