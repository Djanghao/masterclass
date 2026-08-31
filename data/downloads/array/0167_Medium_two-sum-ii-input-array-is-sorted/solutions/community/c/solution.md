# C++, with explanation, Clear & simple

**Author:** trade_off
**Votes:** 97
**Link:** [https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/solutions/261140/](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/solutions/261140/)

---

There are two good approaches to solve this problem.
**Hint:** As given array is **sorted**, we might use two pointer technique / binary search.

**Two pointer technique**.
We can exploit the sorted property of an array.
Let's say for indices ``i`` & ``j`` such that ``i<j``, 
if sum of elements ``A[i]+A[j] == target``, then we are done
else check whether ``A[i]+A[j] > target``, then last element has to be removed to reduce the value of sum (``j--``).
similarly if ``A[i]+A[j] < target``, we have to add little to increase the sum (``i++``).
```
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        int i=0,j=nums.size()-1;
        while(i<j){
            int sum = nums[i] + nums[j];
            if(sum==target) return {i+1,j+1};
            else if(sum>target) j--;
            else i++;
        }
        return {}; // not found
    }
};
```
time complexity: O(N)
space complexity: O(1)

___________________________________________________________________________________________________________________________
**Using Binary Search.** Consider each element and find is ``(target-nums[i])`` exist in array range ``[i+1,N-1]``? (If yes, we are done), else increment one step, then again search the element exist in array.
```
class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        int N = nums.size();
        for(int i=0;i<N-1;i++){
            int lo = i+1;
            int hi = N;
            while(lo<hi){
                int mid = lo + (hi-lo)/2;
                if(nums[mid]==target-nums[i]) return {i+1,mid+1};
                else if(nums[mid]>=target-nums[i]) hi=mid;
                else lo = mid+1;
            }
            if(lo!=nums.size() && nums[lo]==target-nums[i]) return {i+1,lo+1};
        }
        return {}; // not found
    }
};
```

time complexity: O(NlogN) in worst (if elements are together in right extreme)
space complexity: O(1)
Note: This is Template II Binary search, for further info go to [Explore](https://leetcode.com/explore/).
