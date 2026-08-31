# Concise in-place solution with no backtracking

**Author:** anikit
**Votes:** 10
**Link:** [https://leetcode.com/problems/next-permutation/solutions/1910550/](https://leetcode.com/problems/next-permutation/solutions/1910550/)

---

```csharp
public void NextPermutation(int[] arr)
{
    int i = arr.Length - 2;
    while (i >= 0 && arr[i] >= arr[i + 1]) i--;

    if (i >= 0)
    {
        int j = arr.Length - 1;
        while (arr[i] >= arr[j]) j--;
        (arr[i], arr[j]) = (arr[j], arr[i]);
    }
    
	arr.AsSpan(i + 1, arr.Length - i - 1).Reverse();
}
```