# Swift Clean Solution Beats 100%

**Author:** jfrsheriff
**Votes:** 1
**Link:** [https://leetcode.com/problems/statistics-from-a-large-sample/solutions/2457926/](https://leetcode.com/problems/statistics-from-a-large-sample/solutions/2457926/)

---

```
class Solution {
    func sampleStats(_ count: [Int]) -> [Double] {
        guard !count.isEmpty else {return []}
        var minimum  = Int.max
        var maximum  = Int.min
        var sum = 0 
        var noOfElements = 0
        var median : Double = 0
        var mode = 0
        var modeMaxOccurance = 0
        
        for i in 0..<count.count {
            let curCount = count[i]
            if curCount != 0{
                minimum = min(minimum,i)
                maximum = max(maximum,i)
                
                sum += (i*curCount)
                noOfElements += (curCount)
                
                if curCount > modeMaxOccurance{
                    modeMaxOccurance = curCount
                    mode = i
                }
            }
        }
        
        if noOfElements % 2 == 0 {
            let mid1 = noOfElements/2
            let mid2 = noOfElements/2 - 1 
            let val1 = getElement(atIndex : mid1 , count : count)
            let val2 = getElement(atIndex : mid2 , count : count)
            median = ( Double(val1) + Double(val2) ) / 2.0
        }else {
            let mid = noOfElements/2
            let val = getElement(atIndex : mid , count : count)
            median = Double(val)
        }
        
        return [Double(minimum),Double(maximum),Double(sum)/Double(noOfElements),median,Double(mode)]
    }
    
    
    func getElement(atIndex index : Int, count : [Int]) -> Int{
        var curIndex = -1 
        for i in 0..<count.count {
            let curCount = count[i]
            curIndex += (curCount)
            if curIndex >= index{
                return i
            }
        }
        return 0 
    } 
}
```