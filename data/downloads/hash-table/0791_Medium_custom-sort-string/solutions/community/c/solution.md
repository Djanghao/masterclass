# ✅ Custom Sort String | Easy 3 Solutions w/Explanation

**Author:** SHIVAYE
**Votes:** 58
**Link:** [https://leetcode.com/problems/custom-sort-string/solutions/1336595/](https://leetcode.com/problems/custom-sort-string/solutions/1336595/)

---

***Solution 1:(Hashing+Custom Sort Comparator)***
```
1) We will first map the occurrence of character in string "order" to its index,
why?
so that we can know which character is occurring when(This will help us in comparator function).
2) We will use sort() with custom comparator on "str" and finally return the "str"
```
***
**C++:**
```
string customSortString(string order, string str) 
    {
        unordered_map<char,int> mp;
        int j=0;
        for(auto i:order)
            mp[i]=j++;
        sort(str.begin(),str.end(),[&](const char &a,const char &b){
            return mp[a]<mp[b];
        });
        return str;
    }
```
***
***Solution 2:(Custom Sort Comparator + string.find())***
```
1) Instead of using the map, we can directly use string.find() function in order to get the index of particular
character in "order"
The next step will be same
2) We will use sort() with custom comparator on "str" and finally return the "str"
```
***
**C++:**
```
string customSortString(string order, string str) 
    {
        sort(str.begin(),str.end(),[&](const char &a,const char &b){
            return order.find(a)<order.find(b);
        });
        return str;
    }
```
***
***Solution 3:(Hashing + Counting)***
```
This approach is very interesting ,
let us try to build the solution step by step,

we have two strings --> "str" and "order" ,
let us take example of,
order = "cba"
str = "abcd"

1) we will count the occurences of each character in "str",
then  HashMap = {   a:1,  b:1, c:1, d:1 }

2) As we need to build the custom string in the same order as of "order" string,
3) so we will traverse the "order" string and will see how many occurrences are there for each character in
"order" string.
as order="cba"
so HashMap['c'] = 1;
we will add 1 'c' to the resultant string and move on,
then HashMap['b']=1,
we will add 1 'b' to the resultant string and move on,
then HashMap['a']=1,
we will add 1 'a' to the resultant string and move on,

Upto now the resultant string is "cba"
but as we can see all the characters of string "str" is not present in resultant string,
and hence we need to iterate over our hashmap array to find the unused characters,
and then add them to resultant string.
```
***
**C++:**
```
string customSortString(string order, string str) 
    {
        unordered_map<char,int> mp;
        for(auto i:str)
            mp[i]++;
        string res;
        for(auto i:order)
        {
            res+=string(mp[i],i);
            mp[i]=0;
        }
        for (auto i : mp) {
            res += string(i.second, i.first);
        }
        return res;
    }
```
***
**If you like the post, please do consider it for upvotes, any comments and suggestions are welcomed**
***