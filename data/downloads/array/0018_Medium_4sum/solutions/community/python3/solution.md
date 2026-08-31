# Sum MegaPost - Python3 Solution with a detailed explanation

**Author:** peyman_np
**Votes:** 204
**Link:** [https://leetcode.com/problems/4sum/solutions/737096/](https://leetcode.com/problems/4sum/solutions/737096/)

---

If you're a newbie and sometimes have a hard time understanding the logic. Don't worry, you'll catch up after a month of doing Leetcode on a daily basis. Try to do it, even one example per day. It'd help. I've compiled a bunch on `sum` problems here, go ahead and check it out. Also, I think focusing on a subject and do 3-4 problems would help to get the idea behind solution since they mostly follow the same logic. Of course there are other ways to solve each problems but I try to be as uniform as possible. Good luck. 

In general, `sum` problems can be categorized into two categories: 1) there is any array and you add some numbers to get to (or close to) a `target`, or 2) you need to return indices of numbers that sum up to a (or close to) a `target` value.  Note that when the problem is looking for a indices, `sort`ing the array is probably NOT a good idea. 


 **[Two Sum:](https://leetcode.com/problems/two-sum/)**  
 
 This is the second type of the problems where we're looking for indices, so sorting is not necessary. What you'd want to do is to go over the array, and try to find two integers that sum up to  a `target` value. Most of the times, in such a problem, using dictionary (hastable) helps. You try to keep track of you've observations in a dictionary and use it once you get to the results. 

Note: try to be comfortable to use `enumerate` as it's sometime out of comfort zone for newbies. `enumerate` comes handy in a lot of problems (I mean if you want to have a cleaner code of course). If I had to choose three built in functions/methods that I wasn't comfortable with at the start and have found them super helpful, I'd probably say `enumerate`, `zip` and `set`. 
 
Solution: In this problem, you initialize a dictionary (`seen`). This dictionary will keep track of numbers (as `key`) and indices (as `value`). So, you go over your array (line `#1`) using `enumerate` that gives you both index and value of elements in array. As an example, let's do `nums = [2,3,1]` and `target = 3`. Let's say you're at index `i = 0` and `value = 2`, ok? you need to find `value = 1` to finish the problem, meaning, `target - 2 = 1`. 1 here is the `remaining`. Since `remaining + value = target`, you're done once you found it, right? So when going through the array, you calculate the `remaining` and check to see whether `remaining` is in the `seen` dictionary (line `#3`). If it is, you're done! you're current number and the remaining from `seen` would give you the output (line `#4`). Otherwise, you add your current number to the dictionary (line `#5`) since it's going to be a `remaining` for (probably) a number you'll see in the future assuming that there is at least one instance of answer.  
 
 
 ```
 class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        seen = {}
        for i, value in enumerate(nums): #1
            remaining = target - nums[i] #2
            
            if remaining in seen: #3
                return [i, seen[remaining]]  #4
            else:
                seen[value] = i  #5
```
 
 

 **[Two Sum II:](https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/)**  

For this, you can do exactly as the previous. The only change I made below was to change the order of line `#4`. In the previous example, the order didn't matter. But, here the problem asks for asending order and since the values/indicess in `seen` has always lower indices than your current number, it should come first.  Also, note that the problem says it's not zero based, meaning that indices don't start from zero, that's why I added 1 to both of them. 

```
class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        
        seen = {}
        for i, value in enumerate(numbers): 
            remaining = target - numbers[i] 
           
            if remaining in seen: 
                return [seen[remaining]+1, i+1]  #4
            else:
                seen[value] = i  
```

Another approach to solve this problem (probably what Leetcode is looking for) is to treat it as first category of problems. Since the array is already sorted, this works. You see the following approach in a lot of problems. What you want to do is to have two pointer (if it was 3sum, you'd need three pointers as you'll see in the future examples). One pointer move from `left` and one from `right`. Let's say you `numbers = [1,3,6,9]` and your `target = 10`. Now, `left` points to 1 at first, and  `right` points to 9. There are three possibilities. If you sum numbers that `left` and `right` are pointing at, you get `temp_sum` (line `#1`). If `temp_sum` is your target, you'r done! You're return it (line `#9`). If it's more than your `target`, it means that `right` is poiting to a very large value (line `#5`) and you need to bring it a little bit to the left to a smaller (r maybe equal) value (line `#6`)  by adding one to the index . If the `temp_sum` is less than `target` (line `#7`), then you need to move your `left` to a little bit larger value by adding one to the index (line `#9`). This way, you try to narrow down the range in which you're looking at and will eventually find a couple of number that sum to `target`, then, you'll return this in line `#9`. In this problem, since it says there is only one solution, nothing extra is necessary. However, when a problem asks to return all combinations that sum to `target`, you can't simply return the first instace and you need to collect all the possibilities and return the list altogether (you'll see something like this in the next example). 

