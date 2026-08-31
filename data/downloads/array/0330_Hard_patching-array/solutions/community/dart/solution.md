# Efficiently Solving the 'Min Patches' Problem in Dart: A Greedy Algorithm Approach

**Author:** yuneshshrestha24
**Votes:** 0
**Link:** [https://leetcode.com/problems/patching-array/solutions/5325698/](https://leetcode.com/problems/patching-array/solutions/5325698/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Initially, I thought that the presence of the number 1 and the presence of numbers that sum to powers of 2 (i.e., 2^k) would be sufficient to cover all possible sums up to the given target n. However, this approach resulted in a time limit exceeded and runtime errors due to the exponential number of combinations that needed to be checked.


# Approach
<!-- Describe your approach to solving the problem. -->
To solve the problem efficiently, I used a greedy algorithm that iteratively checks and extends the range of numbers that can be represented using the current set of numbers.

- **Check for Presence of 1**: If 1 is not in the array, add it and increment the patch count. The number 1 is crucial because it serves as the base for constructing all other sums.
- **Sort the Array:** Sort the numbers in ascending order to process them sequentially.
- **Extend Reachable Range:** Use a variable numReached to keep track of the largest number that can be represented with the current set of numbers.
1. Iterate through the array and for each number, if it is within the range of numReached, use it to extend the range.
2. If the current number is not within the range, add numReached to the array (this effectively patches the array) and increment the patch count. Double the value of numReached.
- Continue Until Target: Repeat the above steps until numReached exceeds the target number n.- 

# Complexity
- Time complexity: O(n log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    The time complexity of this solution is O(n log n), where n is the length of the input list nums. This is because we are sorting the list nums, which has a time complexity of O(n log n), and then iterating through the list and potentially doubling the numReached value until it reaches n.

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    The space complexity is O(1) because we are using a constant amount of extra space regardless of the input size.

# Code
```
class Solution {
  int minPatches(List<int> nums, int n) {
    var count = !nums.contains(1) ? 1 : 0;
    if (count == 1) nums.add(1);

    nums.sort();

    int numReached = 1;
    int i = 0;

    while (numReached <= n) {
      if (i < nums.length && nums[i] <= numReached) {
        numReached += nums[i];
        print(numReached);
        i++;
      } else {
        numReached *= 2;
        print(numReached);

        count++;
      }
    }

    return count;
  }

  
}


```