# [C++] Brute Force vs. Trie Solutions Compared and Explained, ~100% Time, ~85% Space

**Author:** Ajna2
**Votes:** 6
**Link:** [https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/solutions/1078571/](https://leetcode.com/problems/longest-word-in-dictionary-through-deleting/solutions/1078571/)

---

Ah, spent hours trying to make it work with a trie-based approach, but no joy (actually it was a lot of fun, but still TLEing), then went for a more brute-forcish approach and to my surprised performed really well.

So, let's start with the most performing one, leaving the tries at the bottom: I went on to sort all the words in `d` so that they were ordered by best possible match (longer words as a first criteria, lesser lexicographical order as a second one).

I would then loop through `d` with `i` up to `lmt`, set to be `d.size()`, having also `currLen` and `j` as support variables, then:
* set `j = 0` and `currLen = d[i].size()`;
* loop through each character `c` of `s` and:
	* if `c == d[i][j]`:
		* advance `j`;
		* check if `j == currLen` and in case return `d[i]`, already knowing that it is the best possible match we can get

if we exist the loop, it means no matches were found, so we can return `""` as required by the specs.

First version:

```cpp
class Solution {
public:
    string findLongestWord(string s, vector<string>& d) {
        // sorting d
        sort(begin(d), end(d), [](string a, string b){return a.size() == b.size() && a < b || b.size() < a.size();});
        // checking each word by priority
        for (int i = 0, lmt = d.size(), j, currLen; i < lmt; i++) {
            // preparing to parse with d[i]
            j = 0, currLen = d[i].size();
            for (char c: s) {
                // advancing j for each match
                if (c == d[i][j]) {
                    j++;
                    // checking if the match is full
                    if (j == currLen) return d[i];
                }
            }
        }
        return "";
    }
};
```

Second version, no sorting and just storing the result in `res`, much faster (best time of 40ms vs 60ms with the previous):

```cpp
class Solution {
public:
    string findLongestWord(string s, vector<string>& d) {
        // support variables
        string res = "";
        // checking each
        for (int i = 0, lmt = d.size(), j, currLen; i < lmt; i++) {
            // preparing to parse with d[i]
            j = 0, currLen = d[i].size();
            for (char c: s) {
                // advancing j for each match
                if (c == d[i][j]) {
                    j++;
                    // checking if the match is full and in case updating res
                    if (j == currLen &&
                        (currLen > res.size() || currLen == res.size() && d[i] < res)
                    ) res = d[i];
                }
            }
        }
        return res;
    }
};
```

And now the painful last version of my trie-based approach, still TLEing despite a plethora of tweaks, but the most fulfilling in terms of sheer fun.

First of all the core of our trie logic, the `Trie` struct that contains:
* `word`, initialised to `-1` and marking which word will end here;
* `topWord`, initialised to `INT_MAX` and storing which is the best word that can be achieved by this node;
* `children`, an array of `26` pointers to other `Trie` structures.

Our main function has a few support variables:
* `res` will store the index of the matching word in `d`, with initial value `INT_MAX`;
* `trie` will be our root `Trie` node;
* `parts` and `tmpParts` are 2 `unordered_set`s to store our valid nodes at each iteration down below.

We will then sort `d` by decreasing order of length of the elements; if two elements have the same length, they will be sorted lexicographically - this means looping through them, as soon as we find a match, we know that is going to be the best possible match according to the specs.

With `d` sorted, we can now finally start populating our `trie` with `addTroTrie`.

This helper function we will receive the root `Trie` node `trie`, the `word` to parse and its index `id`; then we declare a support variable, `curr`, with initial value equal to `trie` and proceed to loop through each character `c` of `word`, so that:
* `c` gets normalised into the `0-25` range we need, subtracting `'a'` to its current value;
* if (`curr->children[c]` does not exist yet, we create it;
* we can now advance for sure `curr` to be `curr->children[c]`);
* we update `curr->topWord` to be the minimum between its current value and `id`.

Finally we will mark the last node as a terminal one with `curr->word = id`.

Back into the main function and with a fully populated `trie`, we can now marks its root node with a value of `-1` for its `topWord`, so to know that we will always have root inside `parts`, where we are going to insert `trie`.

Time for our main loop, running with `i` from 0 up to either `lmt` (set to be `s.size()`) or when `parts` has no more elements; we also declare the support variables `c` and `tmp` and:
* normalise `c` as above, subtracting `'a'`;
* loops through all the items `t` in `parts` and:
	* we check if `t->children[c]` exist and if so:
	* we check if it is a terminal node of some word (ie: `t->children[c]->word != -1`) and if it has a better word to offer than what we found so far (ie: `t->children[c]->word < res`) and if so we update `res` with it;
	* if it is not a terrminal node, but can still offer us a better word (`t->children[c]->topWord < res`), we push it into `tmpParts`;
	* if `res` is not `0` (ie: the best value we can get) and `t->topWord < res` (ie: that node can still give us a better solution), then we push `t` into `tmpParts`;
* finally, we replace `parts` with all its new values stored in `tmpParts`;

Once done, we return `""` if still `res == INT_MAX` (ie: no match ever found), `d[res]` otherwise :)

The code:

```cpp
struct Trie {
    int word = -1, topWord = INT_MAX;
    Trie* children[26];
};

class Solution {
private:
    void addToTrie(Trie *trie, string word, int id) {
        // support variable
        Trie *curr = trie;
        for (char c: word) {
            // normalising c
            c -= 'a';
            // creating new child if not present
            if (!curr->children[c]) curr->children[c] = new Trie();
            // advancing curr
            curr = curr->children[c];
            // updating the max length you can get from this node
            curr->topWord = min(curr->topWord, id);
        }
        curr->word = id;
    }
public:
    string findLongestWord(string s, vector<string>& d) {
        // support variables
        int res = INT_MAX;
        Trie *trie = new Trie();
        unordered_set<Trie*> parts, tmpParts;
        // sorting d
        sort(begin(d), end(d), [](string a, string b){return a.size() == b.size() && a < b || b.size() < a.size();});
        // populating the trie
        for (int i = 0, lmt = d.size(); i < lmt; i++) {
            addToTrie(trie, d[i], i);
        }
        // making sure root is always present in parts
        trie->topWord = -1;
        // initialising parts
        parts.insert(trie);
        // parsing s
        for (int i = 0, lmt = s.size(), c, tmp; i < lmt && parts.size(); i++) {
            // normalising c
            c = s[i] - 'a';
            // looping through the currently available trie pointers
            for (auto t: parts) {
                if (t->children[c]) {
                    // checking if we have a full word and if we need to update res in case
                    // the new word needs to be bigger than res
                    // or lexicographically less if they have the same length
                    if (t->children[c]->word != -1 && t->children[c]->word < res) {
                        // updating and res
                        res = t->children[c]->word;
                    }
                    // adding the child in any case to the next iteration, if it can give us
                    // a long enough string
                    if (t->children[c]->topWord < res) tmpParts.insert(t->children[c]);
                }
                // adding the original part to the next iteration,
                // again if it can give us something long enough
                if (res && t->topWord < res) tmpParts.insert(t);
            }
            // updating parts
            parts = tmpParts;
        }
        return res == INT_MAX ? "" : d[res];
    }
};
```