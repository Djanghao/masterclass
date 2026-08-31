# [Javascript] Sliding window + Max heap for charging - Quite similar to Jump Game VI

**Author:** djslim
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-number-of-robots-within-budget/solutions/2547006/](https://leetcode.com/problems/maximum-number-of-robots-within-budget/solutions/2547006/)

---

Quite similiar to the way I solved Jump game VI https://leetcode.com/submissions/detail/794296300/
Idea: Sliding window + Max heap for charging
```
var maximumRobots = function(chargeTimes, runningCosts, budget) {
    const pq = new PriorityQueue((a,b) => b.val - a.val)
    let i = 0
    let j = 0 
    
    let currSum = 0
    let maxSoFar = 0
    while(j < runningCosts.length) {
        pq.enqueue({idx:j, val: chargeTimes[j]})
        currSum+=runningCosts[j]
        
        while(pq.size() && currSum*(j-i+1) + pq.peek().val > budget && i < runningCosts.length) {
            currSum -= runningCosts[i]
            while(pq.size() && pq.peek().idx <= i) {
                pq.dequeue()
            }
            i++
        }
        
        maxSoFar = Math.max(maxSoFar, j-i+1)
        j++
    }
    
    return maxSoFar
};


// My priority queue implementation
class PriorityQueue {
  constructor(compFunc){
    this.compFunc =  compFunc
    this.heap = []
  }


  enqueue(val){
    this.heap.push(val)

    if(this.heap.length > 1){
      this.siftUp(this.heap.length - 1)
    }
      
  }

  dequeue(){
      
    if(this.heap.length <= 1){
      return this.heap.pop()
    }

    this.swap(0, this.heap.length - 1)

    const removed = this.heap.pop()

    if(this.heap.length > 1){
      this.siftDown(0)
    }

    return removed
  }

  size(){
    return this.heap.length
  }

  peek(){
    return this.heap[0]
  }

  siftUp(idx){
    const parent = Math.floor((idx - 1)/2)
    if(parent < 0) return
    

    //                     5                  3
    if(this.compFunc(this.heap[parent], this.heap[idx]) > 0){
      this.swap(parent, idx)
      this.siftUp(parent)
    }
  }

  siftDown(idx){
    if(idx >= this.heap.length - 1) return

    const child = this.getChild(idx)
    if(!child) return


    //                       5            1
    if(this.compFunc(this.heap[idx], this.heap[child]) > 0){
      this.swap(idx, child)
      this.siftDown(child)
    }
  }

  getChild(idx){
    let left = 2*idx + 1
    let right = 2*idx + 2
    
   if(this.heap.length <= left) left = null
    if(this.heap.length <= right) right = null

    if(left !== null && right !== null) {
      return this.compFunc(this.heap[left], this.heap[right]) > 0 ? right : left
    }

    return left
  }

  swap(i, j){
    [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]]
  }
}
```