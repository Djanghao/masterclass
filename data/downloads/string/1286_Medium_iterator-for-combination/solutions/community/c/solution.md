# C++ / Python Three Simple and Clean Solutions, Bitmasking / Pre-Calculating

**Author:** YehudisK
**Votes:** 25
**Link:** [https://leetcode.com/problems/iterator-for-combination/solutions/1576758/](https://leetcode.com/problems/iterator-for-combination/solutions/1576758/)

---

**Solution I - Bitmasking**
We use a bitmask to inticate which letters to use at each combination.
The mask is the length of the chars (which is max 15 - int) and the idea is that we should always have `combinationLength` set bits.
So we start with the leftmost bit set, because we want to start with the largest value.
Then, at each iteration, we decrement `bitmask` until we have exactly `combinationLength` set bits, and then we just loop through the `chars` and add the ones with the corresponding bit set.
```
class CombinationIterator {
public:
    CombinationIterator(string characters, int combinationLength) : 
                n(characters.size()), comb_len(combinationLength), chars(characters) {
        bitmask = (1 << n) - 1;
    }
    
    string next() {
        while (bitmask >= 0 && countSet(bitmask) != comb_len) bitmask--;
        
        string res = "";
        for (int i = 0; i < n; i++) {
            if (bitmask & (1 << (n - i - 1))) res += chars[i];
        }
        
        bitmask--;
        return res;
    }
    
    bool hasNext() {
        while (bitmask >= 0 && countSet(bitmask) != comb_len) bitmask--;
        return bitmask >= 0;
    }
    
    int countSet(int mask) {
        int count = 0;
        while (mask) {
            count += mask & 1;
            mask >>= 1;
        }
        return count;
    }
    
private:
    int bitmask, n, comb_len;
    string chars;
};
```
****
**Solution II - Backtracking**
We generate all combinations in advance, using classic backtracking.
In each iteration, we add the next number ito `curr`, send it as is to `backtrack`, and then remove it and try to add the next number.
When the combination reaches the size `n` = `combinationLength`, we add it to `combs`.
We keep an iterator `i` to know where's the next combination and when we're at the end and we don't have a next.
```
class CombinationIterator {
public:
    void backtrack(string curr, string chars, int n, int start) {
        if (curr.size() == n) {
            combs.push_back(curr);
            return;
        }
        
        for (int i = start; i < chars.size(); i++) {
            curr.push_back(chars[i]);
            backtrack(curr, chars, n, i+1);
            curr.pop_back();
        }
    }
    
    CombinationIterator(string characters, int combinationLength) {
        backtrack("", characters, combinationLength, 0);
    }
    
    string next() {
        return combs[i++];
    }
    
    bool hasNext() {
        return i < combs.size();
    }
    
private:
    vector<string> combs;
    int i = 0;
};
```
****
**Solution III - Using Built-in**
In this solution, we are simply using a built-in function called `combinations`.
We use it to generate all combinations.
```
class CombinationIterator:
    def __init__(self, characters: str, combinationLength: int):
        self.allCombinations = list(combinations(characters, combinationLength))
        self.count = 0

    def next(self) -> str:
        self.count += 1
        return "".join(self.allCombinations[self.count-1])
        
    def hasNext(self) -> bool:
        return self.count < len(self.allCombinations)
```
**Like it? please upvote!**