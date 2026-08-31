# [Javascript] Built-In priorityqueue

**Author:** George_Chrysochoou
**Votes:** 8
**Link:** [https://leetcode.com/problems/single-threaded-cpu/solutions/1164727/](https://leetcode.com/problems/single-threaded-cpu/solutions/1164727/)

---

Essentially you should simulate the process as time goes by. Once you're at a time t, everything with an enqueue time <=t becomes available, yet the item that is going to be chosen depends on two extra things, the processing time and its index, respectively. Due to the builtin pq's comparator considering only the element itself to produce a priority value, we are going to assign the index to its decimal part. This way the processing time has priority over the index and everyone's happy. 


```
var getOrder = function(A) {
    A=A.map(([a,b],i)=>[a,b,i]).sort((a,b)=>b[0]-a[0])
    let pq = new MinPriorityQueue({ priority: ([e,p,idx])=>p+10**(-7)*(idx+1) }),
         curtime=A[A.length-1][0],res=[]
    while(A.length||pq.size()){
        while(A.length&&curtime>=A[A.length-1][0]) //get everything available inside the pq
            pq.enqueue(A.pop())
        if(pq.size()){ //make the selection
            let [e,p,idx]=pq.dequeue()['element']
            curtime+=Number(p)
            res.push(idx)
        }
        else if(A.length) //otherwise, increment time for the next element. 
            curtime=A[A.length-1][0]
    }
    return res
};

```