# Very easy O(N) time. 0 ms beats 100% (simple maths) ALL LANGUAGES

**Author:** pratyushgguptaa
**Votes:** 162
**Link:** [https://leetcode.com/problems/pascals-triangle-ii/solutions/1203260/](https://leetcode.com/problems/pascals-triangle-ii/solutions/1203260/)

---

This solution here, is **Linear** in time.

---
As you know you can get any element of Pascal's Triangle in **O(N)** time and constant space complexity. 
for first row first column we have **1C1**
for second row first column we have **2C1**
for second row second column we have **2C2**
..... and so on
Therefore we can infer, for ith row and jth column we have the number **iCj**

And calculating this is pretty easy just in ***N*** time (factorial basically).

==> `nCr = n*(n-1)*(n-2)...(r terms) /  1*2*..........*(r-2)*(r-1)*r`

Now the question asks us to find the complete row.
If we calculate all the elements in this manner it would be quadratic in time. But, since its formula is pretty sleek, we proceed as follows:

suppose we have **nCr** and we have to find **nC(r+1)**, like **5C3** and **5C4**
==> `5C3 = 5*4*3 / 1*2*3`

to get the next term we multiply numerator with its next term and denominator with its next term. As, 
==> `5C4 = 5*4*3 * 2 / 1*2*3 * 4`

We are following this simple maths logic to get the complete row in **O(N)** time.

**Note:-** We didnt actually need the variable temp. But the test cases are such that multiplying in one case exceeds the **int range**, and since we cannot change return type we have to take the **long** data type variable as temporary.

---
**Python Code:**
The result for this code is **8 ms / 13.3 MB** (beats 99.82% / 88.54%): 
```
class Solution(object):
    def getRow(self, r):
        ans = [1]*(r+1);
        up = r
        down = 1
        for i in range(1, r):
            ans[i] = ans[i-1]*up/down;
            up = up - 1
            down = down + 1
        return ans;
```

---
**Java Code:**
The result for this code is **0 ms / 36.3 MB** (beats 100% / 91.45%): 
```
class Solution {
    public List<Integer> getRow(int r) {
        List<Integer> ans = new ArrayList<>();
        ans.add(1);
        long temp = 1;
        for(int i=1,up=r,down=1;i<=r;i++,up--, down++){
            temp=temp*up/down;
            ans.add((int)temp);
        }
        return ans;
    }
}
```

---
**JavaScript Code:**
The result for this code is **72 ms / 38.7 MB** (beats 90.29% / 40.05%): 
```
var getRow = function(r) {
    var ans = new Array(r+1)
    ans[0]=ans[r]=1
    for(i=1,up=r;i<r;i++,up--)
        ans[i] = ans[i-1]*up/i
    return ans
};
```

---
**C++ Code:**
The result for this code is **0 ms / 6.2 MB** (beats 100% / 84.20%): 
```
class Solution {
public:
    vector<int> getRow(int r) {
        vector<int>v(r+1);
        long temp=1;
        v[0]=v[r]=1;
        for(int i=1,up=r,down=1;i<r;i++,up--,down++){
            temp = temp*up/down;
            v[i]=temp;
        }
        return v;
    }
};
```

---
**C Code:**
The result for this code is **0 ms / 5.6 MB** (beats 100% / 85.96%): 
```
int* getRow(int r, int* rS){
    int*ans = calloc(r + 1, sizeof(int));
    long temp=1;
    ans[0]=1;
    for(int i=1,up=r;i<=r;i++,up--){
        temp=temp*up/i;
        ans[i]=temp;
    }
    *rS = r+1;
    return ans;
}
```

---

**C# Code:**
The result for this code is **188 ms / 26.2 MB** (beats 99.37% / 69.62%): 
```
public class Solution {
    public IList<int> GetRow(int r) {
        var ans = new int[r+1];
        ans[0]=ans[r]=1;
        long temp=1;
        for(int i=1,up=r;i<r;i++,up--){
            temp = temp * up / i;
            ans[i]=(int)temp;
        }
        return ans;
    }
}
```

---

**Ruby Code:**
The result for this code is **48 ms / 209.8 MB** (beats 80.65% / 35.48%): 
```
def get_row(r)
    return [1] if r==0
    ans = [1]
    temp = 1
    for i in 1...r do
        temp = temp * (r-i+1)/i
        ans << temp
    end
    ans << 1
    return ans
end
```

---

**Switft Code:**
The result for this code is **0 ms / 14 MB** (beats 100.00% / 68.04%)
```
class Solution {
    func getRow(_ r: Int) -> [Int] {
        if r==0 {
            return [1]
        }
        var ans = [Int](repeating: 1, count: r+1)
        for i in 1...r {
            ans[i] = ans[i-1]*(r-i+1)/i
        }
        return ans
    }
}
```

---

**Go Code:**
The result for this code is **0 ms / 2 MB** (beats 100.00% / 100.00%)
```
func getRow(r int) []int {
    var ans = make([]int,r+1)
    ans[0] = 1
    ans[r] = 1
    for i:=1; i<=r; i++ {
        ans[i] = ans[i-1]*(r-i+1)/i
    }
    return ans
}
```

---

**Scala Code:**
The result for this code is **388 ms / 49.4 MB** (beats 100.00% / 95.00%)
**Note:** `implicit def` function is used to implicitly convert array to List
```
object Solution {
    implicit def arrayToList[A](a: Array[A]) = a.toList
    def getRow(r: Int): List[Int] = {
        var ans = new Array[Int](r+1)
        ans(0) = 1
        var temp: Long = 1
        for( i <- 1 to r){
            temp = temp*(r-i+1)/i
            ans(i) = temp.asInstanceOf[Int]
        }
        return ans
    }
}
```

---

**Kotlin Code:**
The result for this code is **132 ms / 33.1 MB** (beats 91.67% / 98.81%)
```
class Solution {
    fun getRow(r: Int): List<Int> {
        var ans = MutableList<Int>(r+1){1}
        var temp: Long = 1
        for (i in 1..r){
            temp = temp*(r-i+1)/i
            ans[i] = temp.toInt()
        }
        return ans
    }
}
```

---

**Rust Code:**
The result for this code is **0 ms /1.9 MB** (beats 100.00% / 92.31%)
```
impl Solution {
    pub fn get_row(r: i32) -> Vec<i32> {
        let mut ans : Vec<i32> = Vec::new();  
        ans.push(1);
        let mut temp: i64 = 1;
        let mut up = r as i64;
        let mut down = 1 as i64;
        for i in 1..=r {
            temp = temp*up/down;
            ans.push(temp as i32);
            up-=1;
            down+=1;
        }
        return ans;
    }
}
```

---

**PHP Code:**
The result for this code is **0 ms /15.7 MB** (beats 100.00% / 48.15%)
```
class Solution {
    function getRow($r) {
        $ans = array(1);
        $temp = 1;
        for($i=1;$i<=$r;$i++){
            $temp = $temp*($r-$i+1)/$i;
            array_push($ans, $temp);
        }
        return $ans;
    }
}
```

---

**TypeScript Code:**
The result for this code is **80 ms /39.2 MB** (beats 74.58% / 72.88%)
```
function getRow(r: number): number[] {
    var ans:number[] = [1]
    var temp:number = 1
    for(var i:number=1;i<=r;i++){
        temp = temp*(r-i+1)/i
        ans.push(temp)
    }
    return ans
};
```