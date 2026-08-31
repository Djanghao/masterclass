# Simple and readable BFS solution in JavaScript + Explanation

**Author:** adriansky
**Votes:** 45
**Link:** [https://leetcode.com/problems/open-the-lock/solutions/730358/](https://leetcode.com/problems/open-the-lock/solutions/730358/)

---

We start from the "0000" combination and then moves to the adjacent combinations. Basically turn up and down each of the wheels to generate "1000", "9000", "0100", "0900", "0010", "0090", "0001", "0009".

You can think of this problem as graph, where the node "0000" will have 8 edges. Each one of the new combinations will have 8 more adjacent nodes. However, we will start to have duplicates. For instance:

- "**0000**" -> ["1000", "9000", "0100", "0900", "0010", "0090", "**0001**", "0009"]
- "**0001**" -> ["1001", "9001", "0101", "0901", "0011", "0091", "0002", "**0000**"]

As you can see "0001" will lead to "0000", again! So we have to keep track of seen combinations.

Since, it's a graph problem we can use BFS to fine the combination.

Here's the implementation in JavaScript/Typescript
```typescript
function openLock(deadends: string[], target: string): number {
  const dead = new Set(deadends);
  const queue: [string, number][] = [['0000', 0]];
  const seen = new Set(['0000']);
  
  for (let [curr, turns] of queue) {
    if (curr === target) return turns;
    if (dead.has(curr)) continue;    
    for (let next of getNextStates(curr)) {
      if (seen.has(next)) continue;
      seen.add(next);
      queue.push([next, turns + 1]);
    }
  }
  
  return -1;
};
  
function getNextStates(s = '0000'): string[] {
  const ans: string[] = [];
  
  for (let i = 0; i < s.length; i++) {
    ans.push(s.slice(0, i) + ((+s[i] + 1) % 10).toString() + s.slice(i + 1));
    ans.push(s.slice(0, i) + ((+s[i] + 9) % 10).toString() + s.slice(i + 1));
  }
  
  return ans;
}
```

There are two tricky parts:
- Circular module for negative numbers. At first I was doing ` ((+s[i] - 1) % 10)`. That didn't work `-1 % 10 === -1`. So, I changed to `((+s[i] + 9) % 10)`.
- Where you mark your nodes as visited matters. I got time out errors, when I was marking it as visited, AFTER they were dequeue. I solved the issue by marking the nodes as visited right before they are enqueue. That way we don't fill the queue with unecessary values.
