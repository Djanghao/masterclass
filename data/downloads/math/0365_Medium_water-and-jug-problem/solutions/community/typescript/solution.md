# IMO Affordable for interview [js/ts] Recursion + Memoization.

**Author:** torocholazzz
**Votes:** 1
**Link:** [https://leetcode.com/problems/water-and-jug-problem/solutions/2978951/](https://leetcode.com/problems/water-and-jug-problem/solutions/2978951/)

---

# Note
This is not the most optimal solution. This solution use recursion and memoization, that affordable enough to be found when doing interview question. To master this problem, consider try the better solution using `GCD`, `Number Theory`,`B\xE9zout's identity`.

# Link
https://leetcode.com/problems/water-and-jug-problem/submissions/868970033/
`Runtime 3954 ms Beats 20%` `Memory 141.6 MB Beats 20%`

# Intuition
Doing Brute Force search using DFS or BFS and stop once we found the possibility, otherwise continue search all of the combination. Therefore we return false if we cannot found any combination.

# Approach
Create recursive function that check if the jug combination fulfill the target, and call all combination from the operation based the questions. In this solution I just use the combination that solve the first example question.

The combinations are:
1. fill the first jug until full.
2. fill the second jug unitl full.
3. move water fron jug1 to jug2.
4. move water from jug2 to jug1.
5. empty jug1.
6. empty jug2.

There is a possibility the same combination happen again, we want to skip that to avoid cycle, so we use memoization with `set`. Using `set` is cheaper than use `2D Array that have maximum 10e6**2`. Before we call the function we always make sure that the combination is never run before. Therefore we can solve the problem even though the performance is slow \uD83D\uDE1C. This the basic solution and the thinking process, ask me in comment if you doubt something \uD83E\uDD13

# Code
```
function canMeasureWater(jug1Capacity: number, jug2Capacity: number, targetCapacity: number): boolean {
    if(targetCapacity > jug1Capacity + jug2Capacity) return false;

    const mem = new Set<string>();

    const filler1 = createFiller(jug1Capacity);
    const filler2 = createFiller(jug2Capacity);

    let res = false;

    const check = (jug1:number, jug2:number) => {
        let key = createKey(jug1, jug2)
        if(mem.has(key) || res) return;
        if(jug1===targetCapacity || jug2 === targetCapacity || jug1+jug2===targetCapacity) {
            res = true;
            return ;
        }

        mem.add(key);

        key = createKey(Math.min(jug1Capacity, jug1+filler1(Infinity)), jug2);
        if(!mem.has(key)) check(Math.min(jug1Capacity, jug1+filler1(Infinity)), jug2);

        key = createKey(jug1,Math.min(jug2Capacity, jug2+filler2(Infinity)));
        if(!mem.has(key)) check(jug1, Math.min(jug2Capacity, jug2+filler2(Infinity)));

        const moveToJug2 = Math.min(jug1, jug2Capacity - jug2);
        key = createKey(jug1 - moveToJug2,jug2 + moveToJug2);
        if(!mem.has(key)) check(jug1 - moveToJug2, jug2 + moveToJug2);

        const moveToJug1 = Math.min(jug2, jug1Capacity - jug1);
        key = createKey(jug1 + moveToJug1,jug2 - moveToJug1);
        if(!mem.has(key)) check(jug1 + moveToJug1, jug2 - moveToJug1);

        if(jug1>0 && !mem.has(createKey(0,jug2))) check(0,jug2);
        if(jug2>0 && !mem.has(createKey(jug1,0))) check(jug1,0);
    }

    check(0, 0);
    
    return res;
};

function createFiller(capacity:number): (volume:number)=>number {
    return function(volume:number){
        return Math.min(capacity, volume);
    }
}

function createKey(jug1, jug2): string {
    return `${jug1},${jug2}`
}
```