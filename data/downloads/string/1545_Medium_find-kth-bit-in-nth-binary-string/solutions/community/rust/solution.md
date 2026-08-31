# From Naive to Optimal Solutions:: Finding the K-th Bit in N-th Binary String

**Author:** UK07
**Votes:** 4
**Link:** [https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/solutions/5934547/](https://leetcode.com/problems/find-kth-bit-in-nth-binary-string/solutions/5934547/)

---

# **Naive Code**

# Intuition
The binary string construction process follows a recursive pattern: each string `S_n` is created by concatenating `S_(n-1)`, followed by '1', and then the reverse-inverted version of `S_(n-1)`. We can iteratively build the string up to the desired `n` and directly retrieve the k-th bit.

# Approach
1. Start with `S_1 = "0"`.
2. For each subsequent `S_n`, construct it by appending:
   - The string `S_(n-1)`
   - Followed by a '1'
   - Then the reverse-inverted version of `S_(n-1)` using the helper function `rev_inv`.
3. Continue this process until you reach `n`.
4. Finally, return the k-th bit by indexing into the final string.

# Complexity
- **Time complexity:**  
  The length of `S_n` is \\(2^n - 1\\). Therefore, constructing the full string involves concatenating strings of exponential length in each iteration, leading to a time complexity of $$O(2^n)$$.
  
- **Space complexity:**  
  Since we build the entire string `S_n`, the space complexity is also $$O(2^n)$$.

# Explanation
- The function `rev_inv` inverts the bits of a string (i.e., '0' becomes '1' and vice versa) and reverses the string.
- In the main function, we iteratively build the string `S_n` starting from `"0"`. For each iteration, the string grows by appending '1' and the reverse-inverted version of itself.
- Once the full string is built, we simply return the k-th bit (accounting for 0-based indexing).

# Code
```cpp []
class Solution {
    string rev_inv(string str) {
        for(char &c: str) c = (c=='0')?'1':'0';
        for(int i=0;i<=str.length()/2; i++)
            swap(str[i], str[str.length()-1-i]);
        return str;
    }
public:
    char findKthBit(int n, int k) {
        string s = "0";
        while(--n) s = s+"1"+rev_inv(s);
        return s[k-1];
    }
};
```
``` python []
class Solution:
    def rev_inv(self, s: str) -> str:
        s = ''.join(['1' if c == '0' else '0' for c in s])
        return s[::-1]
    
    def findKthBit(self, n: int, k: int) -> str:
        s = "0"
        while n > 1:
            s = s + "1" + self.rev_inv(s)
            n -= 1
        return s[k - 1]
```
```java []
class Solution {
    private String rev_inv(String str) {
        char[] arr = str.toCharArray();
        for(int i = 0; i < arr.length; i++) {
            arr[i] = (arr[i] == '0') ? '1' : '0';
        }
        for(int i = 0; i <= arr.length / 2; i++) {
            char temp = arr[i];
            arr[i] = arr[arr.length - 1 - i];
            arr[arr.length - 1 - i] = temp;
        }
        return new String(arr);
    }
    
    public char findKthBit(int n, int k) {
        String s = "0";
        while(--n > 0) {
            s = s + "1" + rev_inv(s);
        }
        return s.charAt(k - 1);
    }
}
```
```javascript []
class Solution {
    rev_inv(str) {
        let arr = str.split('');
        for(let i = 0; i < arr.length; i++) {
            arr[i] = (arr[i] === '0') ? '1' : '0';
        }
        for(let i = 0; i <= Math.floor(arr.length / 2); i++) {
            [arr[i], arr[arr.length - 1 - i]] = [arr[arr.length - 1 - i], arr[i]];
        }
        return arr.join('');
    }

    findKthBit(n, k) {
        let s = "0";
        while(--n > 0) {
            s = s + "1" + this.rev_inv(s);
        }
        return s[k - 1];
    }
}
```
```golang []
func (sol *Solution) rev_inv(str string) string {
    runes := []rune(str)
    for i := 0; i < len(runes); i++ {
        if runes[i] == '0' {
            runes[i] = '1'
        } else {
            runes[i] = '0'
        }
    }
    for i := 0; i <= len(runes)/2; i++ {
        runes[i], runes[len(runes)-1-i] = runes[len(runes)-1-i], runes[i]
    }
    return string(runes)
}

func (sol *Solution) findKthBit(n int, k int) rune {
    s := "0"
    for n > 1 {
        s = s + "1" + sol.rev_inv(s)
        n--
    }
    return rune(s[k-1])
}
```
```rust []
struct Solution;

impl Solution {
    fn rev_inv(&self, str: &str) -> String {
        let mut chars: Vec<char> = str.chars().collect();
        for i in 0..chars.len() {
            chars[i] = if chars[i] == '0' { '1' } else { '0' };
        }
        chars.reverse();
        chars.into_iter().collect()
    }

    pub fn find_kth_bit(&self, n: i32, k: i32) -> char {
        let mut s = String::from("0");
        let mut n = n;
        while n > 1 {
            s = s + "1" + &self.rev_inv(&s);
            n -= 1;
        }
        s.chars().nth((k - 1) as usize).unwrap()
    }
}
```

# **Optimal Code**

# Intuition
Rather than constructing the entire string `S_n`, we can take advantage of the recursive structure of the string. The middle bit of `S_n` is always '1', and the first half of the string is identical to `S_(n-1)`. The second half is the reverse and inverted version of `S_(n-1)`. By determining which part of the string the k-th bit belongs to, we can recursively calculate the bit without building the entire string.

# Approach
1. For `n = 1`, the string is simply `"0"`, so return `'0'` as the base case.
2. For general `n`, calculate the total length of `S_n` as \\(2^n - 1\\).
3. Find the middle position of the string, which is at \\( \	ext{mid} = \\frac{(2^n - 1)}{2} + 1 \\).
4. If the k-th bit is in the middle, return '1' (since the middle bit of every string `S_n` is '1').
5. If the k-th bit is in the first half of the string, recursively find the k-th bit in `S_(n-1)`.
6. If the k-th bit is in the second half, calculate the mirrored index in the first half, recursively find the corresponding bit, and then invert it.

# Complexity
- **Time complexity:**  
  The recursion goes down by 1 level of `n` for each recursive call, making the time complexity approximately $$O(n)$$.

- **Space complexity:**  
  Since the recursion depth is proportional to `n`, the space complexity is also $$O(n)$$ due to the recursive stack.

# Explanation
- The function recursively calculates the k-th bit without constructing the entire string.
- The string `S_n` is split into three parts: the first half (`S_(n-1)`), the middle '1', and the reverse-inverted second half (`rev_inv(S_(n-1))`).
- If `k` is in the first half, it corresponds directly to `S_(n-1)`. If it's in the second half, it corresponds to the mirrored position in `S_(n-1)` but inverted.

# Code
```cpp []
class Solution {
public:
    char findKthBit(int n, int k) {
        if (n == 1) {
            return '0';
        }
    
        int len = (1 << n) - 1; // Length of S_n
        int mid = len / 2 + 1;  // Middle index of S_n
    
        if (k == mid) {
            return '1';  // Middle bit is always '1'
        }
    
        if (k < mid) {
            return findKthBit(n - 1, k);  // k-th bit is in the first half
        }
    
        // k-th bit is in the second half, calculate the mirrored index
        char bit = findKthBit(n - 1, len - k + 1);
        return bit == '0' ? '1' : '0';  // Invert the mirrored bit
    }
};
```
```python []
class Solution:
    def findKthBit(self, n: int, k: int) -> str:
        if n == 1:
            return '0'
        
        length = (1 << n) - 1  # Length of S_n
        mid = length // 2 + 1  # Middle index of S_n
        
        if k == mid:
            return '1'  # Middle bit is always '1'
        
        if k < mid:
            return self.findKthBit(n - 1, k)  # k-th bit is in the first half
        
        # k-th bit is in the second half, calculate the mirrored index
        bit = self.findKthBit(n - 1, length - k + 1)
        return '1' if bit == '0' else '0'  # Invert the mirrored bit

```
```java []
class Solution {
    public char findKthBit(int n, int k) {
        if (n == 1) {
            return '0';
        }

        int len = (1 << n) - 1;  // Length of S_n
        int mid = len / 2 + 1;   // Middle index of S_n

        if (k == mid) {
            return '1';  // Middle bit is always '1'
        }

        if (k < mid) {
            return findKthBit(n - 1, k);  // k-th bit is in the first half
        }

        // k-th bit is in the second half, calculate the mirrored index
        char bit = findKthBit(n - 1, len - k + 1);
        return bit == '0' ? '1' : '0';  // Invert the mirrored bit
    }
}

```
```javascript []
class Solution {
    findKthBit(n, k) {
        if (n === 1) {
            return '0';
        }

        const len = (1 << n) - 1;  // Length of S_n
        const mid = Math.floor(len / 2) + 1;  // Middle index of S_n

        if (k === mid) {
            return '1';  // Middle bit is always '1'
        }

        if (k < mid) {
            return this.findKthBit(n - 1, k);  // k-th bit is in the first half
        }

        // k-th bit is in the second half, calculate the mirrored index
        const bit = this.findKthBit(n - 1, len - k + 1);
        return bit === '0' ? '1' : '0';  // Invert the mirrored bit
    }
}

```
```golang []
type Solution struct{}

func (sol *Solution) findKthBit(n int, k int) byte {
    if n == 1 {
        return '0'
    }

    length := (1 << n) - 1  // Length of S_n
    mid := length / 2 + 1   // Middle index of S_n

    if k == mid {
        return '1'  // Middle bit is always '1'
    }

    if k < mid {
        return sol.findKthBit(n-1, k)  // k-th bit is in the first half
    }

    // k-th bit is in the second half, calculate the mirrored index
    bit := sol.findKthBit(n-1, length-k+1)
    if bit == '0' {
        return '1'
    }
    return '0'  // Invert the mirrored bit
}

func main() {
    sol := Solution{}
    fmt.Println(string(sol.findKthBit(3, 5))) // Example usage
}

```
```rust []
struct Solution;

impl Solution {
    pub fn find_kth_bit(&self, n: i32, k: i32) -> char {
        if n == 1 {
            return '0';
        }

        let len = (1 << n) - 1;  // Length of S_n
        let mid = len / 2 + 1;   // Middle index of S_n

        if k == mid {
            return '1';  // Middle bit is always '1'
        }

        if k < mid {
            return self.find_kth_bit(n - 1, k);  // k-th bit is in the first half
        }

        // k-th bit is in the second half, calculate the mirrored index
        let bit = self.find_kth_bit(n - 1, len - k + 1);
        if bit == '0' {
            return '1';
        }
        return '0';  // Invert the mirrored bit
    }
}

```