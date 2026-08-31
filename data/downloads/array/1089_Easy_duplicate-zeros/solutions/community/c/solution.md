# C++: two pass, shift counter, fast, simple, explanation

**Author:** andnik
**Votes:** 58
**Link:** [https://leetcode.com/problems/duplicate-zeros/solutions/505107/](https://leetcode.com/problems/duplicate-zeros/solutions/505107/)

---

First pass count `0s` in the array, this is our `shift` variable.
Second reverse pass:
* If `arr[i] == 0` reduce `shift` count by 1.
* If `arr[i + shift]` within array boundary, then assign `arr[i + shift] = arr[i]` (shift element to it's new position). If `arr[i] == 0` then also assign next element after `arr[i + shift]` to `0`, meaning `arr[i + shift + 1] = 0`, but don't forget to check that `i + shift + 1` is withing array boundary.

```
class Solution {
public:
    void duplicateZeros(vector<int>& arr) {
        int shift = count(begin(arr), end(arr), 0), size = arr.size();
        for (int i = arr.size() - 1; i >= 0; i--) {
            if (!arr[i]) shift--;
            if (i + shift < size) {
                arr[i + shift] = arr[i];
                if (!arr[i] && i + shift + 1 < size)
                    arr[i + shift + 1] = 0;
            }
        }
    }
};
```