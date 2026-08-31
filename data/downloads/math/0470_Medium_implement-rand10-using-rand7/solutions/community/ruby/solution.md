# Cpp(7 ms,Beats92.22%)Ruby(167 ms,Beats100.0%)

**Author:** Vucius
**Votes:** 0
**Link:** [https://leetcode.com/problems/implement-rand10-using-rand7/solutions/3796798/](https://leetcode.com/problems/implement-rand10-using-rand7/solutions/3796798/)

---


```cpp []
//https://leetcode.com/problems/implement-rand10-using-rand7/submissions/1000145893/
class Solution {
private: 
	int ans;
public:
    int rand10() {
        do{
        	ans = 7 * (rand7() - 1) + rand7();
        }
        while (ans > 40);
        return ans % 10 + 1;
    }
};
```
```ruby []
#https://leetcode.com/problems/implement-rand10-using-rand7/submissions/1000143249/
# The rand7() API is already defined for you.
# def rand7()
# @return {Integer} a random integer in the range 1 to 7

def rand10()
    r = 7 * (rand7() - 1 ) + rand7()
	until r < 41
		r = 7 * (rand7() - 1 ) + rand7()
	end
	r % 10 + 1
end
```
