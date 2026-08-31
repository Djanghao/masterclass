# Dart: SuperFast: Double binary search, O(nLogn)

**Author:** alexqwesa
**Votes:** 0
**Link:** [https://leetcode.com/problems/number-of-longest-increasing-subsequence/solutions/3801723/](https://leetcode.com/problems/number-of-longest-increasing-subsequence/solutions/3801723/)

---

# Intuition
 - Count longest sequencies is easy if we already have a list of all sequences.
 - We don't need to store every sequence - just its length and how often sequences of this length appear(frequencie).
- Since we only interested in longest sequences - we also don't need to store full statistics for short subsequences (just store longest valid sequence for each element in input array).
 - The sequence can be extended based on the last element of the sequence - i.e. we don't need to fully calculate each new sequence:
   - store the last element of sequence(`endsWith`) along with its length and frequency,
   - search record with biggest `endsWith` (that is less than our current `number`),
   - use it to calculate the frequency of a new record.


# Approach
<!-- Describe your approach to solving the problem. -->
The main logic is to maintain a list of lists called `sizeGroups`(type `List<List<SequenceFreq>>`), where each list at index `i` holds all subsequences of `length i+1`, sorted by their ending element.

So, for each element `num` of input array (`nums`) we create record (`SequenceFreq`) and store it in the sublist of `sizeGroups`,here is instructions step by step:
- use binary search to find there to insert new `SequenceFreq` record (in `sizeGroups`) - we determinate we length of the biggest subsequence that end at element `num`,
- use binary search to find `numberOfPrevSequences`,
- calculate new frequency for new `SequenceFreq`:
  - for new sizeGroup in `sizeGroups`  - it is just `numberOfPrevSequences` (i.e. it is new longest sequence),
  - for the record in existing sizeGroup - `numberOfPrevSequences + current frequence`.



# Complexity
- Time complexity: $$O(nLogn)$$
  - it call binary search twice for each N
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(n)$$
  - it create N `SequenceFreq` entries
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class SequenceFreq {
  final int endsWith;
  final int frequency;

  const SequenceFreq(this.endsWith, this.frequency);

  @override
  String toString() {
    return "$endsWith >>> $frequency";
  }
}

class Solution {
  int findNumberOfLIS(List<int> nums) {
    if (nums.isEmpty) return 0;

    final sizeGroups = <List<SequenceFreq>>[];

    for (final num in nums) {
        // search insert position in sizeGroups
        final length = bisectRight(
          sizeGroups,
          compare: (x, mid) => x[mid].last.endsWith >= num,
        );
        // search previous subsequences and insert new record into sizeGroups
        final prevPaths = numberOfPrevSequences(sizeGroups, length, num);
        if (sizeGroups.length <= length) {
          // found sequence of a length +1, new entry for sizeGroups
          sizeGroups.add([SequenceFreq(num, prevPaths)]);
        } else {
          // sequence of existing length
          final curPaths = sizeGroups[length].last.frequency;
          sizeGroups[length].add(SequenceFreq(num, prevPaths + curPaths));
        }
    }

    return sizeGroups.last.last.frequency;
  }
}

/// How many subsequences in previous group can be part
///  of a new sequence (search by endsWith number)
int numberOfPrevSequences(
    List<List<SequenceFreq>> sizeGroups, int length, int num) {
  final prev = length - 1; // previous sizeGroup
  if (prev < 0) return 1; // first number in sequence

  // index of smaller then num number in previous sizeGroup
  final indexOfSmallerNumber = bisectRight(
    sizeGroups[prev],
    compare: (x, mid) => x[mid].endsWith < num,
  );

  if (indexOfSmallerNumber == 0) {
    return sizeGroups[prev].last.frequency;
  } else {
    return sizeGroups[prev].last.frequency -
        sizeGroups[prev][indexOfSmallerNumber - 1].frequency;
  }
}

/// Stub compare
bool compare(dynamic x, int mid, {target = 0}) => x[mid] < 0;

/// Search rightmost insert position
int bisectRight(List<dynamic> arr,
    {int target = 0, Function compare = compare, start = 0, end = -1}) {
  int l = start;
  int r = (end >= 0) ? end : arr.length;
  while (l < r) {
    int mid = l + ((r - l) ~/ 2);
    if (compare(arr, mid)) {
      r = mid;
    } else {
      l = mid + 1;
    }
  }
  return r;
}


```