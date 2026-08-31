# Easy to understand with comments

**Author:** moranilt
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-unique-flavors-after-sharing-k-candies/solutions/6061013/](https://leetcode.com/problems/number-of-unique-flavors-after-sharing-k-candies/solutions/6061013/)

---

# Complexity
- Time complexity: $$O(n)$$, where `n` - amount of candies
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(m)$$, where `m` - unique numbers of flavors
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```golang []
func shareCandies(candies []int, k int) int {
  flavors := make(map[int]int)
  for _, candy := range candies {
    flavors[candy]++
  }

  if k == 0 {
    return len(flavors)
  }

  left, right := 0, 0
  // track current amount of flavors
  currAmount := len(flavors)
  // track current max amount of flavors
  currMax := 0
  for right < len(candies) {
    // you are starting at index 0 so you should already
    // decrease flavor amount at right index
    flavors[candies[right]]--
    // if amount of current flavor is 0 - decrease total amount of flavors
    if flavors[candies[right]] == 0 {
      currAmount--
    }

    // if total elements in window is equal to k
    if right-left+1 == k {
      // track the max amount of flavors
      currMax = max(currMax, currAmount)
      // since we are leaving flavor at index left
      // we should increase this flavor amount
      // because we are not using it
      flavors[candies[left]]++
      // if flavor at index left is equal to 1 after increasing
      // that is mean that we are adding new flavor to our current amount
      if flavors[candies[left]] == 1 {
        currAmount++
      }

      // move left index of window
      left++
    }

    // move right index of window
    right++
  }

  return currMax
}
```