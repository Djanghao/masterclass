# JAVA COMMENTED SOLUTION INTUTIVE PRIORITY QUEUE BASED SOLUTION

**Author:** Sai_Govind_2024
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-size-of-a-set-after-removals/solutions/4520693/](https://leetcode.com/problems/maximum-size-of-a-set-after-removals/solutions/4520693/)

---

```


class Solution {
    public int maximumSetSize(int[] nums1, int[] nums2) {
        // Frequency map for nums1 and nums2
        HashMap<Integer, Integer> frequencyMap1 = new HashMap<>();
        HashMap<Integer, Integer> frequencyMap2 = new HashMap<>();

        // Counting frequency for nums1
        for (int num : nums1) {
            frequencyMap1.put(num, frequencyMap1.getOrDefault(num, 0) + 1);
        }
        
        // Counting frequency for nums2
        for (int num : nums2) {
            frequencyMap2.put(num, frequencyMap2.getOrDefault(num, 0) + 1);
        }

        // Priority queue for nums1 based on frequency and secondary sorting on nums2 frequency
        PriorityQueue<Integer> pq1 = new PriorityQueue<>((a, b) -> {
            if (frequencyMap1.get(a).equals(frequencyMap1.get(b))) {
                return frequencyMap2.getOrDefault(b, 0) - frequencyMap2.getOrDefault(a, 0);
            } else {
                return frequencyMap1.get(b) - frequencyMap1.get(a);
            }
        });

        // Adding keys from frequencyMap1 to pq1
        for (int key : frequencyMap1.keySet()) {
            pq1.add(key);
        }

        // Reduce frequencyMap1 to half of its original size
        int size1 = nums1.length / 2;
        while (size1-- > 0) {
            int top = pq1.poll();
            if (frequencyMap1.get(top) == 1) {
                frequencyMap1.remove(top);
            } else {
                frequencyMap1.put(top, frequencyMap1.get(top) - 1);
                pq1.add(top);
            }
        }

        // Priority queue for nums2 based on frequency and secondary sorting on nums1 frequency
        PriorityQueue<Integer> pq2 = new PriorityQueue<>((a, b) -> {
            if (frequencyMap2.get(a).equals(frequencyMap2.get(b))) {
                return frequencyMap1.getOrDefault(b, 0) - frequencyMap1.getOrDefault(a, 0);
            } else {
                return frequencyMap2.get(b) - frequencyMap2.get(a);
            }
        });

        // Adding keys from frequencyMap2 to pq2
        for (int key : frequencyMap2.keySet()) {
            pq2.add(key);
        }

        // Reduce frequencyMap2 to half of its original size
        int size2 = nums1.length / 2;
        while (size2-- > 0) {
            int top = pq2.poll();
            if (frequencyMap2.get(top) == 1) {
                frequencyMap2.remove(top);
            } else {
                frequencyMap2.put(top, frequencyMap2.get(top) - 1);
                pq2.add(top);
            }
        }

        // Combining unique keys from both maps
        HashSet<Integer> uniqueKeys = new HashSet<>(frequencyMap1.keySet());
        uniqueKeys.addAll(frequencyMap2.keySet());

        // Returning the size of unique keys
        return uniqueKeys.size();
    }
}
```
