# C++ || 0ms || Short & Simple Code || ✅⭐⭐

**Author:** palashhh
**Votes:** 48
**Link:** [https://leetcode.com/problems/check-if-the-sentence-is-pangram/solutions/2712263/](https://leetcode.com/problems/check-if-the-sentence-is-pangram/solutions/2712263/)

---

***DO UPVOTE IF IT HELPS !!!!***

--------------------------------------------------------

**Intuition 1 -** Using a frequency vector store to store count and then traversing it to check for any 0 occurence.

	bool checkIfPangram(string sentence) {
        
        vector<int> freq(26);                      //create a frequency vector 
        
        for(auto ch:sentence) freq[ch-'a']++;      //update count of each character
        
        for(auto it:freq){                         //traverse freq vector
            if(it==0) return false;                //if any aplhabet's occurence is 0
        }                                          //return false;
        return true;
    }
	
---------------------------------------------------

**Intuition 2 -** Using a hash set, push all characters of the given string into hash set and check if set's size == 26
	
	bool checkIfPangram(string sentence) {
        
        unordered_set<char> st (sentence.begin(), sentence.end());         //push all characters of string into set
        return st.size()==26;                                              //check if it's size = 26 or not
	
	}
	
