# Most Optimal Solution using binary search with explanation

**Author:** priyanshu11_
**Votes:** 5
**Link:** [https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/solutions/3882403/](https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/solutions/3882403/)

---



# Approach
- The maxEl function iterates through the array to find the maximum element in the array (maxi). This maximum element will give us an upper bound for our divisor search.

- The sumByD function calculates the sum of the division results when each element of the array is divided by a given divisor div. It iterates through the array, divides each element by div, and adds the ceiling value of the division result to the sum. This is done because we want to make sure the sum is at least as large as if we rounded up the division result.

- The smallestDivisor function performs a binary search to find the smallest divisor that meets the given threshold. The search space for the divisor is between 1 (since the divisor must be positive) and the maximum element in the array (as calculated by the maxEl function).

- In the binary search loop, the middle value between low and high is calculated as mid = (low + high) / 2. This mid value represents the current divisor candidate.

- The sumByD function is called with the current divisor candidate (mid). If the sum of division results for the current divisor candidate is less than or equal to the threshold, it means that the divisor is too large. In this case, we update high to mid - 1 to search for a smaller divisor in the lower half of the search space.

- If the sum of division results for the current divisor candidate is greater than the threshold, it means that the divisor is too small. In this case, we update low to mid + 1 to search for a larger divisor in the upper half of the search space.

- The binary search continues until low becomes greater than high. At this point, low represents the smallest divisor that meets the threshold requirement.

- Finally, the low value is returned as the result, which is the smallest positive integer divisor that satisfies the condition.

In summary, the solution utilizes binary search to efficiently find the smallest divisor by adjusting the search space based on whether the sum of division results is above or below the threshold value.

# Complexity
- Time complexity:
O(log(maxEL)*n)

- Space complexity:
O(1)

```C++ []
class Solution {
public:
    int maxEl(vector<int>& nums) {
        int maxi = INT_MIN;
        for(int i = 0; i < nums.size(); i++) {
            maxi = max(maxi, nums[i]);
        }
        return maxi;
    }
    int sumByD(vector<int> &nums, int div) {
        int sum = 0;
        for (int i = 0; i < nums.size(); i++) {
            sum += ceil((double)(nums[i]) / (double)(div));
        }
        return sum;
    }
    int smallestDivisor(vector<int>& nums, int threshold) {
        int low = 1, high = maxEl(nums);
        while(low<=high) {
            int mid = (low+high)/2;
            if(sumByD(nums, mid) <= threshold) high = mid-1;
            else low = mid+1;
        }
        return low;
    }
};
```
```JAVA []
class Solution {
    public int maxEl(int[] nums) {
        int maxi = Integer.MIN_VALUE;
        for (int i = 0; i < nums.length; i++) {
            maxi = Math.max(maxi, nums[i]);
        }
        return maxi;
    }
    
    public int sumByD(int[] nums, int div) {
        int sum = 0;
        for (int i = 0; i < nums.length; i++) {
            sum += Math.ceil((double) nums[i] / (double) div);
        }
        return sum;
    }
    
    public int smallestDivisor(int[] nums, int threshold) {
        int low = 1, high = maxEl(nums);
        while (low <= high) {
            int mid = low + (high - low) / 2;
            if (sumByD(nums, mid) <= threshold) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        }
        return low;
    }
}

```
```Python []
class Solution:
    def maxEl(self, nums):
        maxi = float('-inf')
        for num in nums:
            maxi = max(maxi, num)
        return maxi
    
    def sumByD(self, nums, div):
        _sum = 0
        for num in nums:
            _sum += -(-num // div)  # Equivalent to ceil(num / div)
        return _sum
    
    def smallestDivisor(self, nums: List[int], threshold: int) -> int:
        low = 1
        high = self.maxEl(nums)
        while low <= high:
            mid = low + (high - low) // 2
            if self.sumByD(nums, mid) <= threshold:
                high = mid - 1
            else:
                low = mid + 1
        return low

```
