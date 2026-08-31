# 2  Approaches with O(m + n) | dp[i] <= dp[j] for i <= j

**Author:** lone17
**Votes:** 12
**Link:** [https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-ii/solutions/5788552/](https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-ii/solutions/5788552/)

---

# Approach 1: Aho-Corasick + DP + Greedy
## Idea
- `dp[i]` stores the answer for `target[...i]`
- **Important observation**: `dp[i] <= dp[j] for i <= j`
  - Why ? Because  `target[i...j]` is also a combination of prefixes of `words`.
  - If this is not clear to you, @votrubac has a nice explanation in his [solution](https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-ii/solutions/5788346/kmp). Please check it out.
- So for each position `i`, we just need to find the longest suffix of `target[...i]` which is also a prefix of `words`. The Aho-Corasick algorithm on Trie allows us to do that.
   - For more details about Aho-Corasick, see:
        - [Aho-Corasick algorithm - Algorithms for Competitive Programming](https://cp-algorithms.com/string/aho_corasick.html)
        - https://web.stanford.edu/class/archive/cs/cs166/cs166.1166/lectures/02/Slides02.pdf 
   -  Basically, it is a general case of KMP on a set of patterns. 

## Complexity
- Time complexity: $$O(m + n)$$
  - $$O(m)$$ for building the trie with $$m$$ being the total words length
  - $$O(n)$$ for calculating the dp with $$n$$ being the length of `target`

- Space complexity: $$O(m + n)$$
  - $$O(m)$$ for the trie
  - $$O(n)$$ for the dp array 
  - The dp can be done in $$O(1)$$ space, making the overal space complexity $$O(m)$$. See below for details.

![image.png](./images/0.png)




# Approach 2: Rolling Hash + Sliding Window + DP + Greedy
## Idea
- Same dp array as above.
- **We make another important observation**: 
    - If the longest match for `dp[r]` starts from `l`
    - then the longest match for `dp[r + 1]` cannot starts before `l`

## Complexity
- Time complexity: $$O(n + m)$$
    - Compute the rolling hash for all possible prefix, this is $$O(m)$$
    - Perform sliding window to find the longest postfix matched at each position, this is $$O(n)$$
- Space complexity: $$O(m + n)$$
    - $$O(m)$$ for storing all the prefix hashes
    - $$O(n)$$ for the dp array
    - The dp can be done in $$O(1)$$ space, making the overal space complexity $$O(m)$$. See below for details.

Note: This takes significantly less space than approach 1, this could be that the Trie is expensive to store, or maybe it's just that my poor implementation of Aho-Corasick is poor.
![image.png](./images/1.png)

## An even faster implementation
If you don't like the `PolynomialRollingHash` class and want to implement rolling hash directly to get the best speed possible, I also got you covered. Please check the 3rd code tab.

![image.png](./images/2.png)

# Making the space complexity O(m)
As suggested by @zsq007 in his [comment](https://leetcode.com/problems/minimum-number-of-valid-strings-to-form-target-ii/solutions/5788552/2-approaches-with-om-n-dpi-dpj-for-i-j/comments/2632054), the dp part can be done in $$O(1)$$ space.

The idea is, it's observed that the dp array would consists of spans of equal numbers, e.g. `1112222223444...`
        
=> So we can just keep track of when `l` moves to a new span, no need to store the whole dp array.

The code for rolling hash with $$O(m)$$ space is included in the 4th code tab. Note that this can also be applied for the Aho-Corasick approach, but I leave it as an excercise for the reader.



# Code
```python [AhoCorasick]
class AhoCorasick:
    def __init__(self, patterns: List[str]):
        self.trie = dict()
        self.vocab = set('qwertyuiopasdfghjklzxcvbnm')
        root = self.trie
        root['parent'] = None
        root['$'] = 0 # len at root

        # build the trie
        for p in patterns:
            cur = root
            l = 0
            for c in p:
                if c not in cur:
                    cur[c] = {'parent': cur}
                cur = cur[c]
                l += 1
                # store the length at every prefix
                cur['$'] = l

        # construct suffix
        # refer to these materials for more details about AhoCorasick
        # - https://cp-algorithms.com/string/aho_corasick.html
        # - https://web.stanford.edu/class/archive/cs/cs166/cs166.1166/lectures/02/Slides02.pdf 
        parent = None
        root['suffix'] = None
        q = deque([root])
        while q:
            for _ in range(len(q)):
                cur = q.popleft()
                for c, child in cur.items():
                    if c not in self.vocab:
                        continue

                    suffix = cur['suffix']
                    while suffix and c not in suffix:
                        suffix = suffix['suffix']
                    if suffix:
                        child['suffix'] = suffix[c]
                    else:
                        child['suffix'] = root

                    q.append(child)


    def match(self, target: str):
        cur = self.trie
        for c in target:
            while c not in cur and cur['suffix']:
                cur = cur['suffix']

            if c in cur:
                cur = cur[c]

            # the first match that ends at each position (which is also the longest)
            yield cur['$']

class Solution:
    def minValidStrings(self, words: List[str], target: str) -> int:
        trie = AhoCorasick(words)
        
        n = len(target)
        i = 0
        dp = [inf] * n + [0] # 0 at the end as the sentinel value
        for m in trie.match(target):
            # only consider the longest match
            # because dp[i] <= dp[j] for i <= j
            dp[i] = min(dp[i], dp[i - m] + 1)

            # early stop when there can't be any match
            if dp[i] == inf:
                return -1
            i += 1
        
        return dp[-2]
```

```python [Rolling Hash + Sliding Window]
class PolynomialRollingHash:
    M = 10**9 + 9
    P = 31 # 31, 53, 29791, 11111, 111111
    P_INV = pow(P, M - 2, M)
    POWS = [1]

    def __init__(self, sequence=""):
        self.sequence = deque()
        self.hash = 0
        for element in sequence:
            self.append(element)

    def get_pow(self, i) -> int:
        while len(self.POWS) <= i:
            self.POWS.append(self.POWS[-1] * self.P % self.M)

        return self.POWS[i]

    def encode(self, element) -> int:
        """
        Encode a single element

        Note: avoid producing an encoding of 0.
        E.g. a -> 0 then the hashes for a, aa, aaa, ... are all 0.
        """

        # for lower-cased str inputs
        return ord(element) - 96

    def appendleft(self, element) -> int:
        x = self.encode(element)
        p = self.get_pow(len(self.sequence))
        self.sequence.appendleft(element)

        self.hash = (x * p + self.hash) % self.M

        return self.hash

    def popleft(self) -> int:
        element = self.sequence.popleft()
        x = self.encode(element)
        p = self.get_pow(len(self.sequence))

        self.hash = (self.hash - x * p) % self.M

        return self.hash

    def append(self, element) -> int:
        x = self.encode(element)
        self.sequence.append(element)

        self.hash = (self.hash * self.P + x) % self.M

        return self.hash

    def pop(self) -> int:
        element = self.sequence.pop()
        x = self.encode(element)

        self.hash = ((self.hash - x) * self.P_INV) % self.M

        return self.hash


class Solution:
    def minValidStrings(self, words: List[str], target: str) -> int:
        # compute the hash for all prefix
        prefixes = set()
        for w in words:
            hasher = PolynomialRollingHash()
            for c in w:
                hasher.append(c)
                prefixes.add(hasher.hash)
        
        n = len(target)
        dp = [inf] * n + [0] # 0 at the end as the sentinel value

        """
        Important observation:
        
        If longest match at dp[r] starts at l 
        then longest match at dp[r + 1] cannot starts before l

        Thus a sliding window is applicable here.
        """

        l = 0
        hasher = PolynomialRollingHash()
        for r in range(n):
            # expand the window one step to the right
            hasher.append(target[r])

            # shrink the window from the left until found a valid prefix
            h = hasher.hash
            while l <= r and h not in prefixes:
                h = hasher.popleft()
                l += 1

            # early stop if no valid prefix found
            if l > r:
                return -1

            # update the dp
            dp[r] = dp[l - 1] + 1
        
        return dp[-2]
```

```python [Even faster]
class Solution:
    def minValidStrings(self, words: List[str], target: str) -> int:
        p = 31 # 31, 53, 29791, 11111, 111111
        M = 10**9 + 7
        power = [1]

        n = len(target)
        for _ in range(n + 1):
            power.append((power[-1] * p) % M)

        # compute the hash for all prefix
        prefixes = set()
        for w in words:
            m = len(w)
            h = 0
            for c in w:
                h = (h * p + (ord(c) - 96)) % M
                prefixes.add(h)
        
        dp = [inf] * n + [0] # 0 at the end as the sentinel value

        """
        Important observation:
        
        If longest match at dp[r] starts at l 
        then longest match at dp[r + 1] cannot starts before l

        Thus a sliding window is applicable here.
        """

        h = 0
        l = 0
        for r in range(n):
            # expand the window one step to the right
            h = (h * p + (ord(target[r]) - 96)) % M

            # shrink the window from the left until found a valid prefix
            while l <= r and h not in prefixes:
                x = ord(target[l]) - 96
                h = (h - (x * power[r - l])) % M
                l += 1

            # early stop if no valid prefix found
            if l > r:
                return -1

            # update the dp
            dp[r] = dp[l - 1] + 1
        
        return dp[-2]
```

```python [O(m) space]
class Solution:
    def minValidStrings(self, words: List[str], target: str) -> int:
        p = 53 # 31, 53, 29791, 11111, 111111
        M = 10**9 + 7
        power = [1]

        n = len(target)
        for _ in range(n + 1):
            power.append((power[-1] * p) % M)

        # compute the hash for all prefix
        prefixes = set()
        for w in words:
            m = len(w)
            h = 0
            for c in w:
                h = (h * p + (ord(c) - 96)) % M
                prefixes.add(h)
        

        """
        Important observation:
        
        - If longest match at dp[r] starts at l 
        then longest match at dp[r + 1] cannot starts before l

        => Thus a sliding window is applicable here.

        - Additionally, the dp array will consists of spans of equal numbers, e.g. 1112222223444...
        => So we can just keep track when l move to a new span, no need to store the whole dp array.
        """

        h = 0
        l = 0
        span_start = 0
        ans = 1
        for r in range(n):
            # expand the window one step to the right
            h = (h * p + (ord(target[r]) - 96)) % M

            # shrink the window from the left until found a valid prefix
            while l <= r and h not in prefixes:
                x = ord(target[l]) - 96
                h = (h - (x * power[r - l])) % M
                l += 1

            # early stop if no valid prefix found
            if l > r:
                return -1

            # when l moves to a new span is also when r starts the next span
            if l > span_start:
                ans += 1
                span_start = r
        
        return ans
```

*This problem helped me reach Guardian after 2 years of practicing.*