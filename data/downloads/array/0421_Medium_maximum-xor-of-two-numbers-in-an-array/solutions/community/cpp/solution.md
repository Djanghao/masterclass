# [C++] Trie Solution | Intuition | O(nlog(m))

**Author:** Mythri_Kaulwar
**Votes:** 134
**Link:** [https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/solutions/1722683/](https://leetcode.com/problems/maximum-xor-of-two-numbers-in-an-array/solutions/1722683/)

---

**APPROACH :**

* We need a data structure through which we can do the following 2 jobs easily :
      1. Insert all the elements of the array into the data structure. 
      2. Given a Y, find maximum XOR of Y with all numbers that have been inserted.
* So, we can use trie.
* Every bit in a number has 2 possibilities : ```0``` & ```1```.
* So, we have 2 pointers in every Trie Node : child[0] ---> pointing to ```0``` bit & child[1] ---> pointing to ```1``` bit.
* We insert all the elements into the Trie :
          1. We use a bitset of size 32 (```bitset<32> bs```), go from the most significant bit (MSB) to the least significant bit (LSB).
          2. We start at the root of the Trie & check if it's child[0] or child[1] is present (not ```NULL```), depending upon the current bit ```bs[j]``` at each bit of the number.
          3. If it's present, we go to it's child, if not, we create a new Node at that child (0 bit or 1 bit) and move to it's child.
* We traverse the array & for each element we find the maximum ```XOR``` possible with any other element in the array using the Trie :
         1. We start at the root of the Trie and at the MSB of the number & we initialize ```ans = 0```.
         2. If the current bit is set, we go to ```child[0]``` to check if it's not NULL. If it's not NULL, we add ```1<<i``` to ```ans```.
         3. If it's not set, we go to ```child[1]``` to see it's not NULL, if it's not NULL, we add ```1<<i``` to ```ans```.
* After checking the maximum XOR possible (with any other element) at each element of the array, we update the result to maximum of previous result & the current result.
* Finally return the maximum possible XOR.

*I tried my best to explain the approavh here, please refer to the code for better clarity*

**Time Complexity :** O(n*x*logm) - ```n = nums.size()```, ```m = *max_element(nums.begin(), nums.end())```.

**Code :**
```
class TrieNode{
public:
    TrieNode *child[2];
    
    TrieNode(){
        this->child[0] = NULL; //for 0 bit 
        this->child[1] = NULL; //for 1 bit
    }
};
class Solution {
    TrieNode *newNode;
    
    void insert(int x){   //to insert each element into the Trie
        TrieNode *t = newNode;
        bitset<32> bs(x);
        
        for(int j=31; j>=0; j--){
            if(!t->child[bs[j]]) t->child[bs[j]] = new TrieNode(); //start from the MSB =, move to LSB using bitset
            t = t->child[bs[j]];
        }    
    }
    
public:
    int findMaximumXOR(vector<int>& nums) {
        newNode = new TrieNode();
        for(auto &n : nums) insert(n); //insert all the elements into the Trie
        
        int ans=0; //Stores the maximum XOR possible so far
        for(auto n : nums){
            ans = max(ans, maxXOR(n));  //updates the ans as we traverse the array & compute max XORs at each element.
        }
        return ans;
    }
    
    int maxXOR(int n){
        TrieNode *t = newNode;
        bitset<32> bs(n);
        int ans=0; 
        for(int j=31; j>=0; j--){
            if(t->child[!bs[j]]) ans += (1<<j), t = t->child[!bs[j]]; //Since 1^0 = 1 & 1^1 = 0, 0^0 = 0
           
            else t = t->child[bs[j]];
        }
        return ans;
    }
};
```

**Do upvote if you like my solution & explanation :)**
