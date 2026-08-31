# 1D Array Tabulation/Bottom Up, Only O(n) Space, Most Efficient Solution

**Author:** avi_dey
**Votes:** 0
**Link:** [https://leetcode.com/problems/delete-operation-for-two-strings/solutions/5913380/](https://leetcode.com/problems/delete-operation-for-two-strings/solutions/5913380/)

---

# Complexity
- Time complexity: O(m*n)
<!-- Add your time complexity here, e.g. $$O(n)$$ -->

- Space complexity: O(n)
<!-- Add your space complexity here, e.g. $$O(n)$$ -->

# Code
```java []
class Solution {
    //optimized tabulation - O(n) space because we are using only 1d arrays
    public int minDistance(String s1, String s2) {
        int m = s1.length();
        int n = s2.length();

        // instead of using a 2d array, we are using two 1d arrays
        int[] prev = new int[n+1];       

        //initialisation
        for(int i = 0; i <= n; i++) prev[i] = i;

        //decision tree
        for(int i = 1; i <= m; i++) {
            int[] curr = new int[n+1];
            curr[0] = i; // on spot initialisation
            for(int j = 1; j <= n; j++) {
                if(s1.charAt(i-1) == s2.charAt(j-1)) {
                    curr[j] =  prev[j-1];
                }
                else {
                    curr[j] = 1 + Math.min(curr[j-1], prev[j]);
                }
            }
            prev = curr;
        }

        return prev[n];
    }
}
```
```C++ []
class Solution {
public:
    int minDistance(string s1, string s2) {
        int m = s1.length();
        int n = s2.length();

        vector<int> prev(n + 1);
        for (int i = 0; i <= n; i++) prev[i] = i;

        for (int i = 1; i <= m; i++) {
            vector<int> curr(n + 1);
            curr[0] = i;
            for (int j = 1; j <= n; j++) {
                if (s1[i - 1] == s2[j - 1]) {
                    curr[j] = prev[j - 1];
                } else {
                    curr[j] = 1 + min(curr[j - 1], prev[j]);
                }
            }
            prev = curr;
        }

        return prev[n];
    }
};

```

```Python3 []
class Solution:
    def minDistance(self, s1: str, s2: str) -> int:
        m, n = len(s1), len(s2)
        prev = [i for i in range(n + 1)]

        for i in range(1, m + 1):
            curr = [0] * (n + 1)
            curr[0] = i
            for j in range(1, n + 1):
                if s1[i - 1] == s2[j - 1]:
                    curr[j] = prev[j - 1]
                else:
                    curr[j] = 1 + min(curr[j - 1], prev[j])
            prev = curr

        return prev[n]

```

```C# []
public class Solution {
    public int MinDistance(string s1, string s2) {
        int m = s1.Length;
        int n = s2.Length;

        int[] prev = new int[n + 1];
        for (int i = 0; i <= n; i++) prev[i] = i;

        for (int i = 1; i <= m; i++) {
            int[] curr = new int[n + 1];
            curr[0] = i;
            for (int j = 1; j <= n; j++) {
                if (s1[i - 1] == s2[j - 1]) {
                    curr[j] = prev[j - 1];
                } else {
                    curr[j] = 1 + Math.Min(curr[j - 1], prev[j]);
                }
            }
            prev = curr;
        }

        return prev[n];
    }
}

```
```JavaScript []
var minDistance = function(s1, s2) {
    let m = s1.length, n = s2.length;

    let prev = Array.from({length: n+1}, (_, i) => i);

    for (let i = 1; i <= m; i++) {
        let curr = new Array(n + 1).fill(0);
        curr[0] = i;
        for (let j = 1; j <= n; j++) {
            if (s1[i - 1] === s2[j - 1]) {
                curr[j] = prev[j - 1];
            } else {
                curr[j] = 1 + Math.min(curr[j - 1], prev[j]);
            }
        }
        prev = curr;
    }

    return prev[n];
};

```
```Ruby []
def min_distance(s1, s2)
    m, n = s1.length, s2.length
    prev = (0..n).to_a

    (1..m).each do |i|
        curr = Array.new(n+1, 0)
        curr[0] = i
        (1..n).each do |j|
            if s1[i-1] == s2[j-1]
                curr[j] = prev[j-1]
            else
                curr[j] = 1 + [curr[j-1], prev[j]].min
            end
        end
        prev = curr
    end

    return prev[n]
end

```
```Go []
package main

func minDistance(s1 string, s2 string) int {
    m, n := len(s1), len(s2)

    prev := make([]int, n+1)
    for i := 0; i <= n; i++ {
        prev[i] = i
    }

    for i := 1; i <= m; i++ {
        curr := make([]int, n+1)
        curr[0] = i
        for j := 1; j <= n; j++ {
            if s1[i-1] == s2[j-1] {
                curr[j] = prev[j-1]
            } else {
                curr[j] = 1 + min(curr[j-1], prev[j])
            }
        }
        prev = curr
    }

    return prev[n]
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}

```

