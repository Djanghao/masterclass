# Concise and Easy: Check Palindromity with SequenceEqual

**Author:** anikit
**Votes:** 12
**Link:** [https://leetcode.com/problems/palindrome-linked-list/solutions/2470194/](https://leetcode.com/problems/palindrome-linked-list/solutions/2470194/)

---

```csharp
public bool IsPalindrome(ListNode head)
{
	StringBuilder sb = new();

	while (head is not null)
	{
		sb.Append(head.val);
		head = head.next;
	}

	string s = sb.ToString();

	return s.Reverse().SequenceEqual(s);
}
```

Steps:
1. Put all elements into a string
2. Compare the string with its reversal