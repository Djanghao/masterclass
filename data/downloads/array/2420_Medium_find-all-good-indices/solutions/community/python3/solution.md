# [Python3] Two passes O(n) with line by line comments.

**Author:** MeidaChen
**Votes:** 40
**Link:** [https://leetcode.com/problems/find-all-good-indices/solutions/2620637/](https://leetcode.com/problems/find-all-good-indices/solutions/2620637/)

---

To solve the problem, we will need to traverse the array left to right and then right to left. From left to right, at each index i, we will compute how many elements that are just before the index i are in non-increasing order. To do this, we will use a non-increasing stack to store the elements before i, at each step we just check if the length of the stack is greater or equal to k and if it is, this index i is True for the forward pass. Doing the simillar thing from right to left, this time, we will check if the length of the stack is greater or equal to k and also if the forward[i] is Ture, if it is, add this index to the result. If you are doing left to right and then right to left like I did, you will need to return result in the reversed order.

```
class Solution:
    def goodIndices(self, nums: List[int], k: int) -> List[int]:
        ### forward pass.
        forward = [False]*len(nums) ### For the forward pass, store if index i is good or not.
        stack = []
        for i in range(len(nums)):
        	### if the leangth of stack is greater or equal to k, it means this index is good.
            if len(stack)>=k:
                forward[i] = True
            ### if the stack is empty, just add the current number to it.
            if not stack:
                stack.append(nums[i])
            ### check to see if the current number is smaller or equal to the last number in stack, if it is not, put this number into the stack.
            else:
                if nums[i]<=stack[-1]:
                    stack.append(nums[i])
                else:
                    stack = [nums[i]]
        ### backward pass
        res = []
        stack = []
        for i in reversed(range(len(nums))):
        	### Check to see if the length of stack is greater or equal to k and also check if the forward pass at this index is Ture.
            if len(stack)>=k and forward[i]:
                res.append(i)
            if not stack:
                stack.append(nums[i])
            else:
                if nums[i]<=stack[-1]:
                    stack.append(nums[i])
                else:
                    stack = [nums[i]]
        return res[::-1]
```

**Upvote** if you like this post.

**Connect with me on [LinkedIn](https://www.linkedin.com/in/meida-chen-938a265b/)** if you'd like to discuss other related topics

\uD83C\uDF1F If you are interested in **Machine Learning** || **Deep Learning** || **Computer Vision** || **Computer Graphics** related projects and topics, check out my **[YouTube Channel](https://www.youtube.com/@meidachen8489)**! Subscribe for regular updates and be part of our growing community.