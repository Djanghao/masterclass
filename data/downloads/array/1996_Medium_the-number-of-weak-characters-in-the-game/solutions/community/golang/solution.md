# Golang | O(n)

**Author:** ansuraj
**Votes:** 1
**Link:** [https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/solutions/2565998/](https://leetcode.com/problems/the-number-of-weak-characters-in-the-game/solutions/2565998/)

---

```
func numberOfWeakCharacters(properties [][]int) int {
 
    mem := make([]int, 1e5 + 2)
    weak := 0
    
    for i:=range properties {
        mem[properties[i][0]] = max(mem[properties[i][0]], properties[i][1])
    }
    
    for i:=len(mem)-2; i>=0; i-- {
        mem[i] = max(mem[i], mem[i+1])
    }
    
    for i:=range properties {
        if properties[i][1] < mem[properties[i][0] + 1] {
            weak += 1
        }
    }
    
    return weak
}

func max(a,b int) int {
    if a > b {
        return a
    }
    
    return b
}