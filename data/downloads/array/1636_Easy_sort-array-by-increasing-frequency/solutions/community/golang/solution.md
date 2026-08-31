# Best Solution with proper explanation. Beats 100% and 0ms. Trust:)

**Author:** sehaj_s5
**Votes:** 8
**Link:** [https://leetcode.com/problems/sort-array-by-increasing-frequency/solutions/5520377/](https://leetcode.com/problems/sort-array-by-increasing-frequency/solutions/5520377/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
First map a map, then sort the nums array acoording to the values in the map
# Approach
<!-- Describe your approach to solving the problem. -->
- make a map, iterate through the nums array and store the frequencies in the map
- sort the nums array according to the lambda function where
- - if the frequencing are same, return if the first value is bigger than the secon
- - else return true if the frequency of first element is greater than the frequency of second.
- return the newly sorted array 
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
$$O(n)$$- making the map
$$O(nlogn)$$- for sorting 
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(n)$$- due to the space the map takes
# Code
```
func frequencySort(nums []int) []int {
    mapp:= make(map[int]int)
    n:= len(nums)
    if n==1{
        return nums
    }
    for i:=0;i<n;i++{
        mapp[nums[i]]++
    }
    sort.Slice(nums, func(i, j int)bool{
        if mapp[nums[i]]==mapp[nums[j]]{
            return nums[i]>nums[j]
        }
        return mapp[nums[i]]<mapp[nums[j]]
    })
    return nums
}
```

If you found this helpful, kindly upvote, the button is on the bottom left corner.