# Swift 0ms BFS Solution

**Author:** jfrsheriff
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-genetic-mutation/solutions/2437296/](https://leetcode.com/problems/minimum-genetic-mutation/solutions/2437296/)

---

```
class Solution {
    
    func minMutation(_ start: String, _ end: String, _ bank: [String]) -> Int {
        guard start != end, !bank.isEmpty else {return -1}
        let mutationArray : [Character] = ["A","C","G","T"]
        
        var queue : [(String , Int)] = [(start,0)]
        var bankSet : Set<String> = Set(bank)
        
        while !queue.isEmpty {
            let (cur,noOfSteps) = queue.removeFirst() 
            
            if cur == end {
                return noOfSteps
            }
            let curArray = Array(cur)
            
            for index in 0..<curArray.count{
                for mutationChar in mutationArray {
                    var newMutation : [Character] = []
                    if index == 0 {
                         newMutation = [mutationChar] + curArray[index+1..<curArray.count] 
                    }else if index == curArray.count - 1 {
                        newMutation =  curArray[0..<index] + [mutationChar]
                    }else {
                        newMutation = curArray[0..<index] +  [mutationChar] + curArray[index+1..<curArray.count]
                    }      
                    let newMutationStr = String(newMutation)
                    if bankSet.contains(newMutationStr) {
                        queue.append((newMutationStr,noOfSteps+1))
                        bankSet.remove(newMutationStr)
                    }
                }
            }   
        }
        return -1
    }
    
}

```