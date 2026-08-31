# Beat 100% in Runtime || 100% in Memory || using DART.🟠⚪🟢

**Author:** somyanaiwal023
**Votes:** 0
**Link:** [https://leetcode.com/problems/maximum-frequency-stack/solutions/5315300/](https://leetcode.com/problems/maximum-frequency-stack/solutions/5315300/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class FreqStack {
 final Map<int, int> freq = {}; // Frequency map
  final Map<int, List<int>> group = {}; // Group stack
  int maxFreq = 0; // Max frequency
  FreqStack();
  
  void push(int x) {
     freq[x] = (freq[x] ?? 0) + 1; // Increment frequency of x
    int f = freq[x]!;
    if (f > maxFreq) {
      maxFreq = f; // Update max frequency
    }
    if (!group.containsKey(f)) {
      group[f] = []; // Initialize the list if it doesn't exist
    }
    group[f]!.add(x); // Add x to the list of its frequency
  }
  
  int pop() {
     int x = group[maxFreq]!.removeLast(); // Remove the element from the highest frequency list
    freq[x] = freq[x]! - 1; // Decrement the frequency of x
    if (group[maxFreq]!.isEmpty) {
      maxFreq--; // Decrease max frequency if no elements left at current max frequency
    }
    return x;
  }
}

/**
 * Your FreqStack object will be instantiated and called as such:
 * FreqStack obj = FreqStack();
 * obj.push(val);
 * int param2 = obj.pop();
 */
```