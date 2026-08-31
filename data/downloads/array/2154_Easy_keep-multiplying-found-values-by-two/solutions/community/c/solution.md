# ✅ Easy || C++ || find func() || 3 Lines O(n logn) || fast

**Author:** knockcat
**Votes:** 22
**Link:** [https://leetcode.com/problems/keep-multiplying-found-values-by-two/solutions/1748678/](https://leetcode.com/problems/keep-multiplying-found-values-by-two/solutions/1748678/)

---

**2154. Keep Multiplying Found Values by Two**
*KNOCKCAT*
```
1.Easy C++
2.find() function.
3.explanation in comments with code.
4.If it helps plz upvote\u2B06\uFE0F
5.Link to my Github Profile contains a repository of Leetcode with all my Solutions below\u2B07\uFE0F
```
[https://github.com/knockcat/Leetcode](http://)

Please upvote my comment so that i get to win the 2022 giveaway and motivate to make such discussion post.
**Happy new Year 2023 to all of you**
**keep solving keep improving**
Link To comment
[Leetcode Give away comment](https://leetcode.com/discuss/general-discussion/2946993/2022-Annual-Badge-and-the-Giveaway/1734919)

****what find() function do?****
```
find function searches an element in the vector ,if the element is present in the vector it return an iterator or we say a pointer to that location and if the element is not found it returns an iterator to the last element i.e nums.end()

So, using the condition if(find(nums.begin(),nums.end(),original) != nums.end()) // simply means that if element find than execute the block of statements inside if or otherwise the if condition got false, as find() has returned iterator to the last element which made the if returned false.
```
**CODE**
```
class Solution {
public:
    int findFinalValue(vector<int>& nums, int original) {
        int n = 1;
        for(int i = 0; i<n;++i)
        {
            if(find(nums.begin(),nums.end(),original) != nums.end())    //find func detailled explanation above
            {
                original *= 2;
                n += 1; //n is incremented by one beacuse questions want us to perform the operation again if element is found again after its double.
            }
        }
        return original;
    }
};
