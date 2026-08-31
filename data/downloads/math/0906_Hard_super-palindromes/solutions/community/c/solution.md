# JS, Python, Java, C++ | Two Fast Mathematical Solutions w/ Explanation

**Author:** sgallivan
**Votes:** 41
**Link:** [https://leetcode.com/problems/super-palindromes/solutions/1197697/](https://leetcode.com/problems/super-palindromes/solutions/1197697/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

The first thing we should be able to realize about this problem is that it will be easier to start from the small palindrome and square it, rather than starting from the large palindrome and squarerooting it. This is especially useful because the constraint on the large palindrome goes up to **18** digits which means the small palindrome can only go up to **9** digits.

Starting with the smaller palindrome, we can easily create a function **isPal()** to test if a string is a palindrome, then use it to iteratively check for values that are palindromes and whose squares are also palindromes. This will result in a **TLE** before it can reach the constraint, but we can use it to find out some interesting information about the small palindromes.

Consider the small palindrome values found between **"1"** and **"9999999999999"**:
```
[1, 2, 3, 11, 22, 101, 111, 121, 202, 212, 1001, 1111, 2002, 10001, 10101,
 10201, 11011, 11111, 11211, 20002, 20102, 100001, 101101, 110011, 111111,
 200002, 1000001, 1001001, 1002001, 1010101, 1011101, 1012101, 1100011,
 1101011, 1102011, 1110111, 1111111, 2000002, 2001002]
```
Right away, we can notice that, with the exception of the **3**, only the numbers **0**, **1**, & **2** are used in each value. We could, at this point, fairly easily write a function that would iterate through every **base3** number from **1** to the maximum value of **19683** (**3^9**, since the small palindrome is limited to **9** digits) and check it the same way as before. This is a major drop from **1000000000** iterations to only **19683** iterations.

Looking a little more closely at the valid numbers above, we can also notice a few more things:
 - A **2** can only exist on the edges of the value or the middle position of a value with an odd length.
 - If the edges are **2**s, then the only other variation is a **1** in the middle on odd length values.

Using these observations, we can modify our function to build strings matching these rules. As attempting to follow these rules will prevent the **base3** shortcut, we'll have to build the strings in a more manual operation, but that also means that we can use the opportunity to ensure that we're only building palindromes, in order to further decrease the iteration count.

In fact, if we follow these rules, we'll only actually iterate through a maximum of **74** values, of which **70** are the valid numbers in the constrained limits.

---

#### ***Javascript Code:***

##### ***Building Palindromes:***

The best result for the code below is **60ms / 38.2MB** (beats 100% / 100%).
```javascript
var superpalindromesInRange = function(left, right) {
    let ans = 9 >= left && 9 <= right ? 1 : 0

    const isPal = str => {
        for (let i = 0, j = str.length - 1; i < j; i++, j--)
            if (str.charAt(i) !== str.charAt(j)) return false
        return true
    }

    for (let dig = 1; dig < 10; dig++) {
        let isOdd = dig % 2 && dig !== 1,
            innerLen = (dig >> 1) - 1, innerLim = Math.max(1, 2 ** innerLen),
            midPos = dig >> 1, midLim = isOdd ? 3 : 1
        for (let edge = 1; edge < 3; edge++) {
            let pal = new Uint8Array(dig)
            pal[0] = edge, pal[dig-1] = edge
            if (edge === 2) innerLim = 1, midLim = Math.min(midLim, 2)
            for (let inner = 0; inner < innerLim; inner++) {
                if (inner > 0) {
                    let innerStr = inner.toString(2).padStart(innerLen, '0')
                    for (let i = 0; i < innerLen; i++)
                        pal[1+i] = innerStr[i], pal[dig-2-i] = innerStr[i]
                }
                for (let mid = 0; mid < midLim; mid++) {
                    if (isOdd) pal[midPos] = mid
                    let palin = ~~pal.join(""),
                        square = BigInt(palin) * BigInt(palin)
                    if (square > right) return ans
                    if (square >= left && isPal(square.toString())) ans++
                }
            }
        }
    }
    return ans
};
```

##### ***Base3 Iteration:***

The best result for the code below is **116ms / 42.1MB** (beats 100% / 100%).
```javascript
var superpalindromesInRange = function(left, right) {
    let ans = 9 >= left && 9 <= right ? 1 : 0
    
    const isPal = str => {
        for (let i = 0, j = str.length - 1; i < j; i++, j--)
            if (str.charAt(i) !== str.charAt(j)) return false
        return true
    }
    
    for (let i = 1; i < 19684; i++) {
        let num = i.toString(3)
        if (isPal(num)) {
            let square = BigInt(num) * BigInt(num)
            if (square > right) return ans
            if (square >= left && isPal(square.toString())) ans++
        }
    }
    return ans
};
```

---

#### ***Python Code:***

##### ***Building Palindromes:***

The best result for the code below is **24ms / 14.1MB** (beats 100% / 94%).
```python
class Solution:
    def superpalindromesInRange(self, left: str, right: str) -> int:
        ans = 1 if 9 >= int(left) and 9 <= int(right) else 0
        
        def isPal(s: str) -> bool:
            return s == s[::-1]
        
        for dig in range(1, 10):
            isOdd = dig % 2 and dig != 1
            innerLen = (dig >> 1) - 1
            innerLim = max(1, 2 ** innerLen)
            midPos = dig >> 1
            midLim = 3 if isOdd else 1
            for edge in range (1, 3):
                pal = [0] * dig
                pal[0], pal[-1] = edge, edge
                if edge == 2: innerLim, midLim = 1, min(midLim, 2)
                for inner in range(innerLim):
                    if inner > 0:
                        innerStr = list(bin(inner)[2:].zfill(innerLen))
                        pal[1:1+innerLen] = innerStr
                        pal[-innerLen-1:-1] = reversed(innerStr)
                    for mid in range(midLim):
                        if isOdd: pal[midPos] = mid
                        palin = int("".join([str(n) for n in pal]))
                        square = palin * palin
                        if square > int(right): return ans
                        if square >= int(left) and isPal(str(square)): ans += 1
        return ans
```

##### ***Base3 Iteration:***

The best result for the code below is **372ms / 14.0MB** (beats 95% / 100%).
```python
class Solution:
    def superpalindromesInRange(self, left: str, right: str) -> int:
        ans = 1 if 9 >= int(left) and 9 <= int(right) else 0
        
        def isPal(s: str) -> bool:
            return s == s[::-1]
        
        def base3(n: int, num: str) -> str:
            if not n: return num
            n, r = divmod(n, 3)
            return base3(n, str(r) + num)
        
        for i in range(1, 19684):
            num = base3(i, "")
            if isPal(num):
                square = int(num) * int(num)
                if square > int(right): return ans
                if square >= int(left) and isPal(str(square)): ans += 1
        return ans
```

---

#### ***Java Code:***

##### ***Building Palindromes:***

The best result for the code below is **2ms / 36.8MB** (beats 91% / 96%).
```java
class Solution {
    public int superpalindromesInRange(String left, String right) {
        int ans = 9 >= Long.parseLong(left) && 9 <= Long.parseLong(right) ? 1 : 0;
  
        for (int dig = 1; dig < 10; dig++) {
            boolean isOdd = dig % 2 > 0 && dig != 1;
            int innerLen = (dig >> 1) - 1,
                innerLim = Math.max(1, (int)Math.pow(2, innerLen)),
                midPos = dig >> 1, midLim = isOdd ? 3 : 1;
            for (int edge = 1; edge < 3; edge++) {
                char[] pal = new char[dig];
                Arrays.fill(pal, '0');
                pal[0] = (char)(edge + 48);
                pal[dig-1] = (char)(edge + 48);
                if (edge == 2) {
                    innerLim = 1;
                    midLim = Math.min(midLim, 2);
                }
                for (int inner = 0; inner < innerLim; inner++) {
                    if (inner > 0) {
                        String innerStr = Integer.toString(inner, 2);
                        while (innerStr.length() < innerLen)
                            innerStr = "0" + innerStr;
                        for (int i = 0; i < innerLen; i++) {
                            pal[1+i] = innerStr.charAt(i);
                            pal[dig-2-i] = innerStr.charAt(i);
                        }
                    }
                    for (int mid = 0; mid < midLim; mid++) {
                        if (isOdd) pal[midPos] = (char)(mid + 48);
                        String palin = new String(pal);
                        long square = Long.parseLong(palin) * Long.parseLong(palin);
                        if (square > Long.parseLong(right)) return ans;
                        if (square >= Long.parseLong(left) && isPal(Long.toString(square))) ans++;
                    }
                }
            }
        }
        return ans;
    }
    
    private boolean isPal(String str) {
        for (int i = 0, j = str.length() - 1; i < j; i++, j--)
            if (str.charAt(i) != str.charAt(j)) return false;
        return true;
    }
}
```

##### ***Base3 Iteration:***

The best result for the code below is **14ms / 39.0MB** (beats 91% / 81%).
```java
class Solution {
    public int superpalindromesInRange(String left, String right) {
        int ans = 9 >= Long.parseLong(left) && 9 <= Long.parseLong(right) ? 1 : 0;
        for (int i = 1; i < 19684; i++) {
            String num = Integer.toString(i, 3);
            if (isPal(num)) {
                long square = Long.parseLong(num) * Long.parseLong(num);
                if (square > Long.parseLong(right)) return ans;
                if (square >= Long.parseLong(left) && isPal(Long.toString(square))) ans++;
            }
        }
        return ans;
    }
    
    private boolean isPal(String str) {
        for (int i = 0, j = str.length() - 1; i < j; i++, j--)
            if (str.charAt(i) != str.charAt(j)) return false;
        return true;
    }
}
```

---

#### ***C++ Code:***

##### ***Building Palindromes:***

The best result for the code below is **0ms / 5.9MB** (beats 100% / 98%).
```c++
class Solution {
public:
    int superpalindromesInRange(string left, string right) {
        int ans = 9 >= stol(left) && 9 <= stol(right) ? 1 : 0;
        for (int dig = 1; dig < 10; dig++) {
            bool isOdd = dig % 2 && dig != 1;
            int innerLen = (dig >> 1) - 1,
                innerLim = max(1, (int)pow(2, innerLen)),
                midPos = dig >> 1, midLim = isOdd ? 3 : 1;
            for (int edge = 1; edge < 3; edge++) {
                string pal(dig, '0');
                pal[0] = (char)(edge + 48);
                pal[dig-1] = (char)(edge + 48);
                if (edge == 2) innerLim = 1, midLim = min(midLim, 2);
                for (int inner = 0; inner < innerLim; inner++) {
                    if (inner > 0) {
                        string innerStr = bitset<3>(inner).to_string();
                        innerStr = innerStr.substr(3 - innerLen);
                        for (int i = 0; i < innerLen; i++) {
                            pal[1+i] = innerStr[i];
                            pal[dig-2-i] = innerStr[i];
                        }
                    }
                    for (int mid = 0; mid < midLim; mid++) {
                        if (isOdd) pal[midPos] = (char)(mid + 48);
                        long square = stol(pal) * stol(pal);
                        if (square > stol(right)) return ans;
                        if (square >= stol(left) && isPal(to_string(square))) ans++;
                    }
                }
            }
        }
        return ans;
    }
    
    bool isPal(string str) {
        for (int i = 0, j = str.length() - 1; i < j; i++, j--)
            if (str[i] != str[j]) return false;
        return true;
    }
};
```

##### ***Base3 Iteration:***

The best result for the code below is **44ms / 5.9MB** (beats 90% / 100%).
```c++
class Solution {
public:
    int superpalindromesInRange(string left, string right) {
        int ans = 9 >= stol(left) && 9 <= stol(right) ? 1 : 0;
        for (int i = 1; i < 19684; i++) {
            string num = base3(i);
            if (isPal(num)) {
                long square = stol(num) * stol(num);
                if (square > stol(right)) return ans;
                if (square >= stol(left) && isPal(to_string(square))) ans++;
            }
        }
        return ans;
    }
    
    string base3(int n, string num="") {
        if (!n) return num;
        div_t divres = div(n, 3);
        return base3(divres.quot, (char)(divres.rem + 48) + num);
    }
    
    bool isPal(string str) {
        for (int i = 0, j = str.length() - 1; i < j; i++, j--)
            if (str[i] != str[j]) return false;
        return true;
    }
};
```