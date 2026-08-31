# Go/Python O(n*max(end)-min(start)) time | O(max(end)-min(start))

**Author:** vtalantsev
**Votes:** 1
**Link:** [https://leetcode.com/problems/minimum-time-to-complete-all-tasks/solutions/3288388/](https://leetcode.com/problems/minimum-time-to-complete-all-tasks/solutions/3288388/)

---

# Complexity
- Time complexity: $$O(n*max(end)-min(start))$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(max(end)-min(start))$$ 
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func findMinimumTime(tasks [][]int) int {
    sort.SliceStable(tasks, func(i, j int) bool {return tasks[i][1] < tasks[j][1]})
    min_start := math.MaxInt
    for _,task := range(tasks){
        min_start = min(min_start,task[0])
    }
    max_end := tasks[len(tasks)-1][1]
    time := make([]int, max_end-min_start+1)
    for _,task := range(tasks){
        start := task[0]-min_start
        end := task[1]-min_start
        duration := task[2]
        used := sum(&time,start,end+1)
        duration-=used
        for duration > 0{
            if time[end] == 0{
                time[end] = 1
                duration-=1
            }
            end-=1
        }
    }
    return sum(&time)
}

func sum(array *[]int, args ...int) int{
    left := 0
    right := len(*array)
    if len(args) == 2 {
        left = args[0]
        right = args[1]
    }
    item_sum := 0
    for i:=left;i<right;i++{
        item_sum+=(*array)[i]
    }
    return item_sum
}

func min(a,b int) int{
    if a<b{
        return a
    }
    return b
}
```
```python []
class Solution:
    def findMinimumTime(self, tasks: List[List[int]]) -> int:
        tasks.sort(key = lambda x : x[1])
        min_start = float("inf")
        for task in tasks:
            min_start = min(min_start,task[0])
        max_end = tasks[-1][1]
        time = [0 for _ in range(max_end-min_start+1)]
        for task in tasks:
            start = task[0]-min_start
            end = task[1]-min_start
            duration = task[2]
            used = sum(time[start:end+1])
            duration-=used
            while duration > 0:
                if time[end] == 0:
                    time[end] = 1
                    duration-=1
                end-=1
        return sum(time) 
```