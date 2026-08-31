# ✅ Beats 98.91% 🔥 | ⭐️ Easiest Approach | 💡 Beginner Friendly Explanation |

**Author:** Gourav-2002
**Votes:** 9
**Link:** [https://leetcode.com/problems/maximum-score-after-splitting-a-string/solutions/4439695/](https://leetcode.com/problems/maximum-score-after-splitting-a-string/solutions/4439695/)

---

![Screenshot 2023-12-22 at 11.41.28\u202FAM.png](./images/0.png)

# Intuition:
**Here we have to find the maximum score we can get by splitting the string into 2 parts. We can split the string in n-1 ways. So we will iterate through all the ways and find the maximum score. We will count the number of 0's in the first part and the number of 1's in the second part. We will add them and find the maximum score. We will return the maximum score.**

# Algorithm:
1. Initialize a variable Max to 0.
2. Iterate through the string from 1 to n-1.
3. Find the number of 0's in the first part and the number of 1's in the second part.
4. Add them and compare with the Max.
5. If it is greater than Max, then update Max.
6. Return Max.

# Complexity Analysis:
- Time complexity: $$O(n^2)$$, where n is the length of the string.
- Space complexity: $$O(1)$$, constant space is used.

# Code
``` Python []
class Solution:
    def maxScore(self, s: str) -> int:
        Max=0
        for i in range(1,len(s)):
            maxx=s[:i].count("0")+s[i:].count("1")
            Max=max(Max,maxx)
        return Max
```
``` C++ []
class Solution {
public:
    int maxScore(std::string s) {
        int Max = 0;
        for (int i = 1; i < s.length(); ++i) {
            int maxx = std::count(s.begin(), s.begin() + i, '0') + std::count(s.begin() + i, s.end(), '1');
            Max = std::max(Max, maxx);
        }
        return Max;
    }
};
```
``` Java []
public class Solution {
    public int maxScore(String s) {
        int Max = 0;
        for (int i = 1; i < s.length(); ++i) {
            int maxx = s.substring(0, i).replaceAll("[^0]", "").length() +
                       s.substring(i).replaceAll("[^1]", "").length();
            Max = Math.max(Max, maxx);
        }
        return Max;
    }
}
```
``` C# []
public class Solution {
    public int MaxScore(string s) {
        int Max = 0;
        for (int i = 1; i < s.Length; ++i) {
            int maxx = s.Substring(0, i).Count(c => c == '0') + s.Substring(i).Count(c => c == '1');
            Max = Math.Max(Max, maxx);
        }
        return Max;
    }
}
```
``` TypeScript []
function maxScore(s: string): number {
    let Max = 0;
        for (let i = 1; i < s.length; ++i) {
            const maxx = s.substring(0, i).split('0').length - 1 + s.substring(i).split('1').length - 1;
            Max = Math.max(Max, maxx);
        }
        return Max;
};
```
``` JavaScript []
/**
 * @param {string} s
 * @return {number}
 */
var maxScore = function(s) {
    let Max = 0;
        for (let i = 1; i < s.length; ++i) {
            const maxx = s.substring(0, i).split('0').length - 1 + s.substring(i).split('1').length - 1;
            Max = Math.max(Max, maxx);
        }
        return Max;
};
```
``` PHP []
class Solution {

    /**
     * @param String $s
     * @return Integer
     */
    function maxScore($s) {
        $Max = 0;
        for ($i = 1; $i < strlen($s); ++$i) {
            $maxx = substr_count(substr($s, 0, $i), '0') + substr_count(substr($s, $i), '1');
            $Max = max($Max, $maxx);
        }
        return $Max;
    }
}
```

![aayein.jpeg](./images/1.jpeg)
