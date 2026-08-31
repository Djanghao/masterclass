# Java | Simple solution | Frequency map

**Author:** judgementdey
**Votes:** 25
**Link:** [https://leetcode.com/problems/frequency-tracker/solutions/3494843/](https://leetcode.com/problems/frequency-tracker/solutions/3494843/)

---

# Complexity
- Time complexity: $$O(1)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: $$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
class FrequencyTracker {
  int[] map, freq;

  public FrequencyTracker() {
    map = new int[100001];
    freq = new int[100001];
  }

  public void add(int number) {
    freq[map[number]++]--;
    freq[map[number]]++;
  }

  public void deleteOne(int number) {
    if (map[number] > 0) {
      freq[map[number]--]--;
      freq[map[number]]++;
    }
  }

  public boolean hasFrequency(int frequency) {
    return freq[frequency] > 0;
  }
}
```
If you like my solution, please upvote it!