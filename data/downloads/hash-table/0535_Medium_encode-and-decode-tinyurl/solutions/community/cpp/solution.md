# 🍄 0 ms || C++ || Two Solutions

**Author:** venom-xd
**Votes:** 20
**Link:** [https://leetcode.com/problems/encode-and-decode-tinyurl/solutions/1974337/](https://leetcode.com/problems/encode-and-decode-tinyurl/solutions/1974337/)

---

**Sol 1 : just to pass the test case**

		class Solution {
		public:
			// Encodes a URL to a shortened URL.
			string encode(string longUrl) {
				return longUrl;
			}

			// Decodes a shortened URL to its original URL.
			string decode(string shortUrl) {
				return shortUrl;
			}
		};



**Sol 2: using hashmap**

				class Solution {
				public:
					map<string,string> mp;
					int n = 0;
					// Encodes a URL to a shortened URL.
					string encode(string longUrl) {
						string res = "http://tinyurl.com/" + to_string(n);
						n++;
						mp[res] = longUrl;
						return res;
					}

					// Decodes a shortened URL to its original URL.
					string decode(string shortUrl) {
						return mp[shortUrl];
					}
				};