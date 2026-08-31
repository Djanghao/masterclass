# Beat 100% on time and space

**Author:** kiemtien
**Votes:** 0
**Link:** [https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/solutions/5342894/](https://leetcode.com/problems/replace-all-s-to-avoid-consecutive-repeating-characters/solutions/5342894/)

---

```
class Solution {
func modifyString(_ s: String) -> String {
  var arrS = Array(s)
  var alphabets = Set("abcdefghijklmnopqrstuvwxyandz")
    
  guard arrS.count > 1 else {
    return arrS[0] == "?" ? String(alphabets.randomElement()!) : String(arrS[0])
  }
  for index in 0..<arrS.count {
    if arrS[index] != "?" { continue }
    if arrS[index] == "?" {
      switch index {
      case 0: 
        var nextRight = arrS[index+1]
   
        alphabets.remove(nextRight)
        
        arrS[index] = alphabets.randomElement()!
        
        if nextRight != "?" {
          alphabets.insert(nextRight)
        }
      
      case arrS.count-1:
        var nextLeft = arrS[index-1]
    
          alphabets.remove(nextLeft)
        
        arrS[index] = alphabets.randomElement()!
        if nextLeft != "?" {
          alphabets.insert(nextLeft)
        }
      
      case 1...arrS.count-2:
        var nextLeft = arrS[index-1]
        var nextRight = arrS[index+1]

          alphabets.remove(nextLeft)
          alphabets.remove(nextRight)
        
    
        arrS[index] = alphabets.randomElement()!
        
        if nextLeft != "?" {
          
          alphabets.insert(nextLeft)
         
        }
        
        if nextRight != "?" {
          alphabets.insert(nextRight)
        }
      
        
      default: break
      }
    }
  }
  return String(arrS)
  
}
}
```