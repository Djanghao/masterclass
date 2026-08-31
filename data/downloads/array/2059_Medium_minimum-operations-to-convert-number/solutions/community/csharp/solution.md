# C# solution

**Author:** srvpoddar
**Votes:** 0
**Link:** [https://leetcode.com/problems/minimum-operations-to-convert-number/solutions/5359437/](https://leetcode.com/problems/minimum-operations-to-convert-number/solutions/5359437/)

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
public class Solution {
    public int MinimumOperations(int[] nums, int start, int goal) {
        if (start == goal)
            return 0;
        if (start < 0 || start > 1000)
            return -1;
        bool[] check = new bool[1001];
        for (int i=0;i<1001;i++)
            check[i] = false;
        Queue<int> queue = new Queue<int>();
        int dist = 0;
        int[] result = new int[3];
        queue.Enqueue(start);
        queue.Enqueue(-1);
        while(queue.Count > 1) {
            int cur = queue.Dequeue();
            if (cur == -1) {
                queue.Enqueue(cur);
                dist++;
                continue;
            }
            foreach (int num in nums) {
                result[0] = cur + num;
                result[1] = cur - num;
                result[2] = cur ^ num;
                foreach (int res in result) {
                    if (res == goal)
                        return dist+1;
                    if (res < 0 || res > 1000 || check[res])
                        continue;
                    check[res] = true;
                    queue.Enqueue(res);
                }
            }
        }
        return -1;
    }
}
```