# Intentionally confusing and short: Tuples and one-letter variable names

**Author:** anikit
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-erasure-value/solutions/2142008/](https://leetcode.com/problems/maximum-erasure-value/solutions/2142008/)

---

```csharp
public int MaximumUniqueSubarray(int[] a)
{
	var (h, m, s, f) = (new HashSet<int>(), 0, 0, 0);
	foreach(int n in a)
	{
		while(!h.Add(n)) (_, s, f) = (h.Remove(a[f]), s - a[f], f + 1);
		(s, m) = (s + n, Math.Max(m, s + n));
	}
	return m;
}
```

Legend:
`a` - our input **a**rray
`h` - **h**ashset, used to determine uniqueness of a number in the sliding subarray
`m` - the current **m**aximum
`s` - **s**um of elements in the sliding subarray
`f` - index of the **f**irst element in the sliding subarray
`n` - next **n**umber to add to the sliding subarray

Can you make it even shorter and less readable?