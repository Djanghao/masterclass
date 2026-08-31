# ✅Beats 96% |🔥 Easy, Fast and Efficient using HashSet🔥🔥O(n) time and space complexity 🔥2 pass🔥

**Author:** Saketh3011
**Votes:** 13
**Link:** [https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/solutions/5098641/](https://leetcode.com/problems/largest-positive-integer-that-exists-with-its-negative/solutions/5098641/)

---

![image.png](./images/0.png)



# Intuition
To find the largest positive integer k such that -k also exists in the array, we can make array into hashset so that search takes O(1) time complexity. And iterate through the hashset and check if the negative complement of each number exists in the hashset. Storing max number satisfying given condition.

# Approach
We can use a set to efficiently check for the existence of numbers in the array. We initialize the result variable `res` to -1 incase no number is found satisfying giving condition and iterate through the set of numbers in the array. For each number `num`, we check if its negative counterpart `-num` exists in the array. If it does, we update the result `res` to be the maximum of the current `res` and `num`.

# Complexity
- Time complexity: $$O(n)$$, where n is the number of elements in the array. The loop iterates through the array once.
- Space complexity: $$O(n)$$,  due to the set `nums`, which stores the distinct elements of the array.


# Code
``` python []
class Solution:
    def findMaxK(self, nums: List[int]) -> int:
        res = -1
        nums = set(nums)
        for num in nums:
            if num * -1 in nums:
                res = max(res, num)
        return res
```
```java []
class Solution {
    public int findMaxK(int[] nums) {
      int res = -1;
        Set<Integer> numSet = new HashSet<>();
        for (int num : nums) {
            numSet.add(num);
        }
        for (int num : numSet) {
            if (numSet.contains(-num)) {
                res = Math.max(res, num);
            }
        }
        return res;
    }
};
```
```cpp []
class Solution {
public:
    int findMaxK(vector<int>& nums) {
      int res = -1;
        std::unordered_set<int> numSet(nums.begin(), nums.end());
        for (int num : numSet) {
            if (numSet.find(-num) != numSet.end()) {
                res = std::max(res, num);
            }
        }
        return res;
    }
};
```
``` javascript []
var findMaxK = function(nums) {
    let res = -1;
    let numSet = new Set(nums);
    for (let num of numSet) {
        if (numSet.has(-num)) {
            res = Math.max(res, num);
        }
    }
    return res;
};
```