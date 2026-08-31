# ✅ C++ ||  6 Approaches || Interview Question

**Author:** knockcat
**Votes:** 519
**Link:** [https://leetcode.com/problems/find-the-duplicate-number/solutions/1892872/](https://leetcode.com/problems/find-the-duplicate-number/solutions/1892872/)

---

# 287. Find the Duplicate Number
**KNOCKCAT**

```
1. Easy C++
2. Line by Line Explanation with Comments.
3. Detailed Explanation \u2705
4. Tortoise Algorithm is the most appropriate one, brute, map, count vector and binary Search, Making Visted Values within an Array are other possible approaches.
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


**APPROACH 1 BRUTE FORCE**
``` ```
**ALGORITHM**
``` ```
* **initaialise a  variable (ind)**
* **Sort the given vector.**
* **Traverse a for loop** to nums.size();
* if you **find two consecutive elements equal**, you **find a duplicate, break the loop.**
* **Return ind.**
``` ```

Time Complexity -> O(N Log N)
Space Complexit -> O(1)

**CODE WITH EXPLANATION**
```
				// \uD83D\uDE09\uD83D\uDE09\uD83D\uDE09\uD83D\uDE09Please upvote if it helps \uD83D\uDE09\uD83D\uDE09\uD83D\uDE09\uD83D\uDE09
class Solution {
public:
    int findDuplicate(vector<int>& nums) {
        int ind = 0;
		
		// sort the vector
        sort(nums.begin(),nums.end());
        for(int i = 0; i < nums.size() - 1; i++)
        {
			// if two consecutive elements are equal
			// you have find a duplicate
			// break the loop
            if(nums[i] == nums[i+1])
            {
                ind = nums[i];
                break;
            }
        }
        // return duplicate value
        return ind;
    }
	// for github repository link go to my profile.
};
```
* **APPROACH 2 USING CNT VECTOR**

**ALGORITHM**
* **take a cnt vector of size num.size()** & **initilise all it value to 0.**
* **Iterate the nums and store the cnt of every element in cnt array.**
* Now **traverse the cnt vector if any value in cnt vector is greater than 1** , **return i**.
* That's the **duplicate value;**
``` ```

Time Complexity -> O(N)
Space Complexit -> O(N)

**CODE WITH EXPLANATION**
```
				// \uD83D\uDE09\uD83D\uDE09\uD83D\uDE09\uD83D\uDE09Please upvote if it helps \uD83D\uDE09\uD83D\uDE09\uD83D\uDE09\uD83D\uDE09
class Solution {
public:
    int findDuplicate(vector<int>& nums) {
		// initialise cnt vector of size nums with 0
        vector<int> cnt(nums.size(),0);
        int ind =  0;
		
		// store the cnt of each value in the cnt vector
        for(int i = 0; i<nums.size(); i++)
        {
            cnt[nums[i]]++;
        }
        
        for(int i = 0; i<cnt.size(); i++)
        {
			// if cnt[i] > 1
			// this means that element occur more than once in nums
			// we have to return i
            if(cnt[i] > 1)
            {
                ind  = i;
                break;
            }
        }
        
        return ind;
    }
	// for github repository link go to my profile.
};

Time Complexity -> O(N)
Space Complexit -> O(N)

```
**APPROCH 2 USING MAP**
// Same Approach as above just used map  for storing counts.
```
// \uD83D\uDE09\uD83D\uDE09\uD83D\uDE09\uD83D\uDE09Please upvote if it helps \uD83D\uDE09\uD83D\uDE09\uD83D\uDE09\uD83D\uDE09
class Solution {
public:
    int findDuplicate(vector<int>& nums) {
        map<int, int> m;
        int duplicate = 0;
        for(auto i= 0; i<nums.size(); ++i)
        ++m[nums[i]];
        
        for(auto i : m)
        {
            if(i.second > 1)
            {
                duplicate = i.first;
                break;
            }
        }
        return duplicate;
    }
	// for github repository link go to my profile.
};

```
**APPROACH 4 USING BINARY SEARCH**

Time Complexity -> O(N Log N)
Space Complexit -> O(1)


**ALGORITHM**
* Perform **Binary Search on range 1 to n;**
* **low = 1, high =  nums.size() - 1;**
* While the **value of high is greater than or equal to low.**
	* **calculate mid**.
	* **count elements <= to mid.**
	* if **count is less than equal to mid**.
		* **low = mid + 1** (binary search on **right half**)
		* else **high = mid + 1** (binary search on **left half**)
* Return **low which will point to duplicate.**

``` ```
**CODE WITH EXPLANATION**
```
				// \uD83D\uDE09\uD83D\uDE09\uD83D\uDE09\uD83D\uDE09Please upvote if it helps \uD83D\uDE09\uD83D\uDE09\uD83D\uDE09\uD83D\uDE09
class Solution {
public:
    int findDuplicate(vector<int>& nums) {
        int low = 1, high = nums.size() - 1, cnt;
        
        while(low <=  high)
        {
            int mid = low + (high - low) / 2;
            cnt = 0;
            // cnt number less than equal to mid
            for(int n : nums)
            {
                if(n <= mid)
                    ++cnt;
            }
            // binary search on left
            if(cnt <= mid)
                low = mid + 1;
            else
            // binary search on right
                high = mid - 1;
            
        }
        return low;
    }
	// for github repository link go to my profile.
};

```

**Approach 5 Making Visted Values within an Array**

The idea behind this approach is that as we iterate over the array **we treat every element as idx** and **we make the element at that idx as negative**
i.e **for 4 i will go to arr[4] and make it -arr[4]**
and now if at some point the element at that **idx is already negative which means i had already visit that element and than that will be the duplicate element.**

we are doing abs of nums[i] because we might mark that element at negative and array do not have negative idx and hence we make it positive for checking that indexed element.

**Time Complexity ->  O(N)
Space Complexit -> O(1)**

```
class Solution {
public:
    int findDuplicate(vector<int>& nums) {
        
        int n = nums.size();
        
        for(int i = 0; i < n; ++i)
        {
            int idx = abs(nums[i]);
            
            if(nums[idx] < 0)
                return idx;
            
            nums[idx] = -nums[idx];
        }
        
        return n;
    }
};
```

**Approach 6 (Tortoise Method)**

we will **assume this given array as a linkedlist** and then we can **solve it using the idea of cycle in a linked list.**

since we know there is a **repeated element therefore there will always be a cycle** and **starting element of the cycle is always the repeated element** let understand this in detail.

Since there is a duplicate number that means there will be definetely a cycle that mean fast and slow meet  each other or **we can also say since fast and slow meet therefore there is a cycle.**

when we move **fast by 2steps** and **slow by 1step**

this can be simply done using the **find cycle in the linkedlist approach**, please refer to the idea of that
from here [Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/discuss/1829489/C%2B%2B-oror-Easy-To-Understand-oror-2-Pointer-oror-Fast-and-Slow)

here **updating slow pointer** will be done as

**slow = nums[slow]**; // by 1 steps

**fast pointer will be updated** as 

**fast = nums[nums[fast]]**; // by 2 steps

so now we are at a **point where they both meet** and hence the **first collision point.**

Now to **find the starting of cycle , i.e
The second collision** is when we **move both the pointer by 1** (For Finding the Starting point)

but before that when are fast and slow pointer meets then the **slow pointer have covered a dist of let say x**, and the **fast pointer have covered the dist of 2x**. So the **difference of distance travel by both fast and slow is x**, and we can say this **x is the multiple of the length of the cycle** because fast and slow are meeting at  any point in the cycle and **they will only meet if differece of distance between them is a multiple of length of cycle.**

so for **finding the second collision we keep the fast pointer at start and the slow remains at the first collison point** and now **both will move by 1 steps till both slow and fast becomes equal**, and now  slow will be the start of the cycle and is the repeated element.

**so now the question is when both fast and slow meet again how it be the starting element of linkedlist ?**

as i proved earlier that the difference of distance of fast and slow is x (multilple of length of cycle), so when they meet the fast pointer has already moved an extra x(dist) than slow and we can easily say x  is the multiple of length of cycle.

**x = n C (x is a multiple of length of Cycle C)**


now **assume the distance from start to duplicate** is **'a'** so the **distance from duplicate  to first collision is 'x - a';**

now to **find the second collison we are keeping the fast pointer at  start and  moving fast and slow by 1**, so now **if the duplicate is at dist a** so the **fast pointer will move a dist of a** and the **slow pointer is at x - a it will also move a dist of a**
i.e *x - a  + a* **that is x** and **this x is the multiple of lenght of cycle** so we can say that when we start fast pointer from starting point and slow pointer from first collison point **they are bound to meet at the duplicate element i.e the start of the cycle**.


**Time Complexity -> O(N)
Space Complextiy -> O(1)**

**Code**
```
class Solution {
public:
    int findDuplicate(vector<int>& nums) {
        
        int fast = nums[0];
        int slow = nums[0];
        
        do{
            fast = nums[nums[fast]];
            slow = nums[slow];
        }while(fast != slow);
        
        fast = nums[0];
        
        while(fast != slow)
        {
            fast = nums[fast];
            slow = nums[slow];
        }
        
        return slow;
        
    }
};
```