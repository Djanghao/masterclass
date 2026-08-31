# [C++] Simple Solution | Trie Approach | Faster than 97.74%

**Author:** Mythri_Kaulwar
**Votes:** 14
**Link:** [https://leetcode.com/problems/stream-of-characters/solutions/1610378/](https://leetcode.com/problems/stream-of-characters/solutions/1610378/)

---

Firstly, thanks for refering to my solution, in advance :)

* The idea is to store the words in reverse order in the Trie, so that finding suffix from stream of characters will be easy.
* We store the characters from the input stream in a string and start seraching the words from the end of the string.
* If a character is not found, we return false.
* If a character is found we move to the next character.
* When we reach the end of a word (We use a bool variable ```flag```, and set it to true if we reach the end of a word) we return true because a suffix of these characters is a string of a given array of strings "words".

**Time Complexity :**  O(N*x*M + M*x*Q) ; where -> N = no. of words in ```words``` and M = length of each word and Q = no. of queries from cin

**Space Complexity :** O(N*x*M)

**Code :**
```
class Node{
    Node *arr[26];
    bool flag = false;
public:
    
    bool contains(char ch){ return arr[ch-'a'] != NULL; }
    
    void put(char ch, Node *newNode){ arr[ch - 'a'] = newNode;}
    
    Node *getNext(char ch){return arr[ch-'a'];}
    
    bool getFlag(){ return flag;}
    
    void setFlag(){ flag = true;} 
	
};
class StreamChecker {
public:
    string streamString = "";
    Node *root;
    
    void insert(string s){
        Node *temp = root;
        for(int i=s.size()-1;i>=0;i--){  //insert in reverse order
            if(!temp->contains(s[i])) temp->put(s[i], new Node());
            temp = temp->getNext(s[i]);
        }
        temp->setFlag();//set flag if you reach end of the string
    }
    
    StreamChecker(vector<string>& words) {
        root = new Node();
        for(auto word : words) insert(word);
        
    }
    
    bool query(char letter) {
        streamString += letter;
        Node *temp = root;
        //search from the end of the string
        for(int i=streamString.size()-1;i>=0&&temp;i--){
            if(!temp && !temp->contains(streamString[i])) return false;
            
            temp = temp->getNext(streamString[i]);
            if(temp && temp->getFlag()) return true; //return true if you've reached the end
        }
        return false;    
    }
};
```

If you like my solution, please upvote!! It keeps me motivated to post solutions everyday!