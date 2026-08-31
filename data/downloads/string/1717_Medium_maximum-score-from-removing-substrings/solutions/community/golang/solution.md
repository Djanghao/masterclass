# [Greedy Proof Tutorial] Maximum Score From Removing Substrings

**Author:** never_get_piped
**Votes:** 23
**Link:** [https://leetcode.com/problems/maximum-score-from-removing-substrings/solutions/5463261/](https://leetcode.com/problems/maximum-score-from-removing-substrings/solutions/5463261/)

---

**Topic** :  Greedy

___


## Solution 
Firstly, it is evident that we need to process substrings chunk by chunk, where each chunk consists exclusively of characters `a` and `b`.

In the example `s = "ababtbabba"`, we can process `s` in two separate chunks: `abab` and `babba`. This separation is feasible because characters other than `a` and `b` serve to delimit these chunks, ensuring that they do not overlap or intersect.

**Now the problem transforms into one where we can remove `ab` and `ba` substrings within a string composed solely of characters `a` and `b`**.

Let's consider an example where we first remove all occurrences of `ab`. After removing all `ab` pairs from the string, the remaining characters will be grouped into sequences of `b` s followed by sequences of `a`s, such as `bbbb...aaaa`. 

**We can first attempt to remove all `ab` pairs and then all `ba` pairs. Similarly, we can also attempt the reverse order: removing all `ba` pairs first and then all `ab` pairs. We choose the order that yields the maximum score.**

With the described operations, eventually only one type of character will remain, and no further removals can be made. Therefore, this represents the maximum number of pairs that can be removed from the string.

Let's denote the maximum number of pairs you can remove as `m`. Suppose the number of `ab` pairs you can remove is `x` and the number of `ba` pairs you can remove is `y`. We aim to maximize either `x` or `y` first, selecting the option that allows us to achieve the highest final score. If we prioritize removing `ab` first, `x` will be maximized; otherwise, if we prioritize `ba` first, `y` will be maximized.

**Proof**
```
If we prioritize removing `ab` first, `x` will be maximized.

To maximize the number of 'ab' pairs removed, we can prioritize removing all 'ab' pairs first without considering any 'ba' pairs. 
This approach is correct because 'a' can only combine with a 'b' that stays after it.
```


<br/><br/>
```c++ []
class Solution {
public:
    int maximumGain(string s, int x, int y) {
        int n = s.size(), ans = 0;
        for(int i = 0; i < n; i++) {
            if(s[i] != 'a' && s[i] != 'b') continue;
            int j = i;
            string t = "";
            while(j < n && (s[j] == 'a' || s[j] == 'b')) {
                t += s[j];
                j++;
            }
            ans += max(processAB(t, x, y), processBA(t, x, y));
            i = j - 1;
        }
        return ans;
    }
    
    int processAB(string& s, int x, int y) { //process AB first
        vector<char> stk;
        int ans = 0;
        for(int i = 0; i < s.size(); i++) {
            if(stk.size() > 0 && stk.back() == 'a' && s[i] == 'b') {
                stk.pop_back();
                ans += x;
            } else {
                stk.push_back(s[i]);
            }
        }
        int a = 0, b = 0;
        for(int i = 0; i < stk.size(); i++) {
            if(stk[i] == 'a') a++;
            else b++;
        }
        return min(a, b) * y + ans;
    }
    
    int processBA(string& s, int x, int y) { //process AB first
        vector<char> stk;
        int ans = 0;
        for(int i = 0; i < s.size(); i++) {
            if(stk.size() > 0 && stk.back() == 'b' && s[i] == 'a') {
                stk.pop_back();
                ans += y;
            } else {
                stk.push_back(s[i]);
            }
        }
        int a = 0, b = 0;
        for(int i = 0; i < stk.size(); i++) {
            if(stk[i] == 'a') a++;
            else b++;
        }
        return min(a, b) * x + ans;
    }
};
```
```java []
class Solution {
    public int maximumGain(String s, int x, int y) {
        int n = s.length(), ans = 0;
        for (int i = 0; i < n; i++) {
            if (s.charAt(i) != 'a' && s.charAt(i) != 'b') continue;
            int j = i;
            StringBuilder t = new StringBuilder();
            while (j < n && (s.charAt(j) == 'a' || s.charAt(j) == 'b')) {
                t.append(s.charAt(j));
                j++;
            }
            ans += Math.max(processAB(t.toString(), x, y), processBA(t.toString(), x, y));
            i = j - 1;
        }
        return ans;
    }
    
    public int processAB(String s, int x, int y) {
        Stack<Character> stk = new Stack<>();
        int ans = 0;
        for (char c : s.toCharArray()) {
            if (!stk.isEmpty() && stk.peek() == 'a' && c == 'b') {
                stk.pop();
                ans += x;
            } else {
                stk.push(c);
            }
        }
        int a = 0, b = 0;
        for (char c : stk) {
            if (c == 'a') a++;
            else b++;
        }
        return Math.min(a, b) * y + ans;
    }
    
    public int processBA(String s, int x, int y) {
        Stack<Character> stk = new Stack<>();
        int ans = 0;
        for (char c : s.toCharArray()) {
            if (!stk.isEmpty() && stk.peek() == 'b' && c == 'a') {
                stk.pop();
                ans += y;
            } else {
                stk.push(c);
            }
        }
        int a = 0, b = 0;
        for (char c : stk) {
            if (c == 'a') a++;
            else b++;
        }
        return Math.min(a, b) * x + ans;
    }
}
```
```python []
class Solution:
    def maximumGain(self, s: str, x: int, y: int) -> int:
        def processAB(s: str, x: int, y: int) -> int:
            stk = []
            ans = 0
            for char in s:
                if stk and stk[-1] == 'a' and char == 'b':
                    stk.pop()
                    ans += x
                else:
                    stk.append(char)
            a = stk.count('a')
            b = stk.count('b')
            return min(a, b) * y + ans
        
        def processBA(s: str, x: int, y: int) -> int:
            stk = []
            ans = 0
            for char in s:
                if stk and stk[-1] == 'b' and char == 'a':
                    stk.pop()
                    ans += y
                else:
                    stk.append(char)
            a = stk.count('a')
            b = stk.count('b')
            return min(a, b) * x + ans
        
        ans = 0
        i = 0
        n = len(s)
        while i < n:
            if s[i] != 'a' and s[i] != 'b':
                i += 1
                continue
            j = i
            t = ""
            while j < n and (s[j] == 'a' or s[j] == 'b'):
                t += s[j]
                j += 1
            ans += max(processAB(t, x, y), processBA(t, x, y))
            i = j
        return ans
```
```Go []
func processAB(s string, x int, y int) int {
	var stk []byte
	ans := 0
	for _, c := range s {
		if len(stk) > 0 && stk[len(stk)-1] == 'a' && c == 'b' {
			stk = stk[:len(stk)-1]
			ans += x
		} else {
			stk = append(stk, byte(c))
		}
	}
	a, b := 0, 0
	for _, c := range stk {
		if c == 'a' {
			a++
		} else {
			b++
		}
	}
	return min(a, b) * y + ans
}

func processBA(s string, x int, y int) int {
	var stk []byte
	ans := 0
	for _, c := range s {
		if len(stk) > 0 && stk[len(stk)-1] == 'b' && c == 'a' {
			stk = stk[:len(stk)-1]
			ans += y
		} else {
			stk = append(stk, byte(c))
		}
	}
	a, b := 0, 0
	for _, c := range stk {
		if c == 'a' {
			a++
		} else {
			b++
		}
	}
	return min(a, b) * x + ans
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func maximumGain(s string, x int, y int) int {
    var ans int
	for i := 0; i < len(s); i++ {
		if s[i] != 'a' && s[i] != 'b' {
			continue
		}
		j := i
		var t strings.Builder
		for j < len(s) && (s[j] == 'a' || s[j] == 'b') {
			t.WriteByte(s[j])
			j++
		}
		ans += max(processAB(t.String(), x, y), processBA(t.String(), x, y))
		i = j - 1
	}
	return ans
}
```
```PHP []
class Solution {

    /**
     * @param String $s
     * @param Integer $x
     * @param Integer $y
     * @return Integer
     */
    function maximumGain($s, $x, $y) {
        $ans = 0;
        $n = strlen($s);
        for ($i = 0; $i < $n; $i++) {
            if ($s[$i] != 'a' && $s[$i] != 'b') continue;
            $j = $i;
            $t = "";
            while ($j < $n && ($s[$j] == 'a' || $s[$j] == 'b')) {
                $t .= $s[$j];
                $j++;
            }
            $ans += max($this->processAB($t, $x, $y), $this->processBA($t, $x, $y));
            $i = $j - 1;
        }
        return $ans;
    }
    
    function processAB($s, $x, $y) {
        $stk = [];
        $ans = 0;
        for ($i = 0; $i < strlen($s); $i++) {
            if (!empty($stk) && $stk[count($stk) - 1] == 'a' && $s[$i] == 'b') {
                array_pop($stk);
                $ans += $x;
            } else {
                array_push($stk, $s[$i]);
            }
        }
        $a = 0;
        $b = 0;
        foreach ($stk as $char) {
            if ($char == 'a') $a++;
            else $b++;
        }
        return min($a, $b) * $y + $ans;
    }
    
    function processBA($s, $x, $y) {
        $stk = [];
        $ans = 0;
        for ($i = 0; $i < strlen($s); $i++) {
            if (!empty($stk) && $stk[count($stk) - 1] == 'b' && $s[$i] == 'a') {
                array_pop($stk);
                $ans += $y;
            } else {
                array_push($stk, $s[$i]);
            }
        }
        $a = 0;
        $b = 0;
        foreach ($stk as $char) {
            if ($char == 'a') $a++;
            else $b++;
        }
        return min($a, $b) * $x + $ans;
    }
}
```
```javascript []
var maximumGain = function(s, x, y) {
    function processAB(s, x, y) {
        let stk = [];
        let ans = 0;
        for (let char of s) {
            if (stk.length > 0 && stk[stk.length - 1] === 'a' && char === 'b') {
                stk.pop();
                ans += x;
            } else {
                stk.push(char);
            }
        }
        let a = stk.filter(c => c === 'a').length;
        let b = stk.filter(c => c === 'b').length;
        return Math.min(a, b) * y + ans;
    }

    function processBA(s, x, y) {
        let stk = [];
        let ans = 0;
        for (let char of s) {
            if (stk.length > 0 && stk[stk.length - 1] === 'b' && char === 'a') {
                stk.pop();
                ans += y;
            } else {
                stk.push(char);
            }
        }
        let a = stk.filter(c => c === 'a').length;
        let b = stk.filter(c => c === 'b').length;
        return Math.min(a, b) * x + ans;
    }
    
    let ans = 0;
    const n = s.length;
    for (let i = 0; i < n; i++) {
        if (s[i] !== 'a' && s[i] !== 'b') continue;
        let j = i;
        let t = "";
        while (j < n && (s[j] === 'a' || s[j] === 'b')) {
            t += s[j];
            j++;
        }
        ans += Math.max(processAB(t, x, y), processBA(t, x, y));
        i = j - 1;
    }
    return ans;
};
```

**Complexity**:
* Time Complexity : `O(n)`
* Space Complexity : `O(n)`

**Feel free to leave a comment if something is confusing, or if you have any suggestions on how I can improve the post.**