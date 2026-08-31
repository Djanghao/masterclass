# C++🔥2 optimal Approaches🔥O(n) and O(nlogn)🔥constant space

**Author:** ribhav_32
**Votes:** 458
**Link:** [https://leetcode.com/problems/find-the-duplicate-number/solutions/4916414/](https://leetcode.com/problems/find-the-duplicate-number/solutions/4916414/)

---

# **PLEASE UPVOTE\uD83D\uDC4D**
![b772cc9a-b8c8-45ab-941f-ac36c1900ea2_1696303869.2008665.png](./images/0.png)

# Approach 1: Binary Search

- ##### Since the numbers in the array are in the range [1, n] and there's only one repeated number, we can use binary search to find the duplicate number.
- ##### We perform binary search on the range [1, n], and for each mid value, we count the number of elements in the array that are less than or equal to the mid value.
- ##### If the count is greater than mid, then the duplicate lies in the left half of the range; otherwise, it lies in the right half.
- ##### If there's no duplicate, in a sorted array, we would expect nums[i] to be equal to i + 1 for each i. However, with a duplicate, there will be more than i + 1 numbers less than or equal to mid.
- ##### We continue narrowing down the range until we find the duplicate number.

## Complexity
- Time complexity: O(NlogN)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

## Code
```
class Solution {
public:
    int findDuplicate(std::vector<int>& nums) {
        int left = 1;
        int right = nums.size() - 1;

        while (left < right) {
            int mid = left + (right - left) / 2;
            int count = 0;

            // Count the numbers less than or equal to mid
            for (int num : nums) {
                if (num <= mid) {
                    count++;
                }
            }

            // If count is greater than mid, the duplicate lies in the left half
            if (count > mid) {
                right = mid;
            } else { // Otherwise, it lies in the right half
                left = mid + 1;
            }
        }

        return left;
    }
};

```

# Approach 2: Slow and fast pointer
- ##### The key intuition behind this method is that if there's a cycle in the linked list, the fast and slow pointers will eventually meet.
- ##### We treat the array as a linked list, where the index represents the node and the value at that index represents the next node.
- ##### Using the fast-slow pointers technique, we traverse the linked list.
- ##### The slow pointer moves one step at a time while the fast pointer moves two steps at a time.
- ##### If there's a cycle in the linked list (indicating a duplicate number), the fast and slow pointers will eventually meet.
- ##### After identifying the meeting point, we reset the slow pointer to the start and move both pointers at the same pace until they meet again. The meeting point will be the duplicate number.

## Complexity
- Time complexity: O(N)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

## Code
```
class Solution {
public:
    int findDuplicate(std::vector<int>& nums) {
        int slow = nums[0];
        int fast = nums[0];

        // Find the intersection point of the two pointers
        do {
            slow = nums[slow];
            fast = nums[nums[fast]];
        } while (slow != fast);

        // Find the entrance of the cycle
        slow = nums[0];
        while (slow != fast) {
            slow = nums[slow];
            fast = nums[fast];
        }

        return slow;
    }
};

```

![image.png](./images/1.png)

