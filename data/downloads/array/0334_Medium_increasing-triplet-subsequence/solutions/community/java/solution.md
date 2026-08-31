# ✅☑[JAVA / C++] || O(n) || Simple Easy Solution || Step By Step Explanation 🔥🔥

**Author:** 03yadavankit
**Votes:** 217
**Link:** [https://leetcode.com/problems/increasing-triplet-subsequence/solutions/4462160/](https://leetcode.com/problems/increasing-triplet-subsequence/solutions/4462160/)

---

**Approach:**

The approach used in the `increasingTriplet` function is based on keeping track of two minimum values, `a` and `b`, while iterating through the array. Here's a step-by-step explanation:

1.  Initialize two variables, `a` and `b`, to `INT_MAX`.
2.  Iterate through the array, and for each element:
    *   If the element is less than or equal to `a`, update `a` with the element.
    *   If the element is greater than `a` but less than or equal to `b`, update `b` with the element.
    *   If the element is greater than both `a` and `b`, it means an increasing triplet is found, and the function returns `true`.
3.  If the loop completes without finding an increasing triplet, return `false`.

**Intuition:**

The algorithm relies on the fact that if there is an increasing triplet in the array, there must be two values, `a` and `b`, such that `a < b`. The algorithm keeps track of the two smallest values encountered (`a` and `b`). If it finds an element greater than both `a` and `b`, it means there is an increasing triplet.

**Time Complexity:**

The time complexity : O(n)

**Space Complexity:**

The space complexity : O(1),

# Code
``` JAVA []
class Solution {
    public boolean increasingTriplet(int[] nums) {
        if (nums == null || nums.length < 3) {
            return false;
        }
        int a = Integer.MAX_VALUE;
        int b = Integer.MAX_VALUE;
        
        for (int num : nums) {
            if (num <= a) {
                a = num;
            } else if (num <= b) {
                b = num;
            } else {
                return true;
            }
        }
        
        return false;
    }
}

```
``` C++ []
class Solution {
public:
    bool increasingTriplet(std::vector<int>& nums) {
        if (nums.size() < 3) {
            return false;
        }
        int a = INT_MAX;
        int b = INT_MAX;

        for (int num : nums) {
            if (num <= a) {
                a = num;
            } else if (num <= b) {
                b = num;
            } else {
                return true;
            }
        }

        return false;
    }
};

```
![upvote.jpg](./images/0.webp)