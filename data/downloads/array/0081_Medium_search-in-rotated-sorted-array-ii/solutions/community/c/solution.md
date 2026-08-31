# ✅ C++ || Algorithm  || Binary Search

**Author:** knockcat
**Votes:** 558
**Link:** [https://leetcode.com/problems/search-in-rotated-sorted-array-ii/solutions/1890199/](https://leetcode.com/problems/search-in-rotated-sorted-array-ii/solutions/1890199/)

---

# 81. Search in Rotated Sorted Array II
**KNOCKCAT**

```
1. Easy C++
2. Line by Line Explanation with Comments.
3. Detailed Explanation \u2705
4. Initution is to use Binary Search
5. Please Upvote if it helps\u2B06\uFE0F
6. Link to my Github Profile contains a repository of Leetcode with all my Solutions. \u2B07\uFE0F
	// \uD83D\uDE09If you Like the repository don't foget to star & fork the repository\uD83D\uDE09
```

[LeetCode](http://github.com/knockcat/Leetcode) **LINK TO LEETCODE REPOSITORY**

Please upvote my comment so that i get to win the 2022 giveaway and motivate to make such discussion post.
**Happy new Year 2023 to all of you**
**keep solving keep improving**
Link To comment
[Leetcode Give away comment](https://leetcode.com/discuss/general-discussion/2946993/2022-Annual-Badge-and-the-Giveaway/1734919)

**Before commig over this Problem solve previous version of it.**
[33. Search in Rotated Sorted Array](https://leetcode.com/problems/search-in-rotated-sorted-array/)

*  The **idea is the same as the previous one without duplicates.**
*   The only **difference is that due to the existence of duplicates,**
	* **arr[l] == arr[mid] could be possible**, the **first half could be out of order**
	*  (i.e. **not in the ascending order**, e.g. {3, 1, 2, 3, 3, 3, 3})
	*  we have to deal this case separately. 
	* In that case, it is **guaranteed that arr[high] also equal to arr[mid],**
	* so the condition **arr[mid] == arr[l] == arr[r] can be checked before the original logic**, 
	* if **so then move left and right both towards the middle by 1 and repeat.**

**Closer look to the duplicate case**

* let go in detail...

* {3, 1, 2, 3, 3, 3, 3})

* I have taken the same eg as above,

* so we know when we divide array,
* **either of 1 half has to be sorted** because since the array is rotated, still one half will be sorted and i fell you understand this case,

* now the problem is , as in above case if i some how find two halves let say
* **3 1 2 3** is one half, and **3 3 3** is another half and our **mid is element 3 also it at index '3'**

* ok i hope you get it

	now,

* can we distingusih over which half we should minimize are search space, **can we ?**

* the answer is no

* because, if i compared it with nums[low] it is 3 and if i look for nums[high] it is again 3

* so **our search space will not be divide correctly as both are same what is correct half we cannot determine and we cannot get to know which is our sorted half and i feel you are getting it now,**

* so we have to get rid of the condition nums[low] == nums[mid] == nums[high] seperately.

* According to our code,  it will run the if condition which will compare with nums[low] because if condition will run first , but again we cannot determine it would have the correct partition.

* so that's why **we trimmed our search space** both from start and end so that we can **determine the valid partition and get to determine the sorted half.**

* and handled the case if nums[low] == nums[mid] == nums[high] seperately.

* and the worst time complexity is ~ O(n/2) of this entire code, because of duplicate case. average tc is O(logn)

**ALGORITHM**
* **Check** for if **target == nums[mid]**, if found **return true**.
* With d**uplicates we can have nums[l] == nums[r]** so just u**pdate the l and r towards middle.**
* If not than check for **first half is that in order (i.e nums[l] <= nums[mid]**
	* check if **target is in the range of [left, mid -1]**, **if((nums[l] <= target) && (nums[mid] > target))** and search in it.
* if not in first half search in **second half.**
	*  Check if **target is in range of [mid + 1, right]**, **if((nums[mid] < target) && (nums[r]>= target))** and search in it.

**Time Complexity - >**
Average **O(log n)**
worse **~(O(n) = O(n)**

**space Complexity ->  O (1)**

**CODE WITH EXPLANATION**

```
			// \uD83D\uDE09\uD83D\uDE09\uD83D\uDE09\uD83D\uDE09Please upvote if it helps \uD83D\uDE09\uD83D\uDE09\uD83D\uDE09\uD83D\uDE09
class Solution {
public:
    bool search(vector<int>& nums, int target) {
        int l = 0;
        int r = nums.size() - 1;
        
        while(l <= r)
        {
            int mid = l + (r-l) / 2;
            if (nums[mid] == target)
                return true;
			// with duplicates we can have this contdition, just update left & right
            if((nums[l] == nums[mid]) && (nums[r] == nums[mid]))
            {
                l++;
                r--;
            }
			// first half
			// first half is in order
            else if(nums[l] <= nums[mid])
            {
				// target is in first  half
                if((nums[l] <= target) && (nums[mid] > target))
                    r = mid - 1;
                else
                    l = mid + 1;
            }
			// second half
			// second half is order
			// target is in second half
            else
            {
                if((nums[mid] < target) && (nums[r]>= target))
                    l = mid + 1;
                else
                    r = mid - 1;
            }
        }
        return false;
    }
	// for github repository link go to my profile.
};
```