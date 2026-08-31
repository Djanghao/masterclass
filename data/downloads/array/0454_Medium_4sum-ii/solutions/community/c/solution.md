# Going from O(N^4) -> O(N^3) -> O(N^2) [Java/C++]

**Author:** hi-malik
**Votes:** 344
**Link:** [https://leetcode.com/problems/4sum-ii/solutions/1740606/](https://leetcode.com/problems/4sum-ii/solutions/1740606/)

---

```
What the question is saying, 
Given four integer arrays nums1, nums2, nums3, and nums4 all of length n, 
return the number of tuples (i, j, k, l) such that their sum of nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0
```
One **brute force approach** came in mind, let's iterate over all the array & form all the **possible tuples** & see how many **tuples** are having **sum zero**

```
class Solution {
    public int fourSumCount(int[] nums1, int[] nums2, int[] nums3, int[] nums4) {
        int count = 0;
        for(int i : nums1)
            for(int j : nums2)
                for(int k : nums3)
                    for(int l : nums4)
                        if(i + j + k + l == 0) count++;
        return count;
    }
}
```
ANALYSIS :- `[Time Limit Exceed]`
* **Time Complexity :- BigO(N^4)**

But, if you have solve 2-sum problem then you might have guess that we have to store some kind of data & make use of that and get access in O(1) time in data structure, so it's **HashMap**

Let just optimize a little bit. Just a bit,
Remove 1 loop **"l"** and we will use HashMap which will track the frequency of each number in our Array

Let me show you it in our code:-
```
class Solution {
    public int fourSumCount(int[] nums1, int[] nums2, int[] nums3, int[] nums4) {
        Map<Integer, Integer> map = new HashMap<>();
        for(int l : nums4)
            map.put(l, map.getOrDefault(l, 0) + 1); // if number already present the inrement with + 1, otherwise add in map
        int count = 0;
        for(int i : nums1)
            for(int j : nums2)
                for(int k : nums3)
                        count += map.getOrDefault(-(i + j + k), 0); // we have to find out the -ve of i + j + k 
        // & in d we have to find such no that -(i + j + k) + l gives = 0. If it is there get it otherwise get 0
        // and update the count
        return count;
    }
}
```
In this solution we reduce the Time Complexity from **O(N^4) -> O(N^3)** as still we running 3 nested for loop
ANALYSIS :- `[Time Limit Exceed]`
* **Time Complexity :- BigO(N^3)**

**Now, you think why don't we move one more array in our HashMap and do the same logic**. I'll say we gonna do that exact same thing, we will take one more for loop and put it in HashMap. So, what we will do is, take **"k"** for loop and when we put in Map **"l"** already present. By that we will form all the pair of **"l n k"**

Let's look at it's code,

**Java**
```
class Solution {
    public int fourSumCount(int[] nums1, int[] nums2, int[] nums3, int[] nums4) {
        Map<Integer, Integer> map = new HashMap<>();
        for(int k : nums3)
            for(int l : nums4)
                map.put(k + l, map.getOrDefault(k + l, 0) + 1);
        int count = 0;
        for(int i : nums1)
            for(int j : nums2)
                        count += map.getOrDefault(-(i + j), 0);
        return count;
    }
}
```
**C++**
```
class Solution {
public:
    int fourSumCount(vector<int>& nums1, vector<int>& nums2, vector<int>& nums3, vector<int>& nums4) {
        map<int,int> mp;
        for(int k : nums3)
            for(int l : nums4)
                mp[k + l]++;
        int count = 0;
        for(int i : nums1)
            for(int j : nums2)
                        count += mp[-(i + j)];
        return count;
    }
};
```
Now as you can see we have optimize it more. And the time complexity of solution has reduce from **O(N^3) -> O(N^2)**
ANALYSIS :- 
* **Time Complexity :-** BigO(N^2)

* **Space Complexity :-** BigO(N^2)


**ANALYSIS, detailed EXPLANATION :-**
```
Time complexity: put and get methods for hashing can be considered constant complexity O(1). 
Each double loop complexity has quadratic complexity O(N^2), repeated two times. 
Hence, Total Time complexity will be: O(2 N^2) + O(1) = O(N^2)

Space complexity: how mush space you add? map.put add a row in the map, here you are adding space in the memory. 
How much space? the number of times of the double for loop: O(N^2). Second double loop does not add space, has only get method. 
For loops themselves add only variable j and i in the memory, considered O(1), as well as the other variables in the code.
Hence, Total Space Complexity will be: O(N^2) + O(1) = O(N^2)
```