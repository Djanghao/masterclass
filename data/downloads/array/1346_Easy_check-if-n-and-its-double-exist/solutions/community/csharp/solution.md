# HashSet solution for C# (explanation + complexity)

**Author:** deleted_user
**Votes:** 5
**Link:** [https://leetcode.com/problems/check-if-n-and-its-double-exist/solutions/3395056/](https://leetcode.com/problems/check-if-n-and-its-double-exist/solutions/3395056/)

---

# Approach
HashSet provides O(1) lookup, so it ideal for this question. 
For each number in the array we check, if we have already seen  it's half or it's double.

NOTE: When checking half, we need to ensure that the current number is  even, else we will get wrong answer like in the case of 3 and 7 being in the input.
Here for 7, 7/2 would give 3 (not 3.5) which is present in the HashSet but not what we need.

# Complexity
- Time complexity: O(n)
- Space complexity: O(n)

# Code
```
public bool CheckIfExistHash(int[] arr)
{
    var hash = new HashSet<int>(arr.Length);

    foreach (var item in arr)
    {
        if (hash.Contains(item * 2) || (item % 2 == 0 && hash.Contains(item / 2)))
        {
            return true;
        }

        hash.Add(item);
    }

    return false;
}
```