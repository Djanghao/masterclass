# easy and READABLE solution, 100% faster | Typescript/JS

**Author:** garbagedevvv
**Votes:** 2
**Link:** [https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/solutions/2955802/](https://leetcode.com/problems/maximum-bags-with-full-capacity-of-rocks/solutions/2955802/)

---



# Code
```
function maximumBags(capacity: number[], rocks: number[], additionalRocks: number): number {
    const diff: number[] = []; // finding the spaces left in our bags
    for (let i = 0; i < capacity.length; i += 1){
        diff.push(capacity[i]-rocks[i]);
    }
    diff.sort((a,b)=>a-b); // sorting spaces left in the bags
    let count: number = 0; // count fullBags
    let needRocks: number = 0;
    for (let i = 0; i < diff.length; i += 1){
        if (needRocks > additionalRocks) break;
        needRocks += diff[i];
        if (needRocks <= additionalRocks){
            count += 1;
        }
    }
    return count;
};
```