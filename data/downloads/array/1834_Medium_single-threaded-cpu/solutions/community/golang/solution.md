# GO || Min Heap || Sort

**Author:** Jonatanlp
**Votes:** 3
**Link:** [https://leetcode.com/problems/single-threaded-cpu/solutions/2967165/](https://leetcode.com/problems/single-threaded-cpu/solutions/2967165/)

---


# Code
```
func getOrder(tasks [][]int) []int {
    resp := []int{}
    var arrayTask []Task
    for idx,v := range tasks{
        arrayTask = append(arrayTask , Task{v[0],v[1],idx})
    }
    sort.Slice(arrayTask, func(i int, j int) bool {
        return arrayTask[i].EnqueueTime < arrayTask[j].EnqueueTime
    })
    h := &MinHeap{}
    idx := 0
    currentTaskEnqueueTime := arrayTask[0].EnqueueTime
    for h.Len() > 0 || idx < len(tasks)  {
        for idx < len(tasks) && arrayTask[idx].EnqueueTime <= currentTaskEnqueueTime{
            heap.Push(h,arrayTask[idx])
            idx++
        }
        if h.Len() == 0 && idx < len(tasks){
            currentTaskEnqueueTime = arrayTask[idx].EnqueueTime
            continue
        }
        popedItem := heap.Pop(h).(Task)
        resp = append(resp , popedItem.Index)
        currentTaskEnqueueTime += popedItem.ProcessTime
    }
    return resp
}

type Task struct{
    EnqueueTime int
    ProcessTime int
    Index int
}

type MinHeap []Task
func (h MinHeap) Len() int           { return len(h) }
func (h MinHeap) Less(i, j int) bool {
    if h[i].ProcessTime == h[j].ProcessTime{
        return h[i].Index < h[j].Index
    }
    return h[i].ProcessTime < h[j].ProcessTime 
}
func (h MinHeap) Swap(i, j int)      { h[i], h[j] = h[j], h[i] }
func (h *MinHeap) Push(x interface{}) {
    *h = append(*h, x.(Task))
}
    
func (h *MinHeap) Pop() interface{} {
    l := len(*h)
    res := (*h)[l - 1]
    *h = (*h)[:l - 1]
    return res
}
    
```