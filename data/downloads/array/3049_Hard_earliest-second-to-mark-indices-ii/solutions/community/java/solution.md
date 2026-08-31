# A Java Implementation | Binary Search

**Author:** Ming_91
**Votes:** 3
**Link:** [https://leetcode.com/problems/earliest-second-to-mark-indices-ii/solutions/4779896/](https://leetcode.com/problems/earliest-second-to-mark-indices-ii/solutions/4779896/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Java solutions written from hints of the problem(6ms).
Another slower(85ms) solution is with my own `check()` function without using heap.

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(m + n + (m - n) * log(m))
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(m + n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
// class Solution {
//     int m,n;
//     int[] nums, changeIndices;
//     long sum;
//     public int earliestSecondToMarkIndices(int[] nums, int[] changeIndices) {
//         m = changeIndices.length;
//         n = nums.length;
//         if (m < n) {
//             return -1;
//         }
//         this.nums = nums;
//         this.changeIndices = changeIndices;
//         List<int[]> list = new ArrayList<>();
//         Set<Integer> set = new HashSet<>();
//         for (int i = 0; i < m; i++) {
//             if (nums[changeIndices[i] - 1] > 1 && set.add(changeIndices[i])) {
//                 // list.add(new int[]{changeIndices[i] - 1, i});
//                 list.add(new int[]{nums[changeIndices[i] - 1], i});
//             }
//         }
//         for (int num : nums) {
//             sum += num;
//         }
//         sum += n;
//         list.sort((a, b) -> {
//             // if (Integer.compare(nums[b[0] - 1], nums[a[0] - 1]) != 0) {
//             // if (Integer.compare(b[0], a[0]) != 0) {
//                 // return Integer.compare(nums[b[0]], nums[a[0]]);
//                 return Integer.compare(b[0], a[0]);
//             // }
//             // return Integer.compare(a[1], b[1]);
//         });
//         int l = n, r = ((int)Math.min(sum, m)) + 1;
//         while (l < r) {
//             int mid = (l + r) / 2;
//             if (check(mid, list)) {
//                 r = mid;
//             } else {
//                 l = mid + 1;
//             }
//         }
//         return l > Math.min(sum, m) ? -1 : l;

//     }
//     // [Ming] Use array to track all available seconds. Lot of details. 
//     boolean check(int idx, List<int[]> list) {
//         long need = sum;
//         // int count = 0;
//         int i = 0;
//         boolean[] p = new boolean[idx];
//         while (i < list.size() && need > idx) {
//             int[] pair = list.get(i++);
//             if (pair[1] >= idx) {
//                 continue;
//             }
//             // [Wrong] you can arrange mark in other ways.
//             // if (pair[1] >= idx - count) {
//             //     continue;
//             // }


//             // need -= nums[pair[0]] - 1;
//             int j = pair[1];
//             int c = 0;
//             int[] update = new int[2];
//             for (; j < idx && c < 2; j++) {
//                 if (!p[j]) {
//                     update[c++] = j;
//                 }
//             }
//             if (c == 2) {
//                 p[update[0]] = true;
//                 p[update[1]] = true;
//                 need -= pair[0] - 1;
//             }
//             // count++;
//         }
//         return need <= idx;
//     }
// }

class Solution {
    int m,n;
    int[] nums, changeIndices;
    boolean[] first;
    long sum;
    public int earliestSecondToMarkIndices(int[] nums, int[] changeIndices) {
        m = changeIndices.length;
        n = nums.length;
        if (m < n) {
            return -1;
        }
        this.nums = nums;
        this.changeIndices = changeIndices;
        Set<Integer> set = new HashSet<>();
        first = new boolean[m];
        for (int i = 0; i < m; i++) {
            if (nums[changeIndices[i] - 1] > 1 && set.add(changeIndices[i])) {
                first[i] = true;
            }
        }
        for (int num : nums) {
            sum += num;
        }
        sum += n;
        int l = n, r = ((int)Math.min(sum, m)) + 1;
        while (l < r) {
            int mid = (l + r) / 2;
            if (check(mid)) {
                r = mid;
            } else {
                l = mid + 1;
            }
        }
        return l > Math.min(sum, m) ? -1 : l;

    }
    boolean check(int idx) {
        Queue<Integer> pq = new PriorityQueue<>();
        long need = sum;
        int count = 0;
        for (int i = idx - 1; i >= 0 && need > idx; i--) {
            if (!first[i]) {
                count++;
                continue;
            }
            pq.add(nums[changeIndices[i] - 1]);
            need -= nums[changeIndices[i] - 1] - 1;
            if (pq.size() > count) {
                need += pq.poll() - 1;
                count++;
            }
        }
        // while (!pq.isEmpty() && need > idx) {
        //     need -= pq.poll() - 1;
        // }
        return need <= idx;
    }
}
```