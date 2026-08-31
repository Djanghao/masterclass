# Straightforward & Readable C# solution w/ explanation

**Author:** minaohhh
**Votes:** 50
**Link:** [https://leetcode.com/problems/find-pivot-index/solutions/2245137/](https://leetcode.com/problems/find-pivot-index/solutions/2245137/)

---

**Algorithm**
1. Get the sum of all the elements in `nums[]` array. This will be our `sumRight`
2. Initialize `sumLeft` to `0` (at this point, we are at the leftmost edge)
2. Loop through the array
3. For each iteration, subtract the current element, `nums[i]` from `sumRight`
4. Compare `sumLeft` and `sumRight`. If they are equal, return the index `i` 
5. If not, add the current element, `nums[i]`, to `sumLeft` to prepare for the next iteration

**Full Solution**
```
public int PivotIndex(int[] nums) {
    int sumRight = nums.Sum();
    int sumLeft = 0;
    
    for (int i = 0; i < nums.Length; i++) {
        sumRight -= nums[i];
      
        if (sumLeft == sumRight) {
            return i;
        }
        
        sumLeft += nums[i];
    }
    
    return -1;
}
```

Happy if you can upvote if you find this helpful.