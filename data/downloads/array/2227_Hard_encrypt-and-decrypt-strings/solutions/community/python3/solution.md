# [Python] Hashmap & Counter Solution with Detailed Explanations, Very Clean & Concise

**Author:** xil899
**Votes:** 26
**Link:** [https://leetcode.com/problems/encrypt-and-decrypt-strings/solutions/1908833/](https://leetcode.com/problems/encrypt-and-decrypt-strings/solutions/1908833/)

---

This is the first time I get AK over the past few months. I would like to share my solution with the LC community.

**Intuition**
The given constraints are not large, we can pre-compute all necessary quantities only once.


**Explanation**
We can pre-compute two hashmaps as follows:

(1) The first hashmap `self.hashmap` is a encryption map - we map each key with their encrypted values, which is straightforward.
(2) The second hashmap `self.dictmap` is a `Counter` - we encrypt each word in the given `dictionary` and use the encrypted string as the key and increase the counter by 1. As such, we have solved the duplication problem of the `decrypt()` method.

**Complexity**
Time in `__init__()`: `O(sum(dictionary[i].length))`, which gets amortized over later function calls
Space in `__init__()`: `O(dictionary.length)`
Time in `encrypt()`: `O(word1.length)`
Space in `encrypt()`: `O(1)` (if not counting the `output` string)
Time in `decrypt()`: `O(1)`
Space in `decrypt()`: `O(1)`


Below is my in-contest solution. Please upvote if you find this solution helpful. Thanks!
```
class Encrypter:

    def __init__(self, keys: List[str], values: List[str], dictionary: List[str]):
        self.hashmap = dict()
        for i in range(len(keys)):
            self.hashmap[keys[i]] = values[i]
        self.dictmap = defaultdict(int)
        for word in dictionary:
            self.dictmap[self.encrypt(word)] += 1

    def encrypt(self, word1: str) -> str:
        output = ''
        for char in word1:
            output += self.hashmap[char]
        return output

    def decrypt(self, word2: str) -> int:
        return self.dictmap[word2]
```

**Follow up** (for self-learning purpose): The `encrypt()` method can be written as follows to handle more general test cases (given in the Comments section).
```
def encrypt(self, word1: str) -> str:
    output = ''
    for char in word1:
        if char in self.hashmap:
            output += self.hashmap[char]
        else:
            return ''
    return output
```