# ✅ greedy C++ | O(N) time and O(1) space | short & easy to understand | 100% beat

**Author:** archit91
**Votes:** 14
**Link:** [https://leetcode.com/problems/equal-sum-arrays-with-minimum-number-of-operations/solutions/1086127/](https://leetcode.com/problems/equal-sum-arrays-with-minimum-number-of-operations/solutions/1086127/)

---

Arrays can't be equalised if one of the array is all `1s` and other is all `6s`, and still the first array is greater in sum. In all other cases, we can equalise the array through some operation. 

To minimize the operations, we need to start reducing the `diff`(difference of sum of arrays) by maximum amount possible till it becomes 0. If sum of `nums1` is less than sum of `nums2`:
*  elements from `nums1` will only be used for increment and vice-versa.

If sum of `nums1` is greater than sum of `nums2`, just swap the arrays to avoid writing multiple conditions.

Now, both the elements of `nums1` and `nums2` will be used to reduce `diff` to 0 either by incrementing or decrementing the elements(which doesn't matter to us). We just start reducing the `diff` by maximum amounts possible - (5, then 4, ... lastly 1) and increment the corresponding operations `op` required.


```
int minOperations(vector<int>& nums1, vector<int>& nums2) {
	    // not possible to equalize under following conditions
        if(6 * nums1.size() < 1 * nums2.size() || 6 * nums2.size() < 1 * nums1.size())
            return -1;
        int diff = 0, op = 0, j = 5;
        vector<int>arr(6);
        diff = accumulate(begin(nums1), end(nums1), 0) - accumulate(begin(nums2), end(nums2), 0);
        // if diff is positive, switch array bcoz numbers from first array will be used for subtracting and vice-versa
        if(diff > 0) swap(nums1, nums2);
        // arr stores frequency of numbers(1-5) that can be subtracted from diff to make it 0
        for(int &num : nums1) arr[6 - num]++;  
        for(int &num : nums2) arr[num - 1]++;        
        diff = abs(diff);
        
        while(diff > 0){
            if(arr[j]){
                op += min(arr[j], (int)ceil(1.0 * diff / j));
                diff -= arr[j] * j;
                if(diff <= 0)return op;                
            }
			j--;
		}
        return op;
    }
};
```