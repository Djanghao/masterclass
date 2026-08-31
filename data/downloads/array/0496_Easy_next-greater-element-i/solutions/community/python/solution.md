# Python 3 -> 94.64% faster. Used stack and dictionary. Explanation added

**Author:** mybuddy29
**Votes:** 301
**Link:** [https://leetcode.com/problems/next-greater-element-i/solutions/824654/](https://leetcode.com/problems/next-greater-element-i/solutions/824654/)

---

**Suggestions to make it better are always welcomed.**

Basically the problem says, if in nums1 we are working on 4, then in nums2 first find where is 4 and from that index find the next number greater than 4 in nums2. We can see that the solution is always coming from the reverse side of the list nums2. This should tell us to use stack.

Steps:
1. We traverse nums2 and start storing elements on the top of stack.
2. If current number is greater than the top of the stack, then we found a pair. Keep popping from stack till the top of stack is smaller than current number.
3. After matching pairs are found, push current number on top of stack.
4. Eventually when there are no more elements in nums2 to traverse, but there are elements in stack, we can justify that next bigger element wasn't found for them. Hence we'll put -1 for the remaining elements in stack.

```
def nextGreaterElement(self, nums1: List[int], nums2: List[int]) -> List[int]:
	if not nums2:
		return None

	mapping = {}
	result = []
	stack = []
	stack.append(nums2[0])

	for i in range(1, len(nums2)):
		while stack and nums2[i] > stack[-1]:       # if stack is not empty, then compare it's last element with nums2[i]
			mapping[stack[-1]] = nums2[i]           # if the new element is greater than stack's top element, then add this to dictionary 
			stack.pop()                             # since we found a pair for the top element, remove it.
		stack.append(nums2[i])                      # add the element nums2[i] to the stack because we need to find a number greater than this

	for element in stack:                           # if there are elements in the stack for which we didn't find a greater number, map them to -1
		mapping[element] = -1

	for i in range(len(nums1)):
		result.append(mapping[nums1[i]])
	return result
```

**I hope that you've found this useful.
In that case, please upvote. It only motivates me to write more such posts\uD83D\uDE03**