# C++ Digit by Digit Prefix Count Solution

**Author:** ahsan83
**Votes:** 6
**Link:** [https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/solutions/1347097/](https://leetcode.com/problems/k-th-smallest-in-lexicographical-order/solutions/1347097/)

---

Runtime: 0 ms, faster than 100.00% of C++ online submissions for K-th Smallest in Lexicographical Order.
Memory Usage: 6.1 MB, less than 28.46% of C++ online submissions for K-th Smallest in Lexicographical Order.

This solution is taken from the post of "**NotModified**", for my own purpose details explanations are added.

```
We have to find the Kth smallest number  in Lexicographical Order, we can use Trie DS and iterate over it
as numbers are lexicographically sorted in Trie but limit is 10^9 too high here and so it will give TLE.

In lexicographically sorted array lower MSB digit prefix numbers always comes first and so we can count
the number of numbers with lower prefix and if count is less than K, then Kth number will contain in the
numbers with lower prefix MSB digit range (1 to N) otherwise it will be in the next higher prefix number
with same digit range. This way we can count numbers with prefix "1" and check with K, if K<= count then
MSB prefix is "1" and then we go to next digit MSB prefix "10" otherwise we check for MSB digit "2" and so on. 
When K <= count we decrease K by 1 cause we already have the prefix number in which Kth value falls
and so we can ignore it. If K > count we go to MSB digit next prefix and so we can ignore previous prefix
count from K. When K ==0 we will get our prefix value as result.
```

```
From lexicographically sorted numbers 1 to 13 =>  [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]
we see that first 5 numbers have prefix "1" and then the other numbers have their own sequential values.
Here if K = 3 then result = 11
First number count with prefix "1" in range 1 to 13 is 5 and K =3 means Kth number must start with 
prefix "1". Now we got the first digit of our result number which is "1". We have to find the next digit
and we will take the next digit prefix of "1" which is "10". As we already know that 1 is the MSB digit of
result we can ignore it from count K and so we decrement K and now K = 2. Number count with prefix "10"
in range 10 to 13 is 1 and K = 2 and so Kth number can not contain prefix "10" and we ignore those number
count of "10" from K and K becomes 1. Now same digit next prefix of "10" is "11" and number count of 
prefix "11" in range of 11 to 13 is 1 and as K =1, the Kth number must start with prefix "11" and we ignore
the prefix "11" from K and K becomes 0 and the prefix is the result.
```

```
class Solution {
public:
    
    // count the numbers which are in range 1 to N with prefix 
    int countPrefix(int n, long long prefix)
    {
        long long offset = 10;
        long long target = n;
        int total = 0;
        for(int i=1;i<=9;i++)
        {
            long long minv = prefix * offset;
            long long maxv = minv + offset-1;
            
            
            if(target < minv)break;
            
            total+= min(target,maxv) - minv + 1;
            
            offset = offset * 10;
        }
        
        return total+1;
    }
    
    int findKthNumber(int n, int k, int prefix =0) {

        // if K > 0 we have to find the result otherwise current prefix is the solution
        if(k>0)
        {
            // go through next prefix from current prefix and check count of numbers with ith prefix
            // if K <= prefix_count then K lies in the current prefix range and so we ignore current prefix
            // and go to next digit prefix from current prefix and decrease K by 1 
            // otherwise we check prefix count for same digit next prefix number and ignore the previous
            // prefix count from K as K is out of the range of previous prefix number
            for(int i= (prefix==0)?1:0;i<=9;i++)
            {
                int prefixCount = countPrefix(n,10*prefix+i);
                if(k<=prefixCount) return findKthNumber(n,k-1,10*prefix+i);
                k-=prefixCount;
            }            
        }
        
        return prefix;
    }
};
```

