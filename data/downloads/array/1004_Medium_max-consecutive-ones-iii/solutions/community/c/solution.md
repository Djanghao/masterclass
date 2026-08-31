# ✅ Simple Solution w/ Explanation | Sliding Window Approach with Comments

**Author:** archit91
**Votes:** 65
**Link:** [https://leetcode.com/problems/max-consecutive-ones-iii/solutions/1304346/](https://leetcode.com/problems/max-consecutive-ones-iii/solutions/1304346/)

---

\u2714\uFE0F ***Solution - I (Sliding Window)***    

We have to choose longest consecutive sequence of 1s with atmost `k` zeros (`k` zeros can be flipped to 1). We can use a sliding window approach for this since the problem is nothing but finding the longest window with atmost `k` zeros.

We can maintain two pointers *`l`* (left-most window index) and *`r`* (right-most window index). We have following possible scenarios -

* **`nums[r] == 0`** : We will try to include this in our window. Here we have two subcases:
 	* *`k != 0`*: We can just include *`nums[r]`* in current window and extend it. We will also decrement `k` denoting a zero has been picked in the current window
	* *`k == 0`*: Our window already contains maximum zeros (`k`) allowed. So, we need to shrink our window size from the left till a zero is removed from the other end. Then we can pick  *`nums[r]`* in our window & extend it. `k` won't change since we have popped a zero from left and picked one from right.

* **`nums[r] == 1`**: We can simply pick this element and extend our window.

We will keep updating ***`ans`*** to hold the maximum of window size at any point in time and finally return it.

<details>
<summary><b>
Illustration with an Example</b>
</summary>

<br />

(Credits - @bradleystreak)

<blockquote>

```
[1,1,1,0,0,0,1,1,1,1,0,0,1,0,1,1,1]
2
```
```<code>
Expected Output = 7
[1,1,1,0,0,0,1,1,1,1,0,<strong>0,1,0,1,1,1</strong>]  OR  [1,1,1,0,0,0,<strong>1,1,1,1,0,0,1</strong>,0,1,1,1]<code>
```
</blockquote>
<p>
</p><ol>
<li><code>left</code> will iterate over array till the first 0 (index 3), decreases k there, then loop to next 0 and decreases k again. At this point:<br>
&emsp;&emsp;&emsp;<b><code>k = 0  | left = 0 |  right = 4  |  ans = 5</code></b><br>
&emsp;&emsp;&emsp;<em>nums = </em> [<strong>1,1,1,0,0</strong>,0,1,1,1,1,0,0,1,0,1,1,1]</li>
<br/>
<li>Now, we have <code>right = 5</code> and <code>k = 0</code>. So, we enter the while loop and move <code>left=4</code> (nums[3] == 0 but left++ moves us to 4). This effectively pops a <code>0</code>from the left end of window. At this point:<br>
&emsp;&emsp;&emsp;<b><code>k = 0 | left = 4 | right = 5 | ans = 5</code></b><br>
&emsp;&emsp;&emsp;<em>nums =</em> [1,1,1,0,<strong>0,0</strong>,1,1,1,1,0,0,1,0,1,1,1]<br>
Notice <code>k</code> 0s will always be included thus ensuring we maximize our window size.</li>
<br/>
<li>Loop <code>right = 6 to right = 9</code>since they are all 1s<br>
&emsp;&emsp;&emsp;<b><code>k = 0 | left = 4 | right = 9 | ans = 6</code></b><br>
&emsp;&emsp;&emsp;<em>nums =</em>[1,1,1,0,<strong>0,0,1,1,1,1</strong>,0,0,1,0,1,1,1]</li><br/>
<li>Now, we have <code>right = 10 (nums[right] == 0)</code>. So we again enter <code>while</code>loop and perform  <code>left++</code> just once as the <code>nums[4] = 0</code>.<br>
&emsp;&emsp;&emsp;<b><code>k = 0 | left = 5 | right = 10 | ans = 6</code></b><br>
&emsp;&emsp;&emsp;<em>nums =</em>[1,1,1,0,0,<strong>0,1,1,1,1,0</strong>,0,1,0,1,1,1]</li><br/>
<li>Now,  <code>right = 11 (nums[right] == 0)</code> and we found another zero. Shrink window from left<br>
&emsp;&emsp;&emsp;<b><code>k = 0 | left = 6 | right = 11 | ans = 6</code></b><br>
&emsp;&emsp;&emsp;<em>nums =</em>[1,1,1,0,0,0,<strong>1,1,1,1,0,0</strong>,1,0,1,1,1]</li><br/>
<li>Now, <code>right = 12</code> so just update <code>ans</code><br>
&emsp;&emsp;&emsp;<b><code>k = 0 | left = 6 | right = 12 | ans = 7</code></b><br>
&emsp;&emsp;&emsp;<em>nums =</em>[1,1,1,0,0,0,<strong>1,1,1,1,0,0,1</strong>,0,1,1,1]</li><br/>
<li>Now,  <code>right = 13 (nums[right] == 0)</code>  so enter while loop and move till<code>left = 11</code> (nums[10] == 0 but left++ moves us to 11). Again, basically removing a zero from left-end. <br/>
&emsp;&emsp;&emsp;<b><code>k = 0 | left = 11 | right = 13 | ans = 7</code></b><br>
&emsp;&emsp;&emsp;<em>nums =</em>[1,1,1,0,0,0,1,1,1,1,0,<strong>0,1,0</strong>,1,1,1]<br>
Notice k 0's are still always included.</li><br/>
<li>Now, loop from <code>right = 14 to right = 16</code> since they are all 1s and just update <code>ans</code><br>
&emsp;&emsp;&emsp;<b><code>k = 0 | left = 11 | right = 16 | ans = 7</code></b><br>
&emsp;&emsp;&emsp;<em>nums =</em>[1,1,1,0,0,0,1,1,1,1,0,<strong>0,1,0,1,1,1,1</strong>]</li>
And the loop ends here.
</ol>
<p></p></div>

Thus the max window size ***`ans = 7`*** will be our final answer.

</details>

**C++**	
```	
int longestOnes(vector<int>& nums, int k) {
	int ans{}, n = size(nums);
	for(int l{}, r{}; r < n; r++) {
		if(nums[r] == 0)                      // current element is 0 - try to pick it
			if(k == 0)                        // if window already picked k zeros, then pop one from left end & pick current
				while(nums[l++] != 0);       
			else k--;                         // otherwise simply pick it and decrement k
		ans = max(ans, r - l + 1);            // keep updating ans as max window size till now
	}
	return ans;
}
```

**Python**
```
def longestOnes(self, nums: List[int], k: int) -> int:
	n, ans, l = len(nums), 0, 0
	for r in range(n):
		if nums[r] == 0:                       # try to pick current 0
			if k == 0:                         # if window already picked k zeros, pop 1 from left and pick this
				while nums[l] != 0 : l += 1
				l += 1
			else : k-= 1                       # otherwise pick it and decrement k
		ans = max(ans, r - l + 1)              # update ans as max window size till now
	return ans
```

***Time Complexity :*** **`O(N)`**, where `N` is the number of elemnts in *`nums`*.
***Space Complexity :*** **`O(1)`**

---
---

\uD83D\uDCBB\uD83D\uDC31\u200D\uD83D\uDCBBIf there are any suggestions / questions / mistakes in my post, please do comment below \uD83D\uDC47 

---
---