# JS, Python, Java, C++ | Easy Map Solution w/ Explanation

**Author:** sgallivan
**Votes:** 231
**Link:** [https://leetcode.com/problems/encode-and-decode-tinyurl/solutions/1110551/](https://leetcode.com/problems/encode-and-decode-tinyurl/solutions/1110551/)

---

*(Note: This is part of a series of Leetcode solution explanations. If you like this solution or find it useful,* ***please upvote*** *this post.)*

---

#### ***Idea:***

Since the characters we can use in the short url are limited just as much as the characters that can be used to make up the long url, there's not much legitimate compression that can realistically be done.

The only generally feasible option is to use a **map** to act as a lookup table for codes and either use a hashing function or a random code generator to generate the **code**. Since we're storing the information anyway (hashes only work one-way), we might as well just use a random code generator (**getCode()**).

Based on the example, we can create a function that creates a random **6**-character code, using the **62 alphanumeric characters**. We should make sure to come up with a new code in the rare case that we randomly create a duplicate.

To avoid having to **encode** the same url twice with different random codes, we can create a reverse lookup table (**urlDB**) to store already encoded urls.

The **decode** function will just **return** the entry from the code map (**codeDB**).

---

#### ***Implementation:***

Python has predefined alphanumeric strings, so we can take advantage of that.

---

#### ***Javascript Code:***

The best result for the code below is **80ms / 40.3MB** (beats 99% / 61%).
```javascript
let codeDB = new Map(), urlDB = new Map()
const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

const getCode = () => {
    let code = new Array(6).fill()
        .map(_ => chars.charAt(~~(Math.random() * 62)))
    return "http://tinyurl.com/" + code.join("")
}

const encode = longUrl => {
    if (urlDB.has(longUrl)) return urlDB.get(longUrl)
    let code = getCode()
    while (codeDB.has(code)) code = getCode()
    codeDB.set(code, longUrl)
    urlDB.set(longUrl, code)
    return code
}

const decode = shortUrl => codeDB.get(shortUrl)
```

---

#### ***Python Code:***

The best result for the code below is **24ms / 14.1MB** (beats 98% / 82%).
```python
class Codec:
    codeDB, urlDB = defaultdict(), defaultdict()
    chars = string.ascii_letters + string.digits

    def getCode(self) -> str:
        code = ''.join(random.choice(self.chars) for i in range(6))
        return "http://tinyurl.com/" + code
 
    def encode(self, longUrl: str) -> str:
        if longUrl in self.urlDB: return self.urlDB[longUrl]
        code = self.getCode()
        while code in self.codeDB: code = getCode()
        self.codeDB[code] = longUrl
        self.urlDB[longUrl] = code
        return code

    def decode(self, shortUrl: str) -> str:
        return self.codeDB[shortUrl]
```

---

#### ***Java Code:***

The best result for the code below is **3ms / 38.7MB** (beats 83% / 99%).
```java
public class Codec {
    Map<String, String> codeDB = new HashMap<>(), urlDB = new HashMap<>();
    static final String chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    private String getCode() {
        char[] code = new char[6];
        for (int i = 0; i < 6; i++) 
            code[i] = chars.charAt((int)(Math.random() * 62));
        return "http://tinyurl.com/" + String.valueOf(code);
    }
    
    public String encode(String longUrl) {
        if (urlDB.containsKey(longUrl)) return urlDB.get(longUrl);
        String code = getCode();
        while (codeDB.containsKey(code)) code = getCode();
        codeDB.put(code, longUrl);
        urlDB.put(longUrl, code);
        return code;
    }

    public String decode(String shortUrl) {
        return codeDB.get(shortUrl);
    }
}
```

---

#### ***C++ Code:***

The best result for the code below is **0ms / 7.3MB** (beats 100% / 42%).
```c++
class Solution {
public:
    unordered_map<string, string> codeDB, urlDB;
    const string chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    
    string getCode() {
        string code = "";
        for (int i = 0; i < 6; i++) code += chars[rand() % 62];
        return "http://tinyurl.com/" + code;
    }
    
    string encode(string longUrl) {
        if (urlDB.find(longUrl) != urlDB.end()) return urlDB[longUrl];
        string code = getCode();
        while (codeDB.find(code) != codeDB.end()) code = getCode();
        codeDB[code] = longUrl;
        urlDB[longUrl] = code;
        return code;
    }

    string decode(string shortUrl) {
        return codeDB[shortUrl];
    }
};
```