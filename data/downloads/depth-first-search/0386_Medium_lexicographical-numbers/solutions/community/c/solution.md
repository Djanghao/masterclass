# Using Trie C++ with Step wise Explanation and example

**Author:** kaustubhvats28
**Votes:** 26
**Link:** [https://leetcode.com/problems/lexicographical-numbers/solutions/1345862/](https://leetcode.com/problems/lexicographical-numbers/solutions/1345862/)

---

Not an optimised one but if you are learning trie then it will be good for Practice
**Examples are just for a demo of working of the code**

```
class Trie{
    public:
    vector<Trie*> v;
    int data;
    Trie() {
        v=vector<Trie*>(10,nullptr);
        data = -1;
    }
};
class Solution {
    void insert(Trie* node, int a) {
        Trie* root = node;
        string key = to_string(a);
        for(auto &x:key) {
            int curr = x-'0';
            if(root->v[curr]==nullptr) root->v[curr]=new Trie();
            root = root->v[curr];
        }
        root->data = a;
    }
    vector<int> ans;
    void printAll(Trie* root) {
        if(root!=nullptr && root->data!=-1){
            ans.push_back(root->data);
        }
        for(int i=0;i<10;i++) {
            if(root->v[i]) printAll(root->v[i]);
        }
    }
public:
    vector<int> lexicalOrder(int n) {
        ans.clear();
        Trie* root = new Trie();
        for(int i=1;i<=n;i++) insert(root,i);
        printAll(root);
        return ans;
    }
};
```
Here We are building a Trie having children vector of size 10, a boolean variable to store the end of digit and a data variable to store the number at the leaf node..
**Step 1:** Create a root node for trie and insert all the values from 1 to n in it..
We are having 10 nodes to store each digit of the number at ith iteration
Example 190 will be inserted as
```
                                 root
		  		/   /   /   /   /  \\   \\  \\   \\   \\
				   1                                      (1st node having another TrieNode)
  /   /   /   /   /  \\   \\  \\   \\   \\
                                      9                   (9th node having another TrieNode)
                     /   /   /   /   /  \\   \\  \\   \\   \\
				   0                                      (end=true, data=190)
```
(NOTE: don't forget to add data at the leaf node)

**Step 2:** For Searching Purpose checking from the root node and recursively add the numbers in the given vector
Example if we have  1, 10, 2 in Trie
```
We will iterate at 0 found NULL
then iterate at 1 and using recursion we call Node at 1 
              **Recursion call 1:**
              Resulting we found 1 isEnd of a number so we add data at that node in our vector (data = 1)
              Then inside this recursion part we call for rest of the nodes after 1
              We found 0 is also not NULL node and add call recursion for this node 
                          **Recursion call 2:**
			              Resulting we found that 0 isEnd of a number so we add data at that node in our vector (data = 10)
						  Then inside the recursion part we call rest of the nodes but found all nodes NULL
						   
              **Back to Recursion call 1:**
			 after 0 there is no NOT NULL nodes in this recursion call
 
**Back to initial call :**
After 1 we also have 2 as a Not NULL node in this call so we call once again for this node
            **Recursion call 1:**
            Resulting we found 2 isEnd of a number so we add data at that node in our vector   (data = 2)
			and further it doesnt found any not NULL node.. 
**Back to initail call:**
Now there is no Not NULL node after 2
```

so our result vector should look like this
```
ans = [1, 10, 2]
```
Which is lexicographically sorted

Good Luck..
			

			
			

                          

