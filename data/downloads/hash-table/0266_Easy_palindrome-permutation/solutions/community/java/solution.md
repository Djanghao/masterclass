# 1-4 lines Python, Ruby, C++, C, Java

**Author:** StefanPochmann
**Votes:** 110
**Link:** [https://leetcode.com/problems/palindrome-permutation/solutions/69574/](https://leetcode.com/problems/palindrome-permutation/solutions/69574/)

---

Just check that no more than one character appears an odd number of times. Because if there is one, then it must be in the middle of the palindrome. So we can't have two of them.

**Python**

First count all characters in a `Counter`, then count the odd ones.

    def canPermutePalindrome(self, s):
        return sum(v % 2 for v in collections.Counter(s).values()) < 2

**Ruby**

Using an integer as a bitset (Ruby has arbitrarily large integers).

    def can_permute_palindrome(s)
      x = s.chars.map { |c| 1 << c.ord }.reduce(0, :^)
      x & x-1 == 0
    end

**C++**

Using a bitset.

    bool canPermutePalindrome(string s) {
        bitset<256> b;
        for (char c : s)
            b.flip(c);
        return b.count() < 2;
    }

**C**

Tricky one. Increase `odds` when the increased counter is odd, decrease it otherwise.

    bool canPermutePalindrome(char* s) {
        int ctr[256] = {}, odds = 0;
        while (*s)
            odds += ++ctr[*s++] & 1 ? 1 : -1;
        return odds < 2;
    }

Thanks to jianchao.li.fighter for pointing out a nicer way in the comments to which I switched now because it's clearer and faster. Some speed test results (see comments for details):

            odds += ++ctr[*s++] % 2 * 2 - 1;       // 1499 ms mean-of-five (my original)
            odds += (ctr[*s++] ^= 1) * 2 - 1;      // 1196 ms mean-of-five
            odds += ++ctr[*s++] % 2 ? 1 : -1;      // 1108 ms mean-of-five
            odds += ((++ctr[*s++] & 1) << 1) - 1;  // 1217 ms mean-of-five
            odds += ++ctr[*s++] & 1 ? 1 : -1;      // 1132 ms mean-of-five

**Java**

Using a BitSet.

    public boolean canPermutePalindrome(String s) {
        BitSet bs = new BitSet();
        for (byte b : s.getBytes())
            bs.flip(b);
        return bs.cardinality() < 2;
    }