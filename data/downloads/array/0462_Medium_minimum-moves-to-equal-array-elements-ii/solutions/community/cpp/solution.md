# C++ || 3 Approaches || Full Explanation

**Author:** TlTAN
**Votes:** 396
**Link:** [https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/solutions/2215732/](https://leetcode.com/problems/minimum-moves-to-equal-array-elements-ii/solutions/2215732/)

---

***Upvote if Found Helpful***

**Intuition :**

* From the problem its very basic that we need to sort the array and the elements are to be made equal to any of the three measures of central tendency mean / median / mode. But which of this should be taken that is the main question we need to figure out.

* Now just think after sorting we need to increase the elements at the left side of the array and decrease the elements at the right side of the array. So lets take the first `nums[0]` and last element `nums[n-1]`, the element to whom they should be made equal be centre. Hence `nums[0] <= centre <= nums[n-1]`. If we take any other value as centre then total steps needed will be more . Now if we continue doing the same step for 2nd, 3rd ... ith element we get a general relation `nums[i] <= centre <= nums[n-1-i]`.This ends at the central element of the array if n is odd i.e. `nums[n/2]` and if n is even it end at the condition `nums[n/2 -1] <= centre <= nums[n/2]`.  So centre will be mid value in case of n is odd and can be any value between the two middle values if n is even. 
		
		Now see this is basically the median of the array [which is the mean of the middle values in case of even n and the middle value itself in case of n is odd].

* So we need to find the median of the array and the sum of the steps needed to reach the median for all elements. That will be the required answer. 

* For even we can take any of the middle elements as median, no need to take their mean because for any number in the range of the 2 middle numbers the ans will be same. `To understand it more clearly see explanation of approach 2.`

Note : Steps for each number to reach another number is simple their absolute difference because in each step we can decrease or increase the value by 1.

# **First Approach :**

In this approach we just find the median after sorting the array which is nums[n/2] and add the absolute difference of the elements in the array with the median.

Time Complexity : **O(n logn) for sort + O(n) for loop = O(n logn)**, Space complexity : **O(1)**

```
class Solution {
public:
    int minMoves2(vector<int>& nums) {
        int n = nums.size(), steps = 0;
        sort(nums.begin(), nums.end());
        int median = nums[n/2]; // Finding median
        for(int i=0; i<n; i++){
            steps += abs(nums[i] - median); //Adding absolute difference
        }
        return steps;
    }
};
```

# **Second Approach :**

`If we notice carefully the median is always inside the range of nums[i]  ans nums[n-1-i] elements`. Now for any value x in the range the total steps needed to reach x for both the numbers is **`(x - nums[i]) + (nums[n-1-i] - x) = nums[n-1-i] - nums[i]`**. So it is clear that the steps does'nt depend on the median. So if we just simply add the diffences of nums[i]  ans nums[n-1-i] from i =0 to i =n/2 (Because after that elements will repeat) we will get the required answer. 

For the same reason we didn't need the mean of the middle values in first approach in case of n is even.

**So after sorting the array just add the differences of first and last element one by one i.e. nums[i]  ans nums[n-1-i] from i =0 to i =n/2**

Time Complexity : **O(n logn) for sort + O(n/2) for loop = O(n logn)**, Space complexity : **O(1)**

```
class Solution {
public:
    int minMoves2(vector<int>& nums) {
        int n = nums.size(), steps = 0;
        sort(nums.begin(), nums.end());
        for(int i=0; i<n/2; i++){
            steps += nums[n-1-i] - nums[i]; //Adding difference
        }
        return steps;
    }
};
```

# **Third Approach :**

There is a function with syntax **nth_element (RandomAccessIterator first, RandomAccessIterator nth, RandomAccessIterator last);**
The function of this is that it rearranges the array in such a way such that the element at the nth position is the one which should be at that position if we sort the list from the first to last iterator. It uses the quick select method for this. For more details google it.

In this problem we don't need full array sorted we just need the median which is the n/2 th element in the sorted array. So this can be achived by `nth_element(nums.begin(), nums.begin()+(n/2), nums.end())`. After that continue as in first approach.

The advantage of this approach is that the time complexity becomes O(n) as nth_element is O(n) fuction unlike sort.

Time Complexity : **O(n) for finding median + O(n) for loop = O(n)**, Space complexity : **O(1)**

```
class Solution {
public:
    int minMoves2(vector<int>& nums) {
        int n = nums.size(), steps = 0;
        nth_element(nums.begin(), nums.begin()+(n/2), nums.end()); //Fixing ths median element
        int median = nums[n/2];
        for(int i=0; i<n; i++){
            steps += abs(nums[i] - median);
        }
        return steps;
    }
};
```