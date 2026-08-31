# Finding Missing Numbers in a Sequence Using a Set for Efficient Lookups

**Author:** akhilsnediyathu
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/solutions/5689849/](https://leetcode.com/problems/find-all-numbers-disappeared-in-an-array/solutions/5689849/)

---

# Intuition
When analyzing the problem, I noticed that the goal is to find the missing numbers in a sequence from `1` to `n` given an unsorted list. The most efficient way to identify these missing numbers is by using a `Set` to track the existing numbers and then checking which numbers in the expected range are absent.

# Approach
1. Convert the given list to a `Set` to facilitate O(1) lookups.
2. Iterate through the numbers from `1` to `n`, where `n` is the length of the list.
3. For each number in this range, check if it is present in the `Set`.
4. If a number is missing, add it to the result list.
5. Return the result list containing all missing numbers.

# Complexity
- **Time complexity:**  
  The time complexity is $$O(n)$$ because converting the list to a `Set` takes $$O(n)$$ time, and checking each number from `1` to `n` also takes $$O(n)$$ time.

- **Space complexity:**  
  The space complexity is $$O(n)$$ because we store the numbers in a `Set` and maintain a list of missing numbers.

# Code
```dart []
class Solution {
  List<int> findDisappearedNumbers(List<int> nums) {
    List<int> res = [];
    Set<int> numSet = nums.toSet(); 
    int n = nums.length;

   
    for (int i = 1; i <= n; i++) {
      if (!numSet.contains(i)) {
        res.add(i);
      }
    }

    return res; 
  }
}

```