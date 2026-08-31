# Python3|Go|PHP Solution

**Author:** wolf04
**Votes:** 0
**Link:** [https://leetcode.com/problems/longest-absolute-file-path/solutions/5204330/](https://leetcode.com/problems/longest-absolute-file-path/solutions/5204330/)

---

# Code
```python3 []
class Solution:
	def lengthLongestPath(self, input: str) -> int:
		# time : O(n), space : O(n), n = the length of input
		def task_1(s):
			cnt = 0
			i = 0
			while i < len(s) and s[i] == "\	":
				i += 1
				cnt += 1
			return cnt
		ans = 0
		list_1 = input.split("\
")
		stack_1 = []
		level = 0
		for i in range(len(list_1)):
			cnt_t = task_1(list_1[i])
			while len(stack_1) > 0 and cnt_t <= level:
				stack_1.pop()
				level -= 1
			stack_1.append(len(list_1[i]) - cnt_t)
			if list_1[i].find(".") > 0 : 
				ans = max(ans, sum(stack_1) + len(stack_1) - 1)
			level = cnt_t
		return ans
```
```Go []
func getSum(num []int) int {
    val := 0
    for i := 0 ; i < len(num) ; i ++ {
        val += num[i]
    }
    return val
}
func getMax(a, b int) int {
    if a > b {
        return a
    }
    return b
}
func task1(s string) int {
    cnt := 0
    i := 0
    for i < len(s) && s[i] == '\	' {
        cnt ++
        i ++
    }
    return cnt
}
func lengthLongestPath(input string) int {
    // time : O(n), space : O(n), n = the length of input
    list1 := strings.Split(input, "\
")
    stack1 := []int{}
    ans := 0
    level := 0
    for i := 0 ; i < len(list1) ; i ++ {
        cntT := task1(list1[i])
        for len(stack1) > 0 && cntT <= level {
            level --
            stack1 = stack1[:len(stack1)-1]
        }
        stack1 = append(stack1, len(list1[i]) - cntT)
        if strings.Contains(list1[i], ".") {
            ans = getMax(ans, getSum(stack1) + len(stack1) - 1)
        }
        level = cntT
    }
    return ans
}
```

``` PHP []
class Solution {

    /**
     * @param String $input
     * @return Integer
     */
    function task1($s) {
        $cnt = 0;
        $i = 0;
        while ($i < strlen($s) && $s[$i] == "\	") {
            $cnt ++ ;
            $i ++ ;
        }
        return $cnt;
    }
    function lengthLongestPath($input) {
        // time : O(n), space : O(n), n = the length of input
        $list1 = explode("\
", $input);
        $stack1 = [];
        $level = 0;
        $ans = 0;
        for ($i = 0 ; $i < count($list1); $i ++) {
            $cntT = $this->task1($list1[$i]);
            while (count($stack1) > 0 && $cntT <= $level) {
                array_pop($stack1);
                $level -- ;
            }
            array_push($stack1, strlen($list1[$i]) - $cntT);
            if (strpos($list1[$i], ".") !== false) {
                $ans = max($ans, array_sum($stack1) + count($stack1) - 1);
            }
            $level = $cntT;
        }
        return $ans;
    }
}
```