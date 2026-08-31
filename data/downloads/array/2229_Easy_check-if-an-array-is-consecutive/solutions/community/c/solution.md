# c++ | O(n) | S(1) | find missing positive | neither sort nor set

**Author:** gemhung
**Votes:** 6
**Link:** [https://leetcode.com/problems/check-if-an-array-is-consecutive/solutions/1933286/](https://leetcode.com/problems/check-if-an-array-is-consecutive/solutions/1933286/)

---

It's a variant of [first missing positive](https://leetcode.com/problems/first-missing-positive/) (**hard**).
The double for-loops makes it looks like O(n^2) but it isn't cause once `nums[i]` is swapped to its right place, it didn't get swapped again

Consider a case like `[5,1,2,3,4]`

i =0, 
[**4**,1,2,3,**5**]
[**3**,1,2,**4**,5]
[**2**,1,**3**,4,5]
[**1**,**2**,3,4,5]

i=1, 
[1,**2**,3,4,5], already fixed, swap nothing

....

i=4,
[1,2,3,4,**5**], already fixed, swap nothing

Hence, complexity is O(i=0) + O(i=1) + ... O(i=n-1) = n + 0 + ... + 0  = `O(n)`

```c++
class Solution {
public:
    bool isConsecutive(vector<int>& nums) {
        const auto min = *std::min_element(nums.begin(), nums.end());		
        const int n = nums.size();
        for(auto i = 0; i  < n; i++) {
            for(; nums[i] >= min+i  && nums[i] < min+n  && nums[i] != min+i && nums[i] != nums[nums[i]-min];)
                std::swap(nums[i], nums[nums[i]-min]);
            
            if( nums[i] >= min+n || nums[i] < min+i) // out of range or repeated value
                return false;
        }
        
        return true;
    }
};
 ```

 # Update
Thanks, [**@mgkrupa**](https://leetcode.com/mgkrupa/). Here update his solution to accept duplicate elements. Ex: [2,2,0] should return true
 ```c++
     bool isConsecutive(vector<int>& A) {
        auto min = *std::min_element(A.begin(), A.end());		
        for (int i = 0, n = A.size(); i < n; ++i) {
            while (i < A[i]-min && A[i]-min < n && A[i] != A[A[i]-min])
                swap(A[i], A[A[i]-min]);
            if (A[i]-min != i)
                return false;
        }
        return true;
    }
 ```