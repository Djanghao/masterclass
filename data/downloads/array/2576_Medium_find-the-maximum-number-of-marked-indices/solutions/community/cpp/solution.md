# ✅ [C++ | Java | Python ] Need Sorting With Two Pointers

**Author:** rushi_mungse
**Votes:** 41
**Link:** [https://leetcode.com/problems/find-the-maximum-number-of-marked-indices/solutions/3230779/](https://leetcode.com/problems/find-the-maximum-number-of-marked-indices/solutions/3230779/)

---

### SOLUTION
##### INTUTION 

---

-  We only make `n / 2` pairs. So, we make pairs form element `i = 0` for first ptr & `j = n / 2` for second ptr if `nums[i] * 2 <= nums[j]` is valid pair then add `+2` in `ans` & increment `i` & also `j` bcz we used this two `idx`.
-  but it's invalid then we know that next element of `jth` index is greater, so in that case we increament `jth` pointer.
---

>**This intution by @votrubac** 

-  Intuition for this problem is tricky.

-  Indices i and j form a pair (if 2 * nums[i] < nums[j]). If we want to make m pairs, the best strategy is to pick m smallest numbers as nums[i].

-  At the same time, we cannot make more than n / 2 pairs. Therefore, we consider n - n / 2 largest numbers for nums[j].

- So, we sort the array, and greedily match smallest numbers with numbers in the second half of the sorted array.
---


##### Time Complexity - `O(N*Log(N))`
##### Space Complexity - `O(1)`

---
```cpp []
class Solution {
public:
    int maxNumOfMarkedIndices(vector<int>& nums) {
        sort(nums.begin(), nums.end());
        int n = nums.size(), ans = 0, i = 0, j = n/2;
        while(i < n/2 && j < n) {
            if(nums[i] * 2 <= nums[j]) ans += 2, i++, j++;
            else j++;
        }
        return ans;
    }
};
```
```java []
class Solution {
    public int maxNumOfMarkedIndices(int[] nums) {
        Arrays.sort(nums);
        int n = nums.length, ans = 0, i = 0, j = n / 2; 
        while(i < n / 2 && j < n) {
            if(nums[i] * 2 <= nums[j]) {ans += 2; i++; j++;}
            else j++;
        }
        return ans;
    }
}
```
```python []
class Solution:
    def maxNumOfMarkedIndices(self, nums: List[int]) -> int:
        n, i, ans = len(nums), 0, 0
        nums.sort()
        for j in range(n - n // 2, n):
            if nums[i] * 2 <= nums[j]:
                i += 1 
                ans += 2
        return ans
```


>##### If You Helpful, Please Upvote !!!

Happy Coding ;) 
