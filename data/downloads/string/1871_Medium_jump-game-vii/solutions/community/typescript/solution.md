# TS | typescript | bfs | easy

**Author:** vhorek
**Votes:** 0
**Link:** [https://leetcode.com/problems/jump-game-vii/solutions/2259887/](https://leetcode.com/problems/jump-game-vii/solutions/2259887/)

---

```
const canReach = (s: string, minJump: number, maxJump: number): boolean => {
  if (s[s.length - 1] === '1') {
    return false
  }
  
  if (s.split('0').some(item => maxJump <= item.length)) {
    return false
  }
  
  const queue: Array<number> = []
  const arr: Array<string> = s.split('')
  
  queue.push(0)
  arr[0] = '1'
  
  while (queue.length !== 0) {
    let next: number = queue.pop() || 0
    
    if (next === s.length - 1) {
      return true
    }
    
    const end = Math.min(s.length - 1, next + maxJump)
    for (let i = next + minJump; i <= end; i++) {
      
      if (arr[i] === '0') {
        queue.push(i)
        arr[i] = '1'
      }
    }
  }
  
  return false
}
```