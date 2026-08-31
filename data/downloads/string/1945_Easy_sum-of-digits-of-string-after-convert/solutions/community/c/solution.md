# Convert letters to number then sum digits||Beats 100%

**Author:** anwendeng
**Votes:** 27
**Link:** [https://leetcode.com/problems/sum-of-digits-of-string-after-convert/solutions/5728524/](https://leetcode.com/problems/sum-of-digits-of-string-after-convert/solutions/5728524/)

---

# Intuition
<!-- Describe your first thoughts on how to solve this problem. -->
Convert letters to number then sum up the digits in the number, k--
Do until k=0 with the similar process k-1 times or an early stop when `num<10`.

C, C++, Python are implemented.
# Approach
<!-- Describe your approach to solving the problem. -->
[Please turn on English subtitles if necessary]
[https://youtu.be/sCAMCQavaK0?si=6-F4HlnfL6LMwn_p](https://youtu.be/sCAMCQavaK0?si=6-F4HlnfL6LMwn_p)
1. Convert s to `num` with care on that each letter `c` in `s` may have 1~2 digits. Add them with `num+=q+r` where `q,r= c-'a'+1 divMod 10`
2. If k==1 then answer is  `num`
3. k--
4. Use a nested loop with the initial setting `x=num`, do it as long as `x>=10 and k>0` with step `k--`:
```
for(num=0; x>0; ){
    auto [q, r]=div(x, 10);
    num+=r;
    x=q;
}
x=num;
```
5. `num` is the answer
# Real RUN as Simulation for some testcases
Add some inputs in the submitted C++ code.
Consider the testcase
```
"hvmhoasabaymnmsd"
1
```
```
k=1, num=79
```
The testcase given by
```
"abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuv"
5
```
The process is:
```
k=5, num=514
k=4, num=10
k=3, num=1 (early stop)
```
# Complexity
- Time complexity:
<!-- Add your time complexity here, e.g. $$O(n)$$ -->
 $$O(|s|)$$
- Space complexity:
<!-- Add your space complexity here, e.g. $$O(n)$$ -->
$$O(1)$$
# Code ||C, C++ 0ms beats 100%
```C []
#pragma GCC optimize("O3", "unroll-loops")
int getLucky(char* s, int k) {
    int num=0;
    for(register int  i=0; s[i]!='\\0'; i++){
        int x=s[i]-'a'+1;
        div_t qr=div(x, 10);
        num+=qr.quot+qr.rem;
    }
    k--;
    for(int x=num; x>=10 && k>0; k--){
        div_t qr;
        for(num=0; x>0; x=qr.quot){
            qr=div(x, 10);
            num+=qr.rem;
        }
        x=num;
    }
    return num;
}
```
```cpp []
class Solution {
public:
    int getLucky(string& s, int k) {
        int num=0;
        // convert letters to digits
        for (char c: s){
            int x=c-'a'+1;
            auto [q, r]=div(x, 10);// x may has 1~2 digits
            num+=q+r;
        }
    //    cout<<num<<endl;
        if (k==1) return num;
        k--;
        for(int x=num; x>=10 && k>0; k--){
            for(num=0; x>0; ){
                auto [q, r]=div(x, 10);
                num+=r;
                x=q;
            }
    //        cout<<"k="<<k<<", num="<<num<<endl;
            x=num;
        }
        return num;
    }
};
```
# Python code
```
class Solution:
    def getLucky(self, s: str, k: int) -> int:
        num=0
        for c in s:
            x=ord(c)-96
            q,r =divmod(x, 10)
            num+=q+r
        k-=1
        x=num
        for _ in range(k, 0, -1):
            num=0
            while x>0:
                q,r =divmod(x, 10)
                num+=r
                x=q
            x=num
            if x<10:break
        return num
```