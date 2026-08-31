# ✅ sliding window solution, in case you missed it

**Author:** codeninja8
**Votes:** 0
**Link:** [https://leetcode.com/problems/get-equal-substrings-within-budget/solutions/5220189/](https://leetcode.com/problems/get-equal-substrings-within-budget/solutions/5220189/)

---

# Intuition
Calcualte scores and use sliding window to find maximum substring


# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$ if you use ```scores``` array or $$O(1)$$ if you calculate a cost in one go

# Code
``` java []
class Solution {
    public int equalSubstring(String s, String t, int maxCost) {
        int[] scores = new int[s.length()];
        char[] sa = s.toCharArray();
        char[] ta = t.toCharArray();
        for (int i = 0; i < s.length(); i++) {
            scores[i] = Math.abs(sa[i] - ta[i]);
        }

        int l = 0;
        int cost = 0;
        int maxLen = 0;
        for (int i = 0; i < s.length(); i++) {
            cost += scores[i];
            while (cost > maxCost) {
                cost -= scores[l++];
            }
            maxLen = Math.max(i - l + 1, maxLen);
        }

        return maxLen;
    }
}
```
``` c []
int equalSubstring(char* s, char* t, int maxCost) {
    int n = strlen(s);
    int* scores = malloc(n * sizeof(int));
    for (int i = 0; i < n; i++) {
        if (s[i] > t[i]) {
            scores[i] = s[i] - t[i];
        } else {
            scores[i] = t[i] - s[i];
        }
    }

    int left = 0;
    int cost = 0;
    int maxLen = 0;

    for (int i = 0; i < n; i++) {
        cost += scores[i];
        while (cost > maxCost) {
            cost -= scores[left++];
        }

        if (maxLen < i - left + 1) {
            maxLen = i - left + 1;
        }
    }

    return maxLen;
}
```
``` cpp []
class Solution {
public:
    int equalSubstring(string s, string t, int maxCost) {
        int l = 0;
        int cost = 0;
        int maxLen = 0;

        for (int i = 0; i < s.size(); i++) {
            cost += abs(s[i] - t[i]);
            while (cost > maxCost) {
                cost -= abs(s[l] - t[l]);
                l++;
            }

            if (maxLen < i - l + 1) {
                maxLen = i - l + 1;
            }
        }

        return maxLen;
    }
};
```
``` python []
class Solution(object):
    def equalSubstring(self, s, t, maxCost):
        scores = [abs(ord(s[i]) - ord(t[i])) for i in range(len(s))]
        l = 0
        cost = 0
        maxLen = 0
        for i in range(len(s)):
            cost += scores[i]
            while cost > maxCost:
                cost -= scores[l]
                l += 1
            maxLen = max(i - l + 1, maxLen)
        return maxLen
```
``` javascript []
var equalSubstring = function(s, t, maxCost) {
    var scores = Array(s.length).fill(0);
    for (var i = 0; i < s.length; i++) {
        scores[i] = Math.abs(s.charCodeAt(i) - t.charCodeAt(i));
    }

    var cost = 0;
    var maxLen = 0;
    var l = 0;

    for (var i = 0; i < s.length; i++) {
        cost += scores[i];
        while (cost > maxCost) {
            cost -= scores[l++];
        }
        maxLen = Math.max(i - l + 1, maxLen);
    }

    return maxLen;
};
```
``` php []
class Solution {
    function equalSubstring($s, $t, $maxCost) {
        $scores = array_fill(0, strlen($s), 0);
        for ($i = 0; $i < strlen($s); $i++) {
            $scores[$i] = abs(ord($s[$i]) - ord($t[$i]));
        }

        $maxLen = 0;
        $cost = 0;
        $l = 0;

        for ($i = 0; $i < count($scores); $i++) {
            $cost += $scores[$i];
            while ($cost > $maxCost) {
                $cost -= $scores[$l++];
            }
            $maxLen = max($i - $l + 1, $maxLen);
        }

        return $maxLen;
    }
}
```
``` golang []
func equalSubstring(s string, t string, maxCost int) int {
    scores := make([]int, len(s))
    for i := 0; i < len(s); i++ {
        if s[i] > t[i] {
            scores[i] = int(s[i] - t[i])
        } else {
            scores[i] = int(t[i] - s[i])
        }
    }

    cost := 0
    l := 0
    maxLen := 0

    for i, val := range scores {
        cost += val
        for cost > maxCost {
            cost -= scores[l]
            l += 1
        }

        if (maxLen < i - l + 1) {
            maxLen = i - l + 1
        }
    }

    return maxLen
}
```
``` ruby []
def equal_substring(s, t, max_cost)
    scores = Array.new(s.length)
    scores.each_index do |i|
        scores[i] = (s[i].ord - t[i].ord).abs
    end

    maxLen = 0
    left = 0
    cost = 0

    scores.each_index do |i|
        cost += scores[i]
        while cost > max_cost
            cost -= scores[left]
            left += 1
        end

        maxLen = [maxLen, i - left + 1].max
    end

    return maxLen
end
```
``` rust []
impl Solution {
    pub fn equal_substring(s: String, t: String, max_cost: i32) -> i32 {
        let mut maxLen : i32 = 0;
        let mut cost = 0;
        let mut left = 0;

        for i in 0..t.len() {
            cost += u8::abs_diff(t.as_bytes()[i], s.as_bytes()[i]) as i32;
            while cost > max_cost {
                cost -= u8::abs_diff(t.as_bytes()[left], s.as_bytes()[left]) as i32;
                left += 1;
            }

            let len = (i - left + 1) as i32;
            if maxLen < len {
                maxLen = len;
            }
        }

        return maxLen;
    }
}
```
``` racket []
(define (equal-substring s t maxCost)
    (let ([scores (map (lambda (a b) (abs (- (char->integer b) (char->integer a)))) (string->list s) (string->list t))])
      (let sliding-window ([scores scores]
                           [cost 0]
                           [window scores]
                           [maxLen 0]
                           [left 0]
                           [i -1])
        (cond [(> cost maxCost) (sliding-window scores (- cost (car window)) (cdr window) maxLen (add1 left) i)]
              [(null? scores) (if (> (add1 (- i left)) maxLen) (add1 (- i left)) maxLen)]
              [else (sliding-window (cdr scores) (+ cost (car scores)) window (if (> (add1 (- i left)) maxLen) (add1 (- i left)) maxLen) left (add1 i))]))))
```

I'm going to update the solution with more languages next time. \uD83D\uDC4D
