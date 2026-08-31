# [C++] Most Elegant Solution, using Trie (with Explanation)

**Author:** leetcodegrindtt
**Votes:** 9
**Link:** [https://leetcode.com/problems/design-search-autocomplete-system/solutions/437706/](https://leetcode.com/problems/design-search-autocomplete-system/solutions/437706/)

---

```
////////////////////////////////
/// Section 1, Make the Trie ///
////////////////////////////////

struct TrieNode {
  bool isWord;
  // Store the entire word that we inserted via the Trie into
  // the node, if the node represents the end of the word we are inserting.
  string entireWord;

  // Space is the 27th character. We need a space. 
  TrieNode* Children[27]; 
  TrieNode() {
      // Something isn't a word until we define it as one.
      isWord = false; 
      // String will be filled with junk.
      for (int i{}; i < 27; ++i) {
          // Fill the node with null pointers.
          Children[i] = nullptr; 
      }
  }
};


class Trie {
private:
    // This will point to an array of our first 27 letters
    TrieNode* root; 
    
public:

 \xA0  Trie() {
        root = new TrieNode();
    }
    
    /** Inserts a word into the trie. */
    void insert(string word) {
        // Don't insert a word that exists. Waste of time.
        if (search(word)) return;

        int length = word.length();
        int num; // Will contain the integer representation of our character of interest
        TrieNode* current = root;
        for (int i{}; i < length; ++i) {
            if (word[i] == ' ') {
                num = 26;
            } else {
                num = word[i] - 'a'; // Find the integer value of this letter.
            }
            if (current->Children[num] == nullptr) { // If it doesn't exist in the root, make it
                current->Children[num] = new TrieNode();
            }
            current = current->Children[num]; // Move to the next letter
        }
        current->isWord = true; // This signals that the characters we just traversed in sequence make up a word
        current->entireWord = word; // Set the last character in the sentence to hold the entire sentence. :P
        
        // cout<< "[INFO] Successfully inserted our new word: " << current->entireWord << endl;

    }
    
    /** Returns if the word is in the trie. */
    bool search(string word) {
        int length = word.length();
        int num;
        TrieNode* current = root;
        for (int i{}; i < length; ++i) {
            if (word[i] == ' ') {
                num = 26;
            } else {
                num = word[i] - 'a'; // Find the integer value of this letter.
            }
            if (current->Children[num] == nullptr) { 
                // If the letter doesn't exist, return false
                return false;
            } else {
                // else it exists and we go to it
                current = current->Children[num]; 
            }
        } 
        // By the end, we are at the last character of a sequence of characters, if this was marked as a word
        // then return true, else it is a subsequene of another word, so return false;
        return current->isWord;
    }
    
    /** Returns if there is any word in the trie that starts with the given prefix. */
    bool startsWith(string prefix) {
        int length = prefix.length();
        int num;
        TrieNode* current = root;
        for (int i{}; i < length; ++i) {
            if (prefix[i] == ' ') {
                num = 26;
            } else {
                num = prefix[i] - 'a'; // Find the integer value of this letter.
            }
            // If the letter doesn't exist, return false
            if (current->Children[num] == nullptr) { 
                return false;
            } else {
                // else it exists and we go to it
                current = current->Children[num]; 
            }
        }
        // Doesn't matter if the letter we are on is a word or not.
        return true; 
    }

    /** Autocomplete given a prefix **/
    void autoComplete(vector<string>& ourResults, TrieNode* ourPointer) {

        if (!ourPointer) return;

        // Go beast-mode on recursion.
        if (ourPointer->isWord) {
            ourResults.push_back(ourPointer->entireWord);
        }

        // Go across the alphabet.
        for (int num{}; num < 27; num++) {
            autoComplete(ourResults, ourPointer->Children[num]);
        }

        return;
    }


    /** Returns all words that start with a given prefix **/
    vector<string> returnPrefixedWords(const string& prefix) {

        // cout<< "[INFO] Searching for words with the following prefix: " << prefix << endl;

        // In the case that no words start with this prefix return an empty list.
        if (!startsWith(prefix)) return {};

        // Otherwise, we need to do some work, we know that thre prefix exists
        // so lets get to the last character of it before we look for 
        // all the words that hang off this prefix.
        vector<string> ourWords;
        int length = prefix.length();
        int num;
        TrieNode* current = root;
        for (int i{}; i < length; ++i) {
            if (prefix[i] == ' ') {
                num = 26;
            } else {
                num = prefix[i] - 'a'; // Find the integer value of this letter.
            }
            current = current->Children[num]; 
        }

        autoComplete(ourWords, current);

        return ourWords;
    }
};

//////////////////////////////////
/// Section 2, Make the System ///
//////////////////////////////////


class AutocompleteSystem {
private:
    Trie* ourTrie;
    unordered_map<string, int> histFreq;
    
public:
    AutocompleteSystem(vector<string>& sentences, vector<int>& times) {
        ourTrie = new Trie();

        for (int i{}; i < times.size(); i++) {
            histFreq[sentences[i]] = {times[i]};
            ourTrie->insert(sentences[i]);
        }
    }

    vector<string> filterTopX(const vector<string>& ourResults, int x) {

        auto ourFilter = [](const pair<string, int>& A, const pair<string, int>& B) {

                return 
                    A.second > B.second || 
                    (A.second == B.second && lexicographical_compare(A.first.begin(), A.first.end(), B.first.begin(), B.first.end()));

        };

        priority_queue<pair<string, int>, vector<pair<string, int>>, decltype(ourFilter)> topX(ourFilter);

        // k log (k) sorting operation as opposed to n log(n) giving that we are popping after the kth element
        // and hence only keeping k elements in
        for (const auto& str : ourResults) {
            topX.push({str, histFreq[str]});
            if (topX.size() == x + 1) topX.pop();
        }

        vector<string> sortedRes;
        sortedRes.reserve(x);

        while (!topX.empty()) {
            sortedRes.push_back(topX.top().first);
            topX.pop();
        }

        // Because we made a min heap, popping off the least frequent elements in the wrong lexicogrpahical order
        // which resided on the top, our vector is in the reverse order. We need to return it in the proper order
        // so we reverse it back.
        return {sortedRes.rbegin(), sortedRes.rend()};

    }
    
    vector<string> input(char c) {
       static string ourStr; 
       ourStr += c;

       // Search is over.
       if (!ourStr.empty() && ourStr.back() == '#') {
           // Get rid of the last character
           ourStr.pop_back();
            // Add search to historical dictionary, and increment its count
           histFreq[ourStr]++;
           // Insert the string into our trie.
           ourTrie->insert(ourStr);
           // Reset the string for the next search.
           ourStr.clear();
           return {};
       }

        // Store all results
        vector<string> ourResults = ourTrie->returnPrefixedWords(ourStr);

       return filterTopX(ourResults, 3);
    }
};