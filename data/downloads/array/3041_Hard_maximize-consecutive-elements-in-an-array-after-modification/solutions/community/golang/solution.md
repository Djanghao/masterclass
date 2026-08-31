# Go DP Solution with explanation

**Author:** Antriksh_Telang
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximize-consecutive-elements-in-an-array-after-modification/solutions/4747220/](https://leetcode.com/problems/maximize-consecutive-elements-in-an-array-after-modification/solutions/4747220/)

---

# Intuition
I couldn't come up with solution during contest but looking into solutions of others, I came up with this approach. The no of variables could be clearly optimized,but I leave them for the sake of better clarity. Obviously this is not the best solution space complexity wise, but still it gives me a starting point to optimize on that.

# Approach
Firstly, it clearly makes sense to sort the array becuase finding consecutives would get far easier.

Next is that we may store the maximum sequence we may achieve on a given number. For this we can have a map which stores as follows-

```
key -> value
where key is the number and,
value is the maximum consecutive subsequence we can have ending on key

```
For instance

```
7 -> 5 means 
there exist a subsequqnce ending on 7 with size 5 i.e (3.4.5.6.7)
```

# Complexity
- Time complexity: $$O(nlogn)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
func maxSelectedElements(nums []int) int {
    slices.Sort(nums)
    
    //This will store what is the maximum size we may achieve ending on this element
    // for example, values would be like
    // 7 -> 5, which means that the there exist a consecutive sequqnce ending on 7 with size 5 {3,4,5,6,7}
    until := make(map[int]int)

    until[nums[0]] = 1
    until[nums[0]+1] = 1

    res := 1
    for i := 1; i < len(nums); i++ {
        curr := nums[i]
        incr := curr+1
        
        if val, ok := until[incr-1]; ok {
            until[incr] = val+1
            res = int(math.Max(float64(res), float64(val+1)))
        } else {
            until[incr] = 1
        }

        if val, ok := until[curr-1]; ok {
            until[curr] = val+1
            res = int(math.Max(float64(res), float64(val+1)))
        } else {
            until[curr] = 1
        }
    }

    return res
}
```