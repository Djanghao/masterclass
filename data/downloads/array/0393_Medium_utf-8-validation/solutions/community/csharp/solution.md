# Short and easy solution

**Author:** anikit
**Votes:** 5
**Link:** [https://leetcode.com/problems/utf-8-validation/solutions/2569878/](https://leetcode.com/problems/utf-8-validation/solutions/2569878/)

---

Credits to @fight.for.dream!

```csharp
public bool ValidUtf8(int[] bytes)
{
	int n = 0;

	foreach (int b in bytes)
	{
		if (n == 0)
		{
			if (b >> 5 == 0b110) { n = 1; continue; }
			if (b >> 4 == 0b1110) { n = 2; continue; }
			if (b >> 3 == 0b11110) { n = 3; continue; }

			if (b >> 7 != 0) return false;
		}
		else
		{
			if (b >> 6 != 0b10) return false;
			n--;
		}
	}

	return n == 0;
}
```