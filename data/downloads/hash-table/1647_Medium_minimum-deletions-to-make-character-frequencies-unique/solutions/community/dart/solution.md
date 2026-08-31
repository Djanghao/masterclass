# 🔥 Union Find 🔥 || Simple Fast and Easy || with Explanation 😈

**Author:** ayoubzulfiqar
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/solutions/4034210/](https://leetcode.com/problems/minimum-deletions-to-make-character-frequencies-unique/solutions/4034210/)

---

# \uD83D\uDD25 Union Find \uD83D\uDD25 || Simple Fast and Easy || with Explanation \uD83D\uDE08


### Intuition
The code aims to find the minimum number of deletions required to make all characters in the input string appear the same number of times. It utilizes the concept of Disjoint Set Union (DSU) to efficiently group characters with the same frequency and minimize deletions.

### Approach
1. Define a `DSU` (Disjoint Set Union) class that supports finding the parent of a set and merging two sets.
2. Initialize an array `a` of size 26 to store the frequency of each character in the input string `s`.
3. Find the maximum frequency (`maxi`) among all characters.
4. Create an instance of the `DSU` class with a size of `maxi`.
5. Initialize a variable `cnt` to keep track of the number of deletions needed.
6. Iterate through each character in the alphabet (a to z) and perform the following steps:
   - Find the nearest available free slot (represented by a parent in the DSU) for the current character's frequency.
   - If an available free slot is greater than 0, it means a free slot is available. Update the DSU to merge the current slot with the previous slot (corresponding to its frequency - 1).
   - Increment `cnt` by the difference between the current character's frequency and the available slot.
7. Return the final value of `cnt`, which represents the minimum number of deletions required to equalize the frequencies of all characters.

### Space Complexity
- The space complexity of this algorithm is O(26 + n), where 26 is the size of the `a` array to store character frequencies, and n is the length of the input string `s`.

### Time Complexity
- The time complexity is O(n), where n is the length of the input string `s`. This is because the code iterates through the string once to compute character frequencies and perform DSU operations, both of which take linear time in the length of the string.

Overall, this code uses the DSU data structure to efficiently find the minimum number of deletions required to equalize character frequencies, and it achieves this in linear time complexity.

## Code
```dart

class DSU {
  late List<int> par;

  DSU(int n) {
    par = List<int>.generate(n + 1, (i) => i);
  }

  int findPar(int x) => x == par[x] ? x : par[x] = findPar(par[x]);

  void merge(int u, int v) => par[v] = u;
}

class Solution {
  int minDeletions(String s) {
    // Using DSU
    // Think of this problem as a Job Sequencing Problem

    // First, store the frequency of all characters
    final List<int> a = List<int>.filled(26, 0);
    int n = s.length;
    for (int i = 0; i < n; i++) {
      a[s.codeUnitAt(i) - 'a'.codeUnitAt(0)]++;
    }

    // Find the maximum among all the frequencies
    int maxi = 0;
    for (int it in a) {
      maxi = maxi > it ? maxi : it;
    }

    // Make DSU of size - maximum
    final DSU d = DSU(maxi);
    int cnt = 0; // cnt stores the answer

    for (int i = 0; i < 26; i++) {
      // Find the nearest available free slot for
      // this frequency (corresponding to its frequency)
      final int available = d.findPar(a[i]);

      // If an available free slot is greater
      // than 0, then a free slot is available
      if (available > 0) {
        // This slot is taken by this job 'i'
        // so we need to update the greatest(nearest)
        // free slot. Note that, in merge, we
        // make the first parameter as the parent of
        // the second parameter. So future queries
        // for availableSlot will return the maximum(nearest)
        // available slot in the set of
        // "availableSlot - 1"
        d.merge(d.findPar(available - 1), available);
      }
      // We assign the nearest(greatest) frequency now
      // (frequency-assign slot) will be the number of
      // removed characters(answer)
      cnt += (a[i] - available);
    }
    return cnt;
  }
}
```

## [GitHub](https://github.com/ayoubzulfiqar/leetcode)