# Three easy solutions: LINQ, no LINQ, and a system library

**Author:** anikit
**Votes:** 28
**Link:** [https://leetcode.com/problems/number-of-1-bits/solutions/2075970/](https://leetcode.com/problems/number-of-1-bits/solutions/2075970/)

---

LINQ:
```csharp
public int HammingWeight(uint n)
	=> Convert.ToString(n, 2).Count(x => x == '1');
```

No LINQ:
```csharp
public int HammingWeight(uint n)
{
	uint c = 0;

	while(n > 0)
	{
		c += n & 1; // or: c += n % 2;
		n >>= 1;    // or: n /= 2;
	}

	return (int) c;
}
```

System library (the proper real-world solution of this problem):
```csharp
public int HammingWeight(uint n)
	=> System.Numerics.BitOperations.PopCount(n);
```