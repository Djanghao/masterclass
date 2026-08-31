# Typescript : no heap no queue , simple object based solution O(N)

**Author:** Vlad_III
**Votes:** 4
**Link:** [https://leetcode.com/problems/task-scheduler/solutions/4895280/](https://leetcode.com/problems/task-scheduler/solutions/4895280/)

---

# Intuition
Solution depends on figuring out the relation between freq of the most occurring character and cooling period and the edge case of total count of all characters

# Approach
 1. Calculate the freq map of all characters , find the max freq and totalCount -> this helps in handling the case when there are just too many characters and solution doesnt depend on freq anymore
 2. The max of these two cases will be your answer


# Complexity
- Time complexity:
O(n)

- Space complexity:
O(n)

# Code
```
function leastInterval(tasks: string[], n: number): number {
    
    let freqMap:{[key:string]:number} = {};
    let maxFreq:number = 0;
    let totalCount:number =0;

    for (let task of tasks){
        if(freqMap.hasOwnProperty(task)){
            freqMap[task] +=1;
        }else{
             freqMap[task] =1;
        }
        maxFreq = Math.max(freqMap[task],maxFreq);
        totalCount++;
    }

    let ans:number = (n+1)* (maxFreq-1);
    for(let key in freqMap){
        if(freqMap[key] === maxFreq){
            ans++;
        }
    }

    return Math.max(ans,totalCount);
};
```