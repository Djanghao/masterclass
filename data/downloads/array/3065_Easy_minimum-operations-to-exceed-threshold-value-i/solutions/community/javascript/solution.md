# ✅Easiest Basic Cpp / Java / Py / C / JS Solution | Beginner Level 🏆

**Author:** dev_yash_
**Votes:** 6
**Link:** [https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/solutions/5279510/](https://leetcode.com/problems/minimum-operations-to-exceed-threshold-value-i/solutions/5279510/)

---

### C++
```
class Solution {
public:
    int minOperations(vector<int>& nums, int k) {
        
        sort(nums.begin(),nums.end());
        int count=-1;
        for(size_t i=0;i<nums.size();i++)
        {
            count++;
            if(nums[i]>=k)
                break;
        }
        
        
    return count;
    }
};
```

### Java
```
class Solution {
    public int minOperations(int[] nums, int k) {
        Arrays.sort(nums); // Sort the array
        
        int count = -1;
        for (int i = 0; i < nums.length; i++) {
            count++;
            if (nums[i] >= k) {
                break;
            }
        }
        
        return count;
    }
}
```

### Python3
```
class Solution:
    def minOperations(self, nums: List[int], k: int) -> int:
        nums.sort()  # Sort the array
        
        count = -1
        for i in range(len(nums)):
            count += 1
            if nums[i] >= k:
                break
                
        return count
		
```

### C
```
int compare(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}

int minOperations(int* nums, int numsSize, int k) {
    // Sort the array
    qsort(nums, numsSize, sizeof(int), compare);

    int count = -1;
    for (int i = 0; i < numsSize; i++) {
        count++;
        if (nums[i] >= k) {
            break;
        }
    }

    return count;
}
```

### JavaScript

```
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, k) {
    // Sort the array
    nums.sort((a, b) => a - b);
    
    let count = -1;
    for (let i = 0; i < nums.length; i++) {
        count++;
        if (nums[i] >= k) {
            break;
        }
    }
    
    return count;
};
```

![image](./images/0.gif)

