# [C++] 40ms Trie-based Solution Explained, 100% Time, ~6% Space

**Author:** Ajna
**Votes:** 8
**Link:** [https://leetcode.com/problems/vowel-spellchecker/solutions/1122953/](https://leetcode.com/problems/vowel-spellchecker/solutions/1122953/)

---

Ah, I worked on this one for a long while, constanly polishing it since I really wanted to solve it with a trie instead of more brute approaches, still not sure it would have paid off, given the sample size.

And while I might get worse times with the tests, sometimes even of 60ms, I managed to snatch a pretty good time with it and thus I feel now that my efforts were rewarded :)

In order to proceed, we will declare first of all externally a collection of values for the vowels, all normalised in the `0 - 52` range, as we will do [spoiler!] with our small helper function `convertChar`, that takes a character and turns into  a `0 - 25` value if it is in the `'a' - 'z'` range or `25 - 51` if it is in the `'A' - 'Z'` range.

We will also declare a `Trie` structure, with 3 properties:
* `eow` is a boolean, defaulted to `false` that marks whether or not the current node is the end of a word;
* `children`, an array of `52` `Trie` pointers to the next nodes from the current one (if any), matching alphabetical characters as discussed above while mentioning `convertChar`;
* `pos` is a pointer referring to which element of `wordlist` the node points, provided it is an end of word.

At class level, we will declare 3 integer variables, our pointers `perfectMatch`, `match` and `vowelMatch` we will use when searching in our trie.

In the main function, we will create a few more support variables:
* `res` is our accumulator variable where we will put all the matches of every query;
* `root` and `curr` are `Trie` pointers, with the first initialised to be an empty `Trie`.

And said empty `Trie` we will go to populate next, running witht pointer `i` through `wordlist` and:
* assign the value of the current string to `word`;
* set `curr` to point initially to `root`;
* loop through each character `c` of `word` and:
	* convert `c` to be an appropriate index with `convertChar`, as mentioned above;
	* if `curr->children[c]` does not exist, we create it;
	* advance `curr` to be `curr->children[c]`.
* if it is a word we already saw (ie: `curr->eow == true`), we just `continue`;
* otherwise we mark it as finalised (setting `curr->eow`) and set `curr->pos` to be `i`.

And now time to search through the trie. For each `query` in `queries`, we will:
* set `perfectMatc`, `match` and `vowelMatch` all to be `INT_MAX`;
* run `checkQuery` passing `root` and `query` down to it (more on it below);
* compute a new string `tmp`, checking if we modified any of `perfectMatc`, `match` or `vowelMatch` (in this order);
* push `tmp` into `res`.

The last (and more complex) bit of our logic is indeed `checkQuery`, that takes a total of 5 parameters:
* `root`, the current starting node in our trie;
* `query`, the string to search;
* `pos`, an optional pointer to which character of `query` we are currently searching - defaulted to `0`;
* `isPerfect` and `originalVowels`, optional booleans defaulted to `true`.

In this function we will:
* `return` if `root` is `NULL` (ie: we reached a dead-end);
* if we finished parsing `query` (ie: `pos == query.size()`) and the current node is also an end of word (ie: `root->eow`), we will:
	* set `perfectMatch` if `isPerfect` is still `true`;
	* update `match` to be the minimum between its current value and `root->pos` if `originalVowels` is still `true`;
	* update `vowelMatch` to be the minimum between its current value and `root->pos` otherwise;
	* `return`;
* assign the normalised value of `query[pos++]` to `c` (notice we increment `pos` here);
* check for exact matches, invoking recursively this function as `checkQuery(root->children[c], query, pos, isPerfect, originalVowels)`;
* check if in any case we ever encountered a `perfectMatch` and, in case, `return`;
* convert `c` to its lower/uppercase equivalent and assigning it to `luc`;
* check for case insensitive matches, invoking recursively this function as `checkQuery(root->children[luc], query, pos, false, originalVowels)` (notice that these calls will happen once we are done checking all the perfect path and that even just one item with `isPerfect` set to `false` will propagate it to the remaining calls);
* check if in any case we ever encountered a `match` and, in case, `return`;
* check if `c` was referring to a vowel and, in case:
	* loop through all the vowel codes (`vc`) in `vowels` and:
		* if it is a vowel we already used as either lower- or uppercase, `continue`;
		* otherwise, invoke recursively this function as `checkQuery(root->children[vc], query, pos, false, false)`.

Once done, we can finally return the fully populated `res` :)

The code:

