# Easy explanation || Intuition

**Author:** array2002
**Votes:** 4
**Link:** [https://leetcode.com/problems/bitwise-xor-of-all-pairings/solutions/2646750/](https://leetcode.com/problems/bitwise-xor-of-all-pairings/solutions/2646750/)

---

**Logic - If a number is xored even number of times then the result is. Similarly if the  number is xored even number of times then the result is the number itself.**
* The question asks us to xor every element of an array (arr) which have all pairs of integers between nums1 and nums2.
* 	arr will have nums1[i] even number of times if the size of arr2 is even. Similarly if the size of size is odd then nums1[i] will occur odd number of times.
```
int xorAllNums(vector<int>& nums1, vector<int>& nums2) {
        int ans = 0;
        for(int i = 0; i < nums1.size(); i++){
            if(nums2.size()%2!=0){
                ans^=nums1[i];
            }
        }
        for(int i = 0; i < nums2.size(); i++){
            if(nums1.size()%2!=0){
                ans^=nums2[i];
            }
        }
        return ans;
    }
```

***Do upvote if you liked the solution.***