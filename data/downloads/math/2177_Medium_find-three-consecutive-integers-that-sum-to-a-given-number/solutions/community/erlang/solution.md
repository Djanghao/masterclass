# Quick Erlang solution

**Author:** poitevinpm
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/solutions/1787618/](https://leetcode.com/problems/find-three-consecutive-integers-that-sum-to-a-given-number/solutions/1787618/)

---

```
-spec sum_of_three(Num :: integer()) -> [integer()].
sum_of_three(Num) -> 
    case Num rem 3 of
        0 -> X = Num div 3, [X-1, X, X + 1];
        _ -> []
    end.
```