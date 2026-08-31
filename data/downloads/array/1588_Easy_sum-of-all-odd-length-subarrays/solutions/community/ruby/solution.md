# Ruby  faster than 100.00% less than 100.00%

**Author:** Vucius
**Votes:** 1
**Link:** [https://leetcode.com/problems/sum-of-all-odd-length-subarrays/solutions/1159487/](https://leetcode.com/problems/sum-of-all-odd-length-subarrays/solutions/1159487/)

---

My first solution
```
res = 0
lll = arr.length - 1
0.step(lll, 2) { |i|
	for j in 0..lll-i
		res += arr[j..(j+i)].sum
	end
}
res
```
faster than 90.00% of Ruby online submissions for Sum of All Odd Length Subarrays.
 less than 70.00% of Ruby online submissions for Sum of All Odd Length Subarrays.
 
But I think it's a math problem, so i find a better solution
```
res = 0
lll = arr.length
for i in 0...lll
	res += ((i + 1) * (lll - i) + 1) / 2 * arr[i];
end

res
```
