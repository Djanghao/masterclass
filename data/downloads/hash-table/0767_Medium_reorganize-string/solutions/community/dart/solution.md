# Priority Queue approach with comments

**Author:** benottoman
**Votes:** 0
**Link:** [https://leetcode.com/problems/reorganize-string/solutions/5582853/](https://leetcode.com/problems/reorganize-string/solutions/5582853/)

---

# Complexity
- Time complexity: O(n log n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
import 'dart:collection';
import 'package:collection/collection.dart';

typedef CharCountRecord = (String char, int count);

class Solution {
  String reorganizeString(String s) {
    // Count the frequency of each character
    final charRecMap = <String, CharCountRecord>{};
    for (int i = 0; i < s.length; i++) {
      charRecMap.update(s[i], 
        (record) => (record.$1, record.$2 + 1),        
        ifAbsent: () => (s[i], 1)
      );
    }

    CharCountRecord? prevRecord;
    final characters = StringBuffer();
    final queue = HeapPriorityQueue<CharCountRecord>(compareByCount)
      ..addAll(charRecMap.values);

    while (queue.isNotEmpty || prevRecord != null) {      
      // [prevRecord] holds the character that was just written to the [characters] buffer.
      // This means if we have a non-null [prevRecord], but the [queue] is empty we would
      // have to write the [prevRecord] character again to use all the characters as it's 
      // the last one we have. If we did that though, we would have two of the same 
      // characters in a row.
      if (prevRecord != null && queue.isEmpty) return '';

      var (char, count) = queue.removeFirst();
      characters.write(char);
      count--;

      // [prevRecord] can also be thought of as a record being on hold.
      //
      // For example:  s = "aabb"     initial [queue] = [(a, 2), (b, 2)]
      //
      // After Iteration    [characters]     [queue]         [prevRecord]      
      //        1               "a"          [(b, 1)]           (a, 1)             
      //        2               "ab"         [(a, 1)]           (b, 1)             
      //        3               "aba"        [(b, 1)]            null 
      //        4               "abab"       []                  null     
      //
      // Essentially here we put a record (char, count) into the queue again
      // after we've processed a different character above.
      if (prevRecord != null) {
        queue.add(prevRecord);
        prevRecord = null;
      } 

      // After writing a particular character, for example "a", to [characters]
      // we then set [prevRecord] to ("a", count of a) if we need to use it again.
      if (count > 0) prevRecord = (char, count);
    }

    return characters.toString();
  }

  int compareByCount(CharCountRecord a, CharCountRecord b) {
    final (_, countA) = a;
    final (__, countB) = b;
    return countB.compareTo(countA);
  }
}
```