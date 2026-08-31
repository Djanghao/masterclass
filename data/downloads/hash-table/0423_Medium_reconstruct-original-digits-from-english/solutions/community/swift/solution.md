# [Java/C++/Python/JavaScript/Swift]O(n)time/BEATS 99.97% MEMORY/SPEED 0ms APRIL 2022

**Author:** darian-catalin-cucer
**Votes:** 3
**Link:** [https://leetcode.com/problems/reconstruct-original-digits-from-english/solutions/1995547/](https://leetcode.com/problems/reconstruct-original-digits-from-english/solutions/1995547/)

---

```
```

(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful, ***please upvote*** this post.)
***Take care brother, peace, love!***

```
```

```
```

```
```

The best result for the code below is ***0ms / 38.2MB*** (beats 92.04% / 24.00%).
* ***Java***
```
class Solution {
    static final int[] DIGS = {0,2,4,6,8,5,7,3,9,1}, CHARS = {25,22,20,23,6,5,18,7,8,14};
    static final int[][] REMS = {{14},{14},{5,14},{18,8},{8,7},{8},{},{},{},{}};
    public String originalDigits(String S) {
        int[] fmap = new int[26], ans = new int[10];
        char[] SCA = S.toCharArray();
        for (char c : SCA) fmap[c - 97]++;
        for (int i = 0; i < 10; i++) {
            int count = fmap[CHARS[i]];
            for (int rem : REMS[i]) fmap[rem] -= count;
            ans[DIGS[i]] = count;
        }
        StringBuilder sb = new StringBuilder();
        for (int i = 0; i < 10; i++) {
            char c = (char)(i + 48);
            for (int j = 0; j < ans[i]; j++)
                sb.append(c);
        }
        return sb.toString();
    }
}
```

```
```

```
```

The best result for the code below is ***0ms / 7.0MB*** (beats 100.00% / 100.00%).
* ***C++***
```
class Solution {
const int DIGS[10] = {0,2,4,6,8,5,7,3,9,1}, CHARS[10] = {25,22,20,23,6,5,18,7,8,14};
const vector<vector<int>> REMS = {{14},{14},{5,14},{18,8},{8,7},{8},{},{},{},{}};
public:
    string originalDigits(string S) {
        int fmap[26] = {0}, ans[10] = {0};
        for (char c : S) fmap[c - 97]++;
        for (int i = 0; i < 10; i++) {
            int count = fmap[CHARS[i]];
            for (int rem : REMS[i]) fmap[rem] -= count;
            ans[DIGS[i]] = count;
        }
        string ansstr;
        for (int i = 0; i < 10; i++) {
            char c = (char)(i + 48);
            for (int j = ans[i]; j; j--)
                ansstr += c;
        }
        return ansstr;
    }
};
```

```
```

```
```


The best result for the code below is ***26ms / 12.2MB*** (beats 95.42% / 82.32%).
* ***Python***
```
DIGITS = [
    [0,'z',[]],
    [2,'w',[]],
    [4,'u',[]],
    [6,'x',[]],
    [8,'g',[]],
    [5,'f',[4]],
    [7,'s',[6]],
    [3,'h',[8]],
    [9,'i',[6,8,5]],
    [1,'o',[0,2,4]]
]
class Solution:
    def originalDigits(self, S: str) -> str:
        fmap, ans, n = [0] * 26, [0] * 10, len(S)
        for i in range(10):
            dig, char, rems = DIGITS[i]
            count = S.count(char)
            for rem in rems: count -= ans[rem]
            ans[dig] += count
        return "".join([str(i) * ans[i] for i in range(10)])
```

```
```

```
```

The best result for the code below is ***51ms / 34.2MB*** (beats 100.00% / 84.12%).
* ***JavaScript***
```
const DIGITS = [
    ["0",25,[14]],
    ["2",22,[14]],
    ["4",20,[5,14]],
    ["6",23,[18,8]],
    ["8",6,[8,7]],
    ["5",5,[8]],
    ["7",18,[]],
    ["3",7,[]],
    ["9",8,[]],
    ["1",14,[]]
]
var originalDigits = function(S) {
    let fmap = new Uint16Array(26),
        ans = new Array(10), len = S.length
    for (let i = 0; i < len; i++)
        fmap[S.charCodeAt(i) - 97]++
    for (let i = 0; i < 10; i++) {
        let [dig, char, rems] = DIGITS[i],
            count = fmap[char]
        for (let j = 0; j < rems.length; j++)
            fmap[rems[j]] -= count
        ans[dig] = dig.repeat(count)
    }
    return ans.join("")
};
```

```
```

```
```

The best result for the code below is ***12ms / 32.2MB*** (beats 95% / 84%).
* ***Swift***
```
class Solution {
    func originalDigits(_ s: String) -> String {
        let s = Array(s).map({ Int($0.asciiValue ?? 97) - 97 }), alphabet = 26, digits = 10
        var a = [Int](repeating: 0, count: alphabet), d = [Int](repeating: 0, count: digits), result = [Int]()
        for char in s { a[char] += 1 } // count all characters in source string
		// z is unique char, count all zero
        while a[25] > 0 { d[0] += 1; a[25] -= 1; a[4] -= 1; a[17] -= 1; a[14] -= 1 }
		// w is unique char, count all two
        while a[22] > 0 { d[2] += 1; a[19] -= 1; a[22] -= 1; a[14] -= 1 }
		// u is unique char, count all four
        while a[20] > 0 { d[4] += 1; a[5] -= 1; a[14] -= 1; a[20] -= 1; a[17] -= 1 }
		// x is unique char, count all six
        while a[23] > 0 { d[6] += 1; a[18] -= 1; a[8] -= 1; a[23] -= 1 }
		// g is unique char, count all eight
        while a[6] > 0 { d[8] += 1; a[4] -= 1; a[8] -= 1; a[6] -= 1; a[7] -= 1; a[19] -= 1 }
		// now r is unique char, count all three
        while a[17] > 0 { d[3] += 1; a[19] -= 1; a[7] -= 1; a[17] -= 1; a[4] -= 2 }
		// now f is unique char, count all five
        while a[5] > 0 { d[5] += 1; a[5] -= 1; a[8] -= 1; a[21] -= 1; a[4] -= 1 }
		// now s is unique char, count all seven
        while a[18] > 0 { d[7] += 1; a[18] -= 1; a[4] -= 2; a[21] -= 1; a[13] -= 1 }
		// now o is unique char, count all one
        while a[14] > 0 { d[1] += 1; a[14] -= 1; a[13] -= 1; a[4] -= 1 }
		// now i is unique char, count all nine
        while a[8] > 0 { d[9] += 1; a[13] -= 2; a[8] -= 1; a[4] -= 1 }
		// make result
        for i in 0..<digits { for j in 0..<d[i] { result.append(i) } }
        return result.map({ "\\($0)" }).joined(separator: "")
    }
}
```

```
```

```
```

***"Open your eyes. Expect us." - \uD835\uDCD0\uD835\uDCF7\uD835\uDCF8\uD835\uDCF7\uD835\uDD02\uD835\uDCF6\uD835\uDCF8\uD835\uDCFE\uD835\uDCFC***