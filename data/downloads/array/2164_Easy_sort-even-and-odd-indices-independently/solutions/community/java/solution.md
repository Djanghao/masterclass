# Heap(O(n log n)) and Counting Sort(O(n)) in Java

**Author:** lisze1
**Votes:** 35
**Link:** [https://leetcode.com/problems/sort-even-and-odd-indices-independently/solutions/1748447/](https://leetcode.com/problems/sort-even-and-odd-indices-independently/solutions/1748447/)

---

Counting Sort
```
class Solution {
    public int[] sortEvenOdd(int[] nums) {
        int[] even = new int[101];
        int[] odd = new int[101];
        int length = nums.length;
        for (int i = 0; i < length; ++i) {
            if (i % 2 == 0) {
                even[nums[i]]++;
            } else {
                odd[nums[i]]++;
            }
        }
        int e = 0;
        int o = 100;
        for (int i = 0; i < length; ++i) {
            if (i % 2 == 0) {
                // check even
                while (even[e] == 0) {
                    ++e;
                }
                nums[i] = e;
                even[e]--;
            } else {
                while(odd[o] == 0) {
                    --o;
                }
                nums[i] = o;
                odd[o]--;
            }
        }
        return nums;
    }
}
```

Heap
```
class Solution {
    public int[] sortEvenOdd(int[] nums) {
        PriorityQueue<Integer> even = new PriorityQueue<>((a, b)->(a - b));
        PriorityQueue<Integer> odd = new PriorityQueue<>((a, b)->(b - a));
        int length = nums.length;
        for (int i = 0; i < length; ++i) {
            if (i % 2 == 0) {
                even.add(nums[i]);
            } else {
                odd.add(nums[i]);
            }
        }
        
        for (int i = 0; i < length; ++i) {
            if (i % 2 == 0) {
                nums[i] = even.poll();
            } else {
                nums[i] = odd.poll();
            }
        }
        return nums;
    }
}
```