# Using SortedSet; Beats 75%

**Author:** pinkysk21
**Votes:** 1
**Link:** [https://leetcode.com/problems/range-module/solutions/4739145/](https://leetcode.com/problems/range-module/solutions/4739145/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
Maintain a SortedSet of inclusive ranges [start,end] with custom Comparer. The comparer will return a match if any part of the range overlaps.

When inserting a new range, get all ranges with any overlap and remove them. Then create a single new range that combines all of them.

When Removing range, get all ranges with any overlap and remove them. Then create new ranges[max 2] that capture the range not removed.


# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class RangeModule {
    SortedSet<Range> range;

    public RangeModule() {
        range = new(new RangeComparer());
    }
    
    public void AddRange(int left, int right) {
        var s = left;
        var e = right-1;
        var possibleOverlap = range.GetViewBetween(new Range(s-1,s), new Range(e,e+1)).ToList();
        
        if(possibleOverlap.Count == 0){
            range.Add(new Range(s,e));
            return;
        }

        var newRange = new Range(Math.Min(s,possibleOverlap.First().s), Math.Max(e,possibleOverlap.Last().e));
        foreach(var o in possibleOverlap)
        {
            range.Remove(o);
        }
        range.Add(newRange);
    }
    
    public bool QueryRange(int left, int right) {
        var s = left;
        var e = right-1;
        var r = new Range(e,s);
        var possibleOverlap = range.GetViewBetween(new Range(s,s), new Range(e,e));

        return possibleOverlap.Count == 1 && possibleOverlap.First().s <= s && possibleOverlap.First().e >= e;
    }
    
    public void RemoveRange(int left, int right) {
        var s = left;
        var e = right-1;
        
        var possibleOverlap = range.GetViewBetween(new Range(s,s), new Range(e,e)).ToList();
        if(possibleOverlap.Count == 0){
            return;
        }
        List<Range> newRanges = new();
        if(possibleOverlap.First().s < s)
        {
            newRanges.Add(new Range(possibleOverlap.First().s, s-1));
        }
        if(possibleOverlap.Last().e > e)
        {
            newRanges.Add(new Range(e+1, possibleOverlap.Last().e));
        }
        foreach(var o in possibleOverlap)
        {
            range.Remove(o);
        }
        foreach(var r in newRanges)
        {
            range.Add(r);
        }
    }
}

public class Range{
    public int s;
    public int e;
    public Range(int left, int right)
    {
        s = left;
        e = right;
    }
}

public class RangeComparer: IComparer<Range>{
    public int Compare(Range x, Range y)
    {
        if(x.s < y.s && x.e < y.s)
            return -1;
        else if(x.s > y.s && x.s > y.e)
            return 1;
        return 0;
    }
}

```