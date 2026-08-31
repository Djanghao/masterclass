# Beginner Friendly w/ Detailed Explanation | DRY RUN | Learn everything with Super Duper Easy Code

**Author:** aryanttripathi
**Votes:** 39
**Link:** [https://leetcode.com/problems/similar-string-groups/solutions/1991730/](https://leetcode.com/problems/similar-string-groups/solutions/1991730/)

---

***Brief note about Question-***
* We are given a list strs of strings where every string in strs is an anagram of every other string in strs. We have to return *how many groups are there*?
```
Let's take an example not given in the question -

Suppose our strs is given to us is strs[]:  ["abcd","dbca","abcd", "cdab"]
then Expected answer should be 2

Let see how? 
string "abcd" and 
string "dbca"
are differ on exactly two positions. i.e on index 0 and on index 3
so, if we swap two letters of "dbca" on index 0 to 3, then "dbca" becomes "abcd"
means they are similiar, means we put them in a single group

now, string "abcd" (present on index 0 in strs)
and, string "abcd" (present on index 2 in strs)
are same, so obviously we put them in same group

now, string "cdab"
does not match with any of the strings, means if we compare it with string "abcd"
then both of the string differs on all positions, so they are not similiar
and also if we comoare string "cdab" with string "dbca"
then also both of the string differs on all positions, so they are not similiar
that means string "cdab" is not similiar with any of the other strings present in strs

so, now if we put them in groups, then
["abcd", "dcba", "abcd"] and ["cdab"]

so, we have two groups, 
therefore answer should be 2

----------
An additional test case for you to check-
strs[]: ["nmiwx","mniwx","wminx","mnixw","xnmwi"]
Expected answer should be 2
```
____________________________
 ***How we check whether they similiar or not?***
* We just count the number of positions on which they differ. Then a question came *how we say whether they are similiar not?*
* If two strings are exactly same then that obviously it means they are similiar.
* If two strings are exactly differ on two positions then they are also similiar.
```
Let take strings as "abcd" and "dbca", then both of the strings are differ on index 0 and on index 3.
so we have choice to apply swap function on either of the string and make them equal.

Suppose if we apply swap function in string s = "dbca", swap (s[0], s[3]) then it becomes "abcd"
or suppose if we apply swap function in string s = "abcd", swap (s[0], s[3]) then it becomes "dbca"
saying that they are similiar.
```
* But if two strings are differ from more than 2 positions they they can never be similiar.
* *One Interseting case is their what if two strings are differ at only one position then?*
```
If two strings are differ at only position then?

Let's take an example to see that,
suppose two strings given to us as "abcd" and "bbcd"
so whether this is a valid case, answer is NO.

accroding to question (see constraint)
/* All words in strs have the same length and are anagrams of each other. */

so, it is never be possible that two strings just differ on one position and they are anagram at the same time.

Okay, what is anagram ?
 An anagram of a string is another string that contains the same characters, only the order of characters can be different.
 For example, \u201Cabcd\u201D and \u201Cdabc\u201D are an anagram of each other.
```
_______________________
***How Disjoint Set Union (DSU) help us?***
* We make an parent array and say that no strings are similiar.
* Now, we generate evrey pair of strings and check whether they are similiar or not.
* If they are similiar then we put them in a same group.
* Now question came, **how we put them in a same group if they are similiar?**
* Our DSU plays a role here. If two strings are similiar then we assume any of the strings as parent string and put this current string in the group of that string.
* We do this for all pairs and at last we will count how many different groups are their.
* Finally return that count as our answer.
_________________________
***DRY RUN MAKES CONCEPT EASY TO UNDERSTAND-***
```
Suppose our strs is given to us is strs[]:  ["abcd", "dbca", "cdab"]

1) Our first step, make an parent array and say that no strings are similiar.
   so parent array looks like par[]: [ -1, -1, -1]  // by giving -1 we will say  no strings are similiar (intially)
   
2) Generate evrey pair of strings and check whether they are similiar or not.

    strs[]:  ["abcd", "dbca", "cdab"]
	           \u2191  \u2191
		   i = 0, j = 0
		   same string so similiar, so we put them in same string, 
		   so, we say strs[0] now your parent is strs[0], so put them in a same group
		   therefore par[0] = -1,
		   index: 0    1   2
		   par[]: [-1, -1, -1]
		   
 strs[]:  ["abcd", "dbca", "cdab"]
	           \u2191      \u2191
		   i = 0,    j = 1
		   we check whether strs[0] and strs[1] are similiar or not, 
		   Yess!, they similiar as they differ only on two poistions i.e index at 0 and 3
		   so, we merge them, merge them means we put them in a same group.
		   Putting them in a same group is done by our UNION function.
		   so, intially we assume no one is parent of other, so parent of strs[0] is present on par[0] = -1
		   and parent of strs[1] is present on par[1] = -1,
		   since, they  are similiar so we say okay strs[0] now your parent is strs[1]
		   so, parent array looks like
		   index: 0    1   2
		   par[]: [1, -1, -1]
		   see, par[0] now becomes 1, it means that strs[1] is parent of this....
		   
Similiarly now we move ahead
strs[]:  ["abcd", "dbca", "cdab"]
	         \u2191               \u2191
		   i = 0,          j = 2
		   now, we check whether strs[0] and strs[2] are similiar or not, 
		   No!, they are not similiar as they differ from more than two position,
		   so we do not do anything and proceed
		   
Again, we move ahead
strs[]:  ["abcd", "dbca", "cdab"]
	         \u2191       \u2191
		   j = 0,   i = 1
		   again, we will check they are similiar so yes they are similiar, 
		   so we try to put them in a same group,
		   since, we already do it above so nothing will change, again we move ahead

and similiary follow all these steps again and again
at last we put all similiar strings in a group.

3) And now at last, just count how many parents are their,
    The number of parents are their are the number of groups and we return our result.
	

Now, Let's move easy and commented code-
```
__________________
**Code (C++)**
```
class Solution {
public:
    int par[301]; // make a global parent array of given max constraint size
    
    // using DSU
    
    // (find function) to find parent of a string
    int find(int a)
    {
        if(par[a] < 0) return a;
        
        return par[a] = find(par[a]); // path compression
    }
    
    // Union function to merge them
    void Union(int a, int b)
    {
        int p = find(a); // find parent of a
        int q = find(b); // find parent of b
        
        if(p == q) // if already they have the same parent, then simply
            return; // return
        
        // else make q as parent of p
        par[p] = q; // make any one as parent
        
    //  par[q] = p; you may also write like this
        
    }
    
    // function to compare whether two string are similiar or not
    bool areSimiliar(string &str1, string &str2)
    {
        // if both are already same, return true
        if(str1 == str2)
            return true;
        
        int count = 0; // variable to count at how many places they differ
        
        // traverse in string 1
        for(int i = 0; i < str1.size(); i++)
        {
            // if not equal, increment count
            if(str1[i] != str2[i])
            {
                count++;
            }
        }
        
        // if count == 2, means they exactly differ at two positions
        // so yes they are similiar, we can make them same by swapping
        if(count == 2) return true;
        
        // other than difference from two positions,
        // all other number of differences are not make string similiar,
    // even if they differ at only one position, that is also not similiar
        return false;  
    }
    
    int numSimilarGroups(vector<string>& arr) {
        int n = arr.size(); // how many strings are their
        
        // Intially all are alone, so make everyone as -1
        for(int i = 0; i < n; i++) par[i] = -1;
        
        // now for every pair of strings
        for(int i = 0; i < n; i++)
        {
            for(int j = 0; j < n; j++)
            {
                if(areSimiliar(arr[i],arr[j])) // if they are similar
                {
                    Union(i, j); // merge them 
                }
            }
        }
        
        int ans = 0; // variable which store our answer
        
        // now at last, we are able to put all strings who are similiar
        // in a group, so finally just count how many groups are their
        for(int i = 0; i < n; i++)
        {
            // if par[i] is negative that means it is parent of some group
            // increment answer
            if(par[i] < 0) 
                ans++;
        }
        
        return ans; // finally return our answer
    }
};
```
***`If u find this useful , please consider to give a upvote!!`***