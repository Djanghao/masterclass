# Python3 proper https:// tin.e/ URL

**Author:** Tallicia
**Votes:** 17
**Link:** [https://leetcode.com/problems/encode-and-decode-tinyurl/solutions/1975423/](https://leetcode.com/problems/encode-and-decode-tinyurl/solutions/1975423/)

---

using the md5 hashing to provide a proper tiny(er)url.

Most implementations being posted are not even valid URLs, like wtf?

Properly is like 3 extra lines compared to the just return the given value. smh


```
import hashlib


class Codec:
    def __init__(self):
        self.urls = {}

    def hash_to(self, s):
        return 'https://tin.e/' + hashlib.md5(s.encode()).hexdigest()

    def encode(self, long_url: str) -> str:  # Encodes a URL to a shortened URL.
        hash_key = self.hash_to(long_url)
        self.urls[hash_key] = long_url
        return hash_key
        
    def decode(self, short_url: str) -> str:  # Decodes a shortened URL to its original URL.
        return self.urls[short_url]
```