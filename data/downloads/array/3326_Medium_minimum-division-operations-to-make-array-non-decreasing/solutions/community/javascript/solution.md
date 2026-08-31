# Easy Greedy solution

**Author:** be_fighter
**Votes:** 3
**Link:** [https://leetcode.com/problems/minimum-division-operations-to-make-array-non-decreasing/solutions/5940021/](https://leetcode.com/problems/minimum-division-operations-to-make-array-non-decreasing/solutions/5940021/)

---

# Intuition
Try to hink to backside so the order always maintain and if the property fails we will return result with less iteration 
# Initialization:

1. n = nums.size(); assigns the length of the array to n.
2. num = nums[n-1]; sets the last element of the array as the current reference value num (as it's the first to compare from the right).
cnt = 0; is the counter that tracks the number of operations performed.
# Main Loop (Traversing from right to left):

1. The loop iterates over the array starting from the second-last element (i = n-2) down to the first element (i >= 0).
2. If the current element nums[i] is greater than num (i.e., the value after it), the algorithm tries to modify nums[i] to make it smaller or equal to num.
# Inner Loop (Finding a factor):

1. The function attempts to find a divisor j of nums[i] by iterating over potential divisors (j*j <= nums[i]). If a divisor is found (nums[i] % j == 0), nums[i] is set to that divisor and the operation counter cnt is incremented.
2. The divisor j would be the smallest number that divides nums[i].
# Check after modification:

1. If the modification made does not result in nums[i] being smaller than or equal to num, the function returns -1, indicating that it is impossible to make the array non-increasing.
# Update the reference value:

1. After processing each element, num is updated to nums[i] for the next comparison.
# Return the count:

1. If the entire array is processed successfully, the function returns the count cnt, which is the number of operations performed.

# EXAMPLE 
vector<int> nums = {8, 16, 12, 4};

# Initialize:

1. n = 4
num = 4 (last element)
cnt = 0 (no operations yet)
Start with the second last element nums[2] = 12:

2. 12 > 4 \u2192 We need to reduce 12.
 Try divisors for 12: smallest divisor is 2. So, update nums[2] = 2 and increment cnt = 1.
Now, nums[2] = 2 and num = 2 for the next comparison.
Move to nums[1] = 16:

3. 16 > 2 \u2192 We need to reduce 16.
Try divisors for 16: smallest divisor is 2. So, update nums[1] = 2 and increment cnt = 2.
Now, nums[1] = 2 and num = 2 for the next comparison.
Move to nums[0] = 8:

4. 8 > 2 \u2192 We need to reduce 8.
Try divisors for 8: smallest divisor is 2. So, update nums[0] = 2 and increment cnt = 3.
Now, nums[0] = 2.
5. The loop finishes without any issues, so the function returns cnt = 3.

# Result:
The number of operations required to make the array non-increasing is 3. The final array is [2, 2, 2, 4].
# Complexity
- Time complexity:
O(N*sqrt(10^6))

- Space complexity:
o(1);

# Code
```cpp []
class Solution {
public:
    int minOperations(vector<int>& nums) {
        
        int n=nums.size();
        int num=nums[n-1];
        
        int cnt=0;
        for(int i=n-2;i>=0;i--){
            if(nums[i]>num){
                for(int j=2;j*j<=nums[i];j++){
                    if(nums[i]%j==0){
                        nums[i]=j;
                        cnt++;
                        break;
                    }
                }
            }

            if(nums[i]>num){
                return -1;
            }
            num=nums[i];
        }

        return cnt;
    }
};
```
```java []
import java.util.*;

class Solution {
    public int minOperations(int[] nums) {
        int n = nums.length;
        int num = nums[n - 1];
        int cnt = 0;

        for (int i = n - 2; i >= 0; i--) {
            if (nums[i] > num) {
                for (int j = 2; j * j <= nums[i]; j++) {
                    if (nums[i] % j == 0) {
                        nums[i] = j;
                        cnt++;
                        break;
                    }
                }
            }
            if (nums[i] > num) {
                return -1;
            }
            num = nums[i];
        }

        return cnt;
    }

```
```python []
class Solution:
    def minOperations(self, nums):
        n = len(nums)
        num = nums[n - 1]
        cnt = 0

        for i in range(n - 2, -1, -1):
            if nums[i] > num:
                for j in range(2, int(nums[i] ** 0.5) + 1):
                    if nums[i] % j == 0:
                        nums[i] = j
                        cnt += 1
                        break

            if nums[i] > num:
                return -1

            num = nums[i]

        return cnt

```
```javascript []
class Solution {
    minOperations(nums) {
        let n = nums.length;
        let num = nums[n - 1];
        let cnt = 0;

        for (let i = n - 2; i >= 0; i--) {
            if (nums[i] > num) {
                for (let j = 2; j * j <= nums[i]; j++) {
                    if (nums[i] % j === 0) {
                        nums[i] = j;
                        cnt++;
                        break;
                    }
                }
            }
            if (nums[i] > num) {
                return -1;
            }
            num = nums[i];
        }

        return cnt;
    }
}

```
![c2d27b08-ffbe-4bc6-8b29-5fc4d8effd5f_1723775276.9029489.jpeg](./images/0.jpeg)

