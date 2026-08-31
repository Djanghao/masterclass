# DP 100% faster in Erlang

**Author:** Chirayu1631
**Votes:** 1
**Link:** [https://leetcode.com/problems/maximum-subarray/solutions/2787873/](https://leetcode.com/problems/maximum-subarray/solutions/2787873/)

---


        
 ```
 -spec max_sub_array(Nums :: [integer()]) -> integer().
-export([dp/4]).
max_sub_array(Nums) ->
  N= length(Nums),
    [Sum|Send] = Nums,
  Max=Sum,
  dp(Send,N-1,Sum,Max).
      

dp(Nums,0,Sum,Max)->
    Max;
dp(Nums,N,Sum,Max) ->
    [A|B] = Nums,
    if 
        A+Sum > A -> Next = Sum+A;
        true -> Next = A
    end,
    if  
        Next>Max -> Max2 = Next;
        true -> Max2 = Max
    end,
    dp(B,N-1,Next,Max2).
	```