```cpp
static constexpr int vowels[10] = {26, 30, 34, 40, 46, 0, 4, 8, 14, 20};

struct Trie {
    bool eow = false;
    Trie *children[52];
    int pos;
};

class Solution {
    int perfectMatch, match, vowelMatch;
    int convertChar(char c) {
        // converting c to be in the 0 - 51 range
        return c > 'Z' ? c - 'a' : c - '\\'';
    }
    void checkQuery(Trie *root, string query, int pos = 0, bool isPerfect = true, bool originalVowels = true) {
        // exit condition: no node in the trie
        if (!root) return;
        if (pos == query.size() && root->eow) {
            if (isPerfect) perfectMatch = root->pos;
            else if (originalVowels) match = min(match, root->pos);
            else vowelMatch = min(vowelMatch, root->pos);
            return;
        }
        char c = convertChar(query[pos++]);
        // checking exact match
        checkQuery(root->children[c], query, pos, isPerfect, originalVowels);
        // exit condition: found a perfect match
        if (perfectMatch != INT_MAX) return;
        // checking case insensitive matches
        // uppercase => lowercase or lowercase => uppercase
        char luc = c > 25 ? c - 26 : c + 26;
        checkQuery(root->children[luc], query, pos, false, originalVowels);
        // exit condition: found a case insensitive match
        if (match != INT_MAX) return;
        // vowel-swap matches
        if (any_of(vowels, vowels + 10, [c](char e){return e == c;})) {
            for (char vc: vowels) {
                // ignoring the vowel we already tested in either case
                if (vc == c || vc == luc) continue;
                checkQuery(root->children[vc], query, pos, false, false);
            }
        }
        
    }
public:
    vector<string> spellchecker(vector<string>& wordlist, vector<string>& queries) {
        // support variables
        vector<string> res;
        Trie *root = new Trie(), *curr;
        // populating root
        for (int i = 0, lmt = wordlist.size(); i < lmt; i++) {
            string word = wordlist[i];
            curr = root;
            for (char c: word) {
                c = convertChar(c);
                if (!curr->children[c]) curr->children[c] = new Trie();
                curr = curr->children[c];
            }
            // moving on if we alredy encountered this word
            if (curr->eow) continue;
            // marking end of word and position of the word
            curr->eow = true;
            curr->pos = i;
        }
        for (string query: queries) {
            perfectMatch = INT_MAX, match = INT_MAX, vowelMatch = INT_MAX;
            checkQuery(root, query);
            string tmp = perfectMatch != INT_MAX ? wordlist[perfectMatch]
                : match != INT_MAX ? wordlist[match]
                : vowelMatch != INT_MAX ? wordlist[vowelMatch] : "";
            res.push_back(tmp);
        }
        return res;
    }
};
```

The brag:
![image](./images/0.png)

Furher improved solution removing the `eow` flag (just using `pos` for that, with a default value of `-1` meaning the node is not an end of word) and `res` already set to be of the right size - it seems minor, but that saves 2MB on the whole test run:

```cpp
static constexpr int vowels[10] = {26, 30, 34, 40, 46, 0, 4, 8, 14, 20};

struct Trie {
    Trie *children[52];
    int pos = -1;
};

class Solution {
    int perfectMatch, match, vowelMatch;
    int convertChar(char c) {
        // converting c to be in the 0 - 51 range
        return c > 'Z' ? c - 'a' : c - '\\'';
    }
    void checkQuery(Trie *root, string query, int pos = 0, bool isPerfect = true, bool originalVowels = true) {
        // exit condition: no node in the trie
        if (!root) return;
        if (pos == query.size() && root->pos != -1) {
            if (isPerfect) perfectMatch = root->pos;
            else if (originalVowels) match = min(match, root->pos);
            else vowelMatch = min(vowelMatch, root->pos);
            return;
        }
        char c = convertChar(query[pos++]);
        // checking exact match
        checkQuery(root->children[c], query, pos, isPerfect, originalVowels);
        // exit condition: found a perfect match
        if (perfectMatch != INT_MAX) return;
        // checking case insensitive matches
        // uppercase => lowercase or lowercase => uppercase
        char luc = c > 25 ? c - 26 : c + 26;
        checkQuery(root->children[luc], query, pos, false, originalVowels);
        // exit condition: found a case insensitive match
        if (match != INT_MAX) return;
        // vowel-swap matches
        if (any_of(vowels, vowels + 10, [c](char e){return e == c;})) {
            for (char vc: vowels) {
                // ignoring the vowel we already tested in either case
                if (vc == c || vc == luc) continue;
                checkQuery(root->children[vc], query, pos, false, false);
            }
        }
        
    }
public:
    vector<string> spellchecker(vector<string>& wordlist, vector<string>& queries) {
        // support variables
        vector<string> res(queries.size());
        Trie *root = new Trie(), *curr;
        // populating root
        for (int i = 0, lmt = wordlist.size(); i < lmt; i++) {
            string word = wordlist[i];
            curr = root;
            for (char c: word) {
                c = convertChar(c);
                if (!curr->children[c]) curr->children[c] = new Trie();
                curr = curr->children[c];
            }
            // moving on if we alredy encountered this word
            if (curr->pos != -1) continue;
            // marking end of word and position of the word
            curr->pos = i;
        }
        for (int i = 0, lmt = queries.size(); i < lmt; i++) {
            string query = queries[i];
            perfectMatch = INT_MAX, match = INT_MAX, vowelMatch = INT_MAX;
            checkQuery(root, query);
            string tmp = perfectMatch != INT_MAX ? wordlist[perfectMatch]
                : match != INT_MAX ? wordlist[match]
                : vowelMatch != INT_MAX ? wordlist[vowelMatch] : "";
            res[i] = tmp;
        }
        // creating res already of the right size;
        return res;
    }
};
```