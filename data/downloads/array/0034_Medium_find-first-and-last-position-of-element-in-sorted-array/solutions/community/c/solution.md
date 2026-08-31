# C++ how to nail binary search the very first time(explained)

**Author:** NUMBART
**Votes:** 280
**Link:** [https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/solutions/573123/](https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/solutions/573123/)

---

I used to be afraid about getting binary searches not working the first time. I had the opportunity to see a great programmer code it out in front of my eyes a few times. Here is what I learnt from the way he did it. 

1) Use a variable to **store the temporary result** during the search(let's call it ans). Every time you hit a not found condition AND if there is a possibility of one of the mid or its neighbours being the desired answer **store it**. 
Reason : storing can't harm you if its constant space, the later points will show you how it reduces a burden while writing binary search. Also it ensures an answer.

2) Whenever you hit not found condition **do `s = mid+1` or `e = mid-1`** according to the condition without worrying. 
Reason : You have stored your value if the loop ends, can't go wrong. This also ensures you don't go into infinite loops.

3) Default to writing **`mid = s + (e-s)/2`** and NOT **`mid = (s+e)/2`**. 
Reason : The later can result in an overflow when you are not searching in an array but rather on an answer space, specially because binary search if it can be applied is a great tool for huge numbers.

4) Write your if and elses well, and don't worry about adding extra conditions with the neighbours, at the same time don't forget to check whether the neighbour exists.
Reason : This is the only thing you should be worrying about coding right, because this depends on the problem. If it is a easy or medium sometimes even medium-hard, this part shouldnt cause much trouble.

This is not the only way to approach binary search in a fail-safe way every time, there are others too. Choose any and code a lot of problems using that, but don't mix two ways up.

Here is a basic code to the problem using the above way.

```cpp
vector<int> searchRange(vector<int>& a, int target) {
	int s = 0, e = a.size()-1;
	vector<int> ans(2, -1);
	//first occurrence
	while(s <= e){
		int m = s + (e-s)/2;
		if(a[m] < target)
			s = m+1;
		else if(a[m] > target)
			e = m-1;
		else{
			if(m == s || a[m] != a[m-1]){
				ans[0] = m;
				break;
			}
			else{
				e = m-1;
				ans[0] = m-1;
			}
		}
	}

	//last occurrence
	s = 0, e = a.size()-1;
	while(s <= e){
		int m = s + (e-s)/2;
		if(a[m] < target)
			s = m+1;
		else if(a[m] > target)
			e = m-1;
		else{
			if(m == e || a[m] != a[m+1]){
				ans[1] = m;
				break;
			}
			else{
				s = m+1;
				ans[1] = m+1;
			}
		}
	}
	return ans; 
}
```
If you're wondering why I have written `m == s` and again `m == e` in my conditions. This is because I am sure my answer cannot be outside the range s and e and if it is it has been stored. If you're more comfortable you can replace with `m == 0` or `m == a.size()-1`

I hope you found this helpful.

**Update:**
Solved this again 2 years from the time I first wrote this post as part of daily challenge, found it more elegant than quite a few of the other most voted solutions, that have implemented the solution using two binary searchs. Using library lower_bound or solving using one binary search by calling twice for target and target + 1, beats the purpose of practising this question, unless your only aim is to make your solution short.

That said if you want to learn binary search, you should still go through the earlier solution I wrote as it demonstrates the point of checking neighbours(which can be useful in other problems and hence more general). The solution below avoids that and hence you may miss getting practise for that.

```cpp
class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int target) {
        vector<int> ans(2, -1);
        int start = 0, end = (int)nums.size() - 1;
        while(start <= end) {
            int mid = start + (end-start)/2;
            if(nums[mid] < target) start = mid+1;
            else {
                if(nums[mid] == target) ans[0] = mid;
                end = mid-1;
            }
        }
        start = 0, end = (int)nums.size() - 1;
        while(start <= end) {
            int mid = start + (end-start)/2;
            if(nums[mid] > target) end = mid-1;
            else {
                if(nums[mid] == target) ans[1] = mid;
                start = mid+1;
            }
        }
        return ans;
    }
};
```

It makes me happy that I decided to share this 2 years back, over 10k people have read this, and atleast 100 people have found this helpful. 




