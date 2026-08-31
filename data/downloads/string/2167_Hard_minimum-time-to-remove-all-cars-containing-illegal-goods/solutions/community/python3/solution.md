# Simple Clean Solution with Explanation

**Author:** Shree_Govind_Jee
**Votes:** 2
**Link:** [https://leetcode.com/problems/minimum-time-to-remove-all-cars-containing-illegal-goods/solutions/5077979/](https://leetcode.com/problems/minimum-time-to-remove-all-cars-containing-illegal-goods/solutions/5077979/)

---

# Intuition
One pass from left to right.
1. **`left`** counts the cost to clear all illegal goods from **`s[0]`** to **`s[i]`**
1. **`right`** counts the cost to clear all illegal goods from **`s[i+1]`** to **`s[n-1]`**

If **`s[i] == 1`**, then update left value,
we take the minimum of these 2 options:

- **`i + 1`**, by removing all left cars, **`i + 1`**
- **`left + 2`**, previously remove` cose + removing the current` **`s[i]`**
- **`right = n - 1 - i`**, be removing all right cars.
# Complexity
- Time complexity:$$O(n)$$
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity:$$O(1)$$
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```
// class Solution {
//     public int minimumTime(String s) {
//         int res = 0;

//         int start = 0;
//         while (s.charAt(start) == '1') {
//             start++;
//             res++;
//         }

//         int end = s.length() - 1;
//         while (s.charAt(end) == '1') {
//             end--;
//             res++;
//         }

//         while (start <= end) {
//             if (s.charAt(start) == '1') {
//                 res += 2;
//                 start++;
//                 for (int x = start; x <= end; x++) {
//                     if (s.charAt(x) == '1') {
//                         res++;
//                     } else {
//                         start = x;
//                         break;
//                     }
//                 }
//             } 
//             // else if (s.charAt(end) == '1') {
//             //     res += 2;
//             //     end--;
//             //     for (int x = end; x >= start; x--) {
//             //         if (s.charAt(x) == '1') {
//             //             res++;
//             //         } else {
//             //             end = x;
//             //             break;
//             //         }
//             //     }
//             // } 
//             else {
//                 start++;
//                 // end--;
//             }
//         }
//         return res;
//     }
// }

class Solution {
    public int minimumTime(String s) {
        int res = s.length();
        int start = 0;
        for (int i = 0; i < s.length(); i++) {
            start = Math.min(start + (s.charAt(i) - '0') * 2, i + 1);
            res = Math.min(res, start + s.length() - i - 1);
        }
        return res;
    }
}
```

---


# C++
```
class Solution {
public:
    int minimumTime(string s) {
        int res = s.size(), len = res;
        int start = 0;
        for (int i = 0; i < s.size(); i++) {
            start = min(start + (s[i] - '0') * 2, i + 1);
            res = min(res, start + len - 1 - i);
        }
        return res;
    }
};
```

---

# Python3
```
class Solution:
    def minimumTime(self, s: str) -> int:
        length, start, res = len(s), 0, len(s)
        for i, c in enumerate(s):
            start = min(start + (c == "1") * 2, i + 1)
            res = min(res, start + length - 1 - i)
        return res

```