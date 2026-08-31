# [Java/C++/Python/Js] 1-Line Strip

**Author:** lee215
**Votes:** 25
**Link:** [https://leetcode.com/problems/remove-trailing-zeros-from-a-string/solutions/3570271/](https://leetcode.com/problems/remove-trailing-zeros-from-a-string/solutions/3570271/)

---

# **Explanation**
Strip trailing characters by regax replacing.
<br>

# **Complexity**
Time `O(n)`
Space `O(n)` for output
<br>

**Java**
```java
    public String removeTrailingZeros(String num) {
        return num.replaceAll("0+$", "");
    }
```

**C++**
```cpp
    string removeTrailingZeros(string num) {
        return regex_replace(num, regex("0+$"), "");
    }
```

**Python**
```py
    def removeTrailingZeros(self, num: str) -> str:
        return num.rstrip('0')
```

**JavaScript**
```js
	var removeTrailingZeros = function(num) {
	    return num.replace(/0+$/, '');
	};
```

**Go**
```go
	func removeTrailingZeros(num string) string {
	    return strings.TrimRight(num, "0")
	}
```
