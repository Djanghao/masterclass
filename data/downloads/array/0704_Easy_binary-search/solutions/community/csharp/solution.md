# Two solutions: Own binary search vs. the built-in one

**Author:** anikit
**Votes:** 22
**Link:** [https://leetcode.com/problems/binary-search/solutions/1884717/](https://leetcode.com/problems/binary-search/solutions/1884717/)

---

The Array class has the binary search built in. The only catch is that the built-in method can return any negative number when the element is not found (not just `-1`). So we need to guard against it:
```csharp
public int Search(int[] nums, int target)
{
    int i = Array.BinarySearch(nums, target);
    return (i < 0) ? -1 : i; // or use Math.Clamp
}
```
Well, this is just too easy, right? For learning purposes, we want to implement a binary search ourselves:
```csharp
public int Search(int[] nums, int target)
{
    int lo = 0;
    int hi = nums.Length - 1;
    
    while (lo <= hi)
    {
        int mid = lo + (hi - lo) / 2;
            
        if (nums[mid] == target)
            return mid;
            
        if (nums[mid] > target)
            hi = mid - 1;
        else
            lo = mid + 1;
    }
        
    return -1;
}
```

Pay attention to how you calculate the arithmetic mean. There are at least four ways to do that, one of which is wrong:
```csharp
(lo + hi) / 2;                   // WRONG because lo + hi might result in an int overflow
lo + (hi - lo) / 2;              // RIGHT, also best performance in .NET
lo & hi + (lo ^ hi) / 2;         // CONFUSING
lo / 2 + hi / 2 + lo & hi & 1;   // FANCY
```