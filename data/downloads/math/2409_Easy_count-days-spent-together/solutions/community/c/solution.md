# C++ | Convert Date to Number in Year | Explaination

**Author:** kiranpalsingh1806
**Votes:** 106
**Link:** [https://leetcode.com/problems/count-days-spent-together/solutions/2587981/](https://leetcode.com/problems/count-days-spent-together/solutions/2587981/)

---

- We just need to convert the given date to number in year.
- For example, "01-13" (13th January) represents **13th day in year**, "02-13" (13th February) represents **44th day in year**.
- This problem came in Biweekly Contest on 17th September, 2022, which is **260th day** in year.
```cpp
int md[13] = {0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

class Solution {
	// Convert date to respective number in year.
    int td(string s) {
        int m = s[1] - '0' + 10*(s[0] - '0');
        int d = s[4] - '0' + 10*(s[3] - '0');
        --m;
        while (m > 0) {
            d += md[m];
            --m;
        }
        return d;
    }
public:
    int countDaysTogether(string sa1, string sa2, string sb1, string sb2) {
        int a1 = td(sa1), a2 = td(sa2), b1 = td(sb1), b2 = td(sb2);
        int ans = 0;
		// Check all 365 days in year
        for (int i = 0; i < 367; ++i) {
            if (a1 <= i && i <= a2 && b1 <= i && i <= b2) {
                ++ans;
            }
        }
        return ans;
    }
};
```