# [Typescript] Sliding Window + Priority Queue & lazy removal

**Author:** amitbiswas1992
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-number-of-robots-within-budget/solutions/2525333/](https://leetcode.com/problems/maximum-number-of-robots-within-budget/solutions/2525333/)

---

```
//pattern = sliding window + priority queue and lazy removal from queue
//Time Complexity = O(n*logn) => (n+n) * logn = 2nlogn = nlogn, n = iterate array, n = priority queue lazy removal each element max once , logn, priorty queue push  
//Space Complexity = O(n) , priority queue size

function maximumRobots(chargeTimes: number[], runningCosts: number[], budget: number): number {
    
    let windowStart = 0
    
    let currentBudget = 0
    let maxRobots = 0
    let runningCostsSum = 0
    
    let maxChargeTime = 0
    
    
    let maxPriorityQueue = new MaxPriorityQueue({priority: ( [charge,index] ) => charge })
    
    for(let windowEnd=0;windowEnd<chargeTimes.length;windowEnd++){
        //max(chargeTimes) + k * sum(runningCosts)
        
        maxPriorityQueue.enqueue([chargeTimes[windowEnd],windowEnd])
        
        maxChargeTime = maxPriorityQueue.front().element[0]
        
        runningCostsSum += runningCosts[windowEnd]
        
        let windowSize = windowEnd-windowStart+1
        currentBudget = maxChargeTime +  windowSize* runningCostsSum
        
        
        if(currentBudget<=budget){
            
            maxRobots = Math.max(maxRobots,windowSize)
        }
        else{
            
            runningCostsSum -= runningCosts[windowStart]
            windowStart++
            while(!maxPriorityQueue.isEmpty() && maxPriorityQueue.front().element[1]<windowStart) maxPriorityQueue.dequeue()
            
        }
    }
    
    return maxRobots
        

};
```