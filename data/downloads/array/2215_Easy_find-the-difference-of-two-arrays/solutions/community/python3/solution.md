# 💯Efficient Set Approach for Finding Difference in Two Arrays

**Author:** Abhishek_bharti1
**Votes:** 31
**Link:** [https://leetcode.com/problems/find-the-difference-of-two-arrays/solutions/5445874/](https://leetcode.com/problems/find-the-difference-of-two-arrays/solutions/5445874/)

---

# Intuition
- Imagine nums1 and nums2 as two sets of marbles. You want to find the marbles that are on only one table, not on both.
-  The unordered sets act like hash tables, allowing for quick checks to see if a specific marble exists in the other set. 
- We iterate through each marble in one set, checking if it's present in the other set. If not, it's unique and gets added to the result.


# Approach
<!-- Describe your approach to solving the problem. -->
1) ***Populate Unordered Sets:*** 
    - We insert the elements from nums1 and nums2 into s1 and s2 respectively, using their iterators.
2) ***Find Elements Unique to nums1:***
    - We iterate through each element (num) in nums1.
    - For each num:
        - We use find(num) in s2 to check if num exists in the other set (nums2).
        - If find(num) == s2.end() (meaning num is not found in s2), it's unique to nums1. We add it to the first sub-vector in ans.
3) ***Find Elements Unique to nums2:***
    - We repeat the process for nums2. We iterate through each element (num) and check if it exists in s1. If it doesn't, it's unique to nums2 and is added to the second sub-vector in ans.

# Complexity
- Time complexity: ***O(n + m)***
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: ***O(n + m)***
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```cpp []
class Solution {
public:
    vector<vector<int>> findDifference(vector<int>& nums1, vector<int>& nums2) {
        set<int> s1,s2;
        vector<vector<int>> ans(2);
        for(auto i : nums1){
            s1.insert(i);
        }
        for(auto i : nums2){
            s2.insert(i);
        }
        for(auto i : s1){
            if(s2.find(i) == s2.end()){
                ans[0].push_back(i);
            }
        }
        for(auto i : s2){
            if(s1.find(i) == s1.end()){
                ans[1].push_back(i);
            }
        }
        return ans;
    }
};
```
```python []
class Solution:
    def findDifference(self, nums1, nums2):
        s1, s2 = set(nums1), set(nums2)
        ans = [[], []]

        for i in s1:
            if i not in s2:
                ans[0].append(i)
        
        for i in s2:
            if i not in s1:
                ans[1].append(i)
        
        return ans

```
```java []
import java.util.*;

class Solution {
    public List<List<Integer>> findDifference(int[] nums1, int[] nums2) {
        Set<Integer> s1 = new HashSet<>();
        Set<Integer> s2 = new HashSet<>();
        List<List<Integer>> ans = new ArrayList<>();
        ans.add(new ArrayList<>());
        ans.add(new ArrayList<>());

        for (int i : nums1) {
            s1.add(i);
        }
        
        for (int i : nums2) {
            s2.add(i);
        }

        for (int i : s1) {
            if (!s2.contains(i)) {
                ans.get(0).add(i);
            }
        }

        for (int i : s2) {
            if (!s1.contains(i)) {
                ans.get(1).add(i);
            }
        }

        return ans;
    }
}

```
```javascript []
var findDifference = function(nums1, nums2) {
    let s1 = new Set(nums1);
    let s2 = new Set(nums2);
    let ans = [[], []];

    for (let i of s1) {
        if (!s2.has(i)) {
            ans[0].push(i);
        }
    }

    for (let i of s2) {
        if (!s1.has(i)) {
            ans[1].push(i);
        }
    }

    return ans;
};

```
PLEASE UPVOTE !!! \uD83D\uDE4F

![Gemini_Generated_Image_3dhm323dhm323dhm.jpg](./images/0.jpeg)
