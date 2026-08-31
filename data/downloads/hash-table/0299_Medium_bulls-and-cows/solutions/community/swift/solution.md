# Swift Clean Easy Solution

**Author:** jfrsheriff
**Votes:** 3
**Link:** [https://leetcode.com/problems/bulls-and-cows/solutions/2682111/](https://leetcode.com/problems/bulls-and-cows/solutions/2682111/)

---

```
class Solution {
    func getHint(_ secret: String, _ guess: String) -> String {
	
        guard secret.count == guess.count else {return ""}
        
        var secretA = Array(secret)
        var guessA = Array(guess)
        
        var sDict : [Character : Int] = [:]
        var gDict : [Character : Int] = [:]
        
        var bulls = 0
        var cows = 0
        
        // Finding Bulls
        for i in 0..<secretA.count {
            if secretA[i] == guessA[i] {
                bulls += 1 
            }else{
                sDict[secretA[i],default:0] += 1
                gDict[guessA[i],default:0] += 1
            }
        }
        
        // Finding Cows
        for (key,val) in sDict{
            let minVal = min(gDict[key,default:0],val)
            cows += minVal
        }
        return "\\(bulls)A\\(cows)B"
		
    }
}
```