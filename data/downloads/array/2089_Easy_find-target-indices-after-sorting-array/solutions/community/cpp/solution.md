# C++ | Two Methods with explanation | O(N) and O(N log N) approach | Easy to understand

**Author:** joyetahpr
**Votes:** 35
**Link:** [https://leetcode.com/problems/find-target-indices-after-sorting-array/solutions/1609499/](https://leetcode.com/problems/find-target-indices-after-sorting-array/solutions/1609499/)

---

**Two methods discussed with explanation.**

**Method 1:**
	**1.** First sort the array.
	**2.** Find the index of the target
	**3.** Push it into the **"result"** vector.

```
class Solution {
public:
    vector<int> targetIndices(vector<int>& nums, int target) {
        vector<int> result;
        sort(nums.begin(),nums.end());
        for(int i=0;i<nums.size();i++){
            if(nums[i]==target) result.push_back(i);
        }
        return result;
    }
};
```

**Time Complexity :** O(N log N)


**Method 2:**
	**1.** Count the occurences of elements lesser then the target and freq of target elements.
* 			"small" contains the number of element lesser than the target.
* 			"count" contains the number of occurences of the target element.
**2.** Now run a loop from **"small"** ( means **"small"** elements are lesser than our target value, so our target value will come after **"small"** elements in sorted array ), upto **"count"**.
**3.** Push the index into the **"result"** vector.
						
```
class Solution {
public:
    vector<int> targetIndices(vector<int>& nums, int target) {
        int small=0,count=0,k=0;
        for(auto n:nums) {
            if(n<target)    small++;                                        // calculates the frequency of elements lesser than the target
            if(n==target)   count++;                                        // calculate the number of occurences of the target element
        }
        vector<int> result(count);
        for(int i=small;i<small+count;i++)      
            result[k++]=i;
        return result;
    }
};
```

**Time Complexity :** O(N)

If you liked the solution, then please upvote : )