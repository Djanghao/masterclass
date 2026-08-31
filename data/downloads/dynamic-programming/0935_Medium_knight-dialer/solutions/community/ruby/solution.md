# Ruby || DP || O(n)/O(n)

**Author:** alecn2002
**Votes:** 1
**Link:** [https://leetcode.com/problems/knight-dialer/solutions/4334277/](https://leetcode.com/problems/knight-dialer/solutions/4334277/)

---


# Complexity
- Time complexity:
$$O(n)$$

- Space complexity:
$$O(n)$$

# Code
```ruby
#          0       1       2       3       4          5   6          7       8       9
JUMP_TO = [[4, 6], [6, 8], [7, 9], [4, 8], [0, 3, 9], [], [0, 1, 7], [2, 6], [1, 3], [2, 4]]
MOD = 10**9+7

def knight_dialer(n)
    (n - 1).times.inject(Array.new(10, 1)) {|cur, i|
        cur.zip(JUMP_TO).each_with_object(Array.new(10, 0)) {|(v, jt), res|
            jt.each {|jti| res[jti] = (res[jti] + v) % MOD }
        }
    }.inject(0) {|res, v| (res + v) % MOD }
end
```