# Classic DP solution similar to LIS, O(n^2)

**Author:** jiangbowei2010
**Votes:** 374
**Link:** [https://leetcode.com/problems/largest-divisible-subset/solutions/84006/](https://leetcode.com/problems/largest-divisible-subset/solutions/84006/)

---

Use DP to track max Set and pre index.

    public class Solution {
        public List<Integer> largestDivisibleSubset(int[] nums) {
            int n = nums.length;
            int[] count = new int[n];
            int[] pre = new int[n];
            Arrays.sort(nums);
            int max = 0, index = -1;
            for (int i = 0; i < n; i++) {
                count[i] = 1;
                pre[i] = -1;
                for (int j = i - 1; j >= 0; j--) {
                    if (nums[i] % nums[j] == 0) {
                        if (1 + count[j] > count[i]) {
                            count[i] = count[j] + 1;
                            pre[i] = j;
                        }
                    }
                }
                if (count[i] > max) {
                    max = count[i];
                    index = i;
                }
            }
            List<Integer> res = new ArrayList<>();
            while (index != -1) {
                res.add(nums[index]);
                index = pre[index];
            }
            return res;
        }
    }