# C# simple to understand that beats 95%

**Author:** pawel753
**Votes:** 8
**Link:** [https://leetcode.com/problems/valid-square/solutions/931750/](https://leetcode.com/problems/valid-square/solutions/931750/)

---

## General Idea
Four points construct a valid sqare *iff* the distance between **each two points** give exactly **two distinct values** (which are sqare **side** and **diagonal**) and none of these values equals `0`

## Approach #1
```
public class Solution
{
	public bool ValidSquare(int[] p1, int[] p2, int[] p3, int[] p4)
	{
		HashSet<int> distinct = new HashSet<int>();
		distinct.Add(Dist(p1, p2));
		distinct.Add(Dist(p1, p3));
		distinct.Add(Dist(p1, p4));
		distinct.Add(Dist(p2, p3));
		distinct.Add(Dist(p2, p4));
		distinct.Add(Dist(p3, p4));

		return distinct.Count == 2 && !distinct.Contains(0);
	}

	//not using Math.Pow to avoid double cast
	private int Dist(int[] p1, int[] p2) => (p1[0]-p2[0])*(p1[0]-p2[0]) + (p1[1]-p2[1])*(p1[1]-p2[1]);
}
```

## Approach #2 - without HashSet
`HashSet<int>` could be additional performance cost in case of such simple calculations, so we can replace it with a simple array as follows:
```
public class Solution
{
    public bool ValidSquare(int[] p1, int[] p2, int[] p3, int[] p4)
    {
        Check(Dist(p1, p2));
        Check(Dist(p1, p3));
        Check(Dist(p1, p4));
        Check(Dist(p2, p3));
        Check(Dist(p2, p4));
        Check(Dist(p3, p4));

        return last == 2 && arr[0] != 0 && arr[1] != 0;
    }

    private int Dist(int[] p1, int[] p2) => (p1[0] - p2[0]) * (p1[0] - p2[0]) + (p1[1] - p2[1]) * (p1[1] - p2[1]);

    int last=0;
    int[] arr = new int[6];
    private void Check(int val)
    {
        for(int i=0; i<last; i++)
            if(arr[i] == val)
                return;
        arr[last++] = val;
    }
}
```
Runtime: 88 ms, faster than 95.24% of C# online submissions for Valid Square.
Memory Usage: 27.2 MB, less than 33.33% of C# online submissions for Valid Square.