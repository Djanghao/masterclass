# Golang solution with explanation

**Author:** nathannaveen
**Votes:** 1
**Link:** [https://leetcode.com/problems/employee-free-time/solutions/1313485/](https://leetcode.com/problems/employee-free-time/solutions/1313485/)

---

[759. Employee Free Time](https://leetcode.com/problems/employee-free-time/)

The idea of this solution is pretty simple: 

* We add everyone's intervals into an array of intervals called `arr`.
* Then, we sort `arr` by their start values.
* Then when we loop through `arr`:
	* If the end of the current element is smaller than the following elements start, we know that we have no overlap.
	* Else if, the current elements end value is greater than the following elements start and the next elements end value, we know that the current elements time frame surrounds the following elements time frame.
	* And if the current element's end value is greater than the next element's start value, we can merge the two intervals.

``` go
func employeeFreeTime(schedule [][]*Interval) []*Interval {
    arr := []*Interval{}
    res := []*Interval{}
    
    for _, ints := range schedule {
        for _, i := range ints {
            arr = append(arr, i)
        }
    }
    
    sort.Slice(arr, func(i, j int) bool {
        return arr[i].Start <= arr[j].Start
    })
    
    for i := 0; i < len(arr) - 1; i++ {
        if arr[i].End < arr[i + 1].Start {
            continue
        }
        if arr[i].End >= arr[i + 1].End {
            arr = append(arr[:i + 1], arr[i + 2:]...)
        } else {
            arr[i].End = arr[i + 1].End
            arr = append(arr[:i + 1], arr[i + 2:]...)
        }
        i--        
    }
    
    for i := 0; i < len(arr) - 1; i++ {
        res = append(res, &Interval{ arr[i].End, arr[i + 1].Start })
    }
    
    return res
}
```