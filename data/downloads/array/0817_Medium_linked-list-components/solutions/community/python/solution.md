# 89% TC and 77% SC easy python solution

**Author:** nitanshritulon
**Votes:** 4
**Link:** [https://leetcode.com/problems/linked-list-components/solutions/2542916/](https://leetcode.com/problems/linked-list-components/solutions/2542916/)

---

```
def numComponents(self, head: Optional[ListNode], nums: List[int]) -> int:
	curr = head
	ans = 0
	s = set(nums)
	while(curr):
		if(curr.val in s and not(curr.next and curr.next.val in s)):
			ans += 1
		curr = curr.next
	return ans
```