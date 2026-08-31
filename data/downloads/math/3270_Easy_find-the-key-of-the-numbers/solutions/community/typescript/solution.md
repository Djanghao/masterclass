# No string conversion. Pure math technique to extract digits

**Author:** ejini6969
**Votes:** 0
**Link:** [https://leetcode.com/problems/find-the-key-of-the-numbers/solutions/5721028/](https://leetcode.com/problems/find-the-key-of-the-numbers/solutions/5721028/)

---

# Intuition
String conversion can be costly especially when doing back and forth, that is conversion from integer to string to pad the zeroes and conversion from string to integer to find the minimum. Hence, the technique below demonstrates conversion of integer to list / array of digits.

# Approach
Define a function `digitize` that extracts `num` into a list / array of digits padded with 0s at front to a fixed size of 4. For example: `123` -> `[0, 1, 2, 3]`

Apply the conversion for all `num1`, `num2` and `num3`. We then find the minimum digit and construct our result using simple arithmetic operations. 

# Complexity
- Time complexity:
`O(1)` since we only have 3 numbers to process, with each number going up to `9999`, so at most we only need to extract `3 * 4 -> 12` digits

- Space complexity:
`O(1)` since the maximum size of our list go up to 12 digits.

# Code

#### Python

```python
def digitize(num):
    ans = []
    l = int(log10(num))
    n = num
    for i in range(l, -1, -1):
        divisor = 10 ** i
        d, n = divmod(n, divisor)
        ans.append(d)
    while len(ans) != 4: ans.insert(0, 0)
    return ans
    
class Solution:
    def generateKey(self, num1: int, num2: int, num3: int) -> int:
        a1, a2, a3 = digitize(num1), digitize(num2), digitize(num3)
        ans = 0
        for i in range(4):
            ans = ans * 10 + min(a1[i], a2[i], a3[i])
        return ans
```

#### JavaScript

```javascript
function digitize(num){
    let ans = [], l = Math.floor(Math.log10(num))
    for(let i = l; i >= 0; i--){
        let divisor = 10 ** i
        ans.push(Math.floor(num / divisor))
        num %= divisor
    }
    while(ans.length != 4) ans.unshift(0)
    return ans
}

function generateKey(num1, num2, num3) {
    let a1 = digitize(num1), a2 = digitize(num2), a3 = digitize(num3)
    let ans = 0
    for(let i = 0; i < 4; i++){
        let mini = Math.min(a1[i], a2[i], a3[i])
        ans = ans * 10 + mini
    }
    return ans
};
```

#### Ruby

```ruby
def digitiz(num)
  ans = []
  l = Math.log10(num).to_i
  n = num
  l.downto(0).each do |i|
    divisor = 10 ** i
    ans << n / divisor
    n %= divisor
  end
  ans.unshift(0) while ans.size != 4
  ans
end

def generate_key(num1, num2, num3)
    a1, a2, a3 = digitiz(num1), digitiz(num2), digitiz(num3)
    ans = 0
    4.times do |i|
      ans = ans * 10 + [a1[i], a2[i], a3[i]].min
    end
    ans
end
```