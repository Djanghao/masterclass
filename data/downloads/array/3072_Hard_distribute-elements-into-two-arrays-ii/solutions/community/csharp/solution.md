# [C#] Fenwick tree | Explained | Beats 100% of users🔥

**Author:** rising4ce
**Votes:** 2
**Link:** [https://leetcode.com/problems/distribute-elements-into-two-arrays-ii/solutions/4849833/](https://leetcode.com/problems/distribute-elements-into-two-arrays-ii/solutions/4849833/)

---

![image.png](./images/0.png)

# Intuition
The Fenwick tree allows us to calculate and update a sum of consecutive elements of a collection in $$log(n)$$ time, which is perfect for this problem.

# Approach
In our case, the elements of arrays for which Fenwick trees are built are the number of occurrences of elements in arrays $$arr1$$ and $$arr2$$ respectively. 
Each unique element of the input array, sorted in non-decreasing order, is uniquely mapped to an index in the array for which the Fenwick trees are built.
To find the number of array elements that are strictly greater than some value $$x$$, we need to compute the index $$i$$ for the value $$x$$ and use Fenwick tree to compute the difference between the count of all elements and the sum of all Fenwick's array elements from zero up to and including the index $$i$$.

# Complexity
- Time complexity:
$$O(n*log(n))$$

- Space complexity:
$$O(n)$$

# Code
```
public class Solution
{
    public int[] ResultArray(int[] nums)
    {
        var arr1 = new List<int>(nums.Length)
        {
            nums[0]
        };

        var arr2 = new List<int>(nums.Length)
        {
            nums[1]
        };

        var tree1 = new GreaterCountBinaryIndexedTree(nums);
        var tree2 = new GreaterCountBinaryIndexedTree(tree1);

        tree1.Add(nums[0]);
        tree2.Add(nums[1]);

        for (var i = 2; i < nums.Length; i++)
        {
            var gc1 = tree1.GetGreaterCount(nums[i]);
            var gc2 = tree2.GetGreaterCount(nums[i]);

            if (gc1 > gc2)
            {
                arr1.Add(nums[i]);
                tree1.Add(nums[i]);
            }
            else if (gc1 < gc2)
            {
                arr2.Add(nums[i]);
                tree2.Add(nums[i]);
            }
            else
            {
                if (arr1.Count > arr2.Count)
                {
                    arr2.Add(nums[i]);
                    tree2.Add(nums[i]);
                }
                else
                {
                    arr1.Add(nums[i]);
                    tree1.Add(nums[i]);
                }
            }
        }

        return arr1.Concat(arr2).ToArray();
    }
}

public class GreaterCountBinaryIndexedTree
{
    internal readonly Dictionary<int, int> IndexByValue;
    internal readonly int IndexOfLastElement;
    internal readonly int[] Tree;
    internal int TotalCount;

    public GreaterCountBinaryIndexedTree(IEnumerable<int> nums)
    {
        IndexByValue = nums
            .Distinct()
            .OrderBy(n => n)
            .Select((v, i) => new KeyValuePair<int, int>(v, i))
            .ToDictionary();

        Tree = new int[IndexByValue.Count];
        IndexOfLastElement = IndexByValue.Count - 1;
    }

    public GreaterCountBinaryIndexedTree(GreaterCountBinaryIndexedTree other)
    {
        IndexByValue = other.IndexByValue;
        IndexOfLastElement = other.IndexOfLastElement;
        Tree = new int[other.Tree.Length];
    }

    public void Add(int value)
    {
        TotalCount++;
        var index = IndexByValue[value];

        while (index < Tree.Length)
        {
            Tree[index]++;
            index |= index + 1;
        }
    }

    public int GetGreaterCount(int value)
    {
        var index = IndexByValue[value];

        if (index == IndexOfLastElement)
        {
            return 0;
        }

        return TotalCount - GetLessOrEqualCount(index);
    }

    private int GetLessOrEqualCount(int index)
    {
        var result = 0;

        while (index >= 0)
        {
            result += Tree[index];

            if (index is 0)
            {
                break;
            }

            index &= index + 1;
            index--;
        }

        return result;
    }
}
```