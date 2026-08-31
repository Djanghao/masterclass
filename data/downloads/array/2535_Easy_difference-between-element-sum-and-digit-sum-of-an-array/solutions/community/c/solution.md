# C++ | Straight Forward | O(N) ✅

**Author:** prantik0128
**Votes:** 11
**Link:** [https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/solutions/3052795/](https://leetcode.com/problems/difference-between-element-sum-and-digit-sum-of-an-array/solutions/3052795/)

---

**Approach:** 

1. Initialize two variables, "`ele`" and "`dig`", to 0. "`ele`" will be used to keep track of the sum of the elements in the input vector, and "`dig`" will be used to keep track of the sum of the digits of the elements in the input vector.
2. Iterate through each element, "`num`", in the input vector "`nums`".
3. For each iteration, add the current element to the "`ele`" variable and the sum of the digits of the current element to the "`dig`" variable.
4. Return the absolute value of the difference between "`ele`" and "`dig`".

**Time complexity:** `O(n)` where `n` is the number of elements in the input vector, as we iterate through each element in the vector once.
**Space complexity:** `O(1)` as we are using only a constant amount of extra memory to store the variables "`ele`" and "`dig`".

----
**C++:**
```
class Solution {
public:
    int digitSum(int num){
        int sum = 0;
        while(num > 0){
            sum += num % 10;
            num /= 10;
        }
        return sum;
    }
    int differenceOfSum(vector<int>& nums) {
        int ele = 0, dig = 0;
        for(int num : nums){
            ele += num;
            dig += digitSum(num);
        }
        return abs(ele - dig);
    }
};
```
