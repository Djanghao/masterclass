# [C++] Sort and iterate

**Author:** mhelvens
**Votes:** 7
**Link:** [https://leetcode.com/problems/largest-unique-number/solutions/344800/](https://leetcode.com/problems/largest-unique-number/solutions/344800/)

---

We sort the array, because it helps us to find the largest number and to recognize duplicates. In order to avoid boundary-checks inside the loop, we first add some dummy values to the beginning and end.

Runtime complexity is O(n log n) because we're sorting. I didn't think of this during the contest, but [counting sort](https://en.wikipedia.org/wiki/Counting_sort) can achieve O(k) where k is the maximum value. That's a much better solution because the range of values is so tightly constrained in this problem. But others have already posted it, so I'll leave mine as is.

```C++
int largestUniqueNumber(vector<int>& A) {
  A.push_back(INT_MAX); // dummy values to
  A.push_back(INT_MIN); // avoid boundary-checks
  sort(A.begin(), A.end());
  for (int i = A.size() - 2; i > 0; --i)
    if (A[i-1] != A[i] && A[i] != A[i+1])
      return A[i];
  return -1;
}