```
class Solution:
    def twoSum(self, numbers: List[int], target: int) -> List[int]:
        
        for left in range(len(numbers) -1): #1
            right = len(numbers) - 1 #2
            while left < right: #3
                temp_sum = numbers[left] + numbers[right] #4
                if temp_sum > target:  #5
                    right -= 1 #6
                elif temp_sum < target: #7
                    left +=1 #8
                else:
                    return [left+1, right+1] #9
```




[**3Sum**](https://leetcode.com/problems/3sum/)

This is similar to the previous example except that it's looking for three numbers. There are some minor differences in the problem statement. It's looking for all combinations (not just one) of solutions returned as a list. And second, it's looking for unique combination, repeatation is not allowed. 

Here, instead of looping (line `#1`) to `len(nums) -1`, we loop to `len(nums) -2` since we're looking for three numbers. Since we're returning values, `sort` would be a good idea. Otherwise, if the `nums` is not sorted, you cannot reducing `right` pointer or increasing `left` pointer easily, makes sense? 

So, first you `sort` the array and define `res = []` to collect your outputs. In line `#2`, we check wether two consecutive elements are equal or not because if they are, we don't want them (solutions need to be unique) and will skip to the next set of numbers. Also, there is an additional constrain in this line that `i > 0`. This is added to take care of cases like `nums = [1,1,1]` and `target = 3`. If we didn't have `i > 0`, then we'd skip the only correct solution and would return `[]` as our answer which is wrong (correct answer is `[[1,1,1]]`.  

We define two additional pointers this time, `left = i + 1` and `right = len(nums) - 1`. For example, if `nums = [-2,-1,0,1,2]`, all the points in the case of `i=1` are looking at: `i` at `-1`, `left` at `0` and `right` at `2`. We then check `temp` variable similar to the previous example. There is only one change with respect to the previous example here between lines `#5` and `#10`.  If we have the `temp = target`, we obviously add this set to the `res` in line `#5`, right? However, we're not done yet. For a fixed `i`, we still need to check and see whether there are other combinations by just changing `left` and `right` pointers. That's what we are doing in lines `#6, 7, 8`. If we still have the condition of `left < right` and `nums[left]` and the number to the right of it are not the same, we move `left` one index to right (line `#6`). Similarly, if `nums[right]` and the value to left of it is not the same, we move `right` one index to left. This way for a fixed `i`, we get rid of repeative cases. For example, if `nums = [-3, 1,1, 3,5]` and `target = 3`, one we get the first `[-3,1,5]`, `left = 1`, but, `nums[2]` is also 1 which we don't want the `left` variable to look at it simply because it'd again return `[-3,1,5]`, right? So, we move `left` one index. Finally, if the repeating elements don't exists, lines `#6` to `#8` won't get activated. In this case we still need to move forward by adding 1 to `left` and extracting 1 from `right` (lines `#9, 10`). 

```
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        
        nums.sort()
        res = []

        for i in range(len(nums) -2): #1
            if i > 0 and nums[i] == nums[i-1]: #2
                continue
            left = i + 1 #3
            right = len(nums) - 1 #4
            
            while left < right:  
                temp = nums[i] + nums[left] + nums[right]
                                    
                if temp > 0:
                    right -= 1
                    
                elif temp < 0:
                    left += 1
                
                else:
                    res.append([nums[i], nums[left], nums[right]]) #5
                    while left < right and nums[left] == nums[left + 1]: #6
                        left += 1
                    while left < right and nums[right] == nums[right-1]:#7
                        right -= 1    #8
                
                    right -= 1 #9 
                    left += 1 #10
                       
```

Another way to solve this problem is to change it into a two sum problem. Instead of finding `a+b+c = 0`, you can find `a+b = -c` where we want to find two numbers `a` and `b` that are equal to `-c`, right? This is similar to the first problem. Remember if you wanted to use the exact same as the first code, it'd return indices and not numbers. Also, we need to re-arrage this problem in a way that we have `nums` and `target`. This code is not a good code and can be optimipized but you got the idea. For a better version of this, check [this](https://leetcode.com/problems/3sum/discuss/7384/My-Python-solution-based-on-2-sum-200-ms-beat-93.37). 

```
class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        res = []
        nums.sort()
        
        for i in range(len(nums)-2):
            if i > 0 and nums[i] == nums[i-1]:
                continue
            output_2sum = self.twoSum(nums[i+1:], -nums[i])
            if output_2sum ==[]:
                continue
            else:
                for idx in output_2sum:
                    instance = idx+[nums[i]]
                    res.append(instance)
        
        output = []
        for idx in res:
            if idx not in output:
                output.append(idx)
                
        
        return output
    
    
    def twoSum(self, nums, target):
        seen = {}
        res = []
        for i, value in enumerate(nums): #1
            remaining = target - nums[i] #2
           
            if remaining in seen: #3
                res.append([value, remaining])  #4
            else:
                seen[value] = i  #5
            
        return res
```

[**4Sum**](https://leetcode.com/problems/4sum/)

You should have gotten the idea, and what you've seen so far can be generalized to `nSum`. Here, I write the generic code using the same ideas as before. What I'll do is to break down each case to a `2Sum II` problem, and solve them recursively using the approach in `2Sum II` example above. 

First sort `nums`, then I'm using two extra functions, `helper` and `twoSum`. The `twoSum` is similar to the `2sum II` example with some modifications. It doesn't return the first instance of results, it check every possible combinations and return all of them now. Basically, now it's more similar to the `3Sum` solution. Understanding this function shouldn't be difficult as it's very similar to `3Sum`. As for `helper` function, it first tries to check for cases that don't work (line `#1`). And later, if the `N` we need to sum to get to a `target` is 2 (line `#2`), then runs the `twoSum` function. For the more than two numbers, it recursively breaks them down to two sum (line `#3`). There are some cases like line `#4` that we don't need to proceed with the algorithm anymore and we can `break`. These cases include if multiplying the lowest number in the list by `N` is more than `target`. Since its sorted array, if this happens, we can't find any result. Also, if the largest array (`nums[-1]`) multiplied by `N` would be less than `target`, we can't find any solution. So, `break`. 


For other cases, we run the `helper` function again with new inputs, and we keep doing it until we get to `N=2` in which we use `twoSum` function, and add the results to get the final output. 

```
class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        nums.sort()
        results = []
        self.helper(nums, target, 4, [], results)
        return results
    
    def helper(self, nums, target, N, res, results):
        
        if len(nums) < N or N < 2: #1
            return
        if N == 2: #2
            output_2sum = self.twoSum(nums, target)
            if output_2sum != []:
                for idx in output_2sum:
                    results.append(res + idx)
        
        else: 
            for i in range(len(nums) -N +1): #3
                if nums[i]*N > target or nums[-1]*N < target: #4
                    break
                if i == 0 or i > 0 and nums[i-1] != nums[i]: #5
                    self.helper(nums[i+1:], target-nums[i], N-1, res + [nums[i]], results)
    
    
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        res = []
        left = 0
        right = len(nums) - 1 
        while left < right: 
            temp_sum = nums[left] + nums[right] 

            if temp_sum == target:
                res.append([nums[left], nums[right]])
                right -= 1
                left += 1
                while left < right and nums[left] == nums[left - 1]:
                    left += 1
                while right > left and nums[right] == nums[right + 1]:
                    right -= 1
                                
            elif temp_sum < target: 
                left +=1 
            else: 
                right -= 1
                                        
        return res
```

[**Combination Sum II**](https://leetcode.com/problems/combination-sum-ii/)
I don't post combination sum here since it's basically this problem a little bit easier. 
Combination questions can be solved with `dfs` most of the time. if you want to fully understand this concept and [backtracking](https://www.***.org/backtracking-introduction/), try to finish [this](https://leetcode.com/problems/combination-sum/discuss/429538/General-Backtracking-questions-solutions-in-Python-for-reference-%3A) post and do all the examples. 

Read my older post first [here](https://leetcode.com/problems/combinations/discuss/729397/python3-solution-with-detailed-explanation). This should give you a better idea of what's going on. The solution here also follow the exact same format except for some minor changes. I first made a minor change in the `dfs` function where it doesn't need the `index` parameter anymore. This is taken care of by `candidates[i+1:]` in line `#3`. Note that we had `candidates` here in the previous post. 

```
class Solution(object):
    def combinationSum2(self, candidates, target):
        """
        :type candidates: List[int]
        :type target: int
        :rtype: List[List[int]]
        """
        res = []
        candidates.sort()
        self.dfs(candidates, target, [], res)
        return res
    
    
    def dfs(self, candidates, target, path, res):
        if target < 0:
            return
        
        if target == 0:
            res.append(path)
            return res
        
        for i in range(len(candidates)):
            if i > 0 and candidates[i] == candidates[i-1]: #1
                continue #2
            self.dfs(candidates[i+1:], target - candidates[i], path+[candidates[i]], res) #3
```


The only differences are lines `#1, 2, 3`. The difference in problem statement in this one and `combinations` problem of my previous post is >>>candidates must be used once<<< and lines `#1` and `2` are here to take care of this.  Line `#1` has two components where first `i > 0` and second `candidates[i] == candidates[i-1]`. The second component `candidates[i] == candidates[i-1]` is to take care of duplicates in the `candidates` variable as was instructed in the problem statement. Basically, if the next number in `candidates` is the same as the previous one, it means that it has already been taken care of, so `continue`. The first component takes care of cases like an input  `candidates = [1]` with `target = 1` (try to remove this component and submit your solution. You'll see what I mean). The rest is similar to the previous [post](https://leetcode.com/problems/combinations/discuss/729397/python3-solution-with-detailed-explanation)



================================================================
Final note: Please let me know if you found any typo/error/ect. I'll try to fix them.