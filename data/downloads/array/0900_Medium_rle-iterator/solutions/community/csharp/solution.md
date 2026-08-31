# [C#] Binary search / counting sort solution

**Author:** Rashair
**Votes:** 0
**Link:** [https://leetcode.com/problems/rle-iterator/solutions/4951256/](https://leetcode.com/problems/rle-iterator/solutions/4951256/)

---

The problem statement mimicks counting sort problem a lot.
This may lead you to compute the target positions for each 'final'
element and then on each next, do a binary search over the target positions.

# Code
```
public class RLEIterator {
  private readonly List<int> _nums;
  private readonly List<long> _counts;

  private int _currentPos;
  private long _currentTotal;

  public RLEIterator(int[] encodings) {
    _nums = new List<int>(encodings.Length / 2);
    _counts = new List<long>(encodings.Length / 2);
    _counts.Add(encodings[0]);
    _nums.Add(encodings[1]);

    int countsIter = 1;
    for (int i = 2; i < encodings.Length; i+= 2) {
      if (encodings[i] > 0) {
        _counts.Add(_counts[countsIter - 1] + encodings[i]);
        _nums.Add(encodings[i + 1]);
        ++countsIter;
      }
    }
  }
    
  public int Next(int n) {
    _currentTotal += n;
    if (_currentTotal > _counts[_counts.Count - 1]) {
      return -1;
    }

    if (_counts[_currentPos] >= _currentTotal) {
      return _nums[_currentPos];
    }

    var rangeEnd = _counts.Count - _currentPos;
    var targetPos = _counts.BinarySearch(_currentPos, rangeEnd, 
        _currentTotal, null);
    if (targetPos < 0) {
      targetPos = ~targetPos;
    }

    _currentPos = targetPos;
    if (_currentPos == _counts.Count) {
      return -1;
    }

    return _nums[_currentPos];
  }
}

```