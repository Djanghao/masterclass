# JS, TS dynamic programming solution. Explained.

**Author:** ArturAbdullin
**Votes:** 8
**Link:** [https://leetcode.com/problems/longest-valid-parentheses/solutions/2070202/](https://leetcode.com/problems/longest-valid-parentheses/solutions/2070202/)

---

<h2>Dynamic programming with tabulation.</h2>

1. <a href="#algo">Algorithm</a>
2. <a href="#javascript-solution">JavaScript solution</a>
3. <a href="#typescript-solution">TypeScript solution</a>

<h3>Intro</h3>

Let's say we have a string: ' ( ) ( ( ) ( ) ) '.
The resulting array we got using this approach looks like this (**only the last row** actually):

<table>
	<tr>
		<td><b>i</b></td>
		<td>0</td>
		<td>1</td>
		<td>2</td>
		<td>3</td>
		<td>4</td>
		<td>5</td>
		<td>6</td>
		<td>7</td>
		<td> - an index</td>
	</tr>
	<tr>
		<td><b>s</b></td>
		<td>(</td>
		<td>)</td>
		<td>(</td>
		<td>(</td>
		<td>)</td>
		<td>(</td>
		<td>)</td>
		<td>)</td>
		<td> - a given string</td>
	</tr>
	<tr>
		<td><b>dp</b></td>
		<td>0</td>
		<td>2</td>
		<td>0</td>
		<td>0</td>
		<td>2</td>
		<td>0</td>
		<td>4</td>
		<td>8</td>
		<td> - a dynamic programming tabulation</td>
	</tr>
</table>

The numbers in **dp** indicate the length of the valid parentheses substring ending at the corresponding index.
The largest number of the **dp** will indicate *the length of the longest parentheses substring*.

<h3 id="algo">Algorithm</h3>

1. Initialise the **dp** array with zeros. The length of the array equals to the length of the string (e.g. length = 8).

<table>
	<tr>
		<td><b>dp</b></td>
		<td>0</td>
		<td>0</td>
		<td>0</td>
		<td>0</td>
		<td>0</td>
		<td>0</td>
		<td>0</td>
		<td>0</td>
	</tr>
</table>

2. We will be checking two adjacent charachters of  the given string (**s[ i - 1 ]** and **s[ i ]**, for i = 1, 2, ... , length-1).
<table>
	<tr>
		<td><b>i</b></td>
		<td><b>[ 0 ]</b></td>
		<td><b>[ 1 ]</b></td>
		<td>2</td>
		<td>...</td>
		<td rowspan="2"> => </td>
		<td><b>i</b></td>
		<td>0</td>
		<td><b>[ 1 ]</b></td>
		<td><b>[ 2 ]</b></td>
		<td>...</td>
		<td rowspan="2"> => </td>
		<td><b>i</b></td>
		<td>...</td>
		<td><b>[ 2 ]</b></td>
		<td><b>[ 3 ]</b></td>
		<td>...</td>
	</tr>
	<tr>
		<td><b>s</b></td>
		<td><b>[ ( ]</b></td>
		<td><b>[ ) ]</b></td>
		<td>(</td>
		<td>...</td>
		<td><b>s</b></td>
		<td>(</td>
		<td><b>[ ) ]</b></td>
		<td><b>[ ( ]</b></td>
		<td>...</td>
		<td><b>s</b></td>
		<td>...</td>
		<td><b>[ ( ]</b></td>
		<td><b>[ ( ]</b></td>
		<td>...</td>
	</tr>
</table>

* We will take into consideration only **two conditions**:
	*a.*  s[ i - 1 ] == ' **(** ' && s[ i ] == ' **)** ';
	*b.* s[ i - 1 ] == ' **)** ' && s[ i ] == ' **)** '.

3. *Condition a.* means that we have found a valid substring ' **( )** ' of parentheses of length 2. So we can put the length = 2 of that substring in the **dp** at index i: **dp[ i ] = 2**

<table>
	<tr>
		<td><b>i</b></td>
		<td><b>0</b></td>
		<td><b>1</b></td>
	</tr>
	<tr>
		<td><b>s</b></td>
		<td><b>(</b></td>
		<td><b>)</b></td>
	</tr>
	<tr>
		<td><b>dp</b></td>
		<td>0</td>
		<td>2</td>
	</tr>
</table>

* But it could be a subsequent valid substring (e.g. **i = 5 to 6** - this valid substing is a part of the bigger valid substring **i = 3 to 6**). So we also have to check the value in **dp[ i - 2 ]**, and the resulting equation for *condition a.* will be **dp[ i ] = 2 + dp[ i - 2]**.

For **i = 4** and next **i = 6** (i = 5 does not fall under *condition a.*)
<table>
	<tr>
		<td><b>i</b></td>
		<td>...</td>
		<td>2</td>
		<td><b>3</b></td>
		<td><b>4</b></td>
		<td rowspan="3"> => </td>
		<td><b>i</b></td>
		<td>...</td>
		<td>4</td>
		<td><b>5</b></td>
		<td><b>6</b></td>
	</tr>
	<tr>
		<td><b>s</b></td>
		<td>...</td>
		<td>(</td>
		<td><b>(</b></td>
		<td><b>)</b></td>
		<td><b>s</b></td>
		<td>...</td>
		<td>)</td>
		<td><b>(</b></td>
		<td><b>)</b></td>
	</tr>
	<tr>
		<td><b>dp</b></td>
		<td>...</td>
		<td><b>[ 0 ]</b></td>
		<td>0</td>
		<td>0 + 2 = 2</td>
		<td><b>dp</b></td>
		<td>...</td>
		<td><b>[ 2 ]</b></td>
		<td>0</td>
		<td>2 + 2 = 4</td>
	</tr>
</table>

4. *Condition b.* s[ i - 1 ] == ' **)** ' && s[ i ] == ' **)** ' means that **s[ i ]** could be a closing parentheses of the pattern ' **(** ( ... ) **)** '.
In this case we already checked **s[ i - 1 ]** at the previous step and it could be a part of the previous valid or invalid substring, let's call it **sub<sub>i-1</sub>**. Also we have already put some value in **dp[ i - 1 ]**. Thus, only **s[ i ]** needs further investigation.
* We have to check if the character before **sub<sub>i-1</sub>** equals ' **(** '. To do that we subtract the value of **dp[ i - 1 ]** (the length of **sub<sub>i-1</sub>**) plus 1, from **i** to get the resulting equation **s[ i - (dp[ i - 1 ] + 1) ]**.
* In this example, for **i = 7** we have to check the character at **i = 2**: s[ 7 - (4 + 1) ] => s[ 2 ] == ' **(** ', if ```true``` we will put in **dp[ i ] = 2 + dp [ i - 1] + dp[ i - (dp[ i - 1] + 2) ]**. The last term dp[ i - (dp[ i - 1] + 2) ] appears because we also have to check if there a valid substring just before the considering substring.
That is why in the considering example we get **8** at **dp[ 7 ]**: **2** (when we found the opening parentheses at i = 2) + **4** (the length of the **sub<sub>i-1</sub>** as it is valid) + **2** (the substring at i = 1 is also valid) = **8**.

<h3 id="javascript-solution">JavaScript</h3>

```
function longestValidParentheses(s) {
	// maxLength variable is used to monitor the maximum length of the valid substring
	// every time we fall in condition a. or b.
	// by using it we don't need to find the maximum value in the resulting dp array
    let maxLength = 0;
    let dp = new Array(s.length).fill(0);
    
    for (let i = 1; i < s.length; i++) {
        if (s[i - 1] === '(' && s[i] === ')') { // - condition a.
            dp[i] = 2 + (dp[i - 2] || 0); // - dp[i-2] can return undefined, if so we will add zero instead
            maxLength = Math.max(maxLength, dp[i]);
        }
        if (
            s[i - 1] === ')' &&
            s[i] === ')' &&
            s[i - dp[i - 1] - 1] === '(' // - condition b.
        ) {
            dp[i] = 2 + dp[i - 1] + (dp[i - dp[i - 1] - 2] || 0);
            maxLength = Math.max(maxLength, dp[i]);
        }
    }
    return maxLength;
};
```

<h3 id="typescript-solution">TypeScript</h3>

```
function longestValidParentheses(s: string): number {
	// maxLength variable is used to monitor the maximum length of the valid substring
	// every time we fall in condition a. or b.
	// by using it we don't need to find the maximum value in the resulting dp array
    let maxLength: number = 0;
    let dp: number[] = new Array(s.length).fill(0);
    
    for (let i = 1; i < s.length; i++) {
        if (s[i - 1] === '(' && s[i] === ')') { // - condition a.
            dp[i] = 2 + (dp[i - 2] || 0); // - dp[i-2] can return undefined, if so we will add zero instead
            maxLength = Math.max(maxLength, dp[i]);
        }
        if (
            s[i - 1] === ')' &&
            s[i] === ')' &&
            s[i - dp[i - 1] - 1] === '(' // - condition b.
        ) {
            dp[i] = 2 + dp[i - 1] + (dp[i - dp[i - 1] - 2] || 0);
            maxLength = Math.max(maxLength, dp[i]);
        }
    }
    return maxLength;
};
```