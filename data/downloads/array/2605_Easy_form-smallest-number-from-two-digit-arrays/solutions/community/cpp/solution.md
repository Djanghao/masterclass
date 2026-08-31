# C++✅| Easiest Solution Ever🤩 | For Loops

**Author:** abhi_9v
**Votes:** 48
**Link:** [https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/solutions/3366601/](https://leetcode.com/problems/form-smallest-number-from-two-digit-arrays/solutions/3366601/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
We are making a frequency array of values that are present in `nums1` and `nums2`. If the frequency of any element in this means it is present in both the array. So we will return the smallest number with frequecy 2. 
Otherwise, we will fetch the smallest numbers from `nums1` andn `nums2` and will return the smallest number from their combination.

# Approach
<!-- Describe your approach to solving the problem. -->
Approach is simple. Read the intuition and see the code, you will understand the solution easily

# Complexity
- Time complexity: O(1) : Size of both arrays is less than 10.
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(1)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class Solution {
public:
    int minNumber(vector<int>& nums1, vector<int>& nums2) {
        vector<int> freq(10);
        for(int i=0; i<nums1.size(); i++) freq[nums1[i]]++;
        for(int i=0; i<nums2.size(); i++) freq[nums2[i]]++;
            
        int k=2;
        int ans =0;
        int mn1 = *min_element(nums1.begin(), nums1.end());
        int mn2 = *min_element(nums2.begin(), nums2.end());
        for(int i=1; i<=9; i++)
            if(freq[i]==2) return i;
        
        if(mn2<mn1) swap(mn2, mn1);
        return mn1*10+mn2;
    }
};
// PLEASE UPVOTE THE SOLUTION IF IT HELPED YOU SOMEHOW

```


Join us on Telegram: https://telegram.me/CodeVicharYoutube

![WhatsApp Image 2023-11-11 at 11.26.21_f71cabf9.jpg](./images/0.jpeg)


![0a95fea4-64f4-4502-82aa-41db6d77c05c_1676054939.8270252.jpeg](./images/1.jpeg)