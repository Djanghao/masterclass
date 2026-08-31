# ✅Detailed Explanation || Intuition || Java, Python, Ruby, Javascript Solution || Binary search

**Author:** chintamanipala
**Votes:** 1
**Link:** [https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/solutions/4515554/](https://leetcode.com/problems/find-the-smallest-divisor-given-a-threshold/solutions/4515554/)

---

# Intuition
- Defining Search Space:

The smallest possible divisor that will not exceed the threshold would be 1.
The largest possible divisor would be the maximum value in the given array because dividing by a smaller number could potentially yield a larger sum.

- Binary Search:

Start a binary search between the smallest and largest possible divisors.
For each midpoint (potential divisor), calculate the sum of divisions of the array elements by this divisor.
If the calculated sum is greater than the threshold, it means the divisor is too small. Move the lower bound to mid + 1.
If the calculated sum is equal to or less than the threshold, the divisor might be too large or is the potential answer. Move the upper bound to mid - 1 (for potential smaller divisors) or keep track of this mid as the potential answer and move towards smaller divisors (mid - 1).

- Find the Smallest Divisor:

Repeat the process until the lower bound is greater than the upper bound.
At the end of the search, the lower bound will hold the smallest divisor that satisfies the condition.

# Approach
- Define the Search Space:

Initialize the search space. The smallest possible divisor is 1, and the largest possible divisor is the maximum value in the given array.

- Binary Search:

    - Begin a binary search within this defined search space.
Calculate the midpoint between the smallest and largest possible divisors.

    - Use this midpoint as a potential divisor and calculate the sum of divisions of all array elements by this divisor.
    - Compare this calculated sum with the given threshold:
    - If the sum exceeds the threshold, adjust the search space by setting the new lower bound to mid + 1.
    - If the sum is within the threshold, it might be a potential answer. Update the potential answer to this midpoint and adjust the upper bound to mid - 1.
    -  Find the Smallest Divisor:

        - Repeat this process, narrowing down the search space in each iteration.
        - Continue until the lower bound becomes greater than the upper bound, indicating that the search space has been exhausted.
The potential answer stored throughout the iterations would be the smallest divisor that satisfies the condition.

# Complexity
- Time complexity:

    - Binary Search Iterations: 
        - The binary search is performed on the range from 1 to the maximum element in the array. It takes log(M) iterations to converge to a single value.
        
    - For Each Iteration: 
        - For each iteration of the binary search, there's a calculation of the sum of divisions of all array elements by a certain divisor. This process takes O(N) time, as it needs to go through each element in the array.

    -   Therefore, for each iteration of the binary search, there's an O(N) operation, and since there are log(M) iterations, the overall time complexity is O(N * log(M)).

- Space complexity:

    - The space complexity of the algorithm is O(1), meaning it uses constant space.
# Java Code
```
class Solution {
    public static int calculateTotal(int arr[],int div){
        int ans=0;
        int n=arr.length;
        for(int i=0;i<n;i++){
            ans+=Math.ceil((double)arr[i]/div);
        }
        return ans;
    }
    public int smallestDivisor(int[] nums, int threshold) {
        int low=1;
        int high=Integer.MIN_VALUE;
        for(int ele:nums){
            high=Math.max(high,ele);
        }
        while(low<=high){
            int mid=(low+high)/2;
            if(calculateTotal(nums,mid)<=threshold){
                high=mid-1;
            }else{
                low=mid+1;
            }
        }
        return low;
    }
}
```

```javascript []
/**
 * @param {number[]} nums
 * @param {number} threshold
 * @return {number}
 */
var smallestDivisor = function(nums, threshold) {
    const sumDivided = (nums, divisor) => {
        let sum = 0;
        for (let num of nums) {
            sum += Math.ceil(num / divisor);
        }
        return sum;
    };

    let left = 1;
    let right = Math.max(...nums);

    while (left < right) {
        let mid = Math.floor((left + right) / 2);
        let sum = sumDivided(nums, mid);

        if (sum > threshold) {
            left = mid + 1;
        } else {
            right = mid;
        }
    }

    return left;
};

```
```python []
class Solution(object):
    def smallestDivisor(self, nums, threshold):
        def sum_divided(nums, divisor):
            return sum(-(-num // divisor) for num in nums)

        left, right = 1, max(nums)

        while left < right:
            mid = (left + right) // 2
            total = sum_divided(nums, mid)

            if total > threshold:
                left = mid + 1
            else:
                right = mid

        return left

```
```ruby []
# @param {Integer[]} nums
# @param {Integer} threshold
# @return {Integer}
def smallest_divisor(nums, threshold)
    sum_divided = lambda { |nums, divisor|
        nums.sum { |num| (num.to_f / divisor).ceil }
    }

    left = 1
    right = nums.max

    while left < right
        mid = (left + right) / 2
        total = sum_divided.call(nums, mid)

        if total > threshold
            left = mid + 1
        else
            right = mid
        end
    end

    left
end

```

# Credit
- Auther: **Chintamani Pala**
