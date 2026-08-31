# O(N) | Double Kadane

**Author:** callmepandey
**Votes:** 11
**Link:** [https://leetcode.com/problems/maximum-score-of-spliced-array/solutions/2199275/](https://leetcode.com/problems/maximum-score-of-spliced-array/solutions/2199275/)

---

Lets say **sumA is the sum of array nums1 and sumB is sum of array nums2.**

The fact we are only worried about change certain subarray, so first lets calculate the amout of improvement we can get after swapping each element, which is **nums1[i] - nums2[i]** (if we replace ith index of nums2 with nums1) and **nums2[i] - nums1[i]**, and we store both of these value in two seperate arrays lets say tempA and tempB, respectively.

Now if we know the subarray with maximum sum in tempA, we can say that if change the particular subarray from array 'A' to 'B' we will increase our sum of 'A' by the maximum sum, **lets say maximum subarray sum as maximumSubarraySumofTempA.**
Simlarly for maximum sum subarray in tempB array will be the maximum surplus sum into sum of array nums2 you can get by changing exactly 1 subarray from B to A, **lets say maximum subarray sum as maximumSubarraySumofTempB.**


We will use Kadane twice for both array tempA and tempB, and return the maximum of **sumA + maximumSubarraySumofTempA or sumB + maximumSubarraySumofTempB.**

```
class Solution {
public:
    int maximumsSplicedArray(vector<int>& nums1, vector<int>& nums2) {
        vector <int> tempA , tempB;
        int sumA = 0 , sumB = 0;
        for(int i = 0;i<nums1.size();i++) {
            sumA += nums1[i];
            tempA.push_back(nums2[i] - nums1[i]);
            sumB += nums2[i];
            tempB.push_back(nums1[i] - nums2[i]);
        }
        int maxDiffA = 0 , maxDiffB = 0;
        int sum = 0;
        for(int i : tempA) {
            sum += i;
            maxDiffA = max(sum , maxDiffA);
            sum = max(0 , sum);
        }
        sum = 0;
        for(int i : tempB) {
            sum += i;
            maxDiffB = max(sum , maxDiffB);
            sum = max(0 , sum);
        }
        return max(sumA + maxDiffA , sumB + maxDiffB);
        
    }
};
```