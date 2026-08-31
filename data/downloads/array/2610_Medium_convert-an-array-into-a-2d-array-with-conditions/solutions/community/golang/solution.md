# Go Solution | O(n) | Explanation

**Author:** zell_dev
**Votes:** 15
**Link:** [https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/solutions/4489580/](https://leetcode.com/problems/convert-an-array-into-a-2d-array-with-conditions/solutions/4489580/)

---

**Step 1: Initialize Frequency Tracking**
Create a frequency map freq to keep track of the number of times each element appears in the nums array.
Initialize an empty slice of slices ans to store groups of numbers based on their frequency.

**Step 2: Populate Frequency Map and Build Matrix**
Iterate through the nums array. For each element (val), update its frequency in freqa and check if the length of ans is sufficient to accommodate the current frequency of val. If not, expand ans by appending an empty slice.
Add the current value val to the appropriate slice in ans, based on its frequency (freq[val]).

**Step 3: Compile and Return Result**
After processing all elements in nums, ans will contain groups of numbers, where each group corresponds to numbers with the same frequency.

```
func findMatrix(nums []int) [][]int {
    freq := make(map[int]int)
    ans := make([][]int, 0)
    
    for _, val := range nums {
        if freq[val] >= len(ans) {
            ans = append(ans,[]int{})
        }
            
        ans[freq[val]] = append(ans[freq[val]], val)
        freq[val]++
    }
    
    return ans
}
```

If you found it helpful, please consider giving it an upvote! It'll motivate me to share more solutions in the future. If you have any questions or suggestions, please let me know. Happy coding (and Happy New Year )

