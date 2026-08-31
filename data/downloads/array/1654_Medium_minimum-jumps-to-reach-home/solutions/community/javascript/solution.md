# BFS Javascript

**Author:** fl4sk
**Votes:** 5
**Link:** [https://leetcode.com/problems/minimum-jumps-to-reach-home/solutions/1010334/](https://leetcode.com/problems/minimum-jumps-to-reach-home/solutions/1010334/)

---

```

const minimumJumps = (forbidden, a, b, x)  => {
    
  const visited = new Set(forbidden);
  const limit = 2000 + a + b;
  const q = [[0,  0, true]];

  while(q.length){
    const [current, jumps, backJump] = q.shift();
    if(current == x )
      return jumps;
    
    if(visited.has(current))
      continue;
    
    visited.add(current);
    let nextJump
    if(backJump){
      nextJump = current - b;
      if(nextJump >= 0)
        q.push([nextJump, jumps+1, false]) 
      }
      
    nextJump = current + a;
    if(nextJump <= limit)
      q.push([nextJump, jumps+1, true])
  }
  return -1;
  
};

```