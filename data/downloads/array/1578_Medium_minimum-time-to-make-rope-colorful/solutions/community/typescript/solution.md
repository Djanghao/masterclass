# Typescript || greedy || array || O(n)

**Author:** onifs10
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-time-to-make-rope-colorful/solutions/2655412/](https://leetcode.com/problems/minimum-time-to-make-rope-colorful/solutions/2655412/)

---

# Intuition
 use greedy approach to get best possible answer at every position in a single pass

# Approach
for every position i , we check i with the next colour (i + 1), if they are the same colour , we check the position with the minimum time, we pick that time, delete the  min time in neededTime array;

# Complexity
- Time complexity:
    $$O(n)$$
- Space complexity:
    $$O(1)$$

# Code
```
function minCost(colors: string, neededTime: number[]): number {

    const swap = (a:number,b:number) => {
        [neededTime[a], neededTime[b]] = [neededTime[b], neededTime[a]];
    }

    let minCost = 0;
    for(let i = colors.length - 2; i >= 0;i--){
        if(colors[i] == colors[i+1]){
            // check for min cost 
            if(neededTime[i] < neededTime[i+1]){
                // if the colour at the current position needs lesser time , we remove this color 

                minCost+= neededTime[i];
                swap(i,i+1);
            }else{
                minCost+= neededTime[i + 1];   
            }
        }
    }
    return minCost
};
```