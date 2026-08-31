# Simple Solution using Stack Beats 100% of Time and Space complexity.

**Author:** m3n99
**Votes:** 0
**Link:** [https://leetcode.com/problems/132-pattern/solutions/4110273/](https://leetcode.com/problems/132-pattern/solutions/4110273/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
The goal of this code is to find the 132 pattern in a given list of integers, represented by nums. The 132 pattern is a subsequence of three integers in the array such that nums[i] < nums[k] < nums[j] for 0 <= i < j < k < n, where n is the length of the array.
# Approach
<!-- Describe your approach to solving the problem. -->
The code uses two passes to identify the 132 pattern:

1. First Pass:
    - It iterates through the **nums** list from left to right and maintains a list called **minLeft**.
    - **minLeft[i]** stores the minimum value encountered in the **nums** list from the beginning up to index **i**.
    - This pass ensures that **minLeft** contains the minimum values to the left of each element in **nums**.

2. Second Pass:
    - It iterates through the **nums** list from right to left.
    - It uses a stack called **numbers** to keep track of potential candidates for the "3" in the 132 pattern.
    - It compares the current element **nums[j]** with the top element of the stack (**numbers.peek**) and pops elements from the stack as long as **nums[j]** is greater.
    - For each popped element, it checks if it's greater than the corresponding value in **minLeft** (i.e., **minLeft[j]**). If it is, this means we have found a valid 132 pattern, and the function returns true.
    - If no valid pattern is found during the second pass, the function returns **false**.




# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
**O(n)** - The code makes two passes through the **nums** list, and each pass takes **O(n) time.**

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
**O(n)** - The code uses additional space to store the **minLeft** list and the numbers stack, both of which can have a maximum of n elements in the worst case.
# Code
```
class Solution {
  bool find132pattern(List<int> nums) {
    int n = nums.length;
    List<int> minLeft = List<int>.filled(n, 0);
    int minNum = nums[0];

    for (int i = 0; i < n; i++) {
      minLeft[i] = minNum;
      minNum = min(minNum, nums[i]);
    }

    Stack<int> numbers = Stack<int>();

    for (int j = n - 1; j >= 0; j--) {
      while (numbers.isNotEmpty && nums[j] > numbers.peek) {
        if (numbers.pop() > minLeft[j]) {
          return true;
        }
      }
      numbers.push(nums[j]);
    }

    return false;
  }
}

class Stack<E> {
  final List<E> _list = <E>[];

  void push(E value) => _list.add(value);

  E pop() => _list.removeLast();

  E get peek => _list.last;

  bool get isEmpty => _list.isEmpty;
  bool get isNotEmpty => _list.isNotEmpty;

  @override
  String toString() => _list.toString();
}
```