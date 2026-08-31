# Using priority queue (faster 100%)

**Author:** remedydev
**Votes:** 2
**Link:** [https://leetcode.com/problems/construct-string-with-repeat-limit/solutions/3223476/](https://leetcode.com/problems/construct-string-with-repeat-limit/solutions/3223476/)

---

# Approach
We count every character and use
priority queue to achieve lexicographical order
```
E.g zzzzccca, repeatLimit=3
0) we build a queue: [z:4, c:3, a:1]
1) Start iterating a queue, on every iteration we
  2) dequeue {z:4} 
  3) generate "zzz" (now we left with {z:1})
  4) pick next element in a queue {c:3}, generate ONE "c", now we left with {c:2}
  5) push {z:1} back to the queue, repeat from 2
```


# Complexity
- Time complexity:
$$O(nlogn)$$

- Space complexity:
$$O(n)$$

# Code
```
var repeatLimitedString = function (s, repeatLimit) {
  const freq = {}, 
  //https://github.com/datastructures-js/priority-queue
  queue = new MaxPriorityQueue(), result=[];
  for(let c of s) freq[c]=freq[c]?freq[c]+1:1;
  for(let [k,v] of Object.entries(freq))
    queue.enqueue({l:k, c:v}, k.charCodeAt(0)-97);
  
  while(!queue.isEmpty()){
    const {element:top, priority:prior} = queue.dequeue();
    for(let i=0; i<repeatLimit && top.c>0;i++, top.c--)
      result.push(top.l);

    if(top.c>0){
      if(!queue.isEmpty()){
        const f = queue.front().element;
        result.push(f.l);
        f.c--;
        if(f.c===0) queue.dequeue();
        queue.enqueue(top, prior);
      }
    }
  }
  return result.join("");
}
```