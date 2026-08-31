# [Java] Storing spans in a TreeMap

**Author:** Ootori
**Votes:** 31
**Link:** [https://leetcode.com/problems/longest-substring-of-one-repeating-character/solutions/1865794/](https://leetcode.com/problems/longest-substring-of-one-repeating-character/solutions/1865794/)

---

High level idea:
1. Store the span of each letter in a TreeMap
2. Also use a second TreeMap to record the frequency of each span length
2. On each query, update both TreeMaps
```
    public int[] longestRepeating(String s, String queryCharacters, int[] queryIndices) {
        char[] arr = s.toCharArray();
        int m = arr.length, n = queryIndices.length;
        int[] output = new int[n];
        TreeMap<Integer, Integer> lengths = new TreeMap<>(), spans = new TreeMap<>();
        // Stores spans of each letter in the TreeMap
        for (int i = 0, j = 1; j <= m; j++) if (j == m || arr[i] != arr[j]) {
            lengths.put(j - i, lengths.getOrDefault(j - i, 0) + 1);
            spans.put(i, j - 1);
            i = j;
        }
        // Update spans on each query and find the max length
        for (int i = 0; i < queryIndices.length; i++) {
            int j = queryIndices[i];
            if (arr[j] != queryCharacters.charAt(i)) {
                // Remove the spans that has the character to be updated
                int l = spans.floorKey(j), r = spans.remove(l), length = r - l + 1;
                if (lengths.get(length) == 1) lengths.remove(length);
                else lengths.put(length, lengths.get(length) - 1);
                // if the character is going to be different from its neighbors, break the span
                if (l < j) {
                    spans.put(l, j - 1);
                    lengths.put(j - l, lengths.getOrDefault(j - l, 0) + 1);
                }
                if (r > j) {
                    spans.put(j + 1, r);
                    lengths.put(r - j, lengths.getOrDefault(r - j, 0) + 1);
                }
                arr[j] = queryCharacters.charAt(i);
                l = j;
                r = j;
                // if the character is going to be same as its neighbors, merge the spans
                if (j > 0 && arr[j] == arr[j - 1]) {
                    l = spans.floorKey(j);
                    length = spans.remove(l) - l + 1;
                    if (lengths.get(length) == 1) lengths.remove(length);
                    else lengths.put(length, lengths.get(length) - 1);
                }
                if (j < m - 1 && arr[j] == arr[j + 1]) {
                    int key = spans.ceilingKey(j);
                    r = spans.remove(key);
                    length = r - key + 1;
                    if (lengths.get(length) == 1) lengths.remove(length);
                    else lengths.put(length, lengths.get(length) - 1);
                }
                spans.put(l, r);
                lengths.put(r - l + 1, lengths.getOrDefault(r - l + 1, 0) + 1);
            }
            output[i] = lengths.lastKey();
        }
        return output;
    }
```
Time complexity: O(nlogn)
Space complexity: O(n)