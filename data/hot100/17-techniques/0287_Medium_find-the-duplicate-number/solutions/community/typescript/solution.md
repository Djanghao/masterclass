# Fastest solution in O(n) time and O(1) space

**Author:** mikimaine
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-the-duplicate-number/solutions/3922855/](https://leetcode.com/problems/find-the-duplicate-number/solutions/3922855/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:  $$O(n)$$
The first loop, which is used to find the intersection point of the tortoise and hare, runs in  $$O(n)$$ time. This is because in the worst case, both the tortoise and the hare will take approximately n/2 steps to meet. After the first loop, you enter the second loop to find the entrance to the cycle, which also takes O(n) time in the worst case. Therefore, the total time complexity is  $$O(n)$$
- Space complexity: $$O(1)$$
 The space complexity of an algorithm refers to the additional memory space it uses. In this case, the algorithm only uses a constant amount of extra space for variables (slow, fast, and slow2) that do not depend on the size of the input array. Hence, the space complexity is $$O(1)$$.
# Code
```
function findDuplicate(nums: number[]): number {
    let slow = 0;
    let fast = 0;

    // Phase 1: Find intersection point of Tortoise and Hare
    do {
        slow = nums[slow];
        fast = nums[nums[fast]];
    } while (slow !== fast);

    // Phase 2: Find entrance to the cycle
    let slow2 = 0;
    while (slow !== slow2) {
        slow = nums[slow];
        slow2 = nums[slow2];
    }

    return slow;
};
```