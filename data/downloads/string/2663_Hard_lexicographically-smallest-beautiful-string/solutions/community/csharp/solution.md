# C# || Solution

**Author:** vdmhunter
**Votes:** 0
**Link:** [https://leetcode.com/problems/lexicographically-smallest-beautiful-string/solutions/3468415/](https://leetcode.com/problems/lexicographically-smallest-beautiful-string/solutions/3468415/)

---

# Code
```
public class Solution
{
    public string SmallestBeautifulString(string s, int k)
    {
        var arr = s.ToCharArray();

        for (var i = s.Length - 1; i >= 0; i--)
        {
            arr[i]++;

            while (!Valid(arr, i))
                arr[i]++;

            if (arr[i] >= 'a' + k)
                continue;

            for (i += 1; i < s.Length; i++)
            {
                arr[i] = 'a';
                var count = 0;

                while (!Valid(arr, i) && count < 3)
                {
                    arr[i]++;
                    count++;
                }
            }

            return new string(arr);
        }

        return "";
    }

    private static bool Valid(char[] arr, int i)
    {
        return i < 1 || arr[i] != arr[i - 1] && (i < 2 || arr[i] != arr[i - 2]);
    }
}

```