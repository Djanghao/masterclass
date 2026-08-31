# Swift simple solution

**Author:** Ksenia-Ksu
**Votes:** 1
**Link:** [https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/solutions/2176533/](https://leetcode.com/problems/largest-number-after-digit-swaps-by-parity/solutions/2176533/)

---

func largestInteger(_ num: Int) -> Int {
    

    var newArray = String(num).compactMap{Int(String($0))}
    
    var even = newArray.filter{$0 % 2 == 0}.sorted()
    var odd = newArray.filter{$0 % 2 != 0}.sorted()
    
    for i in 0..<newArray.count {
        if newArray[i] % 2 == 0 {
            newArray[i] = even.last!
            even.removeLast()
        } else {
            newArray[i] = odd.last!
            odd.removeLast()
        }
    }
    
    let intValue = newArray.reduce(0, {$0*10 + $1})
    return intValue
       
   }