# Java + Backtracking - Explained || Easy Understanding

**Author:** ayush_64bit
**Votes:** 34
**Link:** [https://leetcode.com/problems/permutations-ii/solutions/2031042/](https://leetcode.com/problems/permutations-ii/solutions/2031042/)

---

Hello Leetcoders, Hope you all are good.

Let's dig into the problem and think best way to get the solution.

**Problem Discription :**
```
Given an integer array that may contains duplicate values. You have to find all unique permutations of the integer array.
E.g arr = [1,1,2]

All possible permutations are 

[1,1,2]
[1,2,1]
[2,1,1]
```

**formula** :-* (if they ask total no. of unique permutations)*
total no of permutations = n!
if there are some duplicates number in that case = n! / a! * b!
where a & b are frequency of the duplicate numbers

but question says print all permutations
so here we use **backtracking**

first of all we need to **sort the array** because there are some duplicate numbers and we don't want to process same number twice

for writting backrtracking code we need to create a **helper** method 

```
public List<List<Integer>> permuteUnique(int[] nums) {
		
        List<List<Integer>> ans = new ArrayList<>(); // ans list
        Arrays.sort(nums); // sort the array
		
		// create a boolean array which track the certain indexed integer is present in out temp list or not
        helper(ans, new ArrayList<>(), nums, new boolean[nums.length]); // helper method
		
        return ans; // return output
    }
```

**Now backtracking code**

```
private void helper(List<List<Integer>> ans, List<Integer> temp, int[] nums, boolean[] vis) {
		
		/*
			when size of the temp list and size of the inout array are same then add this temp list into the final ans list.
			this is one of our permutation for given integer array
		*/
        if(nums.length == temp.size()) {
            ans.add(new ArrayList<>(temp));
            return;
        }
		
        /*
			Traverse for whole array one by one.
		*/
        for(int i=0;i<nums.length; i++) {
		
            if(vis[i]) continue; // if current element is already present in the temp, skip the element
            if(i > 0 && ! vis[i-1] && nums[i] == nums[i-1]) continue; // if prev element and current element is equal, skip the element
            
            vis[i] = true;
            temp.add(nums[i]);
            
            helper(ans, temp, nums, vis); // recursive call
            
			// backtracking
            temp.remove(temp.size() - 1);
            vis[i] = false;
        }
    }

```




# ***If you like the explanation please UP-VOTE the article***
