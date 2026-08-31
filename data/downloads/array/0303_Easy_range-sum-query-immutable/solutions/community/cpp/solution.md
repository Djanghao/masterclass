# 5-lines C++, 4-lines Python

**Author:** jianchao-li
**Votes:** 130
**Link:** [https://leetcode.com/problems/range-sum-query-immutable/solutions/75184/](https://leetcode.com/problems/range-sum-query-immutable/solutions/75184/)

---

The idea is fairly straightforward: create an array `accu` that stores the accumulated sum for `nums` such that `accu[i] = nums[0] + ... + nums[i - 1]` in the initializer of `NumArray`. Then just return `accu[j + 1] - accu[i]` in `sumRange`. You may try the example in the problem statement to convince yourself of this idea.

The code is as follows.

----------
**C++**

    class NumArray {
    public:
        NumArray(vector<int> &nums) {
            accu.push_back(0);
            for (int num : nums)
                accu.push_back(accu.back() + num);
        }
    
        int sumRange(int i, int j) {
            return accu[j + 1] - accu[i];
        }
    private:
        vector<int> accu;
    };
    
    
    // Your NumArray object will be instantiated and called as such:
    // NumArray numArray(nums);
    // numArray.sumRange(0, 1);
    // numArray.sumRange(1, 2); 

----------
**Python**

    class NumArray(object):
        def __init__(self, nums):
            """
            initialize your data structure here.
            :type nums: List[int]
            """
            self.accu = [0]
            for num in nums: 
                self.accu += self.accu[-1] + num,
    
        def sumRange(self, i, j):
            """
            sum of elements nums[i..j], inclusive.
            :type i: int 
            :type j: int
            :rtype: int 
            """
            return self.accu[j + 1] - self.accu[i]
    
    
    # Your NumArray object will be instantiated and called as such:
    # numArray = NumArray(nums)
    # numArray.sumRange(0, 1)
    # numArray.sumRange(1, 2)