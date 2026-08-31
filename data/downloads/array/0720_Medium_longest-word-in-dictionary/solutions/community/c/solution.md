# C++ Trie Solution with Explanation

**Author:** siwaniagrawal18
**Votes:** 16
**Link:** [https://leetcode.com/problems/longest-word-in-dictionary/solutions/795469/](https://leetcode.com/problems/longest-word-in-dictionary/solutions/795469/)

---

When using Trie I personally don't understand why the question has been labelled as easy.
Anyways upvote if you like the explanation.
```
 class Trie{
        public:
		//Initializing Trie
        Trie* child[26]={NULL};
        bool end;
    };
class Solution {
public:
	//Stores the final answer string
    string ans="";
	
	//Inserts the ith word int the Trie
    void insert(string w, Trie* root){
	
		//Stores the current word only if it's prefix is present
        string s="";
        int n=w.length();
        Trie* cur=root;
		
        for(int i=0;i<n;i++){
			if(i==n-1)s+=w[i]; //stores the first char or the last char in the temporary string s
            int k=w[i]-'a';
            if(cur->child[k]==NULL){
                if(i!=n-1)break; //if the char is not present and it isn't the last char of the word
				//then no need to insert it. EX: {"a","ad","adpf"} we won't be inserting adpf 
				//as there is no "adp"
                cur->child[k]=new Trie(); //creates a new child trie
            }
            else s+=w[i]; //if prefix is present we add it in the string s
            cur=cur->child[k];
        }
		
        if(s.length()>ans.length())ans=s; //if cur string s length > ans then update ans
        else if(s.length()==ans.length() && s<ans)ans=s; //if both lengths are same 
		//check for lexigraphical order and update accordingly
        cur->end=true;
    }
   
    string longestWord(vector<string>& words) {
        int n=words.size();
        sort(begin(words),end(words));
        Trie *root =new Trie();
        for(int i=0;i<n;i++){
			//if consecutive words are same no need to call insert function for duplicate words
            if(i+1<n && words[i]==words[i+1])continue;
            insert(words[i],root);
        }
		//returns the globally declared ans string
        return ans;
    }
};
```