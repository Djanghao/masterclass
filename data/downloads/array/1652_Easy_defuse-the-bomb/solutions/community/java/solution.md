# ✅Video Full Explanation | Beats 100% | Space O(1) | Simple & Short | 4 approaches

**Author:** Piotr_Maminski
**Votes:** 37
**Link:** [https://leetcode.com/problems/defuse-the-bomb/solutions/6058122/](https://leetcode.com/problems/defuse-the-bomb/solutions/6058122/)

---

https://youtu.be/c4oOIi5YTE4?si=w73mRXGhitv7W0v7

# #1 Simple and Short, probably not enough for Interview (from video 1st)

```python3 []
class Solution:
    def decrypt(self, code: List[int], k: int) -> List[int]:
        N = len(code)
        res = [0] * N

        for i in range(N):
            if k > 0:
                for j in range(i + 1, i + 1 + k):
                    res[i] += code[j % N]
            elif k < 0:
                for j in range(i - 1, i - 1 - abs(k), -1):
                    res[i] += code[j % N]
        return res
```
```cpp []
class Solution {
public:
    vector<int> decrypt(vector<int>& code, int k) {
        int N = code.size();
        vector<int> res(N, 0);
        
        for (int i = 0; i < N; i++) {
            if (k > 0) {
                for (int j = i + 1; j < i + 1 + k; j++) {
                    res[i] += code[j % N];
                }
            }
            else if (k < 0) {
                for (int j = i - 1; j > i - 1 - abs(k); j--) {
                    res[i] += code[((j % N) + N) % N];
                }
            }
        }
        
        return res;
    }
};
```
```java []
class Solution {
    public int[] decrypt(int[] code, int k) {
        int N = code.length;
        int[] res = new int[N];
        
        for (int i = 0; i < N; i++) {
            if (k > 0) {
                for (int j = i + 1; j < i + 1 + k; j++) {
                    res[i] += code[j % N];
                }
            } else if (k < 0) {
                for (int j = i - 1; j > i - 1 - Math.abs(k); j--) {
                    res[i] += code[((j % N) + N) % N];
                }
            }
        }
        
        return res;
    }
}
```
```csharp []
public class Solution {
    public int[] Decrypt(int[] code, int k) {
        int N = code.Length;
        int[] res = new int[N];
        
        for (int i = 0; i < N; i++) {
            if (k > 0) {
                for (int j = i + 1; j < i + 1 + k; j++) {
                    res[i] += code[j % N];
                }
            } else if (k < 0) {
                for (int j = i - 1; j > i - 1 - Math.Abs(k); j--) {
                    res[i] += code[((j % N) + N) % N];
                }
            }
        }
        
        return res;
    }
}
```
```golang []
func decrypt(code []int, k int) []int {
    N := len(code)
    res := make([]int, N)
    
    for i := 0; i < N; i++ {
        if k > 0 {
            for j := i + 1; j < i + 1 + k; j++ {
                res[i] += code[j % N]
            }
        } else if k < 0 {
            for j := i - 1; j > i - 1 - abs(k); j-- {
                res[i] += code[((j % N) + N) % N]
            }
        }
    }
    
    return res
}

func abs(x int) int {
    if x < 0 {
        return -x
    }
    return x
}
```
```swift []
class Solution {
    func decrypt(_ code: [Int], _ k: Int) -> [Int] {
        let N = code.count
        var res = Array(repeating: 0, count: N)
        
        for i in 0..<N {
            if k > 0 {
                for j in (i + 1)...(i + k) {
                    res[i] += code[j % N]
                }
            } else if k < 0 {
                for j in stride(from: i - 1, through: i - abs(k), by: -1) {
                    res[i] += code[((j % N) + N) % N]
                }
            }
        }
        
        return res
    }
}
```
```javascript [JS]
// JavaScript

var decrypt = function(code, k) {
    const N = code.length;
    const res = new Array(N).fill(0);
    
    for (let i = 0; i < N; i++) {
        if (k > 0) {
            for (let j = i + 1; j < i + 1 + k; j++) {
                res[i] += code[j % N];
            }
        } else if (k < 0) {
            for (let j = i - 1; j > i - 1 + k; j--) {
                res[i] += code[((j % N) + N) % N];
            }
        }
    }
    
    return res;
};
```
```typescript [TS]
// TypeScript

function decrypt(code: number[], k: number): number[] {
    const N: number = code.length;
    const res: number[] = new Array(N).fill(0);
    
    for (let i = 0; i < N; i++) {
        if (k > 0) {
            for (let j = i + 1; j < i + 1 + k; j++) {
                res[i] += code[j % N];
            }
        } else if (k < 0) {
            for (let j = i - 1; j > i - 1 - Math.abs(k); j--) {
                res[i] += code[((j % N) + N) % N];
            }
        }
    }
    
    return res;
}
```
```rust []
impl Solution {
    pub fn decrypt(code: Vec<i32>, k: i32) -> Vec<i32> {
        let n = code.len();
        let mut res = vec![0; n];
        
        if k == 0 {
            return res;
        }
        
        for i in 0..n {
            let mut sum = 0;
            if k > 0 {
                let mut count = k;
                let mut j = (i + 1) % n;
                while count > 0 {
                    sum += code[j];
                    j = (j + 1) % n;
                    count -= 1;
                }
            } else {
                let mut count = k.abs();
                let mut j = (i + n - 1) % n;
                while count > 0 {
                    sum += code[j];
                    j = (j + n - 1) % n;
                    count -= 1;
                }
            }
            res[i] = sum;
        }
        
        res
    }
}
```
```ruby []
def decrypt(code, k)
    n = code.length
    res = Array.new(n, 0)
    
    (0...n).each do |i|
        if k > 0
            (i + 1..i + k).each do |j|
                res[i] += code[j % n]
            end
        elsif k < 0
            (i - 1).downto(i - k.abs) do |j|
                res[i] += code[j % n]
            end
        end
    end
    
    res
end
```


- Complexity: Time O(n * k) (strict |k|) & Space O(n)


# #2 Simple Sliding Window (allmost all 100% but not always, can do better) (from video 2nd)

```python3 []
class Solution:
    def decrypt(self, code: List[int], k: int) -> List[int]:
        N = len(code)
        res = [0] * N

        l = 0
        cur_sum = 0
        for r in range(N + abs(k)):
            cur_sum += code[r % N]

            if r - l + 1 > abs(k):
                cur_sum -= code[l % N]
                l = (l + 1) % N

            if r - l + 1 == abs(k):
                if k > 0:
                    res[(l - 1) % N] = cur_sum
                elif k < 0:
                    res[(r + 1) % N] = cur_sum
        return res
```
```cpp []
class Solution {
public:
    vector<int> decrypt(vector<int>& code, int k) {
        int N = code.size();
        vector<int> res(N, 0);
        
        if (k == 0) return res;
        
        int l = 0;
        int cur_sum = 0;
        
        for (int r = 0; r < N + abs(k); r++) {
            cur_sum += code[r % N];
            
            if (r - l + 1 > abs(k)) {
                cur_sum -= code[l % N];
                l = (l + 1) % N;
            }
            
            if (r - l + 1 == abs(k)) {
                if (k > 0) {
                    res[(l - 1 + N) % N] = cur_sum;
                } else if (k < 0) {
                    res[(r + 1) % N] = cur_sum;
                }
            }
        }
        
        return res;
    }
};
```
```java []
class Solution {
    public int[] decrypt(int[] code, int k) {
        int N = code.length;
        int[] res = new int[N];
        
        if (k == 0) {
            return res;
        }
        
        int l = 0;
        int curSum = 0;
        
        for (int r = 0; r < N + Math.abs(k); r++) {
            curSum += code[r % N];
            
            if (r - l + 1 > Math.abs(k)) {
                curSum -= code[l % N];
                l = (l + 1) % N;
            }
            
            if (r - l + 1 == Math.abs(k)) {
                if (k > 0) {
                    res[(l - 1 + N) % N] = curSum;
                } else {
                    res[(r + 1) % N] = curSum;
                }
            }
        }
        
        return res;
    }
}
```
```csharp []
public class Solution {
    public int[] Decrypt(int[] code, int k) {
        int N = code.Length;
        int[] res = new int[N];
        
        if (k == 0) return res;
        
        int l = 0;
        int curSum = 0;
        for (int r = 0; r < N + Math.Abs(k); r++) {
            curSum += code[r % N];
            
            if (r - l + 1 > Math.Abs(k)) {
                curSum -= code[l % N];
                l = (l + 1) % N;
            }
            
            if (r - l + 1 == Math.Abs(k)) {
                if (k > 0) {
                    res[(l - 1 + N) % N] = curSum;
                } else {
                    res[(r + 1) % N] = curSum;
                }
            }
        }
        return res;
    }
}
```
```golang []
func decrypt(code []int, k int) []int {
    N := len(code)
    res := make([]int, N)
    
    if k == 0 {
        return res
    }
    
    l := 0
    curSum := 0
    for r := 0; r < N + abs(k); r++ {
        curSum += code[r % N]
        
        if r - l + 1 > abs(k) {
            curSum -= code[l % N]
            l = (l + 1) % N
        }
        
        if r - l + 1 == abs(k) {
            if k > 0 {
                res[(l - 1 + N) % N] = curSum
            } else {
                res[(r + 1) % N] = curSum
            }
        }
    }
    return res
}

func abs(x int) int {
    if x < 0 {
        return -x
    }
    return x
}
```
```swift []
class Solution {
    func decrypt(_ code: [Int], _ k: Int) -> [Int] {
        let N = code.count
        var res = Array(repeating: 0, count: N)
        
        if k == 0 { return res }
        
        var l = 0
        var curSum = 0
        for r in 0..<(N + abs(k)) {
            curSum += code[r % N]
            
            if r - l + 1 > abs(k) {
                curSum -= code[l % N]
                l = (l + 1) % N
            }
            
            if r - l + 1 == abs(k) {
                if k > 0 {
                    res[((l - 1 + N) % N)] = curSum
                } else {
                    res[(r + 1) % N] = curSum
                }
            }
        }
        return res
    }
}
```
```javascript [JS]
// JavaScript

var decrypt = function(code, k) {
    const N = code.length;
    const res = new Array(N).fill(0);
    
    if (k === 0) return res;
    
    let l = 0;
    let curSum = 0;
    
    for (let r = 0; r < N + Math.abs(k); r++) {
        curSum += code[r % N];
        
        if (r - l + 1 > Math.abs(k)) {
            curSum -= code[l % N];
            l = (l + 1) % N;
        }
        
        if (r - l + 1 === Math.abs(k)) {
            if (k > 0) {
                res[(l - 1 + N) % N] = curSum;
            } else {
                res[(r + 1) % N] = curSum;
            }
        }
    }
    
    return res;
};
```
```typescript [TS]
// TypeScript

function decrypt(code: number[], k: number): number[] {
    const N = code.length;
    const res = new Array(N).fill(0);
    
    if (k === 0) return res;
    
    let l = 0;
    let curSum = 0;
    for (let r = 0; r < N + Math.abs(k); r++) {
        curSum += code[r % N];
        
        if (r - l + 1 > Math.abs(k)) {
            curSum -= code[l % N];
            l = (l + 1) % N;
        }
        
        if (r - l + 1 === Math.abs(k)) {
            if (k > 0) {
                res[((l - 1 + N) % N)] = curSum;
            } else {
                res[(r + 1) % N] = curSum;
            }
        }
    }
    return res;
}
```
```rust []
impl Solution {
    pub fn decrypt(code: Vec<i32>, k: i32) -> Vec<i32> {
        let n = code.len();
        let mut res = vec![0; n];
        
        if k == 0 { return res; }
        
        let mut l = 0;
        let mut cur_sum = 0;
        for r in 0..(n + k.abs() as usize) {
            cur_sum += code[r % n];
            
            if r - l + 1 > k.abs() as usize {
                cur_sum -= code[l % n];
                l = (l + 1) % n;
            }
            
            if r - l + 1 == k.abs() as usize {
                if k > 0 {
                    res[((l as i32 - 1 + n as i32) as usize) % n] = cur_sum;
                } else {
                    res[(r + 1) % n] = cur_sum;
                }
            }
        }
        res
    }
}
```
```ruby []
def decrypt(code, k)
    n = code.length
    res = Array.new(n, 0)
    
    return res if k == 0
    
    l = 0
    cur_sum = 0
    
    (0...(n + k.abs)).each do |r|
        cur_sum += code[r % n]
        
        if r - l + 1 > k.abs
            cur_sum -= code[l % n]
            l = (l + 1) % n
        end
        
        if r - l + 1 == k.abs
            if k > 0
                res[(l - 1) % n] = cur_sum
            elsif k < 0
                res[(r + 1) % n] = cur_sum
            end
        end
    end
    
    res
end
```

# #3 Sliding Window (ALL beats 100%, optimal RAM)

```python3 []
class Solution:
    def decrypt(self, circ: List[int], k: int) -> List[int]:
        n = len(circ)  # circular array
        result = [0] * n
        
        if k == 0:
            return result
            
        start = 1 if k > 0 else n + k
        end = k if k > 0 else n - 1
        
        wSum = sum(circ[i % n] for i in range(start, end + 1))
        
        for i in range(n):
            result[i] = wSum
            wSum -= circ[(start + i) % n]
            wSum += circ[(end + i + 1) % n]
            
        return result
```
```cpp []
class Solution {
public:
    vector<int> decrypt(vector<int>& circ, int k) {
        int n = circ.size(); // circular array
        vector<int> result(n);

        if (k == 0) return result;

        int wSum = 0; 
        int start = (k > 0) ? 1 : n + k;
        int end = (k > 0) ? k : n - 1;

        for (int i = start; i <= end; i++) {
            wSum += circ[i % n];
        }
        for (int i = 0; i < n; i++) {
            result[i] = wSum;
            wSum -= circ[(start + i) % n];
            wSum += circ[(end + i + 1) % n];
        }
        
        return result;
    }
};
```
```java []
class Solution {
    public int[] decrypt(int[] circ, int k) {
        int n = circ.length; // circular array
        int[] result = new int[n];
        
        if (k == 0) return result;
        
        int wSum = 0;
        int start = (k > 0) ? 1 : n + k;
        int end = (k > 0) ? k : n - 1;
        
        for (int i = start; i <= end; i++) {
            wSum += circ[i % n];
        }
        
        for (int i = 0; i < n; i++) {
            result[i] = wSum;
            wSum -= circ[(start + i) % n];
            wSum += circ[(end + i + 1) % n];
        }
        
        return result;
    }
}
```
```csharp []
public class Solution {
    public int[] Decrypt(int[] circ, int k) {
        int n = circ.Length;
        int[] result = new int[n];
        
        if (k == 0) return result;
        
        int wSum = 0;
        int start = (k > 0) ? 1 : n + k;
        int end = (k > 0) ? k : n - 1;
        
        for (int i = start; i <= end; i++) {
            wSum += circ[i % n];
        }
        
        for (int i = 0; i < n; i++) {
            result[i] = wSum;
            wSum -= circ[(start + i) % n];
            wSum += circ[(end + i + 1) % n];
        }
        
        return result;
    }
}
```
```golang []
func decrypt(circ []int, k int) []int {
    n := len(circ) // circular array
    result := make([]int, n)
    
    if k == 0 {
        return result
    }
    
    wSum := 0
    var start, end int
    
    if k > 0 {
        start = 1
        end = k
    } else {
        start = n + k
        end = n - 1
    }
    
    for i := start; i <= end; i++ {
        wSum += circ[i%n]
    }
    
    for i := 0; i < n; i++ {
        result[i] = wSum
        wSum -= circ[(start+i)%n]
        wSum += circ[(end+i+1)%n]
    }
    
    return result
}
```
```swift []
class Solution {
    func decrypt(_ circ: [Int], _ k: Int) -> [Int] {
        let n = circ.count // circular array
        var result = Array(repeating: 0, count: n)
        
        if k == 0 { return result }
        
        var wSum = 0
        let start = k > 0 ? 1 : n + k
        let end = k > 0 ? k : n - 1
        
        for i in start...end {
            wSum += circ[i % n]
        }
        
        for i in 0..<n {
            result[i] = wSum
            wSum -= circ[(start + i) % n]
            wSum += circ[(end + i + 1) % n]
        }
        
        return result
    }
}
```
```javascript [JS]
// JavaScript

var decrypt = function(code, k) {
    const n = code.length;
    const result = new Array(n).fill(0);
    
    if (k === 0) return result;
    
    let wSum = 0;
    const start = k > 0 ? 1 : n + k;
    const end = k > 0 ? k : n - 1;
    
    for (let i = start; i <= end; i++) {
        wSum += code[i % n];
    }
    
    for (let i = 0; i < n; i++) {
        result[i] = wSum;
        wSum -= code[(start + i) % n];
        wSum += code[(end + i + 1) % n];
    }
    
    return result;
};
```
```typescript [TS]
// TypeScript

function decrypt(circ: number[], k: number): number[] {
    const n: number = circ.length;
    const result: number[] = new Array(n).fill(0);

    if (k === 0) return result;

    let wSum: number = 0;
    const start: number = k > 0 ? 1 : n + k;
    const end: number = k > 0 ? k : n - 1;

    for (let i = start; i <= end; i++) {
        wSum += circ[i % n];
    }

    for (let i = 0; i < n; i++) {
        result[i] = wSum;
        wSum -= circ[(start + i) % n];
        wSum += circ[(end + i + 1) % n];
    }
    return result;
};
```
```rust []
impl Solution {
    pub fn decrypt(circ: Vec<i32>, k: i32) -> Vec<i32> {
        let n = circ.len();
        let mut result = vec![0; n];
        
        if k == 0 {
            return result;
        }
        
        let mut w_sum = 0;
        let start = if k > 0 { 1 } else { n as i32 + k } as usize;
        let end = if k > 0 { k } else { n as i32 - 1 } as usize;
        
        for i in start..=end {
            w_sum += circ[i % n];
        }
        
        for i in 0..n {
            result[i] = w_sum;
            w_sum -= circ[(start + i) % n];
            w_sum += circ[(end + i + 1) % n];
        }
        
        result
    }
}
```
```ruby []
def decrypt(circ, k)
    n = circ.size
    result = Array.new(n, 0)
    
    return result if k == 0
    
    w_sum = 0
    start = k > 0 ? 1 : n + k
    end_pos = k > 0 ? k : n - 1
    
    (start..end_pos).each do |i|
        w_sum += circ[i % n]
    end
    
    n.times do |i|
        result[i] = w_sum
        w_sum -= circ[(start + i) % n]
        w_sum += circ[(end_pos + i + 1) % n]
    end
    
    result
end
```
- Complexity: Time O(n) & Space O(n) (without output array O(1))

C++:
![image.png](./images/0.png)
C#:
![image.png](./images/1.png)


---


# Bonus: #4 Overkill, Space O(1) (beats 100%)

```python3 []
class Solution:
    @staticmethod
    def mod1(i: int, n: int) -> int:
        return i - (-(i >= n) & n)
    
    def decrypt(self, code: list[int], k: int) -> list[int]:
        n = len(code)
        if k < 0:
            s = sum(code[n + k:])
            code = [v << 16 for v in code]
            for i in range(n):
                v = code[i] >> 16
                code[i] += s
                j = self.mod1(n + k + i, n)
                s += v - (code[j] >> 16)
            code = [v & 0x3FFF for v in code]
        elif k > 0:
            s = sum(code[:k])
            code = [v << 16 for v in code]
            for i in range(n):
                v = code[i] >> 16
                j = self.mod1(i + k, n)
                s += (code[j] >> 16) - v
                code[i] += s
            code = [v & 0x3FFF for v in code]
        else:
            code = [0] * n
        return code
```
```cpp []
class Solution {
private:
    static int mod1(int i, int n) {
        return i - ((-(i >= n ? 1 : 0)) & n);
    }
    
public:
    static vector<int> decrypt(vector<int>& code, int k) {
        int n = code.size();
        
        if (k < 0) {
            int s = 0;
            for (int i = n + k; i < n; i++) {
                s += code[i];
            }
            
            for (int i = 0; i < n; i++) {
                code[i] <<= 16;
            }
            
            for (int i = 0; i < n; i++) {
                int v = code[i] >> 16;
                code[i] += s;
                int j = mod1(n + k + i, n);
                s += v - (code[j] >> 16);
            }
            
            for (int i = 0; i < n; i++) {
                code[i] &= 0x3FFF;
            }
            
        } else if (k > 0) {
            int s = 0;
            for (int i = 0; i < k; i++) {
                s += code[i];
            }
            
            for (int i = 0; i < n; i++) {
                code[i] <<= 16;
            }
            
            for (int i = 0; i < n; i++) {
                int v = code[i] >> 16;
                int j = mod1(i + k, n);
                s += (code[j] >> 16) - v;
                code[i] += s;
            }
            
            for (int i = 0; i < n; i++) {
                code[i] &= 0x3FFF;
            }
            
        } else {
            fill(code.begin(), code.end(), 0);
        }
        
        return code;
    }
};

```
```java []
class Solution {
    private static int mod1(int i, int n) {
        return i - ((-(i >= n ? 1 : 0)) & n);
    }
    
    public static int[] decrypt(int[] code, int k) {
        int n = code.length;
        
        if (k < 0) {
            int s = 0;
            for (int i = n + k; i < n; i++) {
                s += code[i];
            }
            
            for (int i = 0; i < n; i++) {
                code[i] <<= 16;
            }
            
            for (int i = 0; i < n; i++) {
                int v = code[i] >> 16;
                code[i] += s;
                int j = mod1(n + k + i, n);
                s += v - (code[j] >> 16);
            }
            
            for (int i = 0; i < n; i++) {
                code[i] &= 0x3FFF;
            }
            
        } else if (k > 0) {
            int s = 0;
            for (int i = 0; i < k; i++) {
                s += code[i];
            }
            
            for (int i = 0; i < n; i++) {
                code[i] <<= 16;
            }
            
            for (int i = 0; i < n; i++) {
                int v = code[i] >> 16;
                int j = mod1(i + k, n);
                s += (code[j] >> 16) - v;
                code[i] += s;
            }
            
            for (int i = 0; i < n; i++) {
                code[i] &= 0x3FFF;
            }
            
        } else {
            Arrays.fill(code, 0);
        }
        
        return code;
    }
}
```

```rust []
impl Solution {
    fn mod1(i: i32, n: i32) -> i32 {
        i - ((-(if i >= n { 1 } else { 0 })) & n)
    }

    pub fn decrypt(mut code: Vec<i32>, k: i32) -> Vec<i32> {
        let n = code.len() as i32;
        
        if k < 0 {
            let mut s = 0;
            for i in (n + k)..n {
                s += code[i as usize];
            }
            
            for i in 0..n {
                code[i as usize] <<= 16;
            }
            
            for i in 0..n {
                let v = code[i as usize] >> 16;
                code[i as usize] += s;
                let j = Self::mod1(n + k + i, n);
                s += v - (code[j as usize] >> 16);
            }
            
            for i in 0..n {
                code[i as usize] &= 0x3FFF;
            }
            
        } else if k > 0 {
            let mut s = 0;
            for i in 0..k {
                s += code[i as usize];
            }
            
            for i in 0..n {
                code[i as usize] <<= 16;
            }
            
            for i in 0..n {
                let v = code[i as usize] >> 16;
                let j = Self::mod1(i + k, n);
                s += (code[j as usize] >> 16) - v;
                code[i as usize] += s;
            }
            
            for i in 0..n {
                code[i as usize] &= 0x3FFF;
            }
            
        } else {
            code.fill(0);
        }
        
        code
    }
}
```
![image.png](./images/2.png)



- Complexity: Time O(n) & Space O(1)

![image.png](./images/3.png)





