# Comparing entire rows using SequenceEqual and Ranges

**Author:** anikit
**Votes:** 5
**Link:** [https://leetcode.com/problems/toeplitz-matrix/solutions/2762906/](https://leetcode.com/problems/toeplitz-matrix/solutions/2762906/)

---

We compare each row except the last element (hence `[..^1])` with the next row except the first element (hence `[1..]`):
```csharp
public bool IsToeplitzMatrix(int[][] matrix)
{
	for (int i = 0; i < matrix.Length - 1; i++)
	{
		bool equal = matrix[i][..^1].SequenceEqual(matrix[i + 1][1..]);
		if (!equal) return false;
	}

	return true;
}
```
`Enumerable`'s SequenceEqual can also be used this way:
```csharp
public bool IsToeplitzMatrix(int[][] matrix)
{
	for (int i = 0; i < matrix.Length - 1; i++)
	{
		bool equal = Enumerable.SequenceEqual
		(
			matrix[i][..^1],
			matrix[i + 1][1..]
		);
		if (!equal) return false;
	}

	return true;
}
```

Giving up some readability, you can put the check inside the if condition:
```csharp
public bool IsToeplitzMatrix(int[][] matrix)
{
	for (int i = 0; i < matrix.Length - 1; i++)
	{
		if (!matrix[i][..^1].SequenceEqual(matrix[i + 1][1..])) return false;
	}

	return true;
}
```