# Swift Best Solution

**Author:** sairamkotha
**Votes:** 3
**Link:** [https://leetcode.com/problems/encode-and-decode-tinyurl/solutions/746219/](https://leetcode.com/problems/encode-and-decode-tinyurl/solutions/746219/)

---

```
final class Codec {
    var has = [String: String]()
    private let charStr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"

     // Encodes a URL to a shortened URL.
     func encode(_ longUrl: String) -> String {
        var rand = ""
        for _ in 0...4 {
            rand.append(charStr.randomElement()!)
        }
        has[rand] = longUrl
        return "http://tinyurl.com/\\(rand)"
     }

     // Decodes a shortened URL to its original URL.
     func decode(_ shortUrl: String) -> String {
        let lastPath = shortUrl.split(separator: "/").last!
        return has[String(lastPath)]!
     }
 }
```