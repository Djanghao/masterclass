# Swift easy-understanding solution | 100% Time and 100% Space

**Author:** furkanbingol
**Votes:** 0
**Link:** [https://leetcode.com/problems/sort-integers-by-the-power-value/solutions/4013489/](https://leetcode.com/problems/sort-integers-by-the-power-value/solutions/4013489/)

---

```
class Solution {
    func getKth(_ lo: Int, _ hi: Int, _ k: Int) -> Int {
        var dict = [Int : Int]()
        
        for i in lo...hi {
            let value = getPowerValue(i)
            dict[i] = value
        }
        
        let sortedDict = dict.sorted { 
            if $0.value == $1.value { 
                return $0.key < $1.key 
            }
            return $0.value < $1.value
        }
        
        return sortedDict[k-1].key
    }
    
    private func getPowerValue(_ n: Int) -> Int {
        var count = 0
        var tmp = n
        
        while tmp != 1 {
            count += 1
            tmp = (tmp % 2 == 0 ? tmp / 2 : 3 * tmp + 1)
        }
        
        return count
    }
}
```