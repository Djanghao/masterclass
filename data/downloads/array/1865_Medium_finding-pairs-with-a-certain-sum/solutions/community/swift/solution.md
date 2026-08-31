# Swift | Two Dictionaries

**Author:** jayantsogikar
**Votes:** 1
**Link:** [https://leetcode.com/problems/finding-pairs-with-a-certain-sum/solutions/1211611/](https://leetcode.com/problems/finding-pairs-with-a-certain-sum/solutions/1211611/)

---

```swift
class FindSumPairs {
    var numberCount : [Int:Int] = [:],dict2 : [Int:Int] = [:]
    var arr1 : [Int] = []
    init(_ nums1: [Int], _ nums2: [Int]) {
        arr1 = nums1
        for i in 0..<nums2.count{
            dict2[i,default:0] = nums2[i]
            numberCount[nums2[i],default: 0] += 1
        }
    }
    
    func add(_ index: Int, _ val: Int) {
        let number = dict2[index]!
        numberCount[number]! -= 1
        if numberCount[number]! == 0{
            numberCount.removeValue(forKey: number)
        }
        dict2[index]! = number + val
        numberCount[number + val ,default: 0] += 1
    }
    
    func count(_ tot: Int) -> Int {
        var c = 0
        for n in arr1{
            if numberCount[tot - n] == nil{
                continue
            }
            else{
                c += numberCount[tot - n]!
            }
        }
        return c
    }
}
```