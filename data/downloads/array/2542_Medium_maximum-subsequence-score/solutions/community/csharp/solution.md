# C# Solution | PriorityQueue | O(nlogn)

**Author:** anshulgarg904
**Votes:** 5
**Link:** [https://leetcode.com/problems/maximum-subsequence-score/solutions/3557678/](https://leetcode.com/problems/maximum-subsequence-score/solutions/3557678/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->

# Approach
<!-- Describe your approach to solving the problem. -->

# Complexity
- Time complexity: O(nlogn)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
public class Solution {
    public long MaxScore(int[] nums1, int[] nums2, int k) {
        int n = nums1.Length;
        Num[] nums = new Num[n];

        for(int i=0; i<n; i++){
            nums[i] = new Num(nums1[i], nums2[i]);
        }

        Array.Sort(nums, (a, b) => {
            return b.num2 - a.num2;
        });

        PriorityQueue<int, int> pq = new();
        long res = 0, sum = 0;

        for(int i=0; i<n; i++){
            pq.Enqueue(nums[i].num1, nums[i].num1);
            sum += nums[i].num1;

            if(pq.Count > k) sum -= pq.Dequeue();
            if(pq.Count == k) res = Math.Max(res, sum*nums[i].num2);
        }

        return res;
    }

    public class Num {
        public int num1;
        public int num2;

        public Num(int num1, int num2){
            this.num1 = num1;
            this.num2 = num2;
        }
    }
}
```