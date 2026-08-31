# ✅C++ || All testcase passed->2 SOLUTION -> 10 LINES CODE

**Author:** rab8it
**Votes:** 47
**Link:** [https://leetcode.com/problems/search-suggestions-system/solutions/2168777/](https://leetcode.com/problems/search-suggestions-system/solutions/2168777/)

---

**\u2705APPROACH : 1**
# VERY EASY SOLUTION -> NO THINKING NEEDED JUST DO WHAT IS SAID IN QUESTION-->
* ***sort the string list***
* ***create a temp vector to store the answer in each stage and then push it back***

```
vector<vector<string>> suggestedProducts(vector<string>& products, string searchWord) {
        int n=products.size();
        sort(products.begin(),products.end());
        vector<vector<string>>ans;
        vector<string>temp;
        string curr="";
        for(auto c:searchWord){
            curr+=c;                // adding character, like -> m-->mo-->mou-->mous--->mouse
            temp.clear();         //reusing the same vector
            for(int i=0;i<n;i++){
                string s=products[i];
                if(s.substr(0,curr.length())==curr){              //finding the prefix containing words in the list
                    temp.push_back(s);
                }
                if(temp.size()==3)break;         //question asked for 3 words so we break at 3
            }
            ans.push_back(temp);
        }
        return ans;
    }
```

# \u2714 THIS WAS A VERY EASY SOLUTION BUT IT TAKES A LOT OF TIME ---> SO WE NEED TO OPTIMIZE IT

# \u2714 FOR OPTIMIZING WE USE BINARY SEARCH 

# \u2714 WHY BINARY SEARCH?? WHERE AND HOW??

**LETS SEE---->**

* **When the list is sorted the we know they are in increasing order(lexographically)**
* **if we find 'mou' first at the index 3 then we are sure that we can not find any word containing 'mou' before index 3-->Why?? --> as before index 3 the words are smaller and in the sorted list we find it for the first time at index 3**
* **How to find the index 3(as example) then?? --> we will use lower_bound() -> it returns the first occurance of searched element**
* **lower_bound() gives us the index in a binary search manner---> you can use lower_bound() stl or write a function for yourself**

```
vector<vector<string>> suggestedProducts(vector<string>& products, string searchWord) {
        auto start=products.begin();
        sort(start,products.end());
        vector<vector<string>>ans;
        vector<string>temp;
        string curr="";
        for(auto c:searchWord){
            curr+=c;
            temp.clear();                       //upto this same as previous code
            start=lower_bound(start,products.end(),curr);      // providing first occurance
            for(int i=0;i<3 && start+i!=products.end();i++){         //question asked 3 times so i<3 and start+i!=products.end() -> checks if we are out of index or not
                string s=*(start+i);        //(start+i) gives the pointer and *(start+i) gives the value at the pointer->here string
                if(s.find(curr))break;         //if we dont find the curr then we are sure that we are not going to find it in the upcoming words as they are in sorted manner
                temp.push_back(s);
            }
            ans.push_back(temp);
        }
        return ans;
    }
```
#  \u2705 Hope this helped a little bit--> if so please upvote it.
![image](./images/0.png)


\u2705 Happy Coding 

