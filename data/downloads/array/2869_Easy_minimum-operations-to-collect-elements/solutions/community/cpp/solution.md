# O(N) solution with comments | O(1) space complexity | C++ , Python , Java

**Author:** Manan_09
**Votes:** 8
**Link:** [https://leetcode.com/problems/minimum-operations-to-collect-elements/solutions/4111094/](https://leetcode.com/problems/minimum-operations-to-collect-elements/solutions/4111094/)

---

# Intuition
We just have to somehow mark unique numbers from 1 to k and know when all are marked. When all are marked we will return answer.

Now just think of good ways of marking numbers which are encountered.

# Approach
Here I have used one long long inetger to to mark which numbers are traversed in form of bits. 

Good thing about that is we will able to mark number in O(1) TC and O(1) SC
even in worst case scenario.

Here long long will work because here at max 50 k, and long long can hpld up to 64 bits.

# Complexity
- Time complexity:
O(N)

- Space complexity:
O(1)

# Code
```
class Solution {
public:
    int minOperations(vector<int>& nums, int k) {
        long long int flag = 0; // User this long long int to mark numbers
        for(int i = nums.size() - 1 ; i >= 0 ; i--) {
            if(nums[i] <= k ) {
                flag |= 1ll << (nums[i] - 1); // mark if number is less than or equal to required k
            }
            if( flag == (1ll << k) - 1 ) { // if all numbers from 1 to k are marked 
                return nums.size() - i;
            }
        }  
        return -1;
    }
};
```

Python
```
class Solution:
    def minOperations(self, nums: List[int], k: int) -> int:
        flag = 0  # Use this variable to mark numbers
        for i in range(len(nums) - 1, -1, -1):
            if nums[i] <= k:
                flag |= 1 << (nums[i] - 1)  # Mark if the number is less than or equal to the required k
            if flag == (1 << k) - 1:  # If all numbers from 1 to k are marked
                return len(nums) - i
        return -1
```

Java
```
class Solution {
    public int minOperations(List<Integer> nums, int k) {
        long flag = 0; // Use this long variable to mark numbers
        for (int i = nums.size() - 1; i >= 0; i--) {
            if (nums.get(i) <= k) {
                flag |= 1L << (nums.get(i) - 1); // Mark if the number is less than or equal to the required k
            }
            if (flag == (1L << k) - 1) { // If all numbers from 1 to k are marked
                return nums.size() - i;
            }
        }
        return -1;
    }
}
```