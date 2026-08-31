# C++ | Java | Python | C# | Accepted O(n) solution with explanation

**Author:** tunguyenm
**Votes:** 10
**Link:** [https://leetcode.com/problems/increasing-triplet-subsequence/solutions/2691159/](https://leetcode.com/problems/increasing-triplet-subsequence/solutions/2691159/)

---

# Approach
If the array has less than 3 elements, **return false**.

We will use 2 variables to store the smallest number and second smallest number that is only just larger than the smallest number.

After each loop, we will either find the smallest number, second smallest number. If any number large than second smallest number, the is a increasing triplet => **Return true**.

After loop through all numbers in the array, there is no number larger than second smallest => **Return false**.

# Complexity
- Time complexity: $$O(n)$$ since we loop through the array 1 time.

- Space complexity: $$O(1)$$ since we only use 2 variables.

##### Please comment if you have any concern and upvote if this was helpful! 
# Code
### C++:
```
class Solution {
public:
    bool increasingTriplet(vector<int>& nums) {
        int n = nums.size();
        if (n < 3) {
            return false;
        }

        int smallest = INT_MAX;
        int secondSmallest = INT_MAX;

        for (int i = 0; i < n; i++) {
            if (nums[i] <= smallest) { // Find the smallest number
                smallest = nums[i];
            }
            else if (nums[i] <= secondSmallest) { // If get here, this number is larger than smallest number
                secondSmallest = nums[i];
            }
            else { // If get here, this number is larger than second smallest number => there is are increasing triplet
                return true;
            }
        }
        return false;
    }
};
```


### Java:
```
class Solution {
    public boolean increasingTriplet(int[] nums) {
        if (nums.length < 3) {
            return false;
        }

        int smallest = Integer.MAX_VALUE;
        int secondSmallest = Integer.MAX_VALUE;

        for (int num : nums) {
            if (num <= smallest) {   // Find the smallest number
                smallest = num;
            }
            else if (num <= secondSmallest) {  // If get here, this number is larger than smallest number
                secondSmallest = num;
            }
            else { // If get here, this number is larger than second smallest number => there is are increasing triplet
                return true;
            }
        }
        return false;
    }
}
```


### Python 3:
```
class Solution:
    def increasingTriplet(self, nums: List[int]) -> bool:
        if len(nums)<3:
            return False

        smallest = float('inf')
        second_smallest = float('inf')

        for num in nums:
            if num <= smallest:  // Find the smallest number
                smallest = num
            elif num <= second_smallest:  // If get here, this number is larger than smallest number
                second_smallest = num
            else:  // If get here, this number is larger than second smallest number => there is are increasing triplet
                return True

        return False
```


### C#:
```
public class Solution {
    public bool IncreasingTriplet(int[] nums) {
        if (nums.Length < 3) {
            return false;
        }

        int smallest = int.MaxValue;
        int secondSmallest = int.MaxValue;

        foreach (int num in nums) {
            if (num <= smallest) {   // Find the smallest number
                smallest = num;
            }
            else if (num <= secondSmallest) {  // If get here, this number is larger than smallest number
                secondSmallest = num;
            }
            else {  // If get here, this number is larger than second smallest number => there is are increasing triplet
                return true;
            }
        }

        return false;
    }
}

```