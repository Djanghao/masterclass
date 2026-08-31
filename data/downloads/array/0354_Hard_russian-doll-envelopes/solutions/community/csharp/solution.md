# Simple solution using binary search in C#

**Author:** samy-timalsina
**Votes:** 1
**Link:** [https://leetcode.com/problems/russian-doll-envelopes/solutions/3785215/](https://leetcode.com/problems/russian-doll-envelopes/solutions/3785215/)

---

# Intuition
Use LIS after sorting the envelopes. Sort the envelopes in such a way that width are in ascending order then heights in descending order.


# Complexity
- Time complexity:
 O(NLogN)

- Space complexity:
O(N)

# Code
```
public class Solution {
    public int MaxEnvelopes(int[][] envelopes) {
            int[][] arr = envelopes.OrderBy(x => x[0]).ThenByDescending(x => x[1]).ToArray();
            int sum = 0;
            List<int> ls = new List<int>();
            for(int i = 0; i < arr.Length; i++) {
                int bx = arr[i][1];
                if(ls.Count == 0) {
                    ls.Add(bx);
                }
                else if(ls[ls.Count-1] < bx) {
                    ls.Add(bx);
                }
                else {
                    int start = 0;
                    int end = ls.Count - 1;
                    int ind = -1;
                    while(start <= end) {
                        int mid = (start + end) / 2;
                        if(ls[mid] >= bx) {
                            ind = mid;
                            end = mid - 1;
                        }
                        else {
                            start = mid + 1;
                        }
                    }
                    ls[ind] = bx;
                }
            }
            return ls.Count;
    }
}
```