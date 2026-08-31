# ✅Easiest C++ / Java / Py Solution |3 Approaches each| Beginner Level 🏆

**Author:** dev_yash_
**Votes:** 7
**Link:** [https://leetcode.com/problems/neither-minimum-nor-maximum/solutions/5355735/](https://leetcode.com/problems/neither-minimum-nor-maximum/solutions/5355735/)

---

## C++
```
//Solution 1 (Using Sorting)
class Solution {
public:
    int findNonMinOrMax(vector<int>& nums) {
        int res;
        sort(nums.begin(),nums.end());
        if(nums.size()<=2)
        {
            return -1;
        }

        return nums[1];
    }
};

//Solution 2 (Using Sorting and Checking within Loop)
class Solution {
public:
    int findNonMinOrMax(vector<int>& nums) {
        int res;
        int n=nums.size();
        sort(nums.begin(),nums.end());
        if(nums.size()<=2)
        {
            return -1;
        }
        
        int max_val=nums[n-1];
        int min_val=nums[0];
        
        for(int i=1;i<n-1;i++)
        {
            if(nums[i]!=min_val && nums[i]!=max_val)
                return nums[i];
        }

        return -1;
    }
};

//Solution 3 (Using XOR for Array Size 3 and General Case for Larger Arrays)
class Solution {
public:
    int findNonMinOrMax(std::vector<int>& nums) {
        if (nums.size() <= 2) {
            return -1;
        }

        // If the array size is exactly 3, return the middle element directly
        if (nums.size() == 3) {
            return nums[0] ^ nums[1] ^ nums[2] ^ std::min({nums[0], nums[1], nums[2]}) ^ std::max({nums[0], nums[1], nums[2]});
        }

        // General case for larger arrays
        int minVal = *std::min_element(nums.begin(), nums.end());
        int maxVal = *std::max_element(nums.begin(), nums.end());

        for (int num : nums) {
            if (num != minVal && num != maxVal) {
                return num;
            }
        }

        return -1;
    }
};
```

## Java
```
//Solution 1 (Using Sorting)
class Solution {
    public int findNonMinOrMax(int[] nums) {
        if (nums.length <= 2) {
            return -1;
        }

        Arrays.sort(nums);
        return nums[1];
    }
}

//Solution 2 (Using Sorting and Checking within Loop)
class Solution {
    public int findNonMinOrMax(int[] nums) {
        int n = nums.length;
        if (n <= 2) {
            return -1;
        }

        Arrays.sort(nums);
        int minVal = nums[0];
        int maxVal = nums[n - 1];

        for (int i = 1; i < n - 1; i++) {
            if (nums[i] != minVal && nums[i] != maxVal) {
                return nums[i];
            }
        }

        return -1;
    }
}

//Solution 3 (Using XOR for Array Size 3 and General Case for Larger Arrays)
class Solution {
    public int findNonMinOrMax(int[] nums) {
        if (nums.length <= 2) {
            return -1;
        }

        // If the array size is exactly 3, return the middle element directly
        if (nums.length == 3) {
            return nums[0] ^ nums[1] ^ nums[2] ^ Math.min(nums[0], Math.min(nums[1], nums[2])) ^ Math.max(nums[0], Math.max(nums[1], nums[2]));
        }

        // General case for larger arrays
        int minVal = Arrays.stream(nums).min().getAsInt();
        int maxVal = Arrays.stream(nums).max().getAsInt();

        for (int num : nums) {
            if (num != minVal && num != maxVal) {
                return num;
            }
        }

        return -1;
    }
}
```

## Python3
```
#Solution 1 (Using Sorting)
class Solution:
    def findNonMinOrMax(self, nums: List[int]) -> int:
        if len(nums) <= 2:
            return -1

        nums.sort()
        return nums[1]
		
		
#Solution 2 (Using Sorting and Checking within Loop)
class Solution:
    def findNonMinOrMax(self, nums: List[int]) -> int:
        n = len(nums)
        if n <= 2:
            return -1

        nums.sort()
        min_val = nums[0]
        max_val = nums[-1]

        for i in range(1, n - 1):
            if nums[i] != min_val and nums[i] != max_val:
                return nums[i]

        return -1
		
#Solution 3 (Using XOR for Array Size 3 and General Case for Larger Arrays)
class Solution:
    def findNonMinOrMax(self, nums: List[int]) -> int:
        if len(nums) <= 2:
            return -1

        # If the array size is exactly 3, return the middle element directly
        if len(nums) == 3:
            return nums[0] ^ nums[1] ^ nums[2] ^ min(nums) ^ max(nums)

        # General case for larger arrays
        min_val = min(nums)
        max_val = max(nums)

        for num in nums:
            if num != min_val and num != max_val:
                return num

        return -1
		
```
		
##### **STAY COOL STAY DISCIPLINED..!**

![image](./images/0.gif)
