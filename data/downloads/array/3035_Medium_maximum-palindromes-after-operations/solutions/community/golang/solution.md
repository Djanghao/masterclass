# fastest Golang solution

**Author:** rishabh_kunwar04
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-palindromes-after-operations/solutions/4716789/](https://leetcode.com/problems/maximum-palindromes-after-operations/solutions/4716789/)

---

# Intuition
count frequency of each char in words and then create count pair and try to think of making palindrome using count pair
# Approach
Firstly, we calculate the length of every word
and sort them in ascending order.
This helps us optimize later steps.

Since we can freely rearrange characters,
we only care about the frequency of each character.
We count how many times each character appears,
and divide the count by two to find the number of character in pairs.

Then, we iterate through the sorted word lengths.
and determine how many pairs we require to build a palindrome.
If the length is odd,
we don't need to care about the character in the middle,
because it can be any character.
If we find a word that we cannot construct,
we break the loop,
and return the number of palindromes fullfilled up to now.

# Complexity
- Time complexity:
O(logn)
- Space complexity:
O(n)
# Code
```
import "sort"

func maxPalindromesAfterOperations(words []string) int {

     arr:=make([]int,len(words))
     mp:=make(map[rune]int)

     for i,x := range words{
          arr[i]=len(x);
         for _,c:=range x{
             mp[c-'a']++
         }
     }

     ans,cnt:=0,0

     for _,v:=range mp{
        cnt+=v/2;
     }
     sort.Ints(arr)
     for i,_:=range arr{
         if arr[i]==1{
             ans++;
         }else{
             p:=arr[i]/2
             if cnt>=p{
                 cnt-=p
                 ans++
             }
         }
     }
     return ans
    
}
```