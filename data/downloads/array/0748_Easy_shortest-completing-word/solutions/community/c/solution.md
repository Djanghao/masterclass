# [C++] Prime numbers + modular arithmetic

**Author:** mhelvens
**Votes:** 11
**Link:** [https://leetcode.com/problems/shortest-completing-word/solutions/339569/](https://leetcode.com/problems/shortest-completing-word/solutions/339569/)

---

This is based on a [creative idea by jmcelvenny](https://leetcode.com/problems/shortest-completing-word/discuss/158110/Java-6ms-beats-100-PRIME-NUMBERS). It assigns each letter in the alphabet a prime number, and computes the product of those numbers for any given word. If the product for a word is divisible by the product for the license-plate, we know it must include all its letters. Pretty cool.

However, the way it was implemented, the product could overflow for certain long words with big letters, like `"zzzzzzzzzzzzzzz"`. Words can consist of up to 15 letters, and the number 101\xB9\u2075 requires 100 bits to store.

But I noticed that license-plates always have a length of 7 or less. And the number 101\u2077 will fit in 47 bits. So if we use a 64-bit integer, the license-plate product will never overflow. To prevent the other words' products from overflowing, we will use [modular arithmetic](https://en.wikipedia.org/wiki/Modular_arithmetic). Basically, we can stay in (**mod** `plateProduct`) at all times, because math.

```C++
class Solution {
public:
  string shortestCompletingWord(string licensePlate, vector<string>& words) {
    clean(licensePlate);
    uint64_t plateProduct = wordProductMod(licensePlate);
    string result = "1234567890123456";
    for (auto&& word : words)
      if (word.size() < result.size() && wordProductMod(word, plateProduct) == 0)
        result = move(word);
    return result;
  }
  
private:
  static constexpr int PRIMES[26] = {
     2,  3,  5,  7, 11, 13, 17, 19, 23, 29, 31, 37,  41,
    43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101
  };
  
  uint64_t wordProductMod(const string& word, uint64_t mod = UINT64_MAX) {
    uint64_t result = 1;
    for (char c : word)
      result = result * PRIMES[c-'a'] % mod;
    return result;
  }
  
  void clean(string& licensePlate) {
    int s = 0;
    for (char c : licensePlate)
      if (isalpha(c))
        licensePlate[s++] = tolower(c);
    licensePlate.resize(s);
  }
};
```