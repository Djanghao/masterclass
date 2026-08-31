# Simple Video Explanation with examples 🔥 || Count Frequency ✅

**Author:** ayushnemmaniwar12
**Votes:** 28
**Link:** [https://leetcode.com/problems/find-the-maximum-number-of-elements-in-subset/solutions/4636758/](https://leetcode.com/problems/find-the-maximum-number-of-elements-in-subset/solutions/4636758/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Try to understand the question clearly and dry run 5-6 scenario's you will get some idea.


# *Easy Video Explanation*

https://youtu.be/agilrzA6LQU


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
    O(N)

    

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
    O(N)
    

# Code


```C++ []
class Solution {
public:
    int maximumLength(std::vector<int>& nums) {
        unordered_map<int, int> nm;
        for (int i : nums) {
            nm[i] = nm[i] + 1;
        }
        
        int maxi = nm.count(1) ? (nm[1] % 2 == 0 ? nm[1] - 1 : nm[1]) : 1;
        for (int i = 0; i < nums.size(); i++) {
            int count = 0;
            long long val = nums[i];
            while (val<=1e9 && nm.count(val) && nm[val] >= 2 && val != 1) {
                count += 2;
                val *= val;
            }
            if (nm.count(val)) {
                count++;
            } else {
                count--;
            }
            maxi = max(count, maxi);
        }
        return maxi;
    }
};
```
```python []
class Solution:
    def maximumLength(self, nums: List[int]) -> int:
        nm = {}
        for i in nums:
            nm[i] = nm.get(i, 0) + 1
        
        maxi = nm.get(1, 0) - 1 if nm.get(1, 0) % 2 == 0 else nm.get(1, 0)
        for num in nums:
            count = 0
            val = num
            while val <= 1e9 and nm.get(val, 0) >= 2 and val != 1:
                count += 2
                val *= val
            count = count + 1 if nm.get(val, 0) else count - 1
            maxi = max(count, maxi)
        return maxi

```
```Java []
import java.util.HashMap;

class Solution {
    public int maximumLength(int[] nums) {
        HashMap<Integer, Integer> nm = new HashMap<>();
        for (int i : nums) {
            nm.put(i, nm.getOrDefault(i, 0) + 1);
        }
        
        int maxi = nm.containsKey(1) ? (nm.get(1) % 2 == 0 ? nm.get(1) - 1 : nm.get(1)) : 1;
        for (int i = 0; i < nums.length; i++) {
            int count = 0;
            long val = nums[i];
            while (val <= 1e9 && nm.containsKey(val) && nm.get(val) >= 2 && val != 1) {
                count += 2;
                val *= val;
            }
            if (nm.containsKey(val)) {
                count++;
            } else {
                count--;
            }
            maxi = Math.max(count, maxi);
        }
        return maxi;
    }
}


```

# ***If you like the solution Please Upvote and subscribe to my youtube channel***
***It Motivates me to record more videos***

*Thank you* \uD83D\uDE00