# Efficient Solution to Find the Middle Index with Equal Left and Right Sums

**Author:** Akuma_no_o_
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-middle-index-in-array/solutions/5959887/](https://leetcode.com/problems/find-the-middle-index-in-array/solutions/5959887/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
1. **Initial Setup**:
Two variables, l (left sum) and r (right sum), are initialized to zero. l will track the sum of elements to the left of the current index, and r will hold the sum of all elements in the array.

2. **Calculate Total Sum**:
First, the total sum of all elements in the array is computed by looping through nums and adding each element to r.

3. **Iterate and Check for Middle Index**:
After calculating the total sum, the algorithm iterates over the array again. For each element at index i:

- The current element is subtracted from r to exclude it from the right sum.
- If the left sum (l) equals the right sum (r), index i is returned as the middle index.
- The current element is added to l to include it in the left sum before moving to the next iteration.
Return -1 if No Index Found:
4. **If no such middle index exists where the left and right sums are equal, the function returns -1.**

# Complexity
- Time complexity:$$ O(n)$$ : The array is traversed twice (once to calculate the total sum and once to find the middle index).
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$ O(1)$$ : Only a few integer variables are used, regardless of the array size.
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```dart []
class Solution {
  int findMiddleIndex(List<int> nums) {
    int r = 0, l = 0;
    for (int i = 0; i < nums.length; i++) {
      r += nums[i];
    }
    for (int i = 0; i < nums.length; i++) {
      r -= nums[i];
      if (l == r) return i;
      l += nums[i];
    }
    return -1;
  }
}
```