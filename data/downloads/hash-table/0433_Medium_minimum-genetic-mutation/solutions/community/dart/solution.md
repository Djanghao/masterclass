# Most intuitive Solution

**Author:** moessam00
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-genetic-mutation/solutions/5138103/](https://leetcode.com/problems/minimum-genetic-mutation/solutions/5138103/)

---


# Code
```
import 'dart:collection';

class Solution {
  List<String> genes = ["A", "C", "T", "G"];
  int minMutation(String startGene, String endGene, List<String> bank) {
    HashSet<String> bankSet = HashSet.from(bank);
    HashSet<String> seen = HashSet()..add(startGene);

    Queue<(String, int)> queue = Queue()..add((startGene, 0));

    while (queue.isNotEmpty) {
      var (node, steps) = queue.removeFirst();

      if (node == endGene) return steps;

      for (var i = 0; i < 8; i++) {
        for (var gene in genes) {
          String nextNode = node.replaceRange(i, i + 1, gene);
          if (bankSet.contains(nextNode) && !seen.contains(nextNode)) {
            seen.add(nextNode);
            queue.add((nextNode, steps + 1));
          }
        }
      }
    }
    return -1;
  }
}

```