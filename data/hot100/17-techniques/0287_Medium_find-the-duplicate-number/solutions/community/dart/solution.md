# The Tortoise and Hare Algorithm: Efficient Duplicate Number Detection

**Author:** jenilg
**Votes:** 3
**Link:** [https://leetcode.com/problems/find-the-duplicate-number/solutions/4063075/](https://leetcode.com/problems/find-the-duplicate-number/solutions/4063075/)

---

# Intuition
Initially, I approached the problem with a simple and straightforward solution by sorting the given list of integers and then scanning it to find the duplicate element. This approach involved sorting the array, which would have a time complexity of **O(n log n)** due to the sorting operation. However, I wanted to explore more efficient solutions that would run in linear time and use minimal additional memory.

Upon realizing that there might be a more efficient solution, I turned to online resources, including articles and discussions on platforms like Google and StackOverflow, to find a better approach. During my research, I came across an article titled **"The Tortoise and the Hare: Floyd's Algorithm,"** available at this link: https://medium.com/@tuvo1106/the-tortoise-and-the-hare-floyds-algorithm-87badf5f7d41.

This article introduced me to the **"tortoise and hare"** algorithm, also known as Floyd's Algorithm. The algorithm is designed to find cycles within data structures like linked lists. I realized that I could adapt this algorithm to solve the problem of finding a duplicate element in an array of integers efficiently.

# Approach
The key insight from the **"tortoise and hare"** algorithm is to treat the array as a linked list where each value in the array represents an index pointing to the next element. By moving two pointers, a slow **"tortoise"** and a fast **"hare,"** through this pseudo-linked list, I could detect the presence of a cycle. In the context of this problem, a cycle would indicate the presence of a duplicate number.

- **Step 1: Initializing Pointers**

Begin by initializing two pointers, tortoise and hare, both initially pointing to the first element in the array (nums[0]). Think of these pointers as if they are traversing a linked list.

- **Step 2: Detecting the Cycle**

Use a do-while loop to advance the tortoise by one step and the hare by two steps at a time until they meet. This is the first phase of the algorithm.
The purpose of this phase is to detect the presence of a cycle in the "linked list." If there is a duplicate number in the array, it implies that the linked list will have a cycle.

- **Step 3: Resetting the Tortoise**

After detecting the cycle, reset the tortoise pointer to the beginning of the array (nums[0]) while keeping the hare where it is.

- **Step 4: Finding the Starting Point of the Cycle**

Use another loop to move both the tortoise and hare pointers one step at a time until they meet again. This time, when they meet, it will be at the starting point of the cycle within the linked list.
In the context of this problem, the starting point of the cycle corresponds to the duplicate number in the array.

- **Step 5: Returning the Duplicate Number**

Finally, return the duplicate number found at the starting point of the cycle. This is the solution to the problem.

# Complexity
- Time complexity: **O(n)** - The algorithm guarantees finding a duplicate in linear time because both pointers traverse the array at most twice.

- Space complexity: **O(1)** - The algorithm uses a constant amount of extra space to store the pointers.

# Code
```
class Solution {
 int findDuplicate(List<int> nums) {
 
  int tortoise = nums[0];
  int hare = nums[0];

  do {
    tortoise = nums[tortoise];
    hare = nums[nums[hare]];
  } while (tortoise != hare);

  tortoise = nums[0];
  while (tortoise != hare) {
    tortoise = nums[tortoise];
    hare = nums[hare];
  }

  return tortoise;
}

}
```