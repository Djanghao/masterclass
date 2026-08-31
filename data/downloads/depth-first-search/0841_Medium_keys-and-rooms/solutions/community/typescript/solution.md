# Ttypescript solution 2 solutions

**Author:** user8115IK
**Votes:** 8
**Link:** [https://leetcode.com/problems/keys-and-rooms/solutions/2688253/](https://leetcode.com/problems/keys-and-rooms/solutions/2688253/)

---

Here is the DFS Solution

```
function canVisitAllRooms(rooms: number[][]): boolean {
    let stack: number[] = [0];
    let visited = new Set();

    while(stack.length){
        let curr = stack.pop()!;
        if(visited.has(curr)) continue;

        stack.push(...rooms[curr]);

        visited.add(curr)
    }

    return visited.size === rooms.length;
};

```


And Here is the BFS Solution

```
function canVisitAllRooms(rooms: number[][]): boolean {
    let queue: number[] = [0];
    let visited = new Set();

    while(queue.length){
        let curr = queue.shift()!;
        if(visited.has(curr)) continue;
        for(let k of rooms[curr]){
            queue.push(k);
        }
        visited.add(curr)
    }

    return visited.size === rooms.length;
};
```