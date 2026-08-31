# Line Sweep Solution With Explanation

**Author:** nathannaveen
**Votes:** 11
**Link:** [https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/solutions/3771379/](https://leetcode.com/problems/maximum-beauty-of-an-array-after-applying-operation/solutions/3771379/)

---


This solution is a pretty simple implementation of the line sweep algorithm, with the first part adding all the indexes into the array and the second part doing the actual line sweep.

## What is Line Sweep?

When I was first trying to learn about line sweep I looked at the Wikipedia article for it, but it wasn't very helpful for me. Because of that and the fact that there aren't too many questions on line sweep in Leetcode, I decided to add a quick part to this post to explain Line Sweep.

The base idea of line sweep is that if you have multiple ranges of numbers you can find out the overlap of the ranges without having to go over each range. You just need to know the start and end of each range.

To explain line sweep I am going to use an example from this problem:

```
nums: [4,6,4,2]
k: 2
Expected Output: 3
```

> We can start off with an array called `lineSweep` of size `m`, with `m` being the maximum element in `nums` plus `k` plus `1`, so `m = 9` (Note that I am not exactly doing this in the code because it isn't the best for the time complexity. I am also going to pretend that the elements are all greater than or equal to `k`, so that we don't have to deal with negative numbers so that the explanation is easier).
> 
> We can start off with the number `4` at index `0`. We can add `1` to the index in `lineSweep` at `nums[i] - k = 4 - 2 = 2`, and subtract `1` from `nums[i] + k + 1 = 4 + 2 + 1 = 7` to signify the range starts at `2` and ends at `6` (We subtract `1` from `7` even though the range ends at `6` because we still include `6`). `lineSweep = [0,0,1,0,0,0,-1,0,0]`
>
> At index `1` we have `6`. We can add `1` to the index in `lineSweep` at `nums[i] - k = 6 - 2 = 4`, and subtract `1` from `nums[i] + k + 1 = 6 + 2 + 1 = 9` to signify the range starts at `4` and ends at `8`. `lineSweep = [0,0,1,0,1,0,-1,0,-1]`
>
> At index `2` we have `4`. We can add `1` to the index in `lineSweep` at `nums[i] - k = 4 - 2 = 2`, and subtract `1` from `nums[i] + k + 1 = 4 + 2 + 1 = 7` to signify the range starts at `2` and ends at `6`. `lineSweep = [0,0,2,0,1,0,-2,0,-1]`
> 
> At index `3` we have `2`. We can add `1` to the index in `lineSweep` at `nums[i] - k = 2 - 2 = 0`, and subtract `1` from `nums[i] + k + 1 = 2 + 2 + 1 = 5` to signify the range starts at `0` and ends at `4`. `lineSweep = [1,0,2,0,1,-1,-2,0,-1]`
 
Now we have `lineSweep`, but we haven't done anything with it. We can find the number of overlapping ranges by summing up the values:

*The number underneath the array show the number of overlapping ranges. We find this by summing up the values from 0 to the end*.

```
lineSweep = [1,0,2,0,1,-1,-2,0,-1]
			 1
			   1
			     3
			       3
			         4
			            3
			               1
			                 1
			                    0
```



If you want to try out some line sweep problems, I recommend: https://leetcode.com/discuss/study-guide/2166045/line-sweep-algorithms

My code is a more optimized version of what I gave in the example.

## Code

``` go
type key struct {
    index, cnt int
}

func maximumBeauty(nums []int, k int) int {
    indexes := map[int] int {} // the numbers value : the index of the value in lineSweep
    lineSweep := []key{}
    
    for _, num := range nums {
        if _, ok := indexes[num - k]; !ok { 
            // if indexes doesn't contain (num - k)
            
            lineSweep = append(lineSweep, key{num - k, 0})
            indexes[num - k] = len(lineSweep) - 1
        }
        if _, ok := indexes[num + k + 1]; !ok { 
            // if indexes doesn't contain (num + k + 1)
            
            lineSweep = append(lineSweep, key{ num + k + 1, 0 })
            indexes[num + k + 1] = len(lineSweep) - 1
        }
        
        lineSweep[indexes[num - k]].cnt++
        lineSweep[indexes[num + k + 1]].cnt--
    }
    
    sort.Slice(lineSweep, func(i, j int) bool {
        // sort lineSweep by each index so that we can actualy implement the line sweep
        
        return lineSweep[i].index < lineSweep[j].index
    })
    
    sum := 0
    max := 0
    
    for _, cur := range lineSweep { // the actual line sweep algorithm is happening in this loop
        sum += cur.cnt
        if sum > max {
            max = sum
        }
    }
    
    return max
}
```

**Please upvote if you found this helpful!**

