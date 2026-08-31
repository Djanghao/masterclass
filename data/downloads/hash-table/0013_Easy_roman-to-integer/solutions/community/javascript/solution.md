# 【Video】Looping two characters at a time.

**Author:** niits
**Votes:** 512
**Link:** [https://leetcode.com/problems/roman-to-integer/solutions/5848685/](https://leetcode.com/problems/roman-to-integer/solutions/5848685/)

---

# Intuition
Looping two characters at a time.

# Solution Video

https://youtu.be/yUYp0LlVXH4

### \u2B50\uFE0F\u2B50\uFE0F Don't forget to subscribe to my channel! \u2B50\uFE0F\u2B50\uFE0F

**\u25A0 Subscribe URL**
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

Subscribers: 9,135
Thank you for your support!

---

# Approach

The description includes the example of `27`. **If the values are written from left to right in descending order, simply adding each number one by one will give the result.**

```
XXVII
\u2193
10(X) + 10(X) + 5(V) + 1(I) + 1(I) = 27
```
```
LVIII
\u2193
50(L) + 5(V) + 1(I) + 1(I) + 1(I) = 58
```
But numbers like `4` and `9` are represented as a single number **using two Roman numerals**.

```
IV = 4
IX = 9
```
---

\u2B50\uFE0F Points

Basically, you just need to convert either one or two characters into a number to get the answer.

---

##### How do we determine if it\u2019s one or two characters?

Since a single number can use up to two Roman characters, **we loop through the string two characters at a time, shifting by one each time**.

Let\u2019s take a look at this example.
```
Input: s = "XIV"
```
In the first loop, we use `X` and `I`. In this case, the second character `I` is less than `X`. `I` is `1` and `X` is `10`. That means we can simply add `X` to result variable, **because `10 \u2192 1` is a descending order**. It's the same as `27` or `58` above.

```
res = 10
```
Next, we use `I` and `V`. In this case, the second character `V` is greater than `I`, because `V` is `5` and `I` is `1`.

The description says "there are six instances where subtraction is used."

```
IV = 4
IX = 9
XL = 40
XC = 90
CD = 400
CM = 900
```
Look at all the first characters and the second characters. The first characters are less than the second characters.

```
I(1) + V(5) = 4
I(1) + X(10) = 9
X(10) + L(50) = 40
X(10) + C(100) = 90
C(100) + D(500) = 400
C(100) + M(1000) = 900
```
The current first character is `I` and the second character is `V`, so we are using two Roman characters to form a single number.

In this case, we subtract `I`(= `1`) from result variable, because in the next loop, we will add `V`(= `5`), so the total of `I` and `V` will be `4` in the end.

```
res = 9
```
The next two number is `V` and nothing(= out of bounds), so we stop iteration.

The last point is that as I told you, we should add `V` before return the answer, because one of values was out of bounds, that's why we couldn't add the last Roman chartacter which is `V`.

```
return res + 5
```
Before we start looping, we have `HashMap` to combine Roman and Integer, so that we can convert Roman to Integer easily.

In the solution code,
```
return res + roman[s[-1]]

s is input string
roman is HashMap
```

---

https://youtu.be/bU_dXCOWHls

# Complexity
- Time complexity: $$O(n)$$
`n` is the length of the input string.

- Space complexity: $$O(1)$$
The dictionary `roman` always has a fixed size of seven key-value pairs, regardless of the input size, so it uses constant space.

# Code
```python []
class Solution:
    def romanToInt(self, s: str) -> int:
        res = 0
        roman = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }

        for a, b in zip(s, s[1:]):
            if roman[a] < roman[b]:
                res -= roman[a]
            else:
                res += roman[a]

        return res + roman[s[-1]] 
```
```javascript []
var romanToInt = function(s) {
    let res = 0;
    const roman = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    for (let i = 0; i < s.length - 1; i++) {
        if (roman[s[i]] < roman[s[i + 1]]) {
            res -= roman[s[i]];
        } else {
            res += roman[s[i]];
        }
    }

    return res + roman[s[s.length - 1]];    
};
```
```java []
class Solution {
    public int romanToInt(String s) {
        int res = 0;
        Map<Character, Integer> roman = new HashMap<>();
        roman.put('I', 1);
        roman.put('V', 5);
        roman.put('X', 10);
        roman.put('L', 50);
        roman.put('C', 100);
        roman.put('D', 500);
        roman.put('M', 1000);

        for (int i = 0; i < s.length() - 1; i++) {
            if (roman.get(s.charAt(i)) < roman.get(s.charAt(i + 1))) {
                res -= roman.get(s.charAt(i));
            } else {
                res += roman.get(s.charAt(i));
            }
        }

        return res + roman.get(s.charAt(s.length() - 1));        
    }
}
```
```C++ []
class Solution {
public:
    int romanToInt(string s) {
        int res = 0;
        unordered_map<char, int> roman = {
            {'I', 1},
            {'V', 5},
            {'X', 10}, 
            {'L', 50},
            {'C', 100},
            {'D', 500},
            {'M', 1000}
        };

        for (int i = 0; i < s.size() - 1; i++) {
            if (roman[s[i]] < roman[s[i + 1]]) {
                res -= roman[s[i]];
            } else {
                res += roman[s[i]];
            }
        }

        return res + roman[s[s.size() - 1]];        
    }
};
```

---

Thank you for reading my post. Please upvote it and don't forget to subscribe to my channel!

### \u2B50\uFE0F Subscribe URL
http://www.youtube.com/channel/UC9RMNwYTL3SXCP6ShLWVFww?sub_confirmation=1

### \u2B50\uFE0F Twitter
https://twitter.com/CodingNinjaAZ

### \u2B50\uFE0F Related question 
#12 - Integer To Roman

https://youtu.be/SFDETXM6-6Y